"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import SlideInSection from "./slideaAnimation";

const ContactSection = () => {
  return (
    <SlideInSection>
      <section className="bg-[#FDF6EC] py-12" id="contact">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or want to learn more about Aisha Foundation? Feel
              free to reach out to us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Your Email Address"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              {/* Info Cards */}
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
                <FaPhoneAlt className="text-orange-500 text-2xl mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
                <FaEnvelope className="text-orange-500 text-2xl mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Email Us
                  </h4>
                  <p className="text-gray-600">contact@aishafoundation.org</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <FaMapMarkerAlt className="text-orange-500 text-2xl mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Visit Us
                  </h4>
                  <p className="text-gray-600">
                    123 Foundation Lane, Kano, Nigeria
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-8 justify-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-all text-2xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-all text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-all text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-all text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default ContactSection;
