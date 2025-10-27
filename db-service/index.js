import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());


app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users"); 
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});


app.post("/findUser", async (req, res) => {
  const { username } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    res.json(result.rows[0] || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query error" });
  }
});


app.post("/addUser", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
      [username, password, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Insert error" });
  }
});

app.listen(5001, () => console.log("DB service running on port 5001"));
