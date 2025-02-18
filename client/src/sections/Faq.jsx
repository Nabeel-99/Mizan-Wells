import React from "react";
import AccordionCard from "../components/cards/AccordionCard";
import FadeInEffect from "../components/ui/FadeInEffect";

const Faq = ({ marginTop = "mt-44" }) => {
  return (
    <FadeInEffect>
      <div
        className={`flex flex-col 2xl:container 2xl:mx-auto  items-center  mt-10 lg:${marginTop} pb-10 gap-10`}
      >
        <p className="font-satoshi-bold text-center text-3xl lg:text-7xl">
          Frequently asked questions
        </p>
        <div className="px-4 flex flex-col items-center xl:w-[70rem]   text-lg rounded-xl">
          <AccordionCard />
        </div>
      </div>
    </FadeInEffect>
  );
};

export default Faq;
