import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import Mission from "../sections/Mission.jsx";
import AboutUs from "../sections/AboutUs.jsx";
import SocietyJoin from "../sections/SocietyJoin.jsx";
import Footer from "../sections/Footer.jsx";
import UpcommingEvents from "../sections/UpcommingEvents.jsx";
import Marquee from "../components/Marquee.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true, // animate only once
      easing: "ease-in-out",
      offset: 120, // start animation when element is 120px in view
    });
    // Optional: refresh AOS if you modify DOM after mount
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Marquee />
        <AboutUs />
        <Mission />
        <UpcommingEvents />
        <SocietyJoin />
      </main>
      <Footer />
    </>
  );
}

export default App;
