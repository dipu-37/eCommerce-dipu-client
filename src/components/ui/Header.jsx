import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const { cart } = useCart();
  const { user, logout } = useAuth();
  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchText.trim()) {
  //     navigate(`/products?searchTerm=${encodeURIComponent(searchText.trim())}`);
  //     setSearchText("");
  //   }
  // };

  return (
    <nav className="shadow-sm border-b border-gray-100 sm:m-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="../../../src/assets/icons/Screenshot 2025-05-21 113710.png"
            alt="GreenCart Logo"
            className="w-8"
          />
          <span className="text-2xl font-semibold text-gray-800">
            greenBazar
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/admin"
            className="rounded-full border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Admin Dashboard
          </Link>
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600">
            All Product
          </Link>

          {/* ✅ Search Input */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;
                setSearchText(value);
                if (value.trim()) {
                  navigate(
                    `/products?searchTerm=${encodeURIComponent(value.trim())}`
                  );
                }
              }}
              placeholder="Search products"
              className="rounded-full border px-4 py-1 focus:outline-none focus:ring-1"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              <FaSearch className="w-4 h-4" />
            </span>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
              {cartItemCount}
            </span>
          </Link>

          {/* Login / Logout */}
          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
              {cartItemCount}
            </span>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FaBars className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-3 bg-white border-t">
          <Link to="/" className="block text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link
            to="/products"
            className="block text-gray-700 hover:text-green-600"
          >
            All Product
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-green-600"
          >
            Contact
          </Link>

          {/* Login / Logout */}
          {user ? (
            <button
              onClick={logout}
              className="block w-fit bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block w-fit bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
