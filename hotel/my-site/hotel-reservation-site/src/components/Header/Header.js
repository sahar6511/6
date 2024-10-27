import React from "react";
import "../../styles/main.scss";
import { Link,useLocation } from "react-router-dom";
import Divider from "../Divider/Divider";
// import logo from "../Logo/Logo.png";
import '../../styles/main.scss'

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">

    <div className="container-custom">
      <div>
        <nav>
          <ul className="nav-links">
            <li className={location.pathname === "/" && "active"}>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className={location.pathname === "/onlinereservation" && "active" }>
              <Link to="/onlinereservation">رزرو آنلاین </Link>
            </li>
            <li className="nav-links__gallery">
              <a className={location.pathname ==="/rooms" || location.pathname ==="/foods" && "active"}>گالری </a>
              <ul className="nav-links__gallery--submenu">
                <li >
                  <Link to="/rooms">اتاق ها</Link>
                  </li>

                <Divider></Divider>
                
                <li><a>امکانات هتل</a></li>

                 <Divider></Divider>

                <li> <Link to="/foods">غذاهای موجود</Link></li>
               
              </ul>
            </li>
            <li className={location.pathname === "/trakingreserve" && "active" }>
              <Link to="/trakingreserve"> پیگیری رزرو </Link>
              
            </li>
            <li className={location.pathname === "/managerpannel" && "active" }>
              <Link to="/managerpannel"> پنل مدیریت </Link>
              
            </li>
            {/* <li className="nav-links__managerpannel">
              <a> مدیریت</a>
              <ul className="nav-links__managerpannel--submenu">
                <li >
                <Link to="managerpannel/showallrooms">نمایش اتاق ها</Link>
                  </li>

                <Divider></Divider>
                
          

                <li> <Link to="showallcustomers">نمایش مشتریان</Link></li>
               
              </ul> */}
            {/* </li> */}
            <li className={location.pathname === "/loginsignup" && "active" }>
              <Link to="/loginsignup">ورود مشترکین </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="logo">
        <h3>هتل آریا</h3>
        <img src={logo} alt="logo" />
      </div> */}
    </div>
    </div>
  );
};

export default Header;
