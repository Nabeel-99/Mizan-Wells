import React from "react";
import FeaturedCards from "../components/cards/FeaturedCards";
import FadeInEffect from "../components/ui/FadeInEffect";
const FeaturedProjects = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 lg:mt-44">
      <FadeInEffect>
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-satoshi-bold tracking-tight text-4xl lg:text-6xl">
            Together we can change lives
          </h3>
          <p className="text-xl">
            You can help lots of people by donating little
          </p>
        </div>
      </FadeInEffect>
      <FadeInEffect delay={0.5}>
        <FeaturedCards />
      </FadeInEffect>
    </div>
  );
};

export default FeaturedProjects;
