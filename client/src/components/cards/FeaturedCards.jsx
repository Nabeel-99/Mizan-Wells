import React from "react";
import GridCard from "./GridCard";
import Empowerment from "../../assets/images/student.jpg";
import Well from "../../assets/images/well.jpeg";
import Shelter from "../../assets/images/homeless.jpg";
import Tree from "../../assets/images/tree7.JPG";
const FeaturedCards = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10">
      <GridCard
        image={Empowerment}
        title={"Feed The Poor"}
        description={
          "Even with just ₦1,000, you can make a meaningful impact—providing meals and hope to those in need. No amount is too small to make a difference!"
        }
        goal={"5,000,000"}
        raised={"50,000"}
        to={"/donate/feed-the-poor"}
        projectLink={"/project-details/feed-the-poor"}
      />
      <GridCard
        image={Well}
        title={"Village Wells Project"}
        description={
          "Build sustainable water wells in rural communities to provide access to clean and safe drinking water."
        }
        goal={"8,000,000"}
        raised={"5,700,000"}
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
      <GridCard
        image={Tree}
        title={"Trees for Future Generations"}
        description={
          "Plant trees in deforested areas to combat climate change, improve air quality, and restore ecosystems. A lasting act of charity for future generations."
        }
        goal={"10,000,000"}
        raised={"4,200,000"}
        to={"/donate/trees-for-future-generations"}
        projectLink={"/project-details/trees-for-future-generations"}
      />
    </div>
  );
};

export default FeaturedCards;
