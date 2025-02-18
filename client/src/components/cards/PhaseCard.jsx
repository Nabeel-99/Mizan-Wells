import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PhaseCard = () => {
  return (
    <div className="flex flex-col shadow-md gap-10 text-sm bg-white border border-[#f4f4f4] p-2 rounded-lg">
      <div className="flex justify-between border-b pb-3 border-b-[#d7d7d7]">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-satoshi-bold mb-2">Phase 1</h3>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Status:</span> Completed
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Location:</span> Abuja
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">Start Date:</span> 2024-09-30
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-semibold">End Date:</span> 2025-01-30
          </p>
          <p className="text-sm text-gray-700 mb-3">
            <span className="font-semibold">Amount Spent:</span> ₦20,000
          </p>
        </div>
        <div>
          <p className="px-4 py-2 text-green-600">Completed</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <Link
            to={"/admin/projects/view/phase"}
            className=" border border-[#d7d7d7] text-black px-4 py-3 rounded-lg"
          >
            <FaEye className="text-sm" />
          </Link>

          <Link
            to={"/admin/projects/view/phase/edit-phase"}
            className="border border-[#d7d7d7] text-black px-4 py-3 rounded-lg"
          >
            <FaEdit className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;
