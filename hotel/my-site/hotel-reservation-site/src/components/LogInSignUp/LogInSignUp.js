import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import hotelimg from "../../images/hotel.webp";
import Space from "../Space/Space";
import logo from "../../images/Logo.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import ScrollButton from "../ScrollButton/ScrollButton ";
import { useLocation } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Link, Outlet } from "react-router-dom";
import "../../styles/main.scss";

const LogInSignUp = () => {
  const location = useLocation();

  return (
    <div className="login-signup">
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />

      <div className="login-signup__container container-custom">
        <div className="login-signup__container--info">
          <Space />
          <div className="text-center">
            <img src={logo} alt="logo" className="logo" />
            <Title title1="به هتل آریا خوش آمدید"></Title>
            <Space />
            <p className="text-justify">
              هتل بزرگ پنج ستاره آریا با الهام از طرح شکوهمند تخت جمشید در زمینی
              با وسعت دوازده هکتار در شمال شرق جزیره زیبای کیش نزدیک به ساحل
              شرقی در سال 1382 توسط بهترین معماران ایرانی ساخته شده است. این هتل
              موزه دارای 184 اتاق، سوییت و کاباناهای مجلل با چشم انداز دریا و
              باغ است.
            </p>
            <Space />
            <Space />
            <Space />
            <Space />
          </div>
         
          {
            location.pathname === "/loginsignup"?
          <div className="login-signup__container--btns">

          <Link to="login" className="login-link btn">ورود</Link>
          
          <Link to="signup" className="signup-link btn">ثبت نام مشترک جدید</Link>
          </div>:location.pathname === "/loginsignup/login"?<Link to="signup" className="signup-link btn">ثبت نام مشترک جدید</Link>:
          <Link to="login" className="login-link btn">ورود</Link>
          } 
          {<Outlet />}
        

          <Space />
        </div>
        <div className="login-signup__container--img"></div>
      </div>

      <Space />
      <Space />
      <Space />

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default LogInSignUp;
