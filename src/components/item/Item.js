import React from "react";
import "./Item.css";

const Item = ({ name, img, options }) => {
  return (
    <div className="card">
      <img className="cardImg" src={img} alt="" />
      <p className="cardP">{name}</p>
    </div>
  );
};

export default Item;
