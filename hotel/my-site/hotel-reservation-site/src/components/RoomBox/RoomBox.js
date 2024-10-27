
import React from "react";
import "../../styles/main.scss";
import { Link } from "react-router-dom";
import WifiIcon from "../Icons/WifiIcon";
import BathIcon from "../Icons/BathIcon";
import BedIcon from "../Icons/BedIcon";
import LikeUnLikeIcon from "../Icons/LikeUnLikeIcon";

const RoomBox = (props) => {
  const { id, title, src, bed, bath, wifi, price,info } = props;
  const hendelLikeUnLikeClick = (event) => {
    if (event.target.classList.contains("like")) {
      event.target.classList.remove("like");
    } else {
      event.target.classList.add("like");
    }
  };
  return (
    <div className="room-box fadeInUp">
      <div className="room-box--img">
        <img src={src} alt={src} />
        <div>{price}تومان </div>
      </div>
      <div className="room-box--title">
        <h4>{title}</h4>
        {/* <span>*****</span> */}
      </div>

      <ul className="room-box--icon">
        <li>
          <LikeUnLikeIcon
            hendelLikeUnLikeClick={hendelLikeUnLikeClick}
          ></LikeUnLikeIcon>
        </li>
        <li>
          <span>{wifi}</span>
          <WifiIcon />
        </li>
        <li>
          <span>{bed}</span>
          <BedIcon />
        </li>
        <li>
          <span>{bath}</span>
          <BathIcon />
        </li>
      </ul>

      <div className="room-box--info">
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

export default RoomBox;
