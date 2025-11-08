import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  checkout,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:productId", removeFromCart);
router.post("/checkout", checkout);

export default router;
