import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Admin = () => {
  return (
    <div className="flex">
      <SideBar />
      <Content />
    </div>
  );
};

export default Admin;
