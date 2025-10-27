
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://localhost:5002";
const DB_SERVICE_URL   = process.env.DB_SERVICE_URL   || "http://localhost:5001";


const http = axios.create({ timeout: 5000 });


app.post("/api/login", async (req, res) => {
  try {
    const { data } = await http.post(`${AUTH_SERVICE_URL}/login`, req.body);
    res.json(data);
  } catch (e) {
    console.error(e.message);
    const status = e.response?.status || 500;
    res.status(status).json({ message: e.response?.data?.message || "Auth error" });
  }
});


app.get("/api/users", async (_req, res) => {
  try {
    const { data } = await http.get(`${DB_SERVICE_URL}/users`);
    res.json(data);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: "DB error" });
  }
});


app.get("/health", (_req, res) => res.send("Gateway OK"));
app.get("/", (_req, res) => res.send("Main API is running"));

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

