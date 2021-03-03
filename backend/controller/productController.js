import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all products
// @route   GET /api/products
// @access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access PUBLIC
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  
  // error testing
  // res.status(404);
  // throw new Error('Not authorized')

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

export { getProducts, getProductByID };
