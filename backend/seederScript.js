//is file ka kam jo initaial data jo hamry products ka realted para hau ha usko database ka ander enter kro taka phr ham products ko fetch krsaky
//data/products -> place all products data  into database
require("dotenv").config();
const connection = require("./config/db");
const products = require("./data/products");
const product = require("./models/Product");
// connect to database
connection();
//now insert products data to db but before inserting delete every data present in db
const insertDataToDb = async () => {
  try {
    await product.deleteMany({});
    await product.insertMany(products);
    console.log(`Products inserted to db successfully`);
    process.exit(1);
  } catch (error) {
    console.error(`Products not inserted to db`);
    console.log(error);
  }
};
insertDataToDb();
