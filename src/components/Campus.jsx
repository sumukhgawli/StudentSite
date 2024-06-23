import React from "react";
import Enqbtn from "../components/ui elements/Enqbtn";
import "../styles/campus.css";
import Slider from "react-slick";
import schoolCarousel from "../assets/images/carousel-school.png";

const Campus = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="campus-wrapper">
      <div className="campus-container">
        <div className="campus-heading">
          <div className="campus-heading-container">
            <p className="campus-heading-text">OUR</p>
            <p className="campus-heading-subtext">CAMPUSES</p>
          </div>
          <div className="campus-btn-container">
            <Enqbtn />
          </div>
        </div>
        <Slider className="carousel-sucesstor-images" {...settings}>
          <img src={schoolCarousel} alt="Coronavirus" />
          <img src={schoolCarousel} alt="Coronavirus" />
          <img src={schoolCarousel} alt="Coronavirus" />
          {/* <div className="carousel-item">
            <img src={cor2img1} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={cor2img1} alt="Coronavirus" />
          </div>
          <div className="carousel-item">
            <img src={cor2img1} alt="Coronavirus" />
          </div> */}
        </Slider>
      </div>
      <div className="campus-bgimg">
      </div>
    </div>
  );
};

export default Campus;
