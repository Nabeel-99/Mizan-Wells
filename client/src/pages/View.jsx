import React from "react";
import { FaPlus } from "react-icons/fa";
import MobileProjectsCard from "../components/MobileProjectsCard";
import PhaseCard from "../components/PhaseCard";
import { Link } from "react-router-dom";

const View = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex justify-end">
        <Link
          to={""}
          className="bg-black hidden text-center lg:block xl:w-60 text-white px-4  p-2 rounded-lg"
        >
          Add Project Phase
        </Link>
        <Link
          to={""}
          className="bg-black lg:hidden text-center text-white px-4  p-2 rounded-lg"
        >
          <FaPlus className="" />
        </Link>
      </div>
      <div className="flex  flex-col gap-10 shadow-md  bg-white border border-[#f4f4f4] p-2 rounded-lg">
        <div className="flex justify-between border-b pb-3 border-b-[#d7d7d7]">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-satoshi-bold">
              Empowering Future Leaders
            </h2>
            <p>
              Start Date: <span>2024-09-30</span>{" "}
            </p>
            <p>
              End Date: <span>2025-01-30</span>
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-green-600">Completed</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p>
              Raised:{" "}
              <span className="block font-satoshi-bold">{"\u20A6"}20,000</span>
            </p>
            <p>
              Goal Amount:
              <span className="block font-satoshi-bold">
                {"\u20A6"}2,000,000
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="font-satoshi-bold">Project Phase</h2>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <PhaseCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
