import React from "react";
import "../styles/aboutus.css";
import about2 from "../assets/images/about2.png";
import about1 from "../assets/images/about1.png";
import Enqbtn from "../components/ui elements/Enqbtn";

const Aboutus = () => {
  return (
    <>
      <div className="aboutus-wrapper">
        <div className="aboutus-container">
          <img src={about1} alt="about 1" className="aboutus-img1" />
          <div className="aboutus-text">
            <p className="aboutus-text1">ABOUT</p>
            <p className="aboutus-text2">
              {"Universal High School".toUpperCase()}
            </p>
            <p className="aboutus-text3">
              Universal High School, Dahisar equips every student with the right
              attitude and skills to help them find their unique place in the
              world by providing a wholesome and ever-evolving learning
              environment. So that they can fearlessly pursue a better tomorrow.
              In line with this mission, Universal is launching the best IIT
              JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE
              IIT & Medical is India’s best IIT JEE/ NEET test prep program and
              has helped more than xxx+ students prepare for IIT JEE and xxx
              students in NEET for the last few years.
            </p>
          </div>
          <div className="aboutus-footter">
            <Enqbtn />
          </div>
          <img src={about1} alt="about 1" className="aboutus-for-mobile" />
        </div>
      </div>
      <div className="aboutus-wrapper2">
        <div className="aboutus-container2">
          <img src={about2} alt="about 1" className="aboutus-img12" />
          <div className="aboutus-text222">
            <p className="aboutus-text12">ABOUT</p>
            <p className="aboutus-text22">{"IIT PACE".toUpperCase()}</p>
            <p className="aboutus-text32">
              Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
              Medical has embarked on a remarkable journey, transforming the
              lives of students and shaping the landscape of competitive exam
              coaching. It all began in 1999, with a humble vision to bridge the
              gap between aspirations and achievements. PACE IIT & Medical has
              become synonymous with success in competitive exams and helped xxx
              students to crack IIT and xxx students to crack NEET/ Medical
              exams.
            </p>
          </div>
          <div className="aboutus-footter2">
            <Enqbtn />
          </div>
          <img src={about2} alt="about 1" className="aboutus-for-mobile" />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
