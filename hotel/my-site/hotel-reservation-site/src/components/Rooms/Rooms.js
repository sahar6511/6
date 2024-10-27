import React from 'react'
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../../components/Space/Space";
import SectionTitle from '../SectionTitle/SectionTitle';
import { useGetRoomsQuery } from "../redux/services/roomsApi";
import "../../styles/main.scss";
import RoomBox from "../RoomBox/RoomBox";
import ScrollButton from '../ScrollButton/ScrollButton ';


const Rooms = () => {
    const { data: rooms, error, isLoding } = useGetRoomsQuery();
  return (
    <div className='room'>
    <TopMenu />
    <Header />
    <Space />
    <Space />
    <Space />
    <Space />



      <SectionTitle>اتاق های هتل</SectionTitle>
    <div className="container-custom">
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (
        <div className="rooms-container">
          {rooms.map((room) => (
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
    <Space />
    <Footer />
    <ScrollButton/>
    </div>
  )
}

export default Rooms
