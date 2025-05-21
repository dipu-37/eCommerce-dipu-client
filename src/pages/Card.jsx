import React from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
const Card = ({ product }) => {
  return (
    <div
      className="border rounded-lg p-4 shadow-sm"
      style={{
        borderColor: "color-mix(in oklab, #6B7280 20%, transparent)",
      }}
    >
      <img
        src={product.images}
        alt={product.name}
        className="h-28 mx-auto object-contain"
      />
      <p className="text-sm text-gray-400 mt-2">{product.category}</p>
      <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>

      <div className="flex items-center space-x-1 text-green-500 text-sm mt-1">
        {Array(Math.floor(product.ratings))
          .fill()
          .map((_, i) => (
            <FaStar key={i} />
          ))}
        {product.ratings % 1 !== 0 && (
          <span className="text-xs text-yellow-500">+½</span>
        )}
        <span className="text-gray-500 text-xs ml-1">
          ({product.numReviews})
        </span>
      </div>

      <div className="mt-2 flex items-center space-x-2">
        <span className="text-lg text-green-600 font-bold">
          ${product.price}
        </span>
      </div>

      <button
        className="mt-3 w-full flex justify-center items-center gap-2 border rounded-md py-2 text-green-600 hover:bg-green-100"
        style={{
          borderColor: "color-mix(in oklab, #6B7280 20%, transparent)", // #6B7280 is Tailwind gray-500
        }}
      >
        <FaShoppingCart />
        Add
      </button>
    </div>
  );
};

export default Card;
