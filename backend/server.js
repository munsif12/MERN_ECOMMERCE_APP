const express = require("express");
require("dotenv").config(); //requiring dotenv file
const app = express();
const connection = require("./config/db");
const PORT = process.env.PORT || 8000;

//connection to database
connection();
//middlewares
app.get("/", (req, res) => {
  res.json({ message: "server Success" });
});
//routes
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
