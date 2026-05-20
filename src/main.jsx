import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

// LAYOUT
import Root from "./layout/Root.jsx";

// PAGES
import Home from "./page/Home/Home.jsx";
import About from "./page/About/About.jsx";
import AllProduct from "./page/AllProduct/AllProduct.jsx";

// ROUTER
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <AllProduct/>,
      },
    ],
  },
]);

// RENDER
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);