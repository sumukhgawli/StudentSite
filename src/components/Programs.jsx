import React from "react";
import "../styles/program.css";
import Enqbtn from "./ui elements/Enqbtn";

const Programs = () => {
  return (
    <div className="programs-wrapper">
      <div className="programs-container">
        <p className="programs-heading">OUR</p>
        <p className="programs-subheading">PROGRAMS</p>
        <div className="programs-options">
          {[1, 2].map((item, index) => (
            <div className="programs-option" key={index}>
              <p className="programs-option-heading">ISC + NEET</p>
              <p className="programs-option-subheading1">
                NEET is a national-level examination conducted by NTA. The
                candidates who want to get admission to medical courses must
                qualify for the entrance test. NEET questions only come from
                Physics, Chemistry, Zoology, and Botany.
              </p>
              <p className="programs-option-subheading2">
                Powered by IITPACE, Universal High School Dahisar will prepare
                students for both ISC and NEET (and other Medical exams) within
                the comfort of their school premises. Our coursework is
                specially created for the ISC curriculum to create a synergy
                between Board and NEET exam preparations during school hours.
              </p>
              <div className="programs-footter">
                <Enqbtn />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
