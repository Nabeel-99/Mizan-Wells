import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Dashboard from "./Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminProjects from "./AdminProjects";
import Settings from "./Settings";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import MobileSideMenu from "../components/MobileSideMenu";
import Create from "./Create";
import View from "./View";
import ViewPhase from "./ViewPhase";

const Admin = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const toggleMenu = () => setIsSideBar(!isSideBar);
  const closeMenu = () => setIsSideBar(false);
  useEffect(() => {
    if (isSideBar) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isSideBar]);
  const location = useLocation();
  const renderCurrentView = () => {
    return (
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="settings" element={<Settings />} />
        <Route path="projects/create" element={<Create />} />
        <Route path="projects/view" element={<View />} />
        <Route path="projects/view/phase" element={<ViewPhase />} />
      </Routes>
    );
  };

  const getCurrentViewName = () => {
    if (location.pathname === "/admin/dashboard") return "Dashboard";
    if (location.pathname === "/admin/projects") return "Projects";
    if (location.pathname === "/admin/settings") return "Settings";
    if (location.pathname === "/admin/projects/create") return "Create Project";
    if (location.pathname === "/admin/projects/view") return "Project Details";
    if (location.pathname === "/admin/projects/view/phase")
      return "Project Phase";
  };
  return (
    <div className="flex">
      <SideBar />
      <div className="fixed  items-center  right-0 left-0 px-4 top-0  w-full flex justify-between backdrop-blur-3xl z-50  pt-6 pb-2 bg-[#ffffff6b] lg:hidden">
        <h2 className="font-satoshi-bold">{getCurrentViewName()}</h2>
        <button
          onClick={toggleMenu}
          className="border p-2 rounded-xl border-[#dadada] bg-[#e9e9e9] text-black"
        >
          {isSideBar ? (
            <AiOutlineClose className="text-xl" />
          ) : (
            <CiMenuFries className="text-xl" />
          )}
        </button>
      </div>
      {isSideBar && (
        <div className=" fixed z-50 top-15 inset-0  w-full lg:hidden">
          <MobileSideMenu closeMenu={closeMenu} />
        </div>
      )}
      <Content
        getCurrentViewName={getCurrentViewName}
        renderCurrentView={renderCurrentView}
      />
    </div>
  );
};

export default Admin;
