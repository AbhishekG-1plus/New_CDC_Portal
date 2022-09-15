import React from "react";
import Navbar from "../Navbar/Navbar";
import bg1 from "../../img/bg1.png";
import About from "../About/About";
import "./Home.css";
import Gallery from "../Gallary/Gallery.jsx";
import Director from "../Director/Director";
import CardSlider from "../Slider/Slider";
import Testimonals from "../Testimonals/Testimonals";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="app_wrapper">
        <div className="front-background-img"></div>
        <div className="bottom-components">
          <About />
           <Director />
           {/* <Gallery /> */}
           <CardSlider/>
           <Testimonals/>
        </div>
      </div>
    </>
  );
};

export default Home;
