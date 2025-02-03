import Image from "next/image";
import SlideInSection from "./slideaAnimation";

const programsData = [
  {
    title: "Skills Training",
    description:
      "We empower youth by providing training in practical skills like baking and tie-dye, enabling them to build sustainable livelihoods.",
    imageUrl: "/assets/foundation/bakin.jpg",
    link: "#skills",
    backgroundColor: "#F4A261",
  },
  {
    title: "Tie-Dye Training",
    description:
      "Our tie-dye workshops help youth express their creativity and develop skills in fabric design, creating new business opportunities.",
    imageUrl: "/assets/foundation/dye.jpg",
    link: "#tie-dye",
    backgroundColor: "#2A9D8F",
  },
  {
    title: "Health Initiatives",
    description:
      "Our foundation promotes health and hygiene, particularly through distributing menstrual pads to young girls to ensure they stay healthy and in school.",
    imageUrl: "/assets/foundation/menstrual.jpg",
    link: "#health",
    backgroundColor: "#2A9D8F",
  },
  {
    title: "Environmental Education",
    description:
      "We aim to teach young people about environmental sustainability and how to protect natural resources through hands-on activities.",
    imageUrl: "/assets/foundation/educate.jpg",
    link: "#environmental-education",
    backgroundColor: "#F4A261",
  },
  {
    title: "Humanitarian Efforts",
    description:
      "We provide food palliatives to orphanages and internally displaced persons (IDPs), bringing much-needed relief to the most vulnerable in Kano State.",
    imageUrl: "/assets/foundation/humanitarian.jpg",
    link: "#humanitarian",
    backgroundColor: "#2A9D8F",
  },
  {
    title: "Community Service",
    description:
      "We engage in community service, including the cleaning of the famous dyeing pits in Kano, to improve the environment and raise awareness.",
    imageUrl: "/assets/foundation/service.jpg",
    link: "#community-service",
    backgroundColor: "#F4A261",
  },
];

const ProgramsSection = () => {
  return (
    <SlideInSection>
      <section id="programs" className="bg-[#F4F1E1]">
        <div className="py-10 sm:py-16 px-6 max-w-[1350px] mx-auto">
          <div className="w-[100%] text-center mb-[5rem] sm:w-[70%] mx-auto">
            <h2 className="text-3xl mb-8 sm:text-5xl font-extrabold text-[#2A9D8F] sm:mb-6">
              Our Programs & Initiatives
            </h2>
            <p className="text-lg text-gray-600">
              Aisha Women’s Rise Foundation is dedicated to empowering the
              youth, promoting health, and improving community well-being
              through various programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <div
                key={index}
                className={`text-white p-6 rounded-lg cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 hover:translate-y-[-10px] transition-all duration-300 ease-in-out bg-[#2A9D8F]`}
              >
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm mb-4">{program.description}</p>
                <a
                  href={program.link}
                  className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#F4A261] transition-all"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section
          id="programs"
          className="py-16 px-6"
          style={{
            background: "linear-gradient(135deg, #F4A261 30%, #2A9D8F 70%)",
          }}
        >
          <div className="max-w-[1350px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Our Programs & Initiatives
              </h2>
              <p className="text-lg text-gray-100">
                Empowering youth, promoting health, and uplifting communities with
                impactful initiatives.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {programsData.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:-translate-y-2"
                >
                  <Image
                    src={program.imageUrl}
                    alt={program.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#2A9D8F] mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {program.description}
                    </p>
                    <a
                      href={program.link}
                      className="inline-block bg-[#F4A261] text-white px-4 py-2 rounded-full hover:bg-[#D08759] transition-all"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
    </SlideInSection>
  );
};

export default ProgramsSection;
