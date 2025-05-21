import React from "react";
import { FaStar, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Brown Bread 400g",
    category: "Bakery",
    price: 35,
    oldPrice: 40,
    image: "/bread.png",
    rating: 4,
  },
  {
    id: 2,
    name: "Organic Quinoa 500g",
    category: "Grains",
    price: 420,
    oldPrice: 450,
    image: "/quinoa.png",
    rating: 4,
    quantitySelector: true,
  },
  {
    id: 3,
    name: "Carrot 500g",
    category: "Vegetables",
    price: 44,
    oldPrice: 50,
    image: "/carrot.png",
    rating: 4,
  },
  {
    id: 4,
    name: "Apple 1kg",
    category: "Fruits",
    price: 90,
    oldPrice: 100,
    image: "/apple.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Cheese 200g",
    category: "Dairy",
    price: 130,
    oldPrice: 140,
    image: "/cheese.png",
    rating: 4,
  },
];

const BestSellers = () => {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-sm">
            <img src={product.image} alt={product.name} className="h-28 mx-auto object-contain" />
            <p className="text-sm text-gray-400 mt-2">{product.category}</p>
            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            <div className="flex items-center space-x-1 text-green-500 text-sm mt-1">
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              <span className="text-gray-500 text-xs ml-1">(4)</span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-lg text-green-600 font-bold">${product.price}</span>
              <span className="line-through text-gray-400 text-sm">${product.oldPrice}</span>
            </div>

            {/* Add to cart or quantity control */}
            {product.quantitySelector ? (
              <div className="mt-2 flex items-center justify-between border rounded-md px-3 py-1 bg-green-50 text-green-600 font-semibold">
                <button>
                  <FaMinus />
                </button>
                <span>9</span>
                <button>
                  <FaPlus />
                </button>
              </div>
            ) : (
              <button className="mt-3 w-full flex justify-center items-center gap-2 border rounded-md py-2 text-green-600 hover:bg-green-100">
                <FaShoppingCart />
                Add
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
