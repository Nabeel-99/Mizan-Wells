import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../assets/images/logo.png";
const LargeNavbar = () => {
  return (
    <>
      <Link to={"/"} className="hidden lg:flex items-center gap-1">
        <img src={AppLogo} alt="" className="w-10 h-10 object-contain" />
        <h3 className="text-xl font-satoshi-bold">Mizan Wells</h3>
      </Link>
      <nav className="hidden lg:flex items-center mr-10  z-20 gap-4">
        <Link
          to={"/"}
          className="border rounded-full px-4 py-2 transition duration-300 bg-white text-black hover:bg-blue-800 hover:text-white hover:border-blue-800  border-[#dadada]"
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          className="border rounded-full px-4 py-2 transition duration-300 bg-white text-black hover:bg-blue-800 hover:text-white hover:border-blue-800 border-[#dadada]"
        >
          Projects
        </Link>
        <Link
          to={"/about"}
          className="border rounded-full px-4 py-2 transition duration-300 bg-white text-black hover:bg-blue-800 hover:text-white hover:border-blue-800 border-[#dadada]"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="border rounded-full px-4 py-2 transition duration-300 bg-white text-black hover:bg-blue-800 hover:text-white hover:border-blue-800 border-[#dadada]"
        >
          Contact
        </Link>
        <Link
          to={"/start-project"}
          className="border rounded-full px-4 py-2 transition duration-300 bg-white text-black hover:bg-blue-800 hover:text-white hover:border-blue-800 border-[#dadada]"
        >
          Start Project
        </Link>
      </nav>
    </>
  );
};

export default LargeNavbar;
