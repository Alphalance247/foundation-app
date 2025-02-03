import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SlideInSection from "./slideaAnimation";

const trustees = [
  {
    name: "Aisha Damilola Bamidele",
    role: "Founder",
    image: "/assets/foundation/1a.jpg", // Replace with actual image URLs
    bio: "A passionate advocate for youth empowerment and community development.",
    linkedin: "https://linkedin.com/in/aishabamidele",
  },
  {
    name: "Sijuade Abdulraheem",
    role: "Spokesperson",
    image: "/assets/foundation/1b.jpg",
    bio: "An experienced professional in non-profit governance.",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Mariam Abdulraheem ",
    role: "Secretary",
    image: "/assets/foundation/1c.jpg",
    bio: "Expert in financial management and strategic planning.",
    linkedin: "https://linkedin.com/in/janesmith",
  },
];

const TrusteesSection = () => {
  return (
    <SlideInSection>
      <section className="bg-[#E9ECEF] py-20" id="trustees">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2A9D8F] mb-4">
              Meet Our Board of Trustees
            </h2>
            <p className="text-lg text-gray-700">
              Our dedicated team of trustees ensures the foundation achieves its
              mission with integrity and passion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    layout="fill"
                    objectFit="cover"
                    style={{ objectPosition: "50% 30%" }}
                    className="hover:opacity-90"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-[#F4A261] mb-2">
                    {trustee.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium mb-4">
                    {trustee.role}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">{trustee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideInSection>
  );
};

export default TrusteesSection;
