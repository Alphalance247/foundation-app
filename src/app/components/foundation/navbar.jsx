"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideInSection from "./slideaAnimation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationLinks = [
    { name: "Home", id: "#home" },
    { name: "About Us", id: "#about" },
    { name: "Programs", id: "#programs" },
    { name: "Impact", id: "#impact" },
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
              {/* <Image
            src="/assets/foundation/logo.png" // Replace with actual logo path
            alt="Aisha Foundation Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
              <span className="text-2xl font-extrabold text-[#2A9D8F]">
                Aisha
                <span className="text-[#F4A261]"> Foundation</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
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
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
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
          </div>
        )}
      </header>
    </SlideInSection>
  );
};

export default Navbar;
