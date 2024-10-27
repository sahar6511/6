import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Divider from "../Divider/Divider";
import '../../styles/main.scss'
const SlideShow = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (


    <div className="slider-container">
      
      <Slider {...settings}>
      <div>
 
        <img src={slide1} alt={slide1}/>
      </div>
      <div>
      <img src={slide2} alt={slide2}/>

      </div>
     
    </Slider>
    </div>
  );
};

export default SlideShow;
