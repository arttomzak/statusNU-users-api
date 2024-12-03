const express = require("express");
const cors = require("cors");
const { Pool } = require("pg"); // importing this prevented me from starting the server
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// app.get("/api/users", (req, res) => {
//     const result = "SELECT * FROM users";
//     res.json(result);
//   }); working but just spits out a string

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Query error:", err);
    res.status(500).json({ error: "Failed to fetch users" })
  }
});

// :)

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
