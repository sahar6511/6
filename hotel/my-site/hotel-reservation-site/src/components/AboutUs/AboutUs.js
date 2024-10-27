import React from "react";
import "../../styles/main.scss";
import Title from "../Title/Title";
import Box from "../Box/Box";
import StaffsIcon from "../Icons/StaffsIcon";
import HotelIcon from "../Icons/HotelIcon";
import UsersIcon from "../Icons/UsersIcon";
import Button from "../Button/Button";
import img1 from "../../images/aboutus-img1.jpg";
import img2 from "../../images/aboutus-img2.jpg";
import img3 from "../../images/aboutus-img3.jpg";
import img4 from "../../images/aboutus-img4.jpg";
const AboutUs = () => {
  return (
    <div className="about-us container-custom">
      <div className="about-us__info">
        <h2>
          <Title title1="هتل بزرگ" title2="آریا"></Title>
        </h2>
        <h2>(معرفی هتل)</h2>
        <p>
          هتل بزرگ پنج ستاره آریا با الهام از طرح شکوهمند تخت جمشید در زمینی با
          وسعت دوازده هکتار در شمال شرق جزیره زیبای کیش نزدیک به ساحل شرقی در
          سال 1382 توسط بهترین معماران ایرانی ساخته شده است. این هتل موزه دارای
          184 اتاق، سوییت و کاباناهای مجلل با چشم انداز دریا و باغ است. ویژگی
          یکتای هتل بزرگ آریا به عنوان یکی از بزرگترین و زیباترین هتلهای دنیا
          این است که تمدن و فرهنگ یک ملت بزرگ و کهن را به رخ جهانیان می کشاند و
          یگانه نماد تاریخی کشور است که با معماری بی همتای جهانی خود شکوه سلطنت
          گسترده فرهنگ و تمدن ایرانیان عزیز را هویدا نموده و دلیل قاطعی بر بام
          خلیج همیشه فارس است
        </p>
        <div className="box-container">
          <div className="box-container__div">
            <Box title="Rooms" icon={HotelIcon} number="1234"></Box>
          </div>
          <div className="box-container__div">
            <Box title="Staffs" icon={StaffsIcon} number="1200"></Box>
          </div>
          <div className="box-container__div">
            <Box title="Clients" icon={UsersIcon} number="1238"></Box>
          </div>
        </div>
        <div>
          <Button> بیشتر</Button>
        </div>
      </div>
      <div className="about-us__img">
        <div className="about-us__img--first">
          <div>
            <img
              src={img1}
              alt="img1"
              className="w-100 zoomIn"
              style={{ animationDuration: "1s" }}
            />
          </div>
          <div>
            <img
              src={img2}
              alt="img2"
              className="w-75 zoomIn"
              style={{ animationDuration: ".5s" }}
            />
          </div>
        </div>
        <div className="about-us__img--second">
          <div>
            <img
              src={img4}
              alt="img4"
              className="w-75 zoomIn"
              style={{ animationDuration: "2s" }}
            />
          </div>
          <div>
            <img
              src={img3}
              alt="img3"
              className="w-50 zoomIn"
              style={{ animationDuration: "1.5s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
