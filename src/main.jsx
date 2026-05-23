import { Provider } from "react-redux";
import { store } from "./redux/store.js";
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
import CheckOut from "./page/CheckOut/CheckOut.jsx";
import { ToastContainer, Bounce } from "react-toastify";


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
      {
        path: "checkout",
        element: <CheckOut/>
      }
    ],
  },
]);

// RENDER
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    <RouterProvider router={router} />
  </Provider>
);