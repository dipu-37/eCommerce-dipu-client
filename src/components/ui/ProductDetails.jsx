import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/cartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { cart, addToCart, updateCartQty, removeFromCart } = useCart(); // ✅ use cart context
  const quantity = cart[id] || 0; // ✅ current quantity

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/products/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-3">
        Home / {product.category} / <span className="text-green-600">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={product.images}
            alt={product.name}
            className="rounded-md shadow w-full object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-2 text-yellow-500 mb-2">
            <span>⭐ {product.ratings}</span>
            <span className="text-sm text-gray-500">({product.numReviews} Reviews)</span>
          </div>

          <div className="text-gray-700 mb-2">
            <span className="line-through mr-2 text-red-400">${(product.price + 10).toFixed(2)}</span>
            <span className="text-2xl text-green-600 font-bold">${product.price.toFixed(2)}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4">(Inclusive of all taxes)</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex items-center gap-4">
            {/* Add to Cart Button / Counter */}
            {quantity === 0 ? (
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-100 border px-6 py-2 rounded hover:bg-gray-200"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    quantity === 1 ? removeFromCart(id) : updateCartQty(id, quantity - 1)
                  }
                  className="px-3 py-1 border rounded text-xl"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => updateCartQty(id, quantity + 1)}
                  className="px-3 py-1 border rounded text-xl"
                >
                  +
                </button>
              </div>
            )}

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
