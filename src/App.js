import React from "react";
import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
