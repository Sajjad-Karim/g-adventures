import React from "react";
import { ReasonCard } from "./ReasonCard";
import { data } from "./data";
const CardLists = () => {
  return (
    <>
      {data.map((items, index) => {
        return <ReasonCard item={items} key={items.id} />;
      })}
    </>
  );
};

export default CardLists;
