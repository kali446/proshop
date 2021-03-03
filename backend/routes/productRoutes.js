import express from "express";
import {
  getProducts,
  getProductByID,
} from "../controller/productController.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductByID);

export default router;
