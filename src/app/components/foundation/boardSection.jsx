import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SlideInSection from "./slideaAnimation";

const trustees = [
  {
    name: "Aisha Bamidele",
    role: "Founder & Chairperson",
    image: "/assets/foundation/1a.jpg", // Replace with actual image URLs
    bio: "A passionate advocate for youth empowerment and community development.",
    linkedin: "https://linkedin.com/in/aishabamidele",
  },
  {
    name: "John Doe",
    role: "Secretary",
    image: "/assets/foundation/1c.webp",
    bio: "An experienced professional in non-profit governance.",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Treasurer",
    image: "/assets/foundation/1d.jpg",
    bio: "Expert in financial management and strategic planning.",
    linkedin: "https://linkedin.com/in/janesmith",
  },
];

const TrusteesSection = () => {
  return (
    <SlideInSection>
      <section className="bg-[#E9ECEF] py-20">
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
                  {trustee.linkedin && (
                    <a
                      href={trustee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2A9D8F] text-lg hover:text-[#F4A261] transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                  )}
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
