import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import cart from "../assets/icons_cart.svg";
import search from "../assets/icons_search.svg";

function Navbar() {
  return (
    <div className="bg-[#FFFBFB] flex flex-row h-12 w-11/12 sm:w-9/12 mx-auto justify-between items-center rounded-xl sm:p-4 space-x-4">
      <Link to="/">
        <img className="w-32 h-6 cursor-pointer" src={Logo} alt="Logo" />
      </Link>

      <Link to="/" className="hover:text-orange-500">
        Home
      </Link>

      <Link to="/product" className="hover:text-orange-500">
        Our Products
      </Link>

      <Link to="/about" className="hover:text-orange-500">
        About Us
      </Link>

      <div className="flex justify-between items-center shadow-lg rounded-3xl w-56 p-1 sm:p-2">
        <img className="w-8 h-8 cursor-pointer" src={search} alt="Search" />
        <input
          className="w-32 sm:w-40 h-6 appearance-none bg-transparent focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      <div>
        <img className="w-8 h-8 cursor-pointer" src={cart} alt="Cart" />
      </div>
    </div>
  );
}

export default Navbar;
