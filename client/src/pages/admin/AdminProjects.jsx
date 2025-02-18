import React from "react";
import { FaPlus } from "react-icons/fa";
import MobileProjectsCard from "../../components/cards/MobileProjectsCard";
import ProjectsTable from "../../components/ProjectsTable";
import { Link } from "react-router-dom";

const AdminProjects = () => {
  return (
    <div className="flex flex-col w-full mt-20 md:px-4 lg:px-0 lg:mt-0 h-full gap-6">
      <div className="flex justify-between  gap-4 lg:gap-10 w-full">
        <input
          className="w-full rounded-lg px-4 py-2 border border-[#d7d7d7]"
          placeholder="Search project"
        />
        <Link
          to={"/admin/projects/create"}
          className="bg-black hidden lg:block xl:w-60 text-white text-center px-4  p-2 rounded-lg"
        >
          Create Project
        </Link>
        <Link
          to={"/admin/projects/create"}
          className="bg-black lg:hidden text-white px-4 flex items-center justify-center  text-center p-2 rounded-lg"
        >
          <FaPlus className="" />
        </Link>
      </div>
      <div className="  p-4 border border-[#f4f4f4]   rounded-lg">
        <ProjectsTable />
        <MobileProjectsCard />
      </div>
      {/* <div className="flex justify-center  mt-10 gap-3 items-center">
        <button
          className="bg-black w-10 text-white px-4 py-2 rounded-lg
                "
        >
          1
        </button>
        <button
          className="bg-black w-10 text-white px-4 py-2 rounded-lg
                "
        >
          2
        </button>
      </div> */}
    </div>
  );
};

export default AdminProjects;
