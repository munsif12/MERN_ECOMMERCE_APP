const express = require("express");
require("dotenv").config(); //requiring dotenv file
const app = express();
const connection = require("./config/db");
const PORT = process.env.PORT || 8000;
const productRoutes = require("./routes/productRoutes");

//connection to database
connection();
//middlewares
app.use(express.json());
//routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
