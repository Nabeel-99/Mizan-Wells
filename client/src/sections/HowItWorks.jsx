import React from "react";
import ProcessCard from "../components/cards/ProcessCard";
import ProcessOne from "../assets/images/process1.jpeg";
import ProcessTwo from "../assets/images/process2.jpg";
import ProcessThree from "../assets/images/process3.jpg";
import FadeInEffect from "../components/ui/FadeInEffect";
const HowItWorks = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row justify-between w-full h-full mt-10 lg:mt-44">
      <div className="lg:w-1/2 lg:sticky top-10 h-full">
        <FadeInEffect>
          <h2 className="text-3xl text-center lg:text-left lg:text-6xl xl:text-8xl tracking-tight font-satoshi-bold">
            How Your Support Makes an Impact
          </h2>
        </FadeInEffect>
      </div>

      <div className="h-full top-[60px] flex flex-col gap-10 lg:gap-[30vh] ">
        <FadeInEffect>
          {" "}
          <ProcessCard
            image={ProcessOne}
            description={
              "Support a project and uplift communities in need of assistance."
            }
            LinkText={"Explore our projects"}
          />
        </FadeInEffect>
        <FadeInEffect>
          <ProcessCard
            image={ProcessTwo}
            description={
              "Donate directly to projects. Every contribution makes a difference."
            }
            LinkText={"Donate Now"}
          />
        </FadeInEffect>
        <FadeInEffect>
          <ProcessCard
            image={ProcessThree}
            description={
              "Track your impact through regular updates. Watch your support transform communities in need."
            }
            showLink={false}
          />
        </FadeInEffect>
      </div>
    </div>
  );
};

export default HowItWorks;
