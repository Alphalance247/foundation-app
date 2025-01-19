"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SlideInSection from "./slideaAnimation";
const AboutSection = () => {
  return (
    <>
      <SlideInSection>
        <section id="about" className="py-10 relative sm:py-24 bg-white">
          <div className="max-w-[1350px] mx-auto px-6 text-center lg:text-left">
            <div className="flex flex-col gap-14 lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
              {/* Text Content */}
              <div className="text-start lg:w-1/2 lg:text-left">
                <h2 className="  text-2xl sm:leading-[3.8rem] sm:text-5xl font-bold text-orange-600  mb-8">
                  <span className="text-[#2A9D8F]">Empowering the Future </span>
                  of Our Communities
                </h2>
                <p className="text-base sm:text-xl text-gray-800 leading-relaxed mb-6 max-w-lg lg:mx-0">
                  Aisha Foundation is committed to equipping youth with
                  life-changing skills such as baking and tie-dye, while also
                  promoting personal hygiene and health. We work tirelessly to
                  bring better living conditions to marginalized communities,
                  providing menstrual health support and food aid.
                </p>
                <div className="flex justify-center items-start lg:justify-start">
                  <a
                    href="#contact"
                    className=" bg-orange-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:bg-orange-700 transition-all"
                  >
                    Get Involved
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <Image
                  width={616}
                  height={462}
                  src="/assets/foundation/aisha2.jpg"
                  alt="Community service event"
                  className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all"
                />
              </div>
            </div>
          </div>
        </section>
      </SlideInSection>
    </>
  );
};

export default AboutSection;
