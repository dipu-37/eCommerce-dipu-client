import React from "react";
import { FiPlusCircle, FiList, FiPackage } from "react-icons/fi";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div >
      <aside className="min-h-screen bg-white border-r p-4 space-y-6 w-50">
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="Logo" className="w-8" /> */}
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <div className="flex flex-col space-y-3 text-gray-700">
          <Link
            to="/admin/add-product"
            className="flex items-center gap-2 font-medium bg-green-100 p-2 rounded"
          >
            <FiPlusCircle className="w-5 h-5" />
            Add Product
          </Link>
          <Link
            to="/admin/product-list"
            className="flex items-center gap-2 hover:text-green-600"
          >
            <FiList className="w-5 h-5" />
            Product List
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-2 hover:text-green-600"
          >
            <FiPackage className="w-5 h-5" />
            Orders
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
