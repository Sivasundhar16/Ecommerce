const products = require("../data/product.json");
const productModel = require("../models/productmodel.js");
const connectDatabase = require("../config/database.js");
const dotenv = require("dotenv");

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

const seedProduct = async () => {
  try {
    await productModel.deleteMany();
    console.log("PREVIOUS PRODUCTS ARE DELETED");

    await productModel.insertMany(products);
    console.log("ALL PRODUCT ADDED");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};
seedProduct();
