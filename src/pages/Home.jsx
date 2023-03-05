import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";


import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <AboutUs />
      <Courses />
      <Footer />
    </Fragment>
  );
};

export default Home;
