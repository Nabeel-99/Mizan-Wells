import React from "react";
const AboutCard = ({ icon, title, description, border, bgIcon }) => {
  return (
    <div
      className={`${border}  p-12 w-full border-[#dadada] flex flex-col items-center gap-4`}
    >
      <div className={`border border-[#d7d7d7] rounded-lg p-3 ${bgIcon}`}>
        {icon}
      </div>

      <h3 className="text-3xl text-center font-satoshi-bold">{title}</h3>
      <p className="text-center py-2">{description}</p>
    </div>
  );
};

export default AboutCard;
