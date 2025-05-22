import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Card = ({ product }) => {
  const { cart, addToCart, updateCartQty, removeFromCart } = useCart();
  const quantity = cart[product._id] || 0;

  const handleAddToCart = () => addToCart(product);
  const increaseQty = () => updateCartQty(product._id, quantity + 1);
  const decreaseQty = () => {
    if (quantity === 1) removeFromCart(product._id);
    else updateCartQty(product._id, quantity - 1);
  };

  return (
    <div className=" p-4 w-60 shadow-sm border border-gray-500/20 rounded-md max-w-54 md:px-4 px-3 py-2">
      <img
        src={product.images}
        alt={product.name}
        className="h-32 w-full object-contain mb-3"
      />
      <p className="text-sm text-gray-400">{product.category}</p>
      <h2 className="font-semibold text-lg text-gray-800 mb-1">
        {product.name}
      </h2>

      {/* Ratings */}
      <div className="flex items-center text-green-500 mb-2">
        <span className="mr-1">⭐</span>
        <span>{product.ratings.toFixed(1)}</span>
        <span className="text-gray-500 text-sm ml-1">
          ({product.numReviews})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-green-700 font-bold text-lg">
          ${product.price}
        </span>
        {/* <span className="text-gray-400 line-through text-sm">$60</span> */}
      </div>

      <div className="flex items-center space-x-2 mt-3">
        {/* Add to Cart or Counter */}
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-1/2 border border-green-200 text-green-600 rounded-md py-1 hover:bg-green-50 transition flex items-center justify-center"
          >
            <FiShoppingCart className="mr-2" />
            Add
          </button>
        ) : (
          <div className="w-1/2 flex items-center justify-between border border-green-300 rounded-md px-3 py-1">
            <button onClick={decreaseQty}>
              <FiMinus className="text-green-600" />
            </button>
            <span className="text-green-700 font-semibold">{quantity}</span>
            <button onClick={increaseQty}>
              <FiPlus className="text-green-600" />
            </button>
          </div>
        )}

        {/* Always visible Details button */}
        <Link
          to={`/product/${product._id}`}
          className="w-1/2 text-center border border-green-200 text-green-600 rounded-md py-1 hover:bg-gray-100 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
