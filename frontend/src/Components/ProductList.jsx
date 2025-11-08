import React, { useEffect, useState } from "react";
import API from "../api.js";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await API.get("/products");
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center  gap-4 p-4">
      {products.map((p) => (
        <div key={p.id} className="border w-90 h-80 rounded-xl p-4 shadow">
          <img src={p.image} alt={p.title} className="w-full h-40 object-contain" />
          <h2 className="font-semibold">{p.title}</h2>
          <p>₹{p.price}</p>
          <button
            onClick={() => onAddToCart(p)}
            className="bg-blue-600 text-white px-3 py-1 rounded mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
