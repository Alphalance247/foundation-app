"use client";
import Image from "next/image";
import { FaHandsHelping, FaBullseye, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideInSection from "./slideaAnimation";

const VisionMissionValues = () => {
  return (
    <SlideInSection>
      <section className="bg-[#F4F7F9] py-16 px-6">
        {/* Content */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2A9D8F] mb-8">
            Our Vision, Mission, and Values
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We are driven by our commitment to empowering youth, promoting
            health, and building stronger communities. Here’s what defines us.
          </p>

          {/* Vision, Mission, Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <motion.div
                className="text-[#F4A261] text-5xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaBullseye />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where every young person is empowered with the skills,
                confidence, and support to transform their lives and
                communities.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <motion.div
                className="text-[#2A9D8F] text-5xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaHandsHelping />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower youth through skills training, promote health
                initiatives, and uplift vulnerable communities with compassion
                and action.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <motion.div
                className="text-[#E76F51] text-5xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaHeart />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                Integrity, compassion, innovation, and inclusivity guide every
                action we take as a foundation committed to change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default VisionMissionValues;
