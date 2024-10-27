import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";
import AboutUs from "../AboutUs/AboutUs";
import SpecialRooms from "../SpecialRooms/SpecialRooms";
import ScrollButton from "../ScrollButton/ScrollButton ";
import SlideShow from "../SlideShow/SlideShow";

const Home = () => {
  return (
    <div>
      <div className="main-menu">
        <TopMenu />
        <Divider />
        <Header />
      </div>
      <SlideShow>

      </SlideShow>
      {/* <Slider/> */}
      {/* </div> */}

      <AboutUs />
      <SpecialRooms />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Home;
