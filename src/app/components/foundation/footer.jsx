"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-12">
      {/* Top Section: Links */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#media" className="hover:underline">
                Media
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                Impact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#donate" className="hover:underline">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p>123 Foundation Lane</p>
          <p>Kano State, Nigeria</p>
          <a href="tel:+2349077774410">
            <p>Phone: +234 9077774410 </p>
          </a>

          <a href="mailto:aishaabdulraheem66@gmail.com">
            <p>Email: aishaabdulraheem66@gmail.com</p>
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/dahmeey.abdulraheem/"
              className="hover:text-green-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aisha-abdulraheem-065b482a8/"
              className="hover:text-green-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/aisha_women_rise_foundation?igsh=MXA2ZjJsa2t6NW13eQ=="
              className="hover:text-green-300"
            >
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal & Copyright */}
      <div className="mt-12 border-t border-green-500 pt-6 text-center">
        <p className="text-sm">© 2025 Aisha Foundation. All rights reserved.</p>
        <p className="text-sm">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
