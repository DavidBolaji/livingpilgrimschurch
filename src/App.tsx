import React from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "animate.css";
import AOS from "aos";
import Root from "./pages/Admin/Root";
import AdminHome from "./pages/Admin/pages/AdminHome";
import ViewImage from "./pages/Admin/pages/ViewImage";
import AddImage from "./pages/Admin/pages/AddImage";
import ViewVideo from "./pages/Admin/pages/ViewVideo";
import AddVideo from "./pages/Admin/pages/AddVideo";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/admin",
    element: <Root />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "image", element: <ViewImage /> },
      { path: "image/add", element: <AddImage /> },
      { path: "video", element: <ViewVideo /> },
      { path: "video/add", element: <AddVideo /> },
    ],
  },
]);

const App: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      delay: 100,
      easing: "ease-in-cubic",
      once: false,
    });
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
