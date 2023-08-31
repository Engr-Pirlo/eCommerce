import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Card from "./pages/Card";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";
import App from "./App";


const routerProvider = createBrowserRouter([
   {
     
    path: "/",
    element: <App/>,
    children: [

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product-details/:id",
        element: <Products/>
      },
      
    ]

   },
   

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerProvider} />
  </React.StrictMode>
);
