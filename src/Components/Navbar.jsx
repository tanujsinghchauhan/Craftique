import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import cart from "../assets/icons_cart.svg";
import search from "../assets/icons_search.svg";

function Navbar() {
  return (
    <div className="bg-[#FFFBFB] flex flex-col sm:flex-row h-auto sm:h-12 w-11/12 sm:w-9/12 mx-auto justify-between items-center rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 shadow-md">
      <Link to="/">
        <img
          className="w-28 sm:w-32 h-6 cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </Link>

      <div className="flex flex-col sm:flex-row sm:space-x-4 items-center space-y-1 sm:space-y-0 text-sm sm:text-base">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>

        <Link to="/product" className="hover:text-orange-500">
          Our Products
        </Link>

        <Link to="/about" className="hover:text-orange-500">
          About Us
        </Link>
      </div>

      <div className="flex justify-between items-center shadow-lg rounded-3xl w-10/12 sm:w-56 p-1 sm:p-2 bg-white">
        <img
          className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer"
          src={search}
          alt="Search"
        />
        <input
          className="w-full sm:w-40 h-6 appearance-none bg-transparent focus:outline-none text-sm placeholder-gray-400"
          type="text"
          placeholder="Search"
        />
      </div>

      <div>
        <img
          className="w-7 sm:w-8 h-7 sm:h-8 cursor-pointer"
          src={cart}
          alt="Cart"
        />
      </div>
    </div>
  );
}

export default Navbar;
