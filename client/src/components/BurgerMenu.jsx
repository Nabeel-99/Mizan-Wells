import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className="bg-white h-full  z-50 flex py-4 flex-col items-start px-14 text-xl gap-4">
      <ul className="flex flex-col pt-4   justify-start items-start gap-6  ">
        <Link onClick={closeMenu} to={"/"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Home
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/projects"}>
          {" "}
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/about"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About
          </motion.li>
        </Link>
        <Link onClick={closeMenu} to={"/start-project"}>
          <motion.li
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Start Project
          </motion.li>
        </Link>
      </ul>
      <Link
        onClick={closeMenu}
        to={"/donate"}
        className="flex items-center pt-2 justify-center"
      >
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Donate now
        </motion.span>
      </Link>
      <Link
        onClick={closeMenu}
        to={"/contact"}
        className="flex items-center pt-2 justify-center"
      >
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Contact Us
        </motion.span>
      </Link>
    </div>
  );
};

export default BurgerMenu;
