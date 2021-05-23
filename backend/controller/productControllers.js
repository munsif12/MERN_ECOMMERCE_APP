const product = require("../models/Product");
const fetchAllproducts = async (req, res) => {
  try {
    const allProducts = await product.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    console.error(error);
  }
};
const fetchSingleProduct = async (req, res) => {
  try {
    // const Product = await product.findOne({ name: req.params.id });
    const Product = await product.findById(req.params.id); //abhe idr error aiy ga bcoz id yahe sahe nhi nhi h
    res.status(200).json(Product);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { fetchAllproducts, fetchSingleProduct };
