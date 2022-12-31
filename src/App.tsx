import React from "react";
// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "animate.css";
import AOS from "aos";

const App: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      delay: 100,
      easing: "ease-in-cubic",
      once: false,
    });
  }, []);
  return <Home />;
  // <>
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //   </Routes>
  // </>
};

export default App;
