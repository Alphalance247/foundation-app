"use client";
import {
  FaUserGraduate,
  FaHandsHelping,
  FaUtensils,
  FaBuilding,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import SlideInSection from "./slideaAnimation";

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
    title: "Community Projects",
    value: 50,
    icon: <FaBuilding className="text-4xl text-orange-500" />,
    description: "Cleaning, renovations, and sustainable initiatives.",
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
      <section className="bg-[#2A9D8F]  text-white py-20 ">
        <div className="max-w-[1350px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto">
              Together, we`ve made a difference by empowering communities and
              uplifting lives. Here’s what we’ve achieved so far.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <div className="flex justify-center items-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{counts[index]}</h3>
                <p className="text-lg font-semibold">{stat.title}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
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
