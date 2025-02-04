import React from "react";
import ProcessOne from "../assets/images/process1.jpeg";
import { Link } from "react-router-dom";

const ProcessCard = ({ image, LinkText, description }) => {
  return (
    <div className="h-full">
      <div className="relative ">
        <img
          src={image}
          alt=""
          className="rounded-4xl h-90 lg:h-auto lg:w-[50rem] object-cover"
        />
        <div className="absolute z-20 top-14 lg:right-10 right-10  w-60  lg:w-90 bg-white  border border-[#dadada]  px-4 py-2 text-lg rounded-xl">
          {" "}
          {description}
        </div>
        <div className="absolute inset-0 bg-black opacity-55 rounded-4xl"></div>
        <div className="absolute z-10 bottom-0  w-full h-32 bg-gradient-to-t from-black from-30% to-transparent rounded-b-4xl" />
        <Link className="absolute z-20 bottom-14 left-10 bg-[#c7c7c7] transition duration-300 hover:bg-white border border-[#b0b0b0]  px-4 py-2 text-lg rounded-full">
          {" "}
          {LinkText}
        </Link>
      </div>
    </div>
  );
};

export default ProcessCard;
