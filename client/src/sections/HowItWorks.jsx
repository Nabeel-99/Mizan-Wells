import React from "react";
import ProcessCard from "../components/ProcessCard";
import ProcessOne from "../assets/images/process1.jpeg";
const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-between w-full h-full mt-10 lg:mt-44">
      <div className="lg:w-1/2 lg:sticky top-10 h-full">
        <h2 className="text-3xl text-center lg:text-left lg:text-6xl xl:text-8xl tracking-tight font-satoshi-bold">
          How Your Support Makes an Impact
        </h2>
      </div>
      <div className="h-full top-[60px] flex flex-col gap-10 lg:gap-[30vh] ">
        <ProcessCard
          image={ProcessOne}
          description={
            "Support a project and uplift communities in need of assistance."
          }
          LinkText={"Explore our projects"}
        />
        <ProcessCard
          image={ProcessOne}
          description={
            "Support a project and uplift communities in need of assistance."
          }
          LinkText={"Explore our projects"}
        />
        <ProcessCard
          image={ProcessOne}
          description={
            "Support a project and uplift communities in need of assistance."
          }
          LinkText={"Explore our projects"}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
