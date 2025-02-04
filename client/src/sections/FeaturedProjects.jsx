import React from "react";
import GridCard from "../components/GridCard";
import Empowerment from "../assets/images/student.jpg";
import Well from "../assets/images/well.jpeg";
import Shelter from "../assets/images/homeless.jpg";
const FeaturedProjects = () => {
  return (
    <div className="flex flex-col gap-10 mt-10 lg:mt-44">
      <div className="flex flex-col text-center gap-2">
        <h3 className="font-satoshi-bold tracking-tight text-4xl lg:text-6xl">
          Together we can change lives
        </h3>
        <p className="text-xl">
          You can help lots of people by donating little
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <GridCard
          image={Empowerment}
          title={"Empowering Future Leaders"}
          description={
            "Support young students from underprivileged backgrounds by funding school supplies, uniforms, and tuition fees."
          }
          goal={"5,000,000"}
          raised={"50,000"}
        />
        <GridCard
          image={Well}
          title={"Village Wells Project"}
          description={
            "Build sustainable water wells in rural communities to provide access to clean and safe drinking water."
          }
          goal={"2,000,000"}
          raised={"450,000"}
        />
        <GridCard
          image={Shelter}
          title={"Shelter and Support"}
          description={
            "Provide temporary housing, food, and counseling for homeless families in urban areas."
          }
          goal={"9,000,000"}
          raised={"820,000"}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
