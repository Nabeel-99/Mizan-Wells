import React from "react";
import { FaLightbulb } from "react-icons/fa";
import CTA from "../../sections/CTA";
import Faq from "../../sections/Faq";
import FeaturedCards from "../components/FeaturedCards";
import FadeInEffect from "../components/FadeInEffect";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 h-full mt-20 lg:mt-10">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <FadeInEffect>
          <div className="flex  rounded-full border border-[#dadada] w-54 p-2">
            <div className="flex items-center gap-4 ">
              <FaLightbulb className="text-lg text-blue-500" />
              <p>Explore Our Projects</p>
            </div>
          </div>
        </FadeInEffect>
        <FadeInEffect delay={0.2}>
          <h3 className=" text-center text-3xl font-satoshi-bold lg:text-left lg:text-6xl ">
            Help Build Brighter Futures
          </h3>
        </FadeInEffect>
      </div>
      <FadeInEffect delay={0.2}>
        <FeaturedCards />
      </FadeInEffect>

      <Faq />
      <CTA />
    </div>
  );
};

export default Projects;
