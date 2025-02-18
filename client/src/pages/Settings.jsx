import React, { useState } from "react";

const Settings = () => {
  const [user, setUser] = useState("Admin");
  const [email, setEmail] = useState("farouq@gmail.com");
  return (
    <div className="flex flex-col gap-6 md:px-4 lg:px-0  mt-20 lg:mt-0">
      <div className="">
        <button className="border mt-4 border-[#132edc] bg-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 text-white p-3 rounded-lg">
          Toggle Edit
        </button>
      </div>
      <form className=" xl:w-2/4 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label id="full-name">User</label>
          <input
            id="full-name"
            type="text"
            placeholder=""
            value={user}
            className="border border-[#dadada] p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label id="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder=""
            value={email}
            className="border border-[#dadada] p-2 rounded-lg w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label id="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="border border-[#dadada] p-2 rounded-lg w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
