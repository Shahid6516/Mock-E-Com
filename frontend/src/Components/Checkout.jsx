import React, { useState } from "react";
import API from "../api.js";
import { useCart } from "../Context/CartContext.jsx";
import { Link } from "react-router-dom";
import {ArrowBigLeft} from "lucide-react"


const Checkout = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);
  const { fetchCart, setCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/cart/checkout", form); 
      setReceipt(res.data.receipt);

      setCart([]);
      fetchCart(); 
    } catch (err) {
      console.error("Checkout failed:", err.message);
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div className=" h-[70vh] w-full flex items-center justify-center">
      <div className="p-4 w-full md:w-1/3">
        {!receipt ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 border p-3 rounded-lg ">
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded transition"
            >
              Confirm Checkout
            </button>

          </form>

        ) : (
          <div className="border p-3 mt-4 rounded shadow max-w-sm">
            <h3 className="text-3xl font-semibold text-green-700">
              ✅ Checkout Successful!
            </h3>
            <p className="mt-2 ml-2 text-2xl">Total: ₹{receipt.total}</p>
            <p className="text-2xl ml-2">Date: {new Date(receipt.date).toLocaleString()}</p>
                <Link to="/" className=" mt-3 flex items-center gap-3">
               <ArrowBigLeft className="mt-3 font-bold rounded-full" /> <p className="mt-3 text-gray-600">Back to home</p>
            </Link>
          </div>
           
        )}


      </div>
    </div>
  );
};

export default Checkout;
