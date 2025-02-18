import React from "react";
import GridCard from "./GridCard";
import Empowerment from "../assets/images/student.jpg";
import Well from "../assets/images/well.jpeg";
import Shelter from "../assets/images/homeless.jpg";

const FeaturedCards = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10">
      <GridCard
        image={Empowerment}
        title={"Empowering Future Leaders"}
        description={
          "Support young students from underprivileged backgrounds by funding school supplies, uniforms, and tuition fees."
        }
        goal={"5,000,000"}
        raised={"50,000"}
        to={"/donate/empowering-future-leaders"}
        projectLink={"/project-details/empowering-future-leaders"}
      />
      <GridCard
        image={Well}
        title={"Village Wells Project"}
        description={
          "Build sustainable water wells in rural communities to provide access to clean and safe drinking water."
        }
        goal={"2,000,000"}
        raised={"450,000"}
        to={"/donate/village-wells-project"}
        projectLink={"/project-details/village-wells-project"}
      />
      <GridCard
        image={Shelter}
        title={"Shelter and Support"}
        description={
          "Provide temporary housing, food, and counseling for homeless families in urban areas."
        }
        goal={"9,000,000"}
        raised={"820,000"}
        to={"/donate/shelter-and-support"}
        projectLink={"/project-details/shelter-and-support"}
      />
    </div>
  );
};

export default FeaturedCards;
