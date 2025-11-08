import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import API from "../api";

function Cart() {
  const { cart, total, fetchCart, removeFromCart, addToCart, setCart } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = async (id, qty) => {
    if (qty < 1) return;

    try {
      const product = cart.find((i) => i.productId === id)?.product;
      if (!product) return;

      setCart((prev) =>
        prev.map((item) =>
          item.productId === id ? { ...item, qty } : item
        )
      );

      await API.delete(`/cart/${id}`);
      await API.post("/cart", { productId: id, qty, product });
      fetchCart();
    } catch (error) {
      console.error("Error updating qty:", error.message);
    }
  };

  const handleRemove = async (id) => {
    await removeFromCart(id); 
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">🛒 Your cart is empty</h2>
        <Link to="/" className=" mt-3">
           <p className=" text-blue-600 hover:underline">Back to home</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🛍️ Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.productId}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <p className="font-medium">{item.product.title}</p>
              <p className="text-gray-600">₹{item.product.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.productId, item.qty - 1)}
                className="bg-gray-300 px-2 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.productId, item.qty + 1)}
                className="bg-gray-300 px-2 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleRemove(item.productId)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <h3 className="text-xl font-semibold">Total: ₹{total.toFixed(2)}</h3>
        <Link
          to="/checkout"
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}

export default Cart;
