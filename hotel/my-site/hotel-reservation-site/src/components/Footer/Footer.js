import React from "react";
import Contact from "../Contact/Contact";
import OtherLinks from "../OtherLinks/OtherLinks";
import Services from "../Services/Services";
import CopyRight from "../CopyRight/CopyRight";
import "../../styles/main.scss";
import BackToTop from "../ScrollButton/ScrollButton ";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="container-custom">
        <div className="footer-contact">
          <Contact></Contact>
        </div>
        <div className="footer-services">
          <Services></Services>
        </div>
        <div className="footer-otherlinks">
          <OtherLinks></OtherLinks>
        </div>
        <div className="footer-info">
          <h2>هتل آریا</h2>
          <p>
            هتل بزرگ پنج ستاره آریا با الهام از طرح شکوهمند تخت جمشید در زمینی
            با وسعت دوازده هکتار در شمال شرق جزیره زیبای کیش نزدیک به ساحل شرقی
            در سال 1382 توسط بهترین معماران ایرانی ساخته شده است .
          </p>
        </div>
      </footer>

      <div className="copyright">
    
        <CopyRight></CopyRight>
      </div>
    </div>
     
  );
};

export default Footer;
