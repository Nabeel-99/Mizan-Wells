import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import HeroImage from "../assets/images/heroimg.jpg";
import FadeInEffect from "../components/FadeInEffect";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row relative justify-between gap-10 w-full">
      <FadeInEffect>
        <div className="flex flex-col text-center lg:text-left lg:w-1/3 gap-4">
          <h3 className="text-3xl lg:text-6xl  xl:text-8xl font-satoshi-bold tracking-tight">
            A Better Tomorrow Starts with Your Support
          </h3>
          <p className="lg:px-3 text-xl">
            Together, we can make a real impact in communities around the world.
          </p>
          <div className="flex items-center justify-center group transition-all duration-300 lg:justify-start lg:px-3 ">
            <Link
              to={"/donate"}
              className="border  rounded-full px-6 py-3 transition duration-300 bg-blue-600 group-hover:bg-blue-800 text-white"
            >
              Donate Now
            </Link>
            <Link
              to={"/donate"}
              className="border  rounded-full p-4 transition duration-300 bg-blue-600 group-hover:bg-blue-800 text-white border-[#dadada]"
            >
              <GoArrowRight className="transition-transform duration-300 group-hover:-rotate-40" />
            </Link>
          </div>
        </div>
      </FadeInEffect>

      <div className="order-first lg:order-none overflow-hidden lg:absolute lg:w-1/2  z-0 right-0 -top-24">
        <img
          src={HeroImage}
          alt=""
          className="w-full h-[35rem] lg:h-[44rem] overflow-hidden object-cover rounded-4xl"
        />
      </div>
    </div>
  );
};

export default Hero;
