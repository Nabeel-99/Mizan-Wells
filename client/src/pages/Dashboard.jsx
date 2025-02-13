import React from "react";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-6">
        <StatsCard title={"Total Donations"} value={`${"\u20A6"}1,000,000`} />
        <StatsCard title={"Active Projects"} value={"3"} />
        <StatsCard title={"Total Donors"} value={"24"} />
        <StatsCard title={"Available Balance"} value={`${"\u20A6"}300,000`} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col h-[32rem] gap-2">
          <h2>Ongoing Projects</h2>
          <div className="border h-full border-[#e9e9e9] rounded-lg bg-[#f4f4f4] p-2 flex flex-col gap-4">
            <div className="bg-white rounded-lg p-3 flex flex-col gap-3">
              <h2 className="text-xl">Empowering Future Leaders</h2>
              <p>
                Status:{" "}
                <span className="border p-2 rounded-lg bg-green-600 text-white">
                  Active
                </span>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="">Raised</h3>
                  <p className="font-satoshi-bold ">
                    {"\u20A6"}
                    20,000
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="">Goal</h3>
                  <p className="font-satoshi-bold ">
                    {"\u20A6"}
                    2,200,000
                  </p>
                </div>
              </div>
              <div className="flex items-center border border-[#dadada] p-0.5 rounded-full w-full">
                <div className="w-1/4 h-2 bg-[#16a91b] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-[32rem]">
          <h2>Recent Donations</h2>
          <div className="border h-full border-[#e9e9e9] rounded-lg bg-[#f4f4f4] p-2 flex flex-col gap-4">
            <div className="bg-white rounded-lg p-3 flex flex-col gap-3">
              <table className="w-full table-auto text-left">
                <thead className="">
                  <th className="text-xl pb-4 font-satoshi-bold">
                    Project Name
                  </th>
                  <th className="text-xl pb-4 font-satoshi-bold">Amount</th>
                </thead>
                <tbody>
                  <tr className="border-b border-b-[#dadada]">
                    <td className="py-2">Empowering Future Leaders</td>
                    <td className="py-2">{"\u20A6"}20,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">Clean Village Wells</td>
                    <td className="py-2">{"\u20A6"}200,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
