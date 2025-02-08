import React, { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";
import CTA from "../sections/CTA";
import FadeInEffect from "../components/FadeInEffect";
import ProjectPhase from "../components/ProjectPhase";
import { phases } from "../phases";

const ProjectDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const fetchProjectDetails = () => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setDetails(project);
    }
  };
  useEffect(() => {
    fetchProjectDetails();
  }, [id, details]);

  return (
    <div className="flex flex-col gap-14 h-full mt-20 lg:mt-10">
      <div className="flex flex-col items-center lg:items-start gap-6">
        <div className="flex rounded-full border border-[#dadada] w-44 p-2">
          <div className="flex items-center gap-4 ">
            <FaLightbulb className="text-lg text-blue-500" />
            <p>Our Projects</p>
          </div>
        </div>

        <FadeInEffect delay={0.2}>
          <h3 className=" text-center text-3xl font-satoshi-bold lg:text-left lg:text-6xl ">
            {details.title}
          </h3>
        </FadeInEffect>
      </div>
      <FadeInEffect delay={0.2}>
        <div className="border rounded-4xl border-[#dadada] xl:h-[40rem]">
          <img
            src={details.image}
            alt=""
            className="h-full w-full object-cover rounded-4xl"
          />
        </div>
      </FadeInEffect>
      <FadeInEffect delay={0.2}>
        <ProjectPhase phases={phases} />
      </FadeInEffect>
      <FadeInEffect delay={0.2}>
        <div className="flex flex-col xl:flex-row w-full  gap-10">
          <div className="flex xl:w-2/3 flex-col gap-2">
            <h3 className="font-satoshi-bold text-xl lg:text-4xl">
              The Difference You Can Make
            </h3>
            <p>{details.description}</p>
            <p>{details.descriptionTwo}</p>
            <p>
              <span className="font-satoshi-bold">{details.quoteSpan} </span>"
              {details.quote}"
            </p>
          </div>
          <div className="xl:w-2/3 border border-[#dadada]   rounded-2xl flex flex-col ">
            <div className="p-6 border-b border-b-[#dadada]">
              <div className="flex  justify-between">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg">Raised</h3>
                  <p className="font-satoshi-bold text-xl">
                    {"\u20A6"}
                    50,000
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg">Goal</h3>
                  <p className="font-satoshi-bold text-xl">
                    {"\u20A6"}
                    5,000,000
                  </p>
                </div>
              </div>
              <div className="flex items-center border border-[#dadada] p-0.5 rounded-full w-full">
                <div className="w-1/4 h-2 bg-[#16a91b] rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-1 p-6 border-b-[#dadada] border-b">
              <p className="text-xl">Donors</p>
              <p className="font-satoshi-bold text-2xl">50</p>
            </div>
            <div className="flex flex-col gap-1 p-6 ">
              <Link
                to={details.to}
                className="border mt-4 rounded-full px-6 text-center py-3 transition duration-300 bg-blue-600 hover:bg-blue-800 text-white"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </FadeInEffect>

      <CTA marginTop="mt-32" />
    </div>
  );
};

export default ProjectDetails;
