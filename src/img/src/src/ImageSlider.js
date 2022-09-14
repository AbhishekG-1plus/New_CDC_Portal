import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './styles/imageSlider.css';
import { SliderData } from './data/sliderData';
import imgGirl from './data/Diro_IITJ.jpeg';

function ImageSlider() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  return (
    <div className="imageSlider">
      <Slider {...settings}>
        {SliderData.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;