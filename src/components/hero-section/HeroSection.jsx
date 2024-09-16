import React from "react";
import bg from "../../assets/images/background.jpg";
import { BsSearch } from "react-icons/bs";
import background from "../../assets/images/background2.jpg";
import Wrapper from "../wrapper/Wrapper";
const HeroSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-[505px] bg-cover bg-center flex justify-center items-center font-dn-sanas"
      >
        <div className="md:w-[700px] sm:w-[400px] w-[250px] flex items-center justify-center flex-col gap-[20px]">
          <h1 className="md:text-[55px] text-[30px] font-bold font-montserrat text-primary text-center">
            Bring on the world with small group travel.
          </h1>
          <div className="md:w-[100%] w-[90%] md:py-[20px] py-[10px] rounded-3xl bg-primary justify-between flex items-center px-[15px] border-none  ">
            <input
              className="h-[90%] outline-none sm:w-[500px] w-[50%]"
              type="text"
              placeholder="Where's Your next adventure?"
            />
            <button className="h-[90%] flex gap-[10px] items-center justify-center text-white text-lg px-[20px] sm:px-[30px] rounded-full bg-blue py-[10px]  font-normal">
              <BsSearch /> <span className="hidden sm:block">Search</span>
            </button>
          </div>
        </div>
      </div>
      {/* This is for the Mobile Version */}
      <div className="text-black max-w-[400px] flex flex-col gap-[10px]  items-start p-[15px] sm:p-[30px] md:hidden">
        <p className="italic">Introduction</p>
        <h1 className="text-[30px] font-bold font-dn-sanas">
          The Geluxe Collection
        </h1>
        <p className="text-[18px]">
          Our new line of premium active adventures is officially here. With
          perfectly paced itineraries, one-of-a-kind accommodations and elevated
          dining, this is adventure at its finest.
        </p>
        <button className="rounded-lg px-[10px] py-[5px] bg-blue text-white font-bold">
          Check it out
        </button>
      </div>
      {/* This is for Large Devices */}
      <div className="flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="w-[90%] md:w-full rounded-2xl md:rounded-none h-[505px] bg-cover bg-center flex justify-center md:justify-start items-center pl-0 md:pl-[50px]"
        >
          <div className="text-white max-w-[400px] md:flex flex-col gap-[15px] items-start p-[10px]  hidden">
            <p className="italic">Introduction</p>
            <h1 className="text-[48px] font-bold font-dn-sanas">
              The Geluxe Collection
            </h1>
            <p className="text-[18px]">
              Our new line of premium active adventures is officially here. With
              perfectly paced itineraries, one-of-a-kind accommodations and
              elevated dining, this is adventure at its finest.
            </p>
            <button className="rounded-2xl px-[10px] md:px-[15px] py-[5px] bg-primary text-blue font-bold md:py-[15px]">
              Check it out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
