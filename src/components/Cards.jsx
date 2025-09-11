import React from "react";
import { motion } from "framer-motion";

const Cards = ({icon, heading, text}) => {
  return (
    <motion.div
      className="relative w-[90%] sm:w-[60%] md:w-[16vw] h-[35vh] mt-10 sm:mt-10 rounded-2xl overflow-hidden border-1 border-[#D95D30]"
      whileHover={{ y: -12, boxShadow: "0px 15px 30px rgba(0,0,0,0.4)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >

      {/* Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center rounded-2xl bg-[#1D0626] p-5">
        {/* Icon */}
        <div className="icon text-4xl w-20 h-20 flex items-center justify-center border-4 border-[#1ED9B7] rounded-full bg-[#1D0626] shadow-md -mt-12">
          {icon}
        </div>

        {/* Heading */}
        <div className="heading text-2xl sm:text-3xl font-semibold mt-6 text-[#1ED9B7]">
          <h4>{heading}</h4>
        </div>

        {/* Text */}
        <div className="text text-center text-sm sm:text-base text-gray-200 px-4 mt-3 leading-relaxed">
          <p>
            {text}
          </p>
        </div>
      </div>

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-[#1ED9B7]/30 blur-2xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};

export default Cards;
