import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Products";
import AdminLayout from "./layout/AdminLayout";
import Products from "./components/ui/Product";
import AllProducts from "./pages/Products";
import ProductDetail from "./components/ui/ProductDetails";
import { CartProvider } from "./context/cartContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element:<AllProducts></AllProducts>,
      },
      {
        path: "/product/:id",
        element:<ProductDetail></ProductDetail>,
      },
    
    ],
  },
 

  // admin dashboard part------------------

  {
    path: "/admin",
    element: <AdminLayout></AdminLayout> ,
    children: [
      {
        path: "/admin",
        element: <Home></Home>,
      },
    ],
  },
  


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
