import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";
import Adminlayout from "../Components/layout/Adminlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        index: true,
        // element: <Home />,
        element: <h1>This is Admin Dashboard</h1>,
      },
      {
        path: "add-admin",
        // element: <About />,
        element: <h1>This is Add Admin page</h1>,
      },
    ],
  },
]);

export default router;
