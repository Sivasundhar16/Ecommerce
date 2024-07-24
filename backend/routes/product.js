const express = require("express");
const router = express.Router();
const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProdect,
  deleteProduct,
} = require("../controllers/productconstroller");

router.route("/products").get(getProducts);
router.route("/products/new").post(newProduct);
router
  .route("/product/:id")
  .get(getSingleProduct)
  .put(updateProdect)
  .delete(deleteProduct);

module.exports = router;
