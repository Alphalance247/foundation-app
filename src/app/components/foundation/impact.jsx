"use client";
import {
  FaUserGraduate,
  FaHandsHelping,
  FaUtensils,
  FaBuilding,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import SlideInSection from "./slideaAnimation";
import { motion } from "framer-motion";

const impactStats = [
  {
    title: "Youth Empowered",
    value: 1200,
    icon: <FaUserGraduate className="text-4xl text-orange-500" />,
    description: "Trained in baking, tie-dye, and practical skills.",
  },
  {
    title: "Health Kits Distributed",
    value: 3000,
    icon: <FaHandsHelping className="text-4xl text-orange-500" />,
    description: "Menstrual hygiene kits provided to young girls.",
  },
  {
    title: "Meals Served",
    value: 15000,
    icon: <FaUtensils className="text-4xl text-orange-500" />,
    description: "Food palliatives delivered to orphanages and IDPs.",
  },
  {
    title: "Youth Empowered",
    value: 1200,
    icon: <FaUserGraduate className="text-4xl text-orange-500" />,
    description: "Trained in baking, tie-dye, and practical skills.",
  },
  {
    title: "Health Kits Distributed",
    value: 3000,
    icon: <FaHandsHelping className="text-4xl text-orange-500" />,
    description: "Menstrual hygiene kits provided to young girls.",
  },
  {
    title: "Meals Served",
    value: 15000,
    icon: <FaUtensils className="text-4xl text-orange-500" />,
    description: "Food palliatives delivered to orphanages and IDPs.",
  },
];

const ImpactSection = () => {
  const [counts, setCounts] = useState(
    impactStats.map(() => 0) // Initialize counters to zero
  );

  useEffect(() => {
    impactStats.forEach((stat, index) => {
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100); // Increment
          } else {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 50); // Animation speed
    });
  }, []);

  return (
    <SlideInSection>
      <section className="py-10 bg-[#2A9D8F]  text-white sm:py-20 " id="impact">
        <div className="max-w-[1350px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-base sm:text-xl max-w-2xl mx-auto">
              Together, we`ve made a difference by empowering communities and
              uplifting lives. Here’s what we’ve achieved so far.
            </p>
          </div>

          <div className="overflow-hidden relative mb-16">
            <motion.div
              className="flex space-x-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 15, // Time for a full loop
                repeat: Infinity, // Loop forever
                ease: "linear", // Smooth animation
              }}
              style={{ display: "flex" }}
            >
              {impactStats.concat(impactStats).map(
                (
                  card,
                  index // Duplicate cards for seamless looping
                ) => (
                  <div
                    key={index}
                    className="min-w-[300px] bg-white text-black text-center rounded-lg shadow-md p-6"
                  >
                    <div className="flex justify-center items-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{card?.value}</h3>
                    <p className="text-lg font-semibold">{card.title}</p>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                )
              )}
            </motion.div>
          </div>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex space-x-8"
              animate={{ x: ["-100%", "0%"] }}
              transition={{
                duration: 15, // Time for a full loop
                repeat: Infinity, // Loop forever
                ease: "linear", // Smooth animation
              }}
              style={{ display: "flex" }}
            >
              {impactStats.concat(impactStats).map(
                (
                  card,
                  index // Duplicate cards for seamless looping
                ) => (
                  <div
                    key={index}
                    className="min-w-[300px] bg-white text-black text-center rounded-lg shadow-md p-6"
                  >
                    <div className="flex justify-center items-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{card?.value}</h3>
                    <p className="text-lg font-semibold">{card.title}</p>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg font-semibold mb-4">
              Want to be part of the change?
            </p>
            <a
              href="#donate"
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition-all"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default ImpactSection;
