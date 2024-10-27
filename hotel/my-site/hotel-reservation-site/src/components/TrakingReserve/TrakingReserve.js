
import React, { useState } from "react";
import Error from "../Error/Error";
import Warning from "../Warning/Warning";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../Space/Space";
import "../../styles/main.scss";
import Input from "../Input/Input";
import ScrollButton from "../ScrollButton/ScrollButton ";
import {
  useGetReservedInfoByIdQuery,
  useGetReservedInfoQuery,
  useDeleteReservedRoomMutation
} from "../redux/services/reservedInfoApi";

const TrakingReserve = () => {
  const [id, setId] = useState("");
  const[reservedrooms,setReservedRooms]=useState()
  const handleInputChange = (event) => {
    setId(event.target.value);
  };


  const { data, error, isLoading } = useGetReservedInfoByIdQuery(id);



  return (
    <div className="tracking-reserve"> 
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      <div className="container-custom box-shadow p-15 ">
        <Space />
        <Space />
        <label for="mobile">شماره موبایل : </label>
        <Input
          type="text"
          handleInputChange={handleInputChange}
          placeholder="شماره موبایل خود را وارد نمایید"
          id="mobile"
        />
        <Space />
        <Space />


        {error ? (
          <Error>مشتری با شماره موبایل وارد شده وجود ندارد</Error>
        ) : isLoading ? (
          <Warning>در حال واکشی اطلاعات</Warning>
        ) : data && data.id ? (
          <div className="tracking-reserve__table">
            <table>
              <thead>
                <tr>
                  <th>نام و نام خانودگی مشتری</th>
                  <th>کد ملی</th>
                  <th>شماره موبایل</th>
                  <th>آدرس ایمیل</th>
                  <th>نحوه پرداخت</th>
                 
                </tr>
              </thead>
              <tbody>

                        <>
                      <tr key={data.id}>
                        <td>
                          {data.customerName} {}
                          {data.customerFamily}
                        </td>
                        <td>{data.customerNationalCode}</td>
                        <td>{data.customerMobile}</td>
                        <td>{data.customerEmail}</td>
                        <td>
                          {data.paymentType === "cash"
                            ? "پرداخت حضوری"
                            : data.paymentType === "online"
                            ? "پرداخت آنلاین"
                            :data.paymentType === "organize"?"پرداخت با کارت های سازمانی":null}
                        </td>
                        </tr>
                        {data.selectedRooms.map((room) => 
                        <tr key={room.id}>
                            
                            <td colSpan={5}>
                              
                             
                                <h4>{room.title}</h4>                   
                                <p><span> قیمت هر شب :</span> {room.price} <span>ریال</span></p>                        
                                <p><span>تعداد بزرگسال :</span>{room.adultCount}</p>
                                <p><span>ظرفیت :</span>{room.capacity}</p>
                                <p><span>تاریخ ورود:</span>{room.jalaliStartDate}</p>
                                <p><span>تاریخ خروج :</span>{room.jalaliEndDate}</p>
                                <p><span>مدت اقامت :</span>{room.diffSatrtEnd}<span>شب</span></p>
                                <p><span>مجموع : </span>{room.totalAmount}<span>ریال</span></p>
                            
                            </td>
                        </tr>
                          )}
                        </>
   
                     

                   
              </tbody>
            </table>
          </div>
        ) : (
          null
        )}
      </div>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />


      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default TrakingReserve;
