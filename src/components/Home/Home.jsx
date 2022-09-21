import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import "./Home.css";
import Gallery from "../Gallary/Gallery.jsx";
import Director from "../Director/Director";
import CardSlider from "../Slider/Slider";
import Testimonals from "../Testimonals/Testimonals";
import News from "../News/News";
import Home1 from './Home1'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="app_wrapper">
      <Home1/>
        <div className="bottom-components">
         
          <About />
          <News/>
          <Director />
           <Gallery />
          <CardSlider/>
          <Testimonals/>
          
        </div>
      </div>
    </>
  );
};

export default Home;
