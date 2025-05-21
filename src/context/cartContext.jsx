
// src/context/CartContext.jsx
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // e.g., { productId: quantity }

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product._id]: 1,
    }));
  };

  const updateCartQty = (productId, quantity) => {
    setCart((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
