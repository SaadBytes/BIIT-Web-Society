import React from "react";
import HeroSection from "../sections/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import Marquee from "../components/Marquee.jsx";
import AboutUs from "../sections/AboutUs.jsx";
import Mission from "../sections/Mission.jsx";
import SocietyJoin from "../sections/SocietyJoin.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutUs />
      <Mission />
      <SocietyJoin />
      <Footer />
    </>
  );
};

export default Home;
