import React from "react";

const StatsCard = ({ title, value }) => {
  return (
    <div className="border p-4 rounded-lg border-[#ececec] bg-[#f4f4f4] flex flex-col gap-1">
      <h2>{title}</h2>
      <p className="border bg-white text-center border-[#ececec] p-4 rounded-lg">
        {" "}
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
