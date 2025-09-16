import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
// import JoinForm from "./JoinForm.jsx"; // Uncomment if you want to use your custom form instead of Google Form

const SocietyJoin = () => {
  return (
    <section id="register" className="bg-[#1D0626] py-12 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
          Join The <span className="text-[#1FA2BF]">Web Society</span>
        </h2>

        {/* Subheading / Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          Passionate about{" "}
          <span className="text-[#D95D30] font-medium">web development</span>{" "}
          and digital creativity? Become part of our community and grow with
          like-minded developers!
        </p>

        {/* Call to Action */}
        <a
          href="https://forms.gle/7GKCdNkxUFcyLydo6"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full 
                     bg-[#D95D30] text-white font-medium text-lg sm:text-xl
                     transition-all duration-300 hover:bg-purple-800 hover:gap-3"
        >
          Fill the form to join us
          <RiArrowRightUpLine className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        {/* If you want to use your own form instead of Google Form */}
        {/* <JoinForm /> */}
      </div>
    </section>
  );
};

export default SocietyJoin;
