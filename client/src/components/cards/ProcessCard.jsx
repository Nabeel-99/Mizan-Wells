import React from "react";
import { Link } from "react-router-dom";

const ProcessCard = ({ image, LinkText, description, showLink = true }) => {
  return (
    <div className="h-full">
      <div className="relative ">
        <img
          src={image}
          alt=""
          className="rounded-4xl w-full h-90 lg:h-auto lg:w-[50rem] object-cover"
        />
        <div className="absolute z-20 top-14 lg:right-10 right-10  w-60  lg:w-90 bg-white  border border-[#dadada]  px-4 py-2 text-lg rounded-xl">
          {" "}
          {description}
        </div>
        <div className="absolute inset-0 bg-black opacity-55 rounded-4xl"></div>
        <div className="absolute z-10 bottom-0  w-full h-32 bg-gradient-to-t from-black from-30% to-transparent rounded-b-4xl" />
        {showLink && (
          <Link className="absolute z-20 bottom-14 left-10 bg-white lg:bg-[#c7c7c7] hover:shadow-amber-50 hover:shadow-md transition duration-300 hover:bg-white border border-[#dedede]  px-4 py-2 text-lg rounded-full">
            {" "}
            {LinkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProcessCard;
