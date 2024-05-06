//main
import React from "react";
import ReactDOM from "react-dom";

import NotFound from "../pages/NotFound";
import RecipeList from "../pages/RecipeList";

import HomePage from "../pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:ingredients",
    element: <RecipeList />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
