import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectProcessCard = ({ number, text, showArrow = true }) => {
  return (
    <>
      <div className="rounded-full p-3 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-blue-400 text-white font-satoshi-bold text-lg lg:text-xl">
        {number}
      </div>
      <div className="flex items-center gap-2">
        <p className="">{text}</p>
        {showArrow && (
          <FaArrowRight className="hidden xl:flex text-[#1664c3]" />
        )}
      </div>
    </>
  );
};

export default ProjectProcessCard;
