import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <section id="aboutus">
        <div className="aboutus w-full min-h-screen bg-[#1D0626] flex flex-col items-center px-4 py-10 space-y-8 overflow-hidden">
          {/* Heading */}
          <div className="heading text-center" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-semibold">
              About Us
            </h2>
          </div>

          {/* Quote */}
          <div className="quote text-center pt-6 relative" data-aos="fade-up" data-aos-delay="200">
            <h3 className="italic text-[#1FA2BF] text-xl sm:text-2xl lg:text-3xl">
              "Alone we can do so little; together we can do so much."
            </h3>
            <p className="text-white text-sm sm:text-base mt-2">– Helen Keller</p>
          </div>

          {/* Inner Section */}
          <div
            className="inner-section flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 w-full max-w-8xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Left Text */}
            <div className="left w-full md:w-1/2 px-2 sm:px-6">
              <p className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed">
                At BIIT Web Society, we believe in learning by doing. Our
                mission is to create a collaborative space where students can
                explore web technologies, build exciting projects, and share
                ideas that shape the future of the web. We aim to bridge the gap
                between theory and practice by organizing workshops, coding
                sessions, and interactive challenges.
              </p>
              <br />
              <p className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed">
                Beyond just coding, our society thrives on teamwork and
                creativity. Whether you’re a beginner or an experienced
                developer, BIIT Web Society welcomes you to learn, grow, and
                contribute to impactful digital solutions. Together, we aspire
                to inspire innovation and cultivate a strong community of tech
                enthusiasts.
              </p>
              <br />
              <p className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed">
                ✨ “Great things are built when curious minds come together.”
              </p>

              {/* CTA */}
              {/* <div className="cta flex items-center justify-center md:justify-start mt-6">
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className={`relative flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-lg lg:text-xl font-medium 
                    bg-[#D95D30] text-white transition-all duration-300 overflow-hidden
                    ${
                      hovered
                        ? "bg-purple-800 w-36 sm:w-44 h-12 sm:h-14"
                        : "w-28 sm:w-36 h-10 sm:h-12"
                    }
                  `}
                > */}
                  {/* Text */}
                  {/* <span
                    className={`transition-all duration-300 ${
                      hovered
                        ? "translate-x-[-6px] sm:translate-x-[-8px]"
                        : "translate-x-0"
                    }`}
                  >
                    Register
                  </span> */}

                  {/* Arrow */}
                  {/* <span
                    className={`absolute transition-all duration-300 text-lg sm:text-xl
                      ${
                        hovered
                          ? "opacity-100 translate-y-0 right-4 sm:right-6"
                          : "opacity-0 translate-y-6 right-4 sm:right-6"
                      }
                    `}
                  > */}
                    {/* <FaArrowRightLong />
                  </span>
                </button>
              </div> */}
            </div>

            {/* Right Image */}
            <div className="right w-full md:w-1/2 flex items-center justify-center">
              <div
                className="imageHolder w-[80%] sm:w-[60%] md:w-[90%] border-4 sm:border-8 border-white"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <img
                  src={"/about us.jpg"}
                  className="opacity-85 w-full h-auto object-cover"
                  alt="About Us Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
