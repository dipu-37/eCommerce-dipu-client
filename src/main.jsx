import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminLayout from "./layout/AdminLayout";
import BestSellers from "./components/ui/BestSell";

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
        path: "/",
        element: <BestSellers></BestSellers>,
      },
    ],
  },
  // {
  //   path: "/shop",
  //   element: <Shop></Shop>,
  // },

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
