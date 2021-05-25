const express = require("express");
const {
  fetchAllproducts,
  fetchSingleProduct,
} = require("../controller/productControllers");
const Router = express.Router();

//fetching all the products inside the database
Router.get("/", fetchAllproducts);
//single product ka click pa uska data fetch krna according to their id joka usko assign hui hoge
Router.get("/:id", fetchSingleProduct);
module.exports = Router;
