// pages/index.js (or a separate HeroSection component)

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('assets/foundation/aisha1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6 w-[85%] mx-auto">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-shadow-lg animate__animated animate__fadeIn">
          Empowering Youth,{" "}
          <span className="text-orange-500">Transforming</span> Futures
        </h1>
        <p className="text-2xl mt-6">
          Aisha Foundation – Enabling young people with skills, promoting
          health, and uplifting communities.
        </p>
        {/* Buttons */}
        <div className="flex space-x-8 mt-12">
          <a
            href="#about"
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </a>
          <a
            href="#donate"
            className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg hover:bg-orange-600 transition-all"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
