import React from "react";
import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import HowItWorks from "../sections/HowItWorks";
import Faq from "../sections/Faq";
import CTA from "../sections/CTA";
const Home = () => {
  return (
    <>
      <div className="mt-20 lg:mt-0">
        <Hero />
        <FeaturedProjects />
        <HowItWorks />
        <Faq />
        <CTA />
      </div>
    </>
  );
};

export default Home;
