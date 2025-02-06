import React from "react";
import { IoMdHeart } from "react-icons/io";
const AboutCard = () => {
  return (
    <div className="border rounded-xl p-6 border-[#dadada] flex flex-col items-center gap-6">
      <div className="border border-[#d7d7d7] rounded-lg p-3 bg-blue-500">
        <IoMdHeart className="text-white text-3xl" />
      </div>

      <h3 className="text-3xl font-satoshi-bold">Our Mission</h3>
      <p></p>
    </div>
  );
};

export default AboutCard;
