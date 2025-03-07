import React from "react";
import { Link } from "react-router-dom";

const GridCard = ({
  image,
  title,
  description,
  raised,
  goal,
  projectLink,
  to,
}) => {
  return (
    <div className="border border-[#dadada] rounded-3xl p-6 flex flex-col gap-2">
      <div>
        <img
          src={image}
          alt=""
          className="rounded-xl h-full lg:h-[20rem] w-full object-cover"
        />
      </div>
      <h3 className="text-xl font-satoshi-bold">{title}</h3>
      <p className="lg:h-32 text-lg">{description}</p>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg">Raised</h3>
          <p className="font-satoshi-bold text-xl">
            {"\u20A6"}
            {raised}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg">Goal</h3>
          <p className="font-satoshi-bold text-xl">
            {"\u20A6"}
            {goal}
          </p>
        </div>
      </div>
      <div className="flex items-center border border-[#dadada] p-0.5 rounded-full w-full">
        <div
          style={{
            width: `${
              (Number(raised.replace(/,/g, "")) /
                Number(goal.replace(/,/g, ""))) *
              100
            }%`,
          }}
          className="h-2 bg-[#16a91b] rounded-full"
        />
      </div>
      <Link
        to={to}
        className="border mt-4 rounded-full px-6 text-center py-3 transition duration-300 text-white bg-blue-600 hover:bg-blue-800"
      >
        Donate Now
      </Link>
      <Link
        to={projectLink}
        className="border rounded-full px-6 py-3 text-center bg-white lg:bg-[#d0d0d0] transition duration-300 hover:bg-white text-black border-[#dadada]"
      >
        View Project
      </Link>
    </div>
  );
};

export default GridCard;
