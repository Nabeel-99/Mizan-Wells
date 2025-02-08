import React from "react";
import Faq from "../sections/Faq";
import CTA from "../sections/CTA";
import FadeInEffect from "../components/FadeInEffect";
import { motion } from "motion/react";
import ProjectForm from "../components/ProjectForm";
import ProjectProcess from "../components/ProjectProcess";

const StartProject = () => {
  return (
    <div className="flex flex-col items-center 2xl:container 2xl:mx-auto gap-10  pt-20">
      <FadeInEffect translateY={50}>
        <div className="flex flex-col gap-10  items-center  lg:px-20">
          <div className="flex flex-col gap-4">
            <p className="font-satoshi-bold text-3xl lg:text-7xl text-center tracking-tight">
              Turn Your Idea into Impact
            </p>
            <div className="flex flex-col gap-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-center"
              >
                Have a cause you’re passionate about? Start your own project and
                bring your vision to life with our support.
              </motion.p>
              <FadeInEffect translateY={20} delay={0.5}>
                <div className="flex flex-col xl:flex-row justify-center items-center gap-4">
                  <ProjectProcess
                    number={"1"}
                    text={"Submit Your Project Idea"}
                  />
                  <ProjectProcess number={"2"} text={"Project Review"} />
                  <ProjectProcess
                    number={"3"}
                    text={"Project Launch"}
                    showArrow={false}
                  />
                </div>
              </FadeInEffect>

              <FadeInEffect translateY={20} delay={0.6}>
                <div className="flex items-center justify-center">
                  <ProjectForm />
                </div>
              </FadeInEffect>
            </div>
          </div>
        </div>
      </FadeInEffect>
      <div className="w-full">
        <Faq marginTop="mt-36" />
        <CTA marginTop="mt-36" />
      </div>
    </div>
  );
};

export default StartProject;
