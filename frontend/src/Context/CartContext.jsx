import { createContext, useContext, useState, useEffect } from "react";
import API from "../api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCart(data.items || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
  };

  const addToCart = async (product) => {
    try {
      setCart((prev) => {
        const existing = prev.find((item) => item.productId === product.id);
        if (existing) {
          return prev.map((item) =>
            item.productId === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        }
        return [...prev, { productId: product.id, qty: 1, product }];
      });

      await API.post("/cart", { productId: product.id, qty: 1, product });

      fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err.message);
    }
  };

  const removeFromCart = async (id) => {
    try {
      setCart((prevCart) => prevCart.filter((item) => item.productId !== id));

      await API.delete(`/cart/${id}`);

      fetchCart();
    } catch (err) {
      console.error("Error removing from cart:", err.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, fetchCart, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
