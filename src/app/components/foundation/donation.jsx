// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import SlideInSection from "./slideaAnimation";

// const DonationSection = () => {
//   const [amount, setAmount] = useState(50);
//   const [isRecurring, setIsRecurring] = useState(false);

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const toggleRecurring = () => {
//     setIsRecurring(!isRecurring);
//   };

//   return (
//     <SlideInSection>
//       <section className="bg-gray-50 py-12" id="donate">
//         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
//           {/* Left Section */}
//           <motion.div
//             className="w-full lg:w-1/2"
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/assets/foundation/educate.jpg"
//               alt="Children benefiting from donations"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-lg"
//             />
//           </motion.div>

//           {/* Right Section */}
//           <motion.div
//             className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Make a Difference Today
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Your contribution helps us empower youth with skills, provide food
//               and hygiene resources, and uplift communities.
//             </p>

//             {/* Donation Amount */}
//             <div className="flex gap-4 mb-4">
//               {[10, 20, 50, 100].map((preset) => (
//                 <button
//                   key={preset}
//                   className={`px-4 py-2 rounded-md font-medium transition-all ${
//                     preset === amount
//                       ? "bg-orange-500 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-orange-100"
//                   }`}
//                   onClick={() => setAmount(preset)}
//                 >
//                   #{preset}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Amount */}
//             <input
//               type="number"
//               className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//               value={amount}
//               onChange={handleAmountChange}
//               placeholder="Enter your amount"
//               min="1"
//             />

//             {/* Recurring Donation */}
//             <label className="flex items-center text-gray-600 mb-6">
//               <input
//                 type="checkbox"
//                 checked={isRecurring}
//                 onChange={toggleRecurring}
//                 className="mr-2"
//               />
//               Make this a recurring donation
//             </label>

//             {/* Donate Button */}
//             <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-all">
//               Donate Now
//             </button>
//           </motion.div>
//         </div>

//       </section>
//     </SlideInSection>
//   );
// };

// export default DonationSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const DonationSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-white py-20 px-4">
      <div className="w-full md:max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-600">
            Your generous support enables us to empower youth and transform
            communities.
          </p>
        </motion.div>

        {/* Donation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Section: Visual Element */}
          <div className="bg-orange-500 md:w-1/2 flex items-center justify-center p-8">
            <FaUniversity className="text-white" size={80} />
          </div>
          {/* Right Section: Account Details */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Donate via Bank Transfer
            </h3>
            <p className="text-gray-600 mb-6">
              Please use the details below to make your donation. Every
              contribution helps us continue our vital work.
            </p>
            <div className="space-y-4 text-left">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Account Name
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  Aisha Women’s Rise Foundation
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Account Number
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  0019751056
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Bank
                </p>
                <p className="text-xl font-semibold text-gray-800">Jaiz bank</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Branch
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  Kano Main Branch
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
