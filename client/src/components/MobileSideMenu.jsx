import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const MobileSideMenu = ({ closeMenu }) => {
  return (
    <div className="bg-white h-full  z-50 flex py-4 flex-col items-start justify-between  px-4 text-xl gap-4">
      <ul className="flex flex-col pt-4   justify-start items-start gap-6  ">
        <Link onClick={closeMenu} to={"/admin/dashboard"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/admin/projects"}>
          {" "}
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/admin/settings"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Settings
          </motion.li>
        </Link>
      </ul>
      <motion.button
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-20"
      >
        Logout
      </motion.button>
    </div>
  );
};

export default MobileSideMenu;
