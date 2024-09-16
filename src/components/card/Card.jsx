import React from "react";
import cardpic from "../../assets/images/card.jpg";
const Card = ({ items }) => {
  const { image, date, days, heading, price } = items;

  return (
    <>
      <div className="w-[40%] min-w-[300px] rounded-xl overflow-hidden bg-primary ml-[2px] shadow-md">
        <div className="  w-[100%] object-cover">
          <img src={image} alt="card" className="w-[100%] h-[256px] " />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div>
            <p className="text-[10px] font-medium text-[#504E61]">{days}</p>
            <h1 className="text-[16px] text-[#332e21] font-semibold">
              {heading}
            </h1>
            <p>
              Valid on <span className="font-medium">{date}</span>
            </p>
            <p>
              $<span className="text-[20px] font-medium"> {price} </span>per
              person
            </p>
          </div>
          <button className="px-3 py-1 rounded-xl border-[2px] font-semibold text-blue border-slate-600 self-start">
            View itinerary
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
