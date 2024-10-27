
import React from "react";
import "../../styles/main.scss";
import { Link } from "react-router-dom";
import LikeUnLikeIcon from "../Icons/LikeUnLikeIcon";

const FoodBox = (props) => {
  const { id, title, src, price,info } = props;
  const hendelLikeUnLikeClick = (event) => {
    if (event.target.classList.contains("like")) {
      event.target.classList.remove("like");
    } else {
      event.target.classList.add("like");
    }
  };
  return (
    <div className="food-box fadeInUp">
      <div className="food-box--img">
        <img src={src} alt={src} />
        <div>{price}تومان </div>
      </div>
      <div className="food-box--title">
        <h4>{title}</h4>
      </div>

      <ul className="food-box--icon">
        <li>
          <LikeUnLikeIcon
            hendelLikeUnLikeClick={hendelLikeUnLikeClick}
          ></LikeUnLikeIcon>
        </li>
      </ul>

      <div className="food-box--info">
        <p>
          {info}
        </p>
      </div>
      <div className="p-30">
        <Link to="/" className="btn">
          جزییات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default FoodBox;
