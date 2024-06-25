import React from "react";
import Enqbtn from "./ui elements/Enqbtn";
import "../styles/sucessstor.css";
import corimg1 from "../assets/images/corimg1.png";
import corimg2 from "../assets/images/corimg2.png";
import corimg3 from "../assets/images/corimg3.png";
import Slider from "react-slick";

const Sucessstor = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="successstor-wrapper">
      <div className="successstor-container">
        <div className="successstor-heading">
          <div className="successstor-heading-container">
            <p className="successstor-heading-text">SUCCESS</p>
            <p className="successstor-heading-subtext">Stories</p>
          </div>
          <div className="successstor-btn-container">
            <Enqbtn />
          </div>
        </div>
        <Slider className="carousel-sucesstor-images" {...settings}>
          <div className="carousel-item">
            <img src={corimg1} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg2} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg3} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg2} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg3} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg2} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg3} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg3} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={corimg2} alt="Coronavirus" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sucessstor;
