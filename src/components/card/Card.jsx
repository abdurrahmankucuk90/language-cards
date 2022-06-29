import Item from "../item/Item";
import "./Card.css";
import { languages } from "../../helpers/data";

const Card = ({ name, img, options }) => {
  return (
    <div className="card-container">
      <h3 className="title">Languages</h3>
      <div className="cards">
        {languages.map((item, index) => {
          const { name, img, options } = item;
          return <Item key={index} name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
};

export default Card;
