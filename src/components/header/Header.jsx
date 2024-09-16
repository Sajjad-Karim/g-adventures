import React from "react";
import logo from "../../assets/logo/logo.png";
import NavLinks from "./NavLinks";
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsTelephone } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className=" py-[20px] px-[10px] w-[100%] font-sans-sarif ">
        <div className="flex justify-between items-center max-w-[1170px] mx-auto relative">
          <div>
            <img src={logo} alt="g-adventure" className="w-[150px] " />
          </div>
          <div className="md:block hidden">
            <NavLinks />
          </div>
          <div className="flex sm:gap-[15px] lg:gap-[30px]">
            <BsSearch className=" text-[20px] cursor-pointer text-blue hidden md:block " />
            <BsTelephone className=" text-[20px] cursor-pointer text-blue hidden md:block" />
            <VscAccount className=" text-[20px] cursor-pointer text-blue" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
