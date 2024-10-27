import React from "react";
import Home from "../Home/Home";
import OnlineReservasion from "../OnlineReservasion/OnlineReservasion";
import ManagerPannel from "../ManagerPannel/ManagerPannel";
import CompleteInfo from "../CompleteInfo/CompleteInfo";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import TrakingReserve from "../TrakingReserve/TrakingReserve";
import Rooms from "../Rooms/Rooms";
import Foods from "../Foods/Foods";
import LogInSignUp from "../LogInSignUp/LogInSignUp";
import LogIn from "../LogInSignUp/LogIn";
import SignUp from "../LogInSignUp/SignUp"
import ShowAllRooms from "../ManagerPannel/ShowAllRooms";
import ShowAllCustomers from "../ManagerPannel/ShowAllCustomers";
import ShowRoomById from "../ManagerPannel/ShowRoomById";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/onlinereservation" element={<OnlineReservasion />}></Route>
        <Route path="/CompleteInfo" element={<CompleteInfo />}></Route>
        <Route path="/trakingreserve" element={<TrakingReserve />}></Route>
        <Route path="/managerpannel" element={<ManagerPannel />}>
            <Route  path="showallrooms" element={<ShowAllRooms />}></Route>
            <Route  path="showroombyid" element={<ShowRoomById />}></Route>
            <Route  path="showallcustomers" element={<ShowAllCustomers />}></Route>
        </Route>
        <Route path="/loginsignup" element={<LogInSignUp />}>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="login" element={<LogIn/>}></Route>
        </Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/foods" element={<Foods />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
