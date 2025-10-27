import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5002;
const DB_SERVICE_URL = process.env.DB_SERVICE_URL || "http://localhost:5001";


app.post("/login", async (req, res) => {
  const { login, password } = req.body; // изменили username → login

  try {
    // теперь передаем login вместо username
    const response = await axios.post(`${DB_SERVICE_URL}/findUser`, { login });
    const user = response.data;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password === password) {
      return res.json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (err) {
    console.error("DB service error:", err.message);
    res.status(500).json({ message: "Database service error" });
  }
});



app.get("/", (req, res) => {
  res.send("Auth service is running ");
});

app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
