import React from "react";
import {Routes, Route} from "react-router";
import Home from "./routes/Home";
import Events from "./routes/Events";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import Brands from'./routes/Brands/brands';
import BrandDetails from "./routes/Brands/BrandDetails";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/brand/:name" element={<BrandDetails />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
