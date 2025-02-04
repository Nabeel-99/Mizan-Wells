import React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="2xl:container 2xl:mx-auto flex w-full justify-between lg:px-10 items-center">
      <div className="hidden lg:flex items-center gap-1">
        <img src={AppLogo} alt="" className="w-10 h-10 object-contain" />
        <h3 className="text-xl font-satoshi-bold">Mizan Wells</h3>
      </div>
      <div className="hidden lg:flex items-center  z-20 gap-4">
        <Link className="border rounded-full px-4 py-2 bg-white text-black border-[#dadada]">
          Home
        </Link>
        <Link className="border rounded-full px-4 py-2 bg-white text-black border-[#dadada]">
          Projects
        </Link>
        <Link className="border rounded-full px-4 py-2 bg-white text-black border-[#dadada]">
          About
        </Link>
        <Link className="border rounded-full px-4 py-2 bg-white text-black border-[#dadada]">
          Start Project
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
