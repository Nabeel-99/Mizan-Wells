import React from "react";
import ProjectPhaseCarousel from "./ProjectPhaseCarousel";
import FadeInEffect from "./FadeInEffect";

const ProjectPhase = ({ phases }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-6xl font-satoshi-bold">Project Phase</h3>
      {phases.map((phase) => (
        <FadeInEffect translateY={20} key={phase.phaseNumber}>
          <div
            key={phase.phaseNumber}
            className="rounded-3xl p-10 bg-gradient-to-b from-[#e9e9e953] to-transparent mb-10"
          >
            <h3 className="p-10 text-3xl font-satoshi-bold">
              Phase {phase.phaseNumber}
            </h3>
            <ProjectPhaseCarousel />
            <div className="flex justify-between gap-10 p-10">
              <div className="flex flex-col sticky top-10 h-full p-4 w-1/2 rounded-xl gap-4">
                <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
                  <span className="font-satoshi-bold ">Status</span>
                  <p>{phase.status}</p>
                </div>
                <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
                  <span className="font-satoshi-bold ">Phase Start Date</span>
                  <p>{phase.startDate}</p>
                </div>
                <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
                  <span className="font-satoshi-bold ">
                    Phase End Date/Estimated End Date
                  </span>
                  <p>{phase.estimatedEndDate}</p>
                </div>
                <div className="flex gap-3 pb-3">
                  <span className="font-satoshi-bold ">Amount Spent</span>
                  <p>{phase.amountSpent}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-2/4">
                <h3 className="font-satoshi-bold text-2xl">Phase Details</h3>
                <ul className="list-disc pl-5">
                  {phase.phaseDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInEffect>
      ))}
    </div>
  );
};

export default ProjectPhase;
