import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const { cart, updateCartQty, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://e-commerce-1-jztd.onrender.com/api/v1/products/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const cartItems = Object.entries(cart).map(([productId, quantity]) => {
    const product = products.find((p) => p._id === productId);
    return { product, quantity };
  }).filter(item => item.product);

//   [
//   { product: { price: 100 }, quantity: 2 },  // 100 × 2 = 200
//   { product: { price: 50 }, quantity: 1 },   // 50 × 1 = 50
// ]


  const priceTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const tax = priceTotal * 0.02;
  const grandTotal = priceTotal + tax;

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 gap-6 max-w-7xl mx-auto">
      {/* Left: Cart Items */}
      <div className="w-full  md:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">
          Shopping Cart <span className="text-green-500">({cartItems.length} Items)</span>
        </h2>

        <div className="text-gray-500 flex justify-between border-b pb-2 mb-4 text-sm font-medium">
          <span className="w-1/2">Product Details</span>
          <span className="w-1/4 text-center">Subtotal</span>
          <span className="w-1/4 text-right">Action</span>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-400">No items in the cart.</p>
        ) : (
          cartItems.map(({ product, quantity }) => (
            <div key={product._id} className="flex justify-between items-center py-3 border-b">
              <div className="flex items-center space-x-4 w-1/2">
                <img src={product.images} alt={product.name} className="w-16 h-16 object-contain" />
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <button
                      onClick={() => updateCartQty(product._id, quantity - 1)}
                      className="px-2 border rounded hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="text-green-600">{quantity}</span>
                    <button
                      onClick={() => updateCartQty(product._id, quantity + 1)}
                      className="px-2 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-1/4 text-center font-semibold text-gray-700">
                ${(product.price * quantity).toFixed(2)}
              </div>

              <div className="w-1/4 text-right">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <Link to="/" className="text-green-500 flex items-center mt-6 hover:underline">
          ← Continue Shopping
        </Link>
      </div>

      {/* Right: Order Summary */}
      <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <div className="border-t border-gray-200 py-2">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span>DELIVERY ADDRESS</span>
            <a href="#" className="text-green-500 text-sm">Change</a>
          </div>
          <p className="text-gray-500 mt-1 text-sm">No address found</p>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold mb-1">PAYMENT METHOD</label>
          <select className="w-full border rounded p-2">
            <option>Cash On Delivery</option>
            <option>Card</option>
          </select>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Price</span>
            <span>${priceTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (2%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border-t border-gray-300 pt-2">
            <span>Total Amount:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => alert("✅ Order placed!")}
          className="bg-green-500 w-full text-white py-2 rounded mt-4 hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;
