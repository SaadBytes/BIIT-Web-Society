import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  const { heading } = useTypewriter({
    heading: ["Welcome to BIIT Web Society"],
  });

  const { tagline } = useTypewriter({
    tagline: ["Let's Learn, Buils, Innovate Together!"],
  });

  return (
    <section id="home">
      <div className="hero w-full min-h-[50vh] md:min-h-[73vh] bg-[#1D0626] flex flex-col md:flex-row items-center justify-between px-6 md:px-12"
>
        {/* LEFT DIV */}
        <div className="left w-full md:w-1/2 flex flex-col items-center md:items-center justify-center gap-6 text-white text-center md:text-left py-10">
          <div className="headline">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Welcome to BIIT Web Society
            </h2>
          </div>
          <div className="tagline flex items-center justify-center">
            <h4 className="text-lg sm:text-xl md:text-2xl">
              Learn, Build, Innovate Together!
            </h4>
          </div>

          {/* CTA BUTTON */}
          <div className="cta flex items-center justify-center md:justify-start mt-6">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`relative flex items-center justify-center gap-2 rounded-full px-6 py-3 text-lg sm:text-xl font-medium 
                bg-[#D95D30] text-white transition-all duration-300 overflow-hidden
                ${
                  hovered
                    ? "bg-purple-800 w-40 sm:w-44 h-12 sm:h-14"
                    : "w-32 sm:w-36 h-10 sm:h-12"
                }
              `}
            >
              {/* Text */}
              <span
                className={`transition-all duration-300 ${
                  hovered
                    ? "translate-x-[-6px] sm:translate-x-[-8px] text-xl sm:text-2xl"
                    : "translate-x-0"
                }`}
              >
                Join Us!
              </span>

              {/* Arrow */}
              <span
                className={`absolute transition-all duration-300 text-xl sm:text-2xl
                  ${
                    hovered
                      ? "opacity-100 translate-y-0 right-4 sm:right-6"
                      : "opacity-0 translate-y-6 right-4 sm:right-6"
                  }
                `}
              >
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT DIV (Hides on Mobile) */}
        <div className="right hidden md:flex w-1/2 h-full items-center justify-center mt-8 md:mt-0">
          <div className="imageHolder animate-[float_3s_ease-in-out_infinite]">
            <img
              src={"/WEB-removebg-preview.png"}
              alt="Society Visual"
              className="w-full md:w-[30vw] drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
