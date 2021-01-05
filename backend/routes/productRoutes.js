import e from "express";
import express from "express";
const router = express.Router();
import Product from "../model/productModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all products
// @route   GET /api/products
// @access PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    // error testing
    // res.status(404);
    // throw new Error('Not authorized')

    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
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
  })
);

export default router;
