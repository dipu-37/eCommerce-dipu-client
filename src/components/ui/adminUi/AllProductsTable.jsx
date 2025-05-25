import React from "react";
import { Link } from "react-router-dom";

const AllProductsTable = ({ products, onUpdate }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Product</h2>
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b">
              <th className="text-left px-6 py-3 font-medium text-gray-600">
                Product
              </th>
              <th className="text-left px-6 py-3 font-medium text-gray-600">
                Category
              </th>
              <th className="text-left px-6 py-3 font-medium text-gray-600">
                Selling Price
              </th>
              {/* <th className="text-left px-6 py-3 font-medium text-gray-600">In Stock</th> */}
              <th className="text-left px-6 py-3 font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="flex items-center gap-4 px-6 py-4">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded border"
                  />
                  <span className="text-gray-800">{product.name}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-gray-600">${product.price}</td>
                {/* <td className="px-6 py-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={product.stock > 0}
                      onChange={() => onStockToggle(product._id)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition-transform"></div>
                    </div>
                  </label>
                </td> */}
                <td className="px-6 py-4">
                  <Link to={`update-product/${product._id}`}><button className="px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 ">
                    Update
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsTable;
