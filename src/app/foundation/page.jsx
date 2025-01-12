import React from "react";
import HeroSection from "../components/foundation/hero";
import AboutSection from "../components/foundation/about";
import Programs from "../components/foundation/programs";
import ImpactSection from "../components/foundation/impact";
import TrusteesSection from "../components/foundation/boardSection";
import Navbar from "../components/foundation/navbar";
import VisionMissionValues from "../components/foundation/mission";

const FoundationPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionValues />
      <Programs />
      <ImpactSection />
      <TrusteesSection />
    </div>
  );
};

export default FoundationPage;
