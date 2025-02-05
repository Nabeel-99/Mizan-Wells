import React from "react";
import FeaturedCards from "../components/FeaturedCards";
import Faq from "../sections/Faq";

const Donate = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-20 lg:mt-10">
      <div className="flex flex-col text-center gap-2">
        <h3 className="text-2xl lg:text-6xl font-satoshi-bold">
          Donate to Make a Difference
        </h3>
        <p>
          Your donation will help us provide essential support to communities in
          need.
        </p>
      </div>
      <FeaturedCards />
      <Faq />
    </div>
  );
};

export default Donate;
