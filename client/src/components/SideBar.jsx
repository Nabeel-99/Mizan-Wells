import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../assets/images/logo.png";
const SideBar = () => {
  return (
    <div className="hidden lg:flex fixed bg-white  flex-col w-64 border-r border-r-[#e8e8e8] h-screen">
      <div className=" right-0 absolute top-10"></div>
      <div className="flex flex-col h-full justify-between gap-6 p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <img src={AppLogo} alt="" className="w-2 h-2 object-contain" />
            <h3 className="text-xl font-satoshi-bold">Mizan Wells</h3>
          </div>
          <Link to={"/admin/dashboard"} className=" px-4 py-1 rounded-lg">
            Dashboard
          </Link>
          <Link to={"/admin/projects"} className=" px-4 py-1 rounded-lg">
            Projects
          </Link>
          {/* <Link to={"/admin/transactions"} className=" px-4 py-1 rounded-lg">
            Transaction
          </Link> */}
          <Link to={"/admin/settings"} className=" px-4 py-1 rounded-lg">
            Settings
          </Link>
        </div>
        <div>
          <button className="px-4 py-1 rounded-lg">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
