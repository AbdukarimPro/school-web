import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero-Section/HeroSection";
import AboutUs from "./components/About-us/AboutUs";
import Courses from "./components/Courses-section/Courses";
import Gallery from "./components/Gallery/Gallery";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
