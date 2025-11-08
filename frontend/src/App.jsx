import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import { useCart } from "./Context/CartContext";

function App() {
  const { addToCart } = useCart();

  return (
    <BrowserRouter>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
