import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { ShoppingCart } from "lucide-react"; 


function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="flex justify-between items-center p-4 shadow">
      <Link to="/" className="text-2xl font-bold">
        Mock E-Com 
      </Link>

      <Link to="/cart" className="relative">
        <ShoppingCart size={28} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
