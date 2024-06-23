import React from "react";
import "../styles/studymodes.css";
import Enqbtn from "./ui elements/Enqbtn";
import prepImg from "../assets/images/prepimg.png";
import yellow from "../assets/images/Group_1098.png";

const Studymodes = () => {
  const arr = [
    "In School Preparation",
    "Revision",
    "Mock Tests",
    "Feedback",
    "Study Material",
    "Counselling",
    "Career Guidance",
  ];
  return (
    <>
      <div className="studymodes-wrapper">
        <div className="studymodes-container">
          <div className="studymodes-option">
            {arr.map((item, index) => (
              <p className="studymodes-option-heading">{item}</p>
            ))}
          </div>
          <div className="studymodes-footter-desc">
            <div
              className="text-container-studymodes
          "
            >
              <p className="studymodes-footter-desc-text">
                In School Preparation
              </p>
              <p className="studymodes-footter-desc-subtext">
                Lectures will happen on campus during school hours with our
                esteemed faculty powered by PACE, so students don’t need to go
                anywhere for extra coaching or tuition classes.
              </p>
              <div className="studymodes-footter-btn">
                <Enqbtn />
              </div>
            </div>
            <img src={prepImg} alt="prepimg" className="prepimg-studymodes" />
          </div>
        </div>
        <img src={yellow} alt="yellow" className="yellow-studymodes" />
      </div>
    </>
  );
};

export default Studymodes;
