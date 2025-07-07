import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CenterSlider.css"; 
import imag1 from "../assets/IMG_7515.jpg";
import imag2 from "../assets/IMG_7374.jpg";
import imag3 from "../assets/IMG_7463.JPG";
import imag4 from "../assets/image4.jpg";
import imag5 from "../assets/image5.jpg";
import imag6 from "../assets/image6.jpg";

function CenterSlider({isMobile}) {
  const settings = {
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
  };

  return (
    <div className="wrapper">
      <Slider {...settings} className="center-slider">
        <div>
          <img
            src={imag1}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag2}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag6}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag1}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag2}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag3}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag4}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={imag5}
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default CenterSlider;
