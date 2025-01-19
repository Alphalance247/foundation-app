"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "./slideaAnimation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { name: "About Us", id: "#about" },
    { name: "Programs", id: "#programs" },
    { name: "Our Mission", id: "#mission" },
    { name: "Impact", id: "#impact" },
    { name: "Media", id: "#media" },
    { name: "Board of Trustees", id: "#trustees" },
    { name: "Contact Us", id: "#contact" },
  ];

  return (
    <SlideInSection>
      <header className="bg-white shadow-md w-full">
        <div className="max-w-[1350px] mx-auto px-6 py-8 flex justify-between items-center">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-[#2A9D8F]">
                Aisha
                <span className="text-[#F4A261]">Foundation</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 lg:space-x-4">
              {navigationLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleScroll(link.id)}
                  className="text-gray-700 hover:text-[#2A9D8F] border-b-2 border-transparent hover:border-[#F4A261] pb-1 cursor-pointer transition"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </nav>

          {/* Donate Now Button */}
          <button
            onClick={() => handleScroll("#donate")}
            className="bg-[#F4A261] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e08b4f] transition hidden md:block"
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <motion.div
              onClick={toggleMenu}
              className="cursor-pointer"
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className={`block w-8 h-1 bg-green-800 rounded-sm mb-1 transition-all ${
                  menuOpen && "translate-y-2"
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-green-800 rounded-sm mb-1 transition-all ${
                  menuOpen && "opacity-0"
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-green-800 rounded-sm transition-all ${
                  menuOpen && "-translate-y-2"
                }`}
              ></span>
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg py-4"
            initial={{ x: "100%" }}
            animate={{ x: menuOpen ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-4 px-6">
              {navigationLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleScroll(link.id);
                    setMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-[#2A9D8F] border-b-2 border-transparent hover:border-[#F4A261] pb-1 cursor-pointer transition"
                >
                  {link.name}
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    handleScroll("#donate");
                    setMenuOpen(false);
                  }}
                  className="bg-[#F4A261] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e08b4f] transition w-full text-center"
                >
                  Donate Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </header>
    </SlideInSection>
  );
};

export default Navbar;
