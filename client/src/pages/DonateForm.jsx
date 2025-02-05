import React, { useEffect, useState } from "react";
import Faq from "../sections/Faq";
import { useParams } from "react-router-dom";
import { projects } from "../projects";
import FadeInEffect from "../components/FadeInEffect";

const DonateForm = () => {
  const { id } = useParams();
  const [projectName, setProjectName] = useState("");
  const fetchSelectedProject = () => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setProjectName(project.title);
    }
  };
  useEffect(() => {
    fetchSelectedProject();
  }, [id, projectName]);
  return (
    <FadeInEffect>
      <div className="flex flex-col gap-10 w-full items-center mt-20 lg:mt-10">
        <div className="flex flex-col text-center gap-3 items-center">
          <h3 className="text-3xl lg:text-5xl font-satoshi-bold tracking-tight">
            Donation for
          </h3>
          <p className="text-xl lg:text-4xl">{projectName}</p>
        </div>
        <div className="border border-[#d7d7d7] shadow-2xs rounded-xl p-6 w-full lg:w-1/2 flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname">Enter Full Name</label>
              <input
                id="fullname"
                name="fullname"
                className="px-4 py-2 border border-[#dadada] rounded-lg"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Enter Email</label>
              <input
                id="email"
                name="email"
                className="px-4 py-2 border border-[#dadada] rounded-lg"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="amount">Enter Donation Amount</label>
              <input
                id="amount"
                name="amount"
                className="px-4 py-2 border border-[#dadada] rounded-lg"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="note">Message/Note (optional)</label>
              <textarea
                id="note"
                name="note"
                className="px-4 min-h-44 max-h-44 py-2 border border-[#dadada] rounded-lg"
                placeholder="Leave a message with your donation..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="progress">Progress update</label>
              <div className="flex items-center gap-2">
                <input
                  id="progress"
                  name="progress"
                  className=" default:outline-2 bg-white h-4 w-4 border border-[#dadada] rounded-lg"
                  type="checkbox"
                />
                <span>
                  Yes, I would like to receive progress updates on this project
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="border mt-4 border-[#132edc] bg-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white p-3 rounded-2xl"
            >
              Donate Now
            </button>
          </form>
        </div>
        <Faq />
      </div>
    </FadeInEffect>
  );
};

export default DonateForm;
