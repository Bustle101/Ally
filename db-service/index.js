import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("DB error /users:", err);
    res.status(500).json({ error: "Database query error" });
  }
});

app.post("/findUser", async (req, res) => {
  const { login } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE login = $1",
      [login]
    );
    res.json(result.rows[0] || null);
  } catch (err) {
    console.error("DB error /findUser:", err);
    res.status(500).json({ error: "Database query error" });
  }
});


app.post("/addUser", async (req, res) => {
  const { login, password, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (login, password, email) VALUES ($1, $2, $3) RETURNING *",
      [login, password, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("DB error /addUser:", err);
    res.status(500).json({ error: "Insert error" });
  }
});

app.listen(5001, () => console.log("✅ DB service running on port 5001"));
