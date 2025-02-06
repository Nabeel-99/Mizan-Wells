import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import FadeInEffect from "../components/FadeInEffect";
import AboutImage from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import CTA from "../sections/CTA";

import AboutCard from "../components/AboutCard";
const About = () => {
  return (
    <div className="flex flex-col gap-14 h-full mt-20 lg:mt-10">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <div className="flex rounded-full border border-[#dadada] w-44 p-2">
          <div className="flex items-center gap-4 ">
            <FaGlobeAfrica className="text-lg text-blue-500" />
            <p>About Us</p>
          </div>
        </div>

        <FadeInEffect delay={0.2}>
          <div className="flex justify-between items-center w-full">
            <h3 className=" text-center text-3xl font-satoshi-bold lg:text-left lg:text-6xl ">
              Together, We Build a Better Tomorrow
            </h3>
            <div className="flex flex-col w-1/2 gap-3">
              <p className="text-xl">
                know about our mission, vision and journey.
              </p>
              <Link
                to={"/"}
                className="border rounded-full w-20 text-center lg:w-44 px-6 py-3 border-[#ececec] bg-[#e9e9e9] transition duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </FadeInEffect>
      </div>
      <FadeInEffect delay={0.2}>
        <div className="border rounded-4xl border-[#dadada] xl:h-[40rem]">
          <img
            src={AboutImage}
            alt=""
            className="h-full w-full object-cover rounded-4xl"
          />
        </div>
      </FadeInEffect>
      <div className="grid grid-cols-3">
        <AboutCard />
      </div>

      <CTA marginTop="mt-32" />
    </div>
  );
};

export default About;
