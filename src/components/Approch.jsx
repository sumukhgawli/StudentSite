import React from "react";
import worldMap from "../assets/images/world-map.png";
import "../styles/approch.css";
import arrow from "../assets/icon/arrow.png";
import feature1Icon from "../assets/icon/feature1Icon.png";
import feature2Icon from "../assets/icon/feature2Icon.png";
import feature3Icon from "../assets/icon/feature3Icon.png";
import feature4Icon from "../assets/icon/feature4Icon.png";
import feature5Icon from "../assets/icon/feature5Icon.png";

import Enqbtn from "./ui elements/Enqbtn";

const features = [
  {
    icon: feature2Icon,
    text: "Classes are conducted during school hours on school premises",
  },
  {
    icon: feature1Icon,
    text: "ISC curriculum is covered fully with competitive exams",
  },
  {
    icon: feature3Icon,
    text: "Saves precious time for self-study",
  },
  {
    icon: feature4Icon,
    text: "Experienced faculty powered by PACE IIT & MEDICAL",
  },
  {
    icon: feature5Icon,
    text: "Smaller batch size for personalized attention",
  },
];

const Approch = () => {
  return (
    <div className="approch-wrapper">
      <div className="approch-container">
        <img src={arrow} alt="arrow" className="arrow-approach" />
        <img src={worldMap} alt="world map" className="approch-map" />
        <div className="approch-header-container">
          <p className="approch-header1">OUR</p>
          <p className="approch-header2">{"Learning Approach".toUpperCase()}</p>
        </div>
        <div className="feature-boxes-container">
          {features.map((feature, index) => {
            const isLast = index === features.length - 1;
            return (
              <div
                style={{
                  borderRight: isLast ? "none" : "1px dashed #fff",
                }}
                className="feature-box"
              >
                <img
                  src={feature.icon}
                  alt="feature 1"
                  className="feature-icon"
                />
                <div className="feature-text">{feature.text}</div>
              </div>
            );
          })}
        </div>
        <div className="approch-footer">
        <Enqbtn inverted={true} />

        </div>
      </div>
    </div>
  );
};

export default Approch;
