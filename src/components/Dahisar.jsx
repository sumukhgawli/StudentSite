import React from "react";
import "../styles/dahisar.css";
import Enqbtn from "./ui elements/Enqbtn";
import prepImg from "../assets/images/mapfootimg.png";
import "../styles/dahisar.css";
import personIcon from "../assets/icon/personIcon.png";
import scholarshipIcon from "../assets/icon/scholarshipIcon.png";

const Dahisar = () => {
  return (
    <div className="dahisar-wrapper">
      <div className="dahisar-container">
        <div className="dahisar-heading">
          <div className="dahisar-heading-container">
            <p className="dahisar-heading-text">DAHISAR</p>
            <p className="dahisar-heading-subtext">UNIVERSAL HIGH SCHOOL</p>
          </div>
          <div className="hero-left-icon-container4">
            <div className="hero-left-icon-container4-1">
              <img src={personIcon} alt="personIcon" className="personIcon" />
              <div className="hero-left-header2-parent">
                <p className="hero-left-header2">ADDRESS</p>
                <p className="hero-left-header2-sub">
                  Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
                </p>
              </div>
            </div>
            <div className="hero-left-icon-container4-1">
              <img
                src={scholarshipIcon}
                alt="scholarshipIcon"
                className="scholarshipIcon"
              />
              <div className="hero-left-header2-parent">
                <p className="hero-left-header2">ADMISSIONS ENQUIRY</p>
                <div className="hero-left-header2-subdata">
                  <p className="hero-left-header2-sub">+91 224 194 7733</p>
                  <div className="vertical-line"></div>

                  <p className="hero-left-header2-sub">
                    admissions.dahisar@universal.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dahisar-btn-container">
            <Enqbtn inverted={true} />
          </div>
        </div>
        <img src={prepImg} alt="prepimg" className="prepimg-studymodes" />
      </div>
    </div>
  );
};

export default Dahisar;
