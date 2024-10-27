import React, { useState } from "react";
 import SectionTitle from '../SectionTitle/SectionTitle';
import { useGetSpecialRoomsQuery } from "../redux/services/roomsApi";
// import { useGetRoomsQuery } from "../redux/services/roomsApi";
import "../../styles/main.scss";

import RoomBox from "../RoomBox/RoomBox";

const SpecialRooms = () => {
  const { data: specialRooms, error, isLoding } = useGetSpecialRoomsQuery();
  // const [like,setLike] = useState(true)


  return (
    <div className="special-rooms container-custom">
      <SectionTitle>اتاق های هتل</SectionTitle>
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : specialRooms ? (
        <div className="special-rooms__container">
          {specialRooms.map((room) => (
            <RoomBox
              key={room.id}
              id={room.id}
              title={room.title}
              src={room.img}
              bed={room.bed}
              bath={room.bath}
              wifi={room.wifi}
              price={room.price}
              info={room.info}
            ></RoomBox>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SpecialRooms;
