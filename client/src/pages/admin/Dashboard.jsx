import React from "react";
import StatsCard from "../../components/cards/StatsCard";
import OngoingCard from "../../components/cards/OngoingCard";
import DonationsCard from "../../components/cards/DonationsCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 md:px-4 xl:px-0  mt-20 lg:mt-0">
      <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard title={"Total Donations"} value={`${"\u20A6"}1,000,000`} />
        <StatsCard title={"Active Projects"} value={"3"} />
        <StatsCard title={"Total Donors"} value={"24"} />
        <StatsCard title={"Available Balance"} value={`${"\u20A6"}300,000`} />
      </div>
      <div className="grid xl:grid-cols-2 gap-6">
        <div className="flex flex-col h-[32rem] overflow-hidden gap-2">
          <h2 className="text-xl font-satoshi-bold">Ongoing Projects</h2>
          <div className="border h-full pb-10 overflow-scroll hide-scrollbar border-transparent rounded-lg shadow-md bg-[#f4f4f4a8] p-2 flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <OngoingCard
                key={index}
                title={"Empowering Future Leaders"}
                status={"Active"}
                raised={"20,000"}
                goal={"2,250,000"}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col pb-20 lg:pb-0 gap-2 overflow-hidden h-[32rem]">
          <h2 className="text-xl font-satoshi-bold">Recent Donations</h2>
          <DonationsCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
