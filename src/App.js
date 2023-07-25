/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import AboutUs from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Performance from "./pages/Performance";

export default function App() {
  return (
    <>
      <div style={{backgroundColor:"#f0ebdf"}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/prediction" element={<Prediction />} />
          <Route exact path="/performance" element={<Performance />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}
