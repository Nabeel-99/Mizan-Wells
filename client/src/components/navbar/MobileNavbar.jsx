import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import AppLogo from "../assets/images/logo.png";
const MobileNavbar = ({ toggleMenu, isBurgerMenu }) => {
  return (
    <nav className="flex items-center px-4 lg:hidden backdrop-blur-3xl z-50 pb-2 bg-[#ffffff6b] justify-between w-full  fixed left-0 right-0 top-0 pt-4">
      <Link to={"/"} className="flex lg:hidden items-center gap-1">
        <img src={AppLogo} alt="" className="w-8 h-8 object-contain" />
        <h3 className="text-lg font-satoshi-bold">Mizan Wells</h3>
      </Link>
      <div className=" lg:hidden">
        <button
          onClick={toggleMenu}
          className="border p-2 rounded-xl border-[#dadada] bg-[#e9e9e9] text-black"
        >
          {isBurgerMenu ? (
            <AiOutlineClose className="text-xl" />
          ) : (
            <CiMenuFries className="text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
