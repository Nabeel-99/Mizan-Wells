import React from "react";
import AccordionCard from "../components/AccordionCard";

const Faq = () => {
  return (
    <div className="flex flex-col 2xl:container 2xl:mx-auto  items-center  mt-10 lg:mt-44 pb-10 gap-10">
      <p className="font-satoshi-bold text-center text-3xl lg:text-7xl">
        Frequently asked questions
      </p>
      <div className="px-4 flex flex-col items-center xl:w-[70rem]   text-lg rounded-xl">
        <AccordionCard />
      </div>
    </div>
  );
};

export default Faq;
