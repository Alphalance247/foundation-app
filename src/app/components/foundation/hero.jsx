// pages/index.js (or a separate HeroSection component)

const HeroSection = () => {
  return (
    <section
      className=" h-[450px] relative bg-cover bg-center sm:h-[600px] xl:h-[750px] bg-fixed"
      style={{
        backgroundImage: "url('assets/foundation/aisha1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="w-full max-w-[1350px] px-1 relative z-10 flex flex-col justify-center items-center text-center text-white md:w-[95%] h-full md:px-6 lg:w-[80%] mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-shadow-lg animate__animated animate__fadeIn">
          Empowering Youth,{" "}
          <span className="text-orange-500">Transforming</span> Futures
        </h1>
        <p className=" text-base mt-0 md:text-2xl sm:mt-6">
          Aisha Foundation – Enabling young people with skills, promoting
          health, and uplifting communities.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex space-x-8 sm:mt-12">
          <a
            href="#about"
            className=" px-4 py-2 bg-transparent border-2 border-white text-white sm:px-10 sm:py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all"
          >
            Learn More
          </a>
          <a
            href="#donate"
            className="px-4 py-2 bg-orange-500 text-white sm:px-10 sm:py-4 rounded-full text-lg hover:bg-orange-600 transition-all"
          >
            Donate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
