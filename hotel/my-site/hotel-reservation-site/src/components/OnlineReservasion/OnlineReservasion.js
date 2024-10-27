import React, { useEffect, useState } from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ShowRooms from "../ShowRooms/ShowRooms";
import Space from "../../components/Space/Space";
import Error from "../Error/Error";
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import Input from "../Input/Input";
import { useLocation } from "react-router-dom";
import useConvertToEnDate from "../../hooks/useConvertToEnDate";
import useDiffStartEnd from "../../hooks/useDiffStartEnd";
import useSetLocalStorage from "../../hooks/useSetLocalStorage";
import CartShopping from "../CartShopping/CartShopping";
import ScrollButton from "../ScrollButton/ScrollButton ";
import "../../styles/main.scss";

const OnlineReservasion = () => {

  const [jalaliStartDate, setJalaliStartDate] = useState();
  const [jalaliEndDate, setJalaliEndDate] = useState();

  //تبدیل تاریخ شمسی به میلادی
  const [miladiStartDate, setMiladiStartDate] =useConvertToEnDate(jalaliStartDate);
  const [miladiEndDate, setMiladiEndDate] = useConvertToEnDate(jalaliEndDate);

  //محاسبه اختلاف تاریخ شروع و پایان (مدت زمان اقامت)
  const [diffSatrtEnd, error] = useDiffStartEnd(miladiStartDate, miladiEndDate);

  const [showRooms, setShowRooms] = useState(false);

  const location = useLocation();

  const [objToSetLocalStorage, setObjToSetLocalStorage] = useSetLocalStorage("reserveInfo",[]);

  const [dataFromLocalStorage, setDataFromLocalStorage] = useState();

  const handleSearchRoomsClick = () => {
    error ? setShowRooms(false) : setShowRooms(true);
  };

  const handleSetLocalstorageClick = (Id, Title, Price, Adult,Capacity,Type) => {
    setObjToSetLocalStorage({
      ...objToSetLocalStorage,
      id: Id,
      title: Title,
      price: Price,
      adultCount: Adult,
      capacity:Capacity,
      type:Type,
      startDate: miladiStartDate,
      endDate: miladiEndDate,
      diffSatrtEnd: diffSatrtEnd,
      jalaliStartDate: jalaliStartDate.year +"/"+jalaliStartDate.month + "/"+jalaliStartDate.day,
      jalaliEndDate:jalaliEndDate.year +"/"+jalaliEndDate.month + "/"+jalaliEndDate.day,
      totalAmount : Price * Adult * diffSatrtEnd
    });
  };

  useEffect(() => {
    if (localStorage.getItem("reserveInfo")) {
      setDataFromLocalStorage(JSON.parse(localStorage.getItem("reserveInfo")));
    }
  }, [objToSetLocalStorage,dataFromLocalStorage]);




  const handleDeleteFromLocalStorage=(id)=>{

    for (let index = 0; index < dataFromLocalStorage.length; index++) {
      if (dataFromLocalStorage[index].id === id) {
        dataFromLocalStorage.splice(index, 1);
      }
    }
    localStorage.setItem("reserveInfo", JSON.stringify(dataFromLocalStorage));
     
  }


  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      <div className="online-reserve__container container-custom">
        <div className="online-reserve__container--right">
          <div className="box-shadow p-30">
            <div className="dtpicker">
              <div className="dtpicker-right">
                <DtPicker
                  onChange={setJalaliStartDate}
                  local="fa"
                  clearBtn="true"
                  isRequired="true"
                  todayBtn="true"
                  headerClass="custom-headr"
                  inputClass="custom-input"
                  placeholder="تاریخ ورود"
                />
              </div>
              <div className="dtpicker-center">
                <DtPicker
                  onChange={setJalaliEndDate}
                  local="fa"
                  clearBtn="true"
                  isRequired="true"
                  todayBtn="true"
                  headerClass="custom-headr"
                  inputClass="custom-input"
                  placeholder="تاریخ خروج"
                />
              </div>
              <div className="dtpicker-left">
                <Input
                  type="text"
                  disabled="disabled"
                  value={`${diffSatrtEnd} شب`}
                />
              </div>

              <div
                className="btn"
                onClick={() => {
                  handleSearchRoomsClick();
                }}
              >
                جستجوی اتاق
              </div>
            </div>
            {location.pathname === "/onlinereservation" ? (
              error ? (
                <Error>{error}</Error>
              ) : null
            ) : null}
          </div>
          {showRooms && (
            <ShowRooms
              startReservDate={miladiStartDate}
              endReservDate={miladiEndDate}
              handleSetLocalstorageClick={handleSetLocalstorageClick}
            ></ShowRooms>
          )}
        </div>

        <CartShopping
          dataFromLocalStorage={dataFromLocalStorage}
          handleDeleteFromLocalStorage={handleDeleteFromLocalStorage}
        ></CartShopping>
      </div>
      <Space />

      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default OnlineReservasion;
