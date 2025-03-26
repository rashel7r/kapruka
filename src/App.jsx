import React from "react";
import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import Events from "./routes/Events";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import Brands from "./routes/Brands/brands";
import BrandDetails from "./routes/Brands/BrandDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/brand/:name" element={<BrandDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
