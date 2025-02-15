import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";

const ProjectsTable = () => {
  return (
    <table className="w-full table-auto hidden lg:block  text-left">
      <thead className="border-b hidden border-b-[#d7d7d7]">
        <tr>
          <th className="pb-4 "></th>
          <th className=" px-4 pb-4 font-satoshi-bold">Project Name</th>
          <th className=" px-4 pb-4 font-satoshi-bold">Total Raised</th>
          <th className=" px-4 pb-4 font-satoshi-bold">Goal Amount</th>
          <th className=" px-4 pb-4 font-satoshi-bold">Status</th>
          <th className=" px-4 pb-4 font-satoshi-bold">Start Date</th>
          <th className=" px-4 pb-4 font-satoshi-bold">End Date</th>
          <th className=" px-4 pb-4 font-satoshi-bold">Actions</th>
        </tr>
      </thead>
      <tbody className="text-left ">
        {Array.from({ length: 7 }).map((_, index) => (
          <tr key={index}>
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">Empowering Future Leaders</td>
            <td className="px-4 py-2">{"\u20A6"}20,000</td>
            <td className="px-4 py-2">{"\u20A6"}2,000,000</td>
            <td className="px-4 py-2 text-green-600">Completed</td>
            <td className="px-4 py-2 text-nowrap">2024-09-30</td>
            <td className="px-4 py-2 text-nowrap">2025-01-30</td>
            <td className="px-4 py-2 flex gap-2 items-center">
              <button className=" border border-[#d7d7d7] text-black px-4 py-3 rounded-lg">
                <FaEye className="text-lg" />
              </button>

              <button className="border border-[#d7d7d7] text-black px-4 py-3 rounded-lg">
                <FaTrash className="text-lg" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;
