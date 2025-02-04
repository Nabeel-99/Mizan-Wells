import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const CommentCard = ({ text, translateX, rotate }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`border rounded-xl  p-6 lg:w-90   bg-white border-[#dcdcdc] flex flex-col ${translateX} ${rotate}`}
      >
        <BiSolidQuoteAltLeft />
        <p className="lg:text-lg"> {text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
