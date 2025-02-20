import Flogo from "../assets/logo_foot.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-gray-300 text-sm overflow-hidden top-full bottom-0">
      <div className="w-full px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <img className="h-10 w-auto mb-4" src={Flogo} alt="Craftique Logo" />
          <p className="text-xs sm:text-sm">
            <span className="font-semibold">Address:</span> Delhi, New Delhi
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-semibold">Email:</span> craftique@gmail.com
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-semibold">Phone:</span> 0092 356 3656210
          </p>
        </div>

        {/* Shopping Categories */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-gray-100 mb-2 text-sm sm:text-base">
            Shopping & Categories
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                to="/product"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Handmade Items
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Furniture
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Paintings
              </Link>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-gray-100 mb-2 text-sm sm:text-base">
            Helpful Links
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Homepage
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Help
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Help & Information */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-gray-100 mb-2 text-sm sm:text-base">
            Help & Information
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Shipping
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition text-xs sm:text-sm"
              >
                Tracking ID
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-center py-3 text-gray-400 text-xs sm:text-sm w-full">
        © 2025 Craftique. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
