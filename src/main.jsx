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
import CartPage from "./components/ui/CartPage";
import Login from "./components/form/Login";
import Register from "./components/form/Registation";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./routs/PrivateRoute";
import AddProductForm from "./components/ui/adminUi/AddProductForm";
import AdminDashboard from "./pages/admin/Dashboard";

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
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/cart",
        element:<PrivateRoute> <CartPage></CartPage></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  // admin dashboard part------------------

  {
  path: "/admin",
  element: <AdminLayout />, 
  children: [
    {
      index: true, //"/admin"
      element: <AdminDashboard></AdminDashboard>,
    },
    {
      path: "add-product", 
      element: <AddProductForm />,
    },
  ],
}

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
