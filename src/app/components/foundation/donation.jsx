"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideInSection from "./slideaAnimation";

const DonationSection = () => {
  const [amount, setAmount] = useState(50);
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const toggleRecurring = () => {
    setIsRecurring(!isRecurring);
  };

  return (
    <SlideInSection>
      <section className="bg-gray-50 py-12" id="donate">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/foundation/educate.jpg"
              alt="Children benefiting from donations"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-gray-600 mb-6">
              Your contribution helps us empower youth with skills, provide food
              and hygiene resources, and uplift communities.
            </p>

            {/* Donation Amount */}
            <div className="flex gap-4 mb-4">
              {[10, 20, 50, 100].map((preset) => (
                <button
                  key={preset}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    preset === amount
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-orange-100"
                  }`}
                  onClick={() => setAmount(preset)}
                >
                  #{preset}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <input
              type="number"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter your amount"
              min="1"
            />

            {/* Recurring Donation */}
            <label className="flex items-center text-gray-600 mb-6">
              <input
                type="checkbox"
                checked={isRecurring}
                onChange={toggleRecurring}
                className="mr-2"
              />
              Make this a recurring donation
            </label>

            {/* Donate Button */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-all">
              Donate Now
            </button>
          </motion.div>
        </div>

        {/* Below Section: Impact Metrics */}
        {/* <div className="mt-12 bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-600">Youths Trained</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500">300+</h3>
            <p className="text-gray-600">Food Packages Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-orange-500">100+</h3>
            <p className="text-gray-600">Girls Supported</p>
          </div>
        </div>
      </div> */}
      </section>
    </SlideInSection>
  );
};

export default DonationSection;
