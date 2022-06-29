import React from "react";
import "./Item.css";
import { useState } from "react";

const Item = ({ name, img, options }) => {
  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    if (visible === true) {
      setVisible(false);
      console.log(visible);
    }

    if (visible === false) {
      setVisible(true);
      console.log(visible);
    }
  };

  return (
    <div className="card" onClick={handleVisible}>
     {visible ? (<><img className="cardImg" src={img} alt="" />  <p className="cardP">{name}</p> </>): <ul>{options.map((item) => {
        return <li>{item}</li>
      })}</ul>}
      {/* <img className="cardImg" src={img} alt="" /> */}
      {/* <p className="cardP">{name}</p> */}
      {/* <ul>{options.map((item) => {
        return <li>{item}</li>
      })}</ul> */}
    </div>
  );
};

export default Item;
