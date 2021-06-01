const express = require("express");
require("dotenv").config(); //requiring dotenv file
const app = express();
const connection = require("./config/db");
const PORT = process.env.PORT || 8000;
const productRoutes = require("./routes/productRoutes");

//Cors origin policy
var cors = require("cors");
app.use(cors());
//if proxy in front end not working the you can use cors pakage to avoid cross origin policy
//connection to database
connection();
//middlewares
app.use(express.json());
//routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
