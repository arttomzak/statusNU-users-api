const express = require("express");
const cors = require("cors");

require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to your Express server" });
});

// app.get("/api/users", (req,res) => {
//   try {
//     const result = "SELECT * FROM users";
//     res.json(result.rows);
//   } catch(err) {
//     console.error("Query error:", err);
//     res.status(500).json({ error: "Failed to fetch the users!" });
//   }
// });



const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
