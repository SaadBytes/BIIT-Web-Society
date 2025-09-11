import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const text = "REGISTRATION OPEN • ";
  const duration = 12; // adjust speed

  return (
    <div className="w-full overflow-hidden bg-transparent">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }} // exactly half the track
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear", // perfectly smooth
          duration,
        }}
      >
        {/* Track: 2 copies side by side for infinite loop */}
        <span className="text-[8vw] font-bold mr-8">{text.repeat(10)}</span>
        <span className="text-[8vw] font-bold mr-8">{text.repeat(10)}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
