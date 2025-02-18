import React from "react";
import { Link } from "react-router-dom";
import CommentCard from "../components/cards/CommentCard";
import FadeInEffect from "../components/ui/FadeInEffect";

const CTA = ({ marginTop = "mt-44" }) => {
  return (
    <FadeInEffect>
      <div
        className={`border border-transparent xl:h-[40rem] rounded-3xl bg-custom flex flex-col justify-between w-full mt-10 lg:${marginTop} p-10`}
      >
        <div className="flex flex-col text-white items-center gap-3">
          <h2 className="font-satoshi-bold text-3xl text-center lg:text-5xl tracking-normal">
            Together, We Can Make a Difference
          </h2>
          <p className="text-xl">
            Your support can bring lasting change to communities in need.
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-10 gap-6">
            <Link
              to={"/donate"}
              className="border rounded-full w-full text-center lg:w-auto px-6 py-3 border-[#212121] bg-black transition duration-300 hover:bg-blue-600 hover:border-blue-600 text-white"
            >
              Donate Now
            </Link>
            <Link
              to={"/contact"}
              className="border rounded-full  text-center w-full lg:w-auto px-6 py-3 border-[#ffffff] bg-white hover:bg-[#dddddd] transition duration-300 hover:border-[#dadada] text-black"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center mt-20 pb-10 items-center  relative">
          <CommentCard
            text={
              "Your support can transform lives. Donate now to help bring hope to those in need."
            }
            rotate={"-rotate-12"}
            translateX={"xl:translate-x-44"}
          />
          <CommentCard
            text={
              "Every contribution counts! Help us make a real difference by donating today."
            }
            translateX={"xl:translate-x-10"}
            rotate={"-rotate-5"}
          />
          <CommentCard
            text={
              "Join the movement. Your donation will create lasting change for communities in need."
            }
            translateX={"xl:-translate-x-30"}
            rotate={"-rotate-10"}
          />
          <CommentCard
            text={
              "Your time and contributions can make a world of difference. Get involved by donating or volunteering now."
            }
            translateX={"xl:-translate-x-44"}
            rotate={"rotate-5"}
          />
        </div>
      </div>
    </FadeInEffect>
  );
};

export default CTA;
