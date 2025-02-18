import React from "react";
import ProjectPhaseCarousel from "../../components/ui/ProjectPhaseCarousel";

const ViewPhase = () => {
  return (
    <div className="flex ">
      <div className="rounded-3xl  bg-gradient-to-b from-[#e9e9e953] to-transparent ">
        <h3 className=" p-6 lg:p-10  text-xl text-center xl:text-left lg:text-3xl font-satoshi-bold">
          Phase 1
        </h3>
        <ProjectPhaseCarousel />
        <div className="flex flex-col xl:flex-row xl:justify-between gap-10 p-6 xl:p-10">
          <div className="flex flex-col xl:sticky top-10 h-full xl:p-4 xl:w-1/2  rounded-xl gap-4">
            <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
              <span className="font-satoshi-bold ">Status</span>
              <p></p>
            </div>
            <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
              <span className="font-satoshi-bold ">Location</span>
              <p></p>
            </div>
            <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
              <span className="font-satoshi-bold ">Phase Start Date</span>
              <p></p>
            </div>
            <div className="flex gap-3 border-b border-b-[#d7d7d7] pb-3">
              <span className="font-satoshi-bold ">Phase End Date</span>
              <p></p>
            </div>
            <div className="flex gap-3 pb-3">
              <span className="font-satoshi-bold ">Amount Spent</span>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col gap-3 xl:w-2/4">
            <h3 className="font-satoshi-bold text-2xl">Phase Details</h3>
            <ul className="list-disc pl-5">
              <li>Phase 1</li>
              <li>Phase 2</li>
              <li>Phase 3</li>
              <li>Phase 4</li>
              <li>Phase 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPhase;
