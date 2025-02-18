import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileProjectsCard = () => {
  return (
    <div className="flex lg:hidden flex-col gap-10 text-sm bg-white border border-[#f4f4f4] p-2 rounded-lg">
      <div className="flex justify-between border-b pb-3 border-b-[#d7d7d7]">
        <div className="flex flex-col gap-2">
          <h2>Empowering Future Leaders</h2>
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
        <div className="flex items-center gap-2">
          <Link
            to={"/admin/projects/view"}
            className=" border border-[#d7d7d7] text-black px-4 py-3 rounded-lg"
          >
            <FaEye className="text-sm" />
          </Link>

          <button className="border border-[#d7d7d7] text-black px-4 py-3 rounded-lg">
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectsCard;
