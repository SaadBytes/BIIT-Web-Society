import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="w-full  bg-[#110316] text-gray-300 flex flex-col items-center px-6 py-8 md:py-10">
        {/* Logo / Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          Biit Web Society
        </h2>

        {/* Socials */}
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.linkedin.com/company/107673769/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition"
          >
            <FaLinkedinIn className="text-lg md:text-xl" />
          </a>
        </div>

        {/* Contacts */}
        <div className="text-center mb-4 space-y-1 text-sm md:text-base">
          <p>
            📧 Contact President:{" "}
            <a
              href="mailto:saadrehman7007@gmail.com"
              className="text-blue-400 hover:underline"
            >
              saadrehman7007@gmail.com
            </a>
          </p>
          <p>
            📧 Contact Vice President:{" "}
            <a
              href="mailto:sydsaadhassan@gmail.com"
              className="text-blue-400 hover:underline"
            >
              sydsaadhassan@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Biit Web Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
