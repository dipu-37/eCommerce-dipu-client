import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { useCart } from "../../context/cartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart(); // ✅ use cart context
  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  return (
    <nav className=" shadow-sm border-b border-gray-100 sm:m-4">
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
            to="/seller"
            className="rounded-full border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Seller Dashboard
          </Link>
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-green-600">
            All Product
          </Link>
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search products"
              className="rounded-full border px-4 py-1 focus:outline-none focus:ring-1"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
              {cartItemCount}
            </span>
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
          >
            Login
          </Link>
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
          <Link
            to="/login"
            className="block w-fit bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
