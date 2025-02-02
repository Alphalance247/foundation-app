"use client";
import React from "react";
import { motion } from "framer-motion";

const nextPlans = [
  {
    id: 1,
    title: "Collaboration with the Ministry of Women Affairs",
    description:
      "Train 100 young girls and women to develop critical skills for the future.",
  },
  {
    id: 2,
    title: "Distribution of Pads to Prison Inmates",
    description:
      "Empower inmates with skill training and provide essential menstrual products.",
  },
  {
    id: 3,
    title: "Empowerment at Commissioner of Humanitarian Local Government",
    description:
      "Initiate a comprehensive empowerment program in collaboration with local government to enhance community welfare.",
  },
  {
    id: 4,
    title: "Training of 5 Government Secondary School Students",
    description:
      "Offer a 1-month program in baking and tie-dye, fostering creativity and vocational skills.",
  },
  {
    id: 5,
    title: "One Day Workshop on Environmental and Personal Hygiene",
    description:
      "A focused workshop to educate and promote environmental care and personal hygiene.",
  },
  {
    id: 6,
    title: "Distribution of Food Items to Physically Challenged",
    description:
      "Provide essential food supplies to individuals facing physical challenges for better nutrition.",
  },
  {
    id: 7,
    title: "Distribution of Pads during International Girl Child Day",
    description:
      "Celebrate International Girl Child Day by distributing menstrual hygiene products to empower young girls.",
  },
  {
    id: 8,
    title: "March 8 International Women's Day",
    description:
      "Host events and initiatives to honor and celebrate the strength and achievements of women.",
  },
  {
    id: 9,
    title: "May 27 Children's Day",
    description:
      "Engage the community with activities and support on Children's Day, fostering growth and creativity.",
  },
  {
    id: 10,
    title: "June 5 World Environmental Day (Keep Kano Clean)",
    description:
      "Promote environmental sustainability and community cleanliness on World Environmental Day.",
  },
  {
    id: 11,
    title: "August 26 Women Equality Day",
    description:
      "Advocate for women's rights and equality through workshops and awareness programs.",
  },
  {
    id: 12,
    title: "October 1 Child Health Day",
    description:
      "Focus on improving child health with targeted initiatives and community support.",
  },
  {
    id: 13,
    title: "November World Kindness Day",
    description:
      "Spread kindness and positive energy through community-driven acts and events.",
  },
  {
    id: 14,
    title: "International Day for Elimination of Violence Against Women",
    description:
      "Raise awareness and take decisive action to eliminate violence against women with educational campaigns and support services.",
  },
];

const NextPlansSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Next Plans
          </h2>
          <p className="text-lg text-gray-600">
            Discover our upcoming initiatives designed to empower communities
            and drive positive change.
          </p>
        </div>
        {/* Timeline Container with overflow-hidden to clip any extended elements */}
        <div className="relative overflow-hidden">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full border-l-4 border-orange-500 transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="space-y-12">
            {nextPlans.map((plan, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={plan.id}
                  className={`relative w-full md:w-1/2 ${
                    isEven ? "md:ml-auto md:pr-8" : "md:mr-auto md:pl-8"
                  }`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  {/* Timeline Dot: Centered on mobile; offset for md and up */}
                  {/* <div
                    className={`
                      absolute top-4 w-8 h-8 rounded-full bg-orange-500 border-4 border-white z-20
                      left-1/2 transform -translate-x-1/2
                      md:${
                        isEven
                          ? "right-[-1.75rem] md:left-auto"
                          : "left-[-1.75rem] md:right-auto"
                      }
                    `}
                  ></div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextPlansSection;
