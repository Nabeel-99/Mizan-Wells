import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" p-10 lg:p-20 w-full 2xl:container 2xl:mx-auto  flex flex-col gap-10 items-start lg:items-baseline justify-between  ">
      <div className="flex 2xl:container 2xl:mx-auto w-full justify-between  lg:flex-row flex-col gap-10">
        <div className="font-satoshi-bold flex gap-4 flex-col items-start  lg:items-center  text-xl">
          Mizan Wells
          <div className="text-center">
            <FaInstagram className="text-3xl" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-start lg:items-baseline  text-xl gap-10">
          <div className="flex flex-col gap-2">
            <span className="pb-4">Quick Links</span>
            <ul className="flex flex-col gap-5">
              <Link
                to={"/"}
                className="transition duration-300 hover:text-blue-600"
              >
                Home{" "}
              </Link>
              <Link
                className="transition duration-300 hover:text-blue-600"
                to={"/projects"}
              >
                <li>Projects</li>
              </Link>
              <Link
                className="transition duration-300 hover:text-blue-600"
                to={"/about"}
              >
                <li>About</li>
              </Link>
              <Link
                className="transition duration-300 hover:text-blue-600"
                to={"/contact"}
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="pb-1">Reach Out to Us</span>
            <Link>Email: ufi@gmail.com</Link>
            <div>Phone: +234 803 123 4567</div>
            <div>Address: Wuse 2, Abuja.</div>
          </div>
        </div>
      </div>
      <div className="border-t pb-44 lg:pb-10 border-t-[#dcdcdc] h-1 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="pt-8">
          <p className="text-[#6d6d6d]">
            &copy; Mizan Wells 2025. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-8">
          <FaInstagram className="text-xl" />
          <RiTwitterXLine className="text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
