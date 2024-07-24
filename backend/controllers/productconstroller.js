const Product = require("../models/productmodel.js");
const ErrorHandler = require("../utils/errorhandler.js");
const catchAsynchError = require("../middleware/catchasycerror.js");

//get product - /api/v1/products/
exports.getProducts = async (req, res, next) => {
  const totalproduct = await Product.find();
  res.status(200).json({
    success: true,
    count: totalproduct.length,
    totalproduct,
  });
};

//Creat Product -/api/v1/products/new
exports.newProduct = catchAsynchError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get single Product - api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 400));
  }
  res.status(201).json({
    success: true,
    product,
  });
};

// update  product -api/v1/product/:id
exports.updateProdect = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // update panna data taan kedaka panurom
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// Delete Product - api/v1/product/:id
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }
  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "Product Deleted",
  });
};
