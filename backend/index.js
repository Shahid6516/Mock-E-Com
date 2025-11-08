import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Route
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Your server is runing on Port:", PORT);
});
