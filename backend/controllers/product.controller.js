import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};
