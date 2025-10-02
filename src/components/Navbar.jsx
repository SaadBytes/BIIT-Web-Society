import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = ["Home", "About Us", "Registeration", "Contact"];

  // Parent animation (stagger effect)
  const menuVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay for each li
      },
    },
  };

  // Children animation (fall down)
  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <>
      <header></header>
      <nav className="w-full px-4 py-5 flex items-center justify-around bg-[#1D0626] border-b border-white relative">
        {/* Logo */}
        <div className="Logo">
          <h1 className="text-xl md:text-3xl font-bold text-white">
            BIIT Web Society
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-lg md:text-2xl text-white">
            {/* {menu.map((li, key) => (
              <li
                key={key}
                className="hover:border-b-2 border-white transition-all cursor-pointer"
              >
                {li}
              </li>
            ))} */}
            <a href="#home">
              <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                Home
              </li>
            </a>
            <a href="#aboutus">
              <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                About Us
              </li>
            </a>
            <a href="#events">
              <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                UpComing Events
              </li>
            </a>
            <a href="#register">
              <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                Registeration
              </li>
            </a>
            <a href="#footer">
              <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <IoClose onClick={() => setIsOpen(false)} />
          ) : (
            <RiMenu4Fill onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Mobile Dropdown with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="absolute top-16 left-0 w-full bg-[#1D0626] md:hidden z-50 overflow-hidden"
            >
              <motion.ul
                variants={menuVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col items-center space-y-4 py-6 text-lg text-white"
              >
                {/* {menu.map((li, key) => (
                  <motion.li
                    key={key}
                    variants={itemVariants}
                    className="hover:text-purple-400 cursor-pointer"
                    onClick={() => setIsOpen(false)} // close menu on click
                  >
                    {li}
                  </motion.li>
                ))} */}
                <a href="#home">
                  <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                    Home
                  </li>
                </a>
                <a href="#aboutus">
                  <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                    About Us
                  </li>
                </a>
                <a href="#events">
                  <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                    UpComing Events
                  </li>
                </a>
                <a href="#register">
                  <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                    Registeration
                  </li>
                </a>
                <a href="#footer">
                  <li className="hover:border-b-2 border-[#D95D30] hover:text-[#D95D30] transition-all cursor-pointer">
                    Contact
                  </li>
                </a>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
