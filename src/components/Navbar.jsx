import React from 'react'
import paceLogo from '../assets/images/pace-logo.png'
import uhdLogo from '../assets/images/uhd-logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={uhdLogo} alt="Logo 1" className="navbar-logo" />
          <div className="vertical-line"></div>
          <img src={paceLogo} alt="Logo 2" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <div className="get-info-btn">Enquire Now</div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar