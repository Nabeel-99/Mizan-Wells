import React, { useEffect, useState } from "react";
import LargeNavbar from "./LargeNavbar";
import MobileNavbar from "./MobileNavbar";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const toggleMenu = () => setIsBurgerMenu(!isBurgerMenu);
  const closeMenu = () => setIsBurgerMenu(false);
  useEffect(() => {
    if (isBurgerMenu) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isBurgerMenu]);
  return (
    <nav className="2xl:container 2xl:mx-auto mt-[2rem]  flex w-full justify-between lg:px-10 items-center">
      <LargeNavbar />
      <MobileNavbar toggleMenu={toggleMenu} isBurgerMenu={isBurgerMenu} />
      {isBurgerMenu && (
        <div className=" fixed z-50 top-15 inset-0  w-full lg:hidden">
          <BurgerMenu closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
