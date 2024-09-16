import React from "react";
import Card from "./Card";
const ListCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((items) => (
        <Card items={items} key={items.id} />
      ))}
    </>
  );
};

export default ListCard;
