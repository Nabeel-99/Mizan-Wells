import React from "react";
import Hero from "../sections/Hero";
import FeaturedProjects from "../sections/FeaturedProjects";
import HowItWorks from "../sections/HowItWorks";
import Faq from "../sections/Faq";
import CTA from "../sections/CTA";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <CTA />
      <Faq />
    </>
  );
};

export default Home;
