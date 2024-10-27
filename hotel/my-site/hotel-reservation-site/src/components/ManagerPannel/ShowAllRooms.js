import React, { useEffect, useState } from "react";
import {
  useGetLimitRoomsQuery,
  useDeleteRoomMutation,
  useUpdateRoomMutation,
} from "../redux/services/roomsApi";
import Space from "../Space/Space";
import "../../styles/main.scss";
import Input from "../Input/Input";

const ShowAllRooms = () => {
  const [page, setPage] = useState(1);
  const { data: rooms, isLoding, error } = useGetLimitRoomsQuery(page);
  

  const [deleteRoom] = useDeleteRoomMutation();

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [updateRoom] = useUpdateRoomMutation();

  const [editingRoom, setEditingRoom] = useState({
    title: "",
    price: "",
    capacity: "",
    bed: "",
    bath: "",
    wifi: "",
    img: "",
    facilities: "",
    info: "",
  });

  useEffect(() => {    selectedRoom &&
      setEditingRoom({
        ...editingRoom,
        title: selectedRoom.title,
        price: selectedRoom.price,
        capacity: selectedRoom.capacity,
        bed: selectedRoom.bed,
        bath: selectedRoom.bath,
        wifi: selectedRoom.wifi,
        img: selectedRoom.img,
        facilities: selectedRoom.facilities,
        info: selectedRoom.info,
      });
  }, [selectedRoom]);

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    updateRoom({
      id: selectedRoom.id,
      title: editingRoom.title,
      price: editingRoom.price,
      capacity: editingRoom.capacity,
      bed: editingRoom.bed,
      bath: editingRoom.bath,
      wifi: editingRoom.wifi,
      img: editingRoom.img,
      facilities: editingRoom.facilities,
      info: editingRoom.info,
    });
    event.target.reset();
  };

  const handleInputChange = (event) => {
    setEditingRoom({ ...editingRoom, [event.target.name]: event.target.value });
  };

  return (
    
    <div className="showallromms">
      
    

      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (
        <div>
          <table className="showallrooms-table">
            <tbody>
              {rooms.map((room) => (
                <>
                
                 
                
                  <tr key={room.id}>
                    <td>{room.title}</td>
                    <td>ظرفیت:{room.capacity}</td>
                    <td>تعداد تخت :{room.bed}</td>
                    <td> تعداد حمام :{room.bath}</td>
                    <td> wifi :{room.wifi}</td>
                    <td> قیمت هر شب :{room.price}ریال</td>
                    <td>{room.img}</td>

                    <td rowSpan={2}>
                      <button
                        className="btn"
                        style={{ background: "#FEA116" }}
                        onClick={() => setSelectedRoom(room)}
                      >
                        ویرایش
                      </button>
                    </td>
                    <td rowSpan={2}>
                      <button
                        className="btn delete-btn"
                        onClick={() => deleteRoom(room.id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>امکانات : {room.facilities}</td>
                    <td colSpan={4}>توضیحات : {room.info}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <Space />
          <Space />
          <Space />


          <div className="showallrooms-btns">
            <button
              className="btn"
              disabled={rooms.length < 3}
              onClick={() => setPage((prev) => prev + 1)}
            >
              {console.log(rooms.length)}
              
              بعدی
            </button>
            <button
              className="btn"
              disabled={page <= 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              قبلی
            </button>
          </div>
        </div>
      ) : null}
      <Space/>
      <Space/>
      <Space/>
      {selectedRoom ? (
        <div>
          <form onSubmit={handleUpdateFormSubmit} className="editing-room-form">
            <Input
              type="text"
              value={editingRoom.title}
              handleInputChange={handleInputChange}
              name="title"
              
            />
            قیمت هر شب :<Input
              type="text"
              value={editingRoom.price}
              handleInputChange={handleInputChange}
              name="price"
            />    
             گنجایش :<Input
              type="number"
              value={editingRoom.capacity}
              handleInputChange={handleInputChange}
              name="capacity"
              className='w-30'
              
            /> 
           تعداد تخت : <Input
              type="number"
              value={editingRoom.bed}
              handleInputChange={handleInputChange}
              name="bed"
              className='w-30'
            /> 
           تعداد حمام :<Input
              type="number"
              value={editingRoom.bath}
              handleInputChange={handleInputChange}
              name="bath"
             className='w-30'
            />  
           wifi : <Input
              type="text"
              value={editingRoom.wifi}
              handleInputChange={handleInputChange}
              name="wifi"
             className='w-30'
            /> 
           تصویر مربوطه :<Input
              type="text"
              value={editingRoom.img}
              handleInputChange={handleInputChange}
              name="img"
            />
            امکانات : <textarea
              value={editingRoom.facilities}
              handleInputChange={handleInputChange}
              name="facilities"
            ></textarea>

           توضیحات : <textarea
              value={editingRoom.info}
              handleInputChange={handleInputChange}
              name="info"
            ></textarea>

            <button>ویرایش</button>
          </form>
        </div>
      ) : null}
      {
        console.log(page)
      }
    </div>
    
  );
};

export default ShowAllRooms;
