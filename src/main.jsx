import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import cartProductLoader from "./loaders/cartProductsLoader.js";
import Checkout from "./components/Checkout/Checkout.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Shop/>,
      },
      {
        path: "orders",
        element: <Orders/>,
        loader: cartProductLoader
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout/></PrivateRoute>
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
