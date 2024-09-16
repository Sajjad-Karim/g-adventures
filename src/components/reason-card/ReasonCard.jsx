import React from "react";

export const ReasonCard = ({ item }) => {
  const { id, icon, title, para } = item;
  return (
    <>
      <div className="bg-primary p-4 rounded-lg flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div>
            <img className="w-[50px]" src={icon} />
          </div>
          <div className="text-[18px] text-[#242239] font-medium">{title}</div>
        </div>
        <div>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};
