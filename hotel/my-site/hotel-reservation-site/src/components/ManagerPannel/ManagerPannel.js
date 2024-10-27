import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../../components/Space/Space";
import ScrollButton from "../ScrollButton/ScrollButton ";
import { Link, Outlet, useLocation } from "react-router-dom";
import Divider from "../Divider/Divider";

import "../../styles/main.scss";
const ManagerPannel = () => {
  const location = useLocation();
  return (
    <div>
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      <div className="container-custom  manager-pannel box-shadow">
        <ul className="manager-pannel__menu">
          <li>
            <Link to="showallrooms">نمایش اتاق ها</Link>
          </li>
          <li>
            <Link to="showroombyid"> جستجوی اتاق </Link>
          </li>
          <li>
            <Link to="showallrooms">اضافه کردن  اتاق </Link>
          </li>
          <li>
            <Link to="showallcustomers">نمایش مشتریان </Link>
          </li>
        </ul>

        {<Outlet />}
      </div>

      <Space />

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default ManagerPannel;
