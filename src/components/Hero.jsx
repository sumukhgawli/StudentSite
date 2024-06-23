import React from "react";
import { useState } from "react";
import paceLogo from "../assets/images/pace-logo.png";
import avatarPng from "../assets/images/avatar.png";
import "../styles/Hero.css";
import personIcon from "../assets/icon/personIcon.png";
import scholarshipIcon from "../assets/icon/scholarshipIcon.png";
import Enqbtn from "./ui elements/Enqbtn";
import Approch from "./Approch";

const Hero = () => {
  const [formData, setFormData] = useState({
    academicYear: "2024-2026",
    relationship: "",
    childFirstName: "",
    childLastName: "",
    parentFirstName: "",
    parentLastName: "",
    course: "",
    mobileNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-left-icon-container">
              <p className="hero-left-headerpre">KICKSTART YOUR</p>
              <p className="hero-left-header1">IIT JEE/NEET Test Prep,</p>
              <div className="hero-left-icon-container2">
                <p className="hero-left-header1-Subtitle">Powered by</p>
                <img src={paceLogo} alt="Icon" className="hero-icon" />
              </div>
              <div className="hero-left-icon-container3">
                <p className="hero-left-header1-Subtitle3">ADMISSIONS OPEN</p>
                <Enqbtn inverted={false} />
              </div>
              <div className="hero-left-icon-container4">
                <div className="hero-left-icon-container4-1">
                  <img
                    src={personIcon}
                    alt="personIcon"
                    className="personIcon"
                  />
                  <div className="hero-left-header2-parent">
                    <p className="hero-left-header2">BATCH STARTS FROM</p>
                    <p className="hero-left-header2">3rd April '24</p>
                  </div>
                </div>
                <div className="hero-left-icon-container4-1">
                  <img
                    src={scholarshipIcon}
                    alt="scholarshipIcon"
                    className="scholarshipIcon"
                  />
                  <div className="hero-left-header2-parent">
                    <p className="hero-left-header2">SCHOLARSHIP TEST</p>
                    <p className="hero-left-header2">23rd March '24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-middle">
            <img src={avatarPng} alt="Avatar" className="hero-avatar" />
          </div>
          <div className="hero-right">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h2 className="form-heading">Enquire Now!</h2>

              <div className="form-row academic-year">
                <label>Academic Year:</label>
                <select
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                >
                  <option value="2024-2026">2024-2026</option>
                  <option value="2025-2027">2025-2027</option>
                  <option value="2026-2028">2026-2028</option>
                </select>
              </div>

              <div className="form-row relationship">
                <label>Your relationship with child:</label>
                <div className="relationship-buttons">
                  <button
                    type="button"
                    className={
                      formData.relationship === "Father" ? "active" : ""
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        relationship: "Father",
                      }))
                    }
                  >
                    Father
                  </button>
                  <button
                    type="button"
                    className={
                      formData.relationship === "Mother" ? "active" : ""
                    }
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        relationship: "Mother",
                      }))
                    }
                  >
                    Mother
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-column">
                  <label className="input-label">Child's First Name:</label>
                  <input
                    type="text"
                    name="childFirstName"
                    placeholder="Type here"
                    value={formData.childFirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-column">
                  <label>Child's Last Name:</label>
                  <input
                    type="text"
                    name="childLastName"
                    placeholder="Type here"
                    value={formData.childLastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-column">
                  <label>Your First Name:</label>
                  <input
                    type="text"
                    name="parentFirstName"
                    placeholder="Type here"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-column">
                  <label>Your Last Name:</label>
                  <input
                    type="text"
                    name="parentLastName"
                    placeholder="Type here"
                    value={formData.parentLastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label>Course applying for:</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select a course</option>
                  <option value="JEE">JEE</option>
                  <option value="NEET">NEET</option>
                  <option value="Boards">Boards</option>
                </select>
              </div>

              <div className="form-row">
                <label>Mobile Number:</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter phone number with country code"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-button">
                Enquire Now
              </button>
            </form>
          </div>
        </div>
        <Approch />
      </section>
    </>
  );
};

export default Hero;
