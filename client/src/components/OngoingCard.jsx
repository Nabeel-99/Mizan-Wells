import React from "react";

const OngoingCard = ({ title, status, raised, goal }) => {
  return (
    <div className="bg-white border border-[#e9e9e9] rounded-lg p-3 flex flex-col gap-3">
      <h2 className="text-xl">{title}</h2>
      <p>
        Status:{" "}
        <span className="border px-4 py-1 rounded-lg bg-green-600 text-white">
          {status}
        </span>
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="">Raised</h3>
          <p className="font-satoshi-bold ">
            {"\u20A6"}
            {raised}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="">Goal</h3>
          <p className="font-satoshi-bold ">
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
    </div>
  );
};

export default OngoingCard;
