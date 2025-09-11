// import React, { useState } from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const AboutUs = () => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <>
//       <section>
//         <div className="aboutus w-full h-[100vh] bg-[#1D0626] flex flex-col items-center space-y-8">
//           <div className="heading">
//             <h2 className="text-7xl text-white font-semibold text-center pt-8">
//               About Us
//             </h2>
//           </div>
//           <div className="quote text-center pt-10 relative">
//             <h3 className="italic text-[#1FA2BF] text-3xl">
//               "Alone we can do so little; together we can do so much."
//             </h3>
//             {/* <div className='w-96 bg-amber-200 flex items-center justify-end'> */}
//             <p className="text-white whitespace-nowrap text-lg absolute right-0">
//               – Helen Keller
//             </p>
//             {/* </div> */}
//           </div>
//           <div className="inner-section flex items-center justify-center">
//             <div className="left w-1/2 mt-30 px-30">
//               <p className="text-white text-2xl">
//                 At BIIT Web Society, we believe in learning by doing. Our
//                 mission is to create a collaborative space where students can
//                 explore web technologies, build exciting projects, and share
//                 ideas that shape the future of the web. We aim to bridge the gap
//                 between theory and practice by organizing workshops, coding
//                 sessions, and interactive challenges.
//               </p>
//               <br />
//               <p className="text-white text-2xl">
//                 Beyond just coding, our society thrives on teamwork and
//                 creativity. Whether you’re a beginner or an experienced
//                 developer, BIIT Web Society welcomes you to learn, grow, and
//                 contribute to impactful digital solutions. Together, we aspire
//                 to inspire innovation and cultivate a strong community of tech
//                 enthusiasts.
//               </p>
//               <br />
//               <p className="text-white text-2xl">
//                 ✨ “Great things are built when curious minds come together.”
//               </p>

//               <div className="cta flex items-center justify-center md:justify-start mt-6">
//                 <button
//                   onMouseEnter={() => setHovered(true)}
//                   onMouseLeave={() => setHovered(false)}
//                   className={`relative flex items-center justify-center gap-2 rounded-full px-6 py-3 text-lg sm:text-xl font-medium
//                                     bg-[#D95D30] text-white transition-all duration-300 overflow-hidden
//                                     ${
//                                       hovered
//                                         ? "bg-purple-800 w-40 sm:w-44 h-12 sm:h-14"
//                                         : "w-32 sm:w-36 h-10 sm:h-12"
//                                     }
//                                   `}
//                 >
//                   {/* Text */}
//                   <span
//                     className={`transition-all duration-300 ${
//                       hovered
//                         ? "translate-x-[-6px] sm:translate-x-[-8px] text-xl sm:text-2xl"
//                         : "translate-x-0"
//                     }`}
//                   >
//                     Register
//                   </span>

//                   {/* Arrow */}
//                   <span
//                     className={`absolute transition-all duration-300 text-xl sm:text-2xl
//                                       ${
//                                         hovered
//                                           ? "opacity-100 translate-y-0 right-4 sm:right-6"
//                                           : "opacity-0 translate-y-6 right-4 sm:right-6"
//                                       }
//                                     `}
//                   >
//                     <FaArrowRightLong />
//                   </span>
//                 </button>
//               </div>
//             </div>
//             <div className="right w-1/2 mt-20 flex items-center justify-center">
//               <div className="imageHolder w-[38vw] border-8 border-white">
//                 <img
//                   src={"src/assets/about us.jpg"}
//                   className="opacity-85"
//                   alt="About Us Illustration"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUs;
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <section id="aboutus">
        <div className="aboutus w-full min-h-screen bg-[#1D0626] flex flex-col items-center px-4 py-10 space-y-8">
          {/* Heading */}
          <div className="heading text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-semibold">
              About Us
            </h2>
          </div>

          {/* Quote */}
          <div className="quote text-center pt-6 relative">
            <h3 className="italic text-[#1FA2BF] text-xl sm:text-2xl lg:text-3xl">
              "Alone we can do so little; together we can do so much."
            </h3>
            <p className="text-white text-sm sm:text-base mt-2">
              – Helen Keller
            </p>
          </div>

          {/* Inner Section */}
          <div className="inner-section flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 w-full max-w-8xl">
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
              <div className="cta flex items-center justify-center md:justify-start mt-6">
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
                >
                  {/* Text */}
                  <span
                    className={`transition-all duration-300 ${
                      hovered
                        ? "translate-x-[-6px] sm:translate-x-[-8px]"
                        : "translate-x-0"
                    }`}
                  >
                    Register
                  </span>

                  {/* Arrow */}
                  <span
                    className={`absolute transition-all duration-300 text-lg sm:text-xl
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

            {/* Right Image */}
            <div className="right w-full md:w-1/2 flex items-center justify-center">
              <div className="imageHolder w-[80%] sm:w-[60%] md:w-[90%] border-4 sm:border-8 border-white">
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
