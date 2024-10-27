import React, { useState } from "react";
import Button from "../Button/Button";
import { useGetRoomsQuery } from "../redux/services/roomsApi";
import "../../styles/main.scss";
import LikeUnLikeIcon from "../Icons/LikeUnLikeIcon";

const ShowRooms = ({
  startReservDate,
  endReservDate,
  handleSetLocalstorageClick,
}) => {

  const { data: rooms, error, isLoding } = useGetRoomsQuery();
  const [adultCount, setAdultCount] = useState(1);
 
  const hendelLikeUnLikeClick = (event) => {
    if (event.target.classList.contains("like")) {
      event.target.classList.remove("like");
    } else {
      event.target.classList.add("like");
    }
  };
  return (
    <div className="show-rooms">
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (
        <div>
          {rooms.map((room) =>
            (new Date(room.startreserveddate) <= new Date(startReservDate) &&
              new Date(room.endreservceddate) >= new Date(startReservDate)) ||
            (new Date(room.startreserveddate) <= new Date(endReservDate) &&
              new Date(room.endreservceddate) >= new Date(endReservDate)) ||
            (new Date(room.startreserveddate) >= new Date(startReservDate) &&
              new Date(room.endreservceddate) <=
                new Date(endReservDate)) ? null : (
              <div key={room.id} id={room.id} className="show-rooms__container">
                <div className="show-rooms__container--img">
                  <img src={room.img} />
                  <div className="p-10">
                    <span className="text-justify text-bold black-color">
                      {" "}
                      امکانات:{" "}
                    </span>
                    {room.facilities}
                  </div>
                </div>
                <div className="show-rooms__container--info">
                  <ul>
                    <li>
                      <h2>{room.title}</h2>
                    </li>
                    <li>
                      {" "}
                      <span> ظرفیت: </span>
                      {room.capacity}
                    </li>
                    <li>
                      <span>قیمت هر شب : </span>
                      {room.price}ریال{" "}
                    </li>
                    <li>
                      <span>بزرگسال : </span>
                      <select
                        onChange={(event) => setAdultCount(event.target.value)}
                        name="adult"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </li>
                    <li>
                      <LikeUnLikeIcon
                        hendelLikeUnLikeClick={hendelLikeUnLikeClick}
                      ></LikeUnLikeIcon>
                    </li>
                  </ul>

                  <div className="btns">
                    <div className="btns-first">
                      <div
                        className="btn"
                        onClick={() =>
                          handleSetLocalstorageClick(
                            room.id,
                            room.title,
                            room.price,
                            adultCount,
                            room.capacity,
                            room.type
                          )
                        }
                      >
                        رزرو اتاق
                      </div>
                    </div>

                    <div className="btns-second">
                      <Button>جزئیات بیشتر</Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ShowRooms;
