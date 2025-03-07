import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import FadeInEffect from "../components/ui/FadeInEffect";
import AboutImage from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import CTA from "../sections/CTA";
import { IoMdHeart } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";

import AboutCard from "../components/cards/AboutCard";
const About = () => {
  return (
    <div className="flex flex-col gap-14 h-full mt-20 lg:mt-10">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <div className="flex rounded-full justify-center border border-[#dadada] w-44 p-2">
          <div className="flex items-center gap-4 ">
            <FaGlobeAfrica className="text-lg text-blue-500" />
            <p>About Us</p>
          </div>
        </div>

        <FadeInEffect delay={0.2}>
          <div className="flex flex-col gap-6  lg:flex-row lg:justify-between items-center w-full">
            <h3 className=" text-center text-3xl font-satoshi-bold lg:text-left lg:text-6xl ">
              Together, We Build a Better Tomorrow
            </h3>
            <div className="flex flex-col lg:w-1/2 gap-3">
              <p className="text-center lg:text-left text-xl">
                know about our mission, vision and journey.
              </p>
              <Link
                to={"/"}
                className="border rounded-full w text-center lg:w-44 px-6 py-3 border-[#ececec] bg-[#e9e9e9] transition duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
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
      <FadeInEffect>
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl text-center lg:text-left lg:text-6xl font-satoshi-bold">
            Who We Are
          </h3>
          <p className="text-lg text-justify px-4 lg:px-0 lg:text-xl">
            LoveandLight Foundation, inspired by the teachings of Islam, is
            built on compassion, unity, and the drive to create lasting change.
            Guided by principles of charity and kindness, we work to address
            critical challenges and uplift underserved communities. Through
            thoughtful planning and impactful programs, we aim to empower
            individuals and families, fostering resilience and self-reliance.
            LoveandLight Foundation is more than an organization; it is a
            faith-driven movement dedicated to building a future filled with
            hope, dignity, and opportunity for all.
          </p>
        </div>
      </FadeInEffect>
      <FadeInEffect>
        <div className="flex flex-col lg:flex-row border border-[#dadada] rounded-xl w-full ">
          <AboutCard
            icon={<IoMdHeart className="text-white text-3xl" />}
            bgIcon={"bg-blue-600"}
            title={"Our Mission"}
            description={
              " Our mission is to empower communities by fostering sustainable growth and creating opportunities that transform lives."
            }
            border={"border-b lg:border-b-0 lg:border-r border-[#dadada]"}
          />
          <AboutCard
            icon={<FaLightbulb className="text-white text-3xl" />}
            bgIcon={"bg-orange-500"}
            title={"Our Vision"}
            description={
              " A world where every community thrives, free from poverty and inequality, with access to resources for growth."
            }
            border={"border-b lg:border-b-0 lg:border-r border-[#dadada]"}
          />
          <AboutCard
            icon={<FaShield className="text-white text-3xl" />}
            bgIcon={"bg-green-600"}
            title={"Our Commitment"}
            description={
              " Transparency, collaboration, and lasting change define our work, fostering unity and improving lives."
            }
          />
        </div>
      </FadeInEffect>

      <CTA marginTop="mt-32" />
    </div>
  );
};

export default About;
