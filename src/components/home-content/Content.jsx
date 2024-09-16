import React from "react";
import background from "../../assets/images/expedition_bg.jpg";
import ListCard from "../card/ListCard";
import { cardData } from "../card/data";
import CardLists from "../reason-card/CardLists";
const Content = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full  bg-cover bg-no-repeat bg-center flex flex-col lg:grid lg:grid-cols-[30%_auto] p-[50px]"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] font-semibold text-[#4c4f56] leading-8 font-montserrat">
            Save up to 40% on select Expedition departures
          </h1>
          <div>
            <p className="font-text text-[14px]">
              All month long, snap up iceberg-sized savings (from 10 - 40% off!)
              on Antarctica Expedition cruises to Earth's frozen frontier.
              <span className="underline"> View Term and Conditions</span>
            </p>
          </div>
          <button className="bg-blue self-start text-white px-[15px] py-[8px] font-semibold rounded-lg text-[20px]">
            View all antertica tour
          </button>
        </div>
        <div className=" flex gap-[10px] overflow-x-scroll p-[5px] scrollbar-custom">
          <ListCard cardData={cardData} />
        </div>
      </div>
      <div className="p-[50px] bg-secondary flex flex-col gap-9 ">
        <div className="w-[50%] flex flex-col gap-3 box-border">
          <h1 className="text-[24px] text-[#4c4f56] font-montserrat">
            Why travel with G Adventures?
          </h1>
          <p>
            As the leader in small group adventure travel for 30+ years, we've
            redefined the way travellers see the world. Check out how we’re
            creating the future of travel.
          </p>
          <button className="text-blue font-semibold self-start hover:border-b-2 border-blue text-[20px] ">
            Learn More
          </button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
          <CardLists />
        </div>
      </div>
    </>
  );
};

export default Content;
