import React from 'react'
import '../../styles/Hero.css'
import arrow from '../../assets/icon/arrow.png'
import arrow2 from '../../assets/icon/arrow2.png'


const Enqbtn = (props) => {
  return (
    <div className="get-info-btn2"style={{ backgroundColor: props.inverted ? 'yellow' : '#292967' }} >
    <p style={{color:props.inverted?"#292967":"white"}}>Enquire Now</p>
    {props.inverted?<img src={arrow2} alt="Arrow" className="arrow" />:<img src={arrow} alt="Arrow" className="arrow" />}
    
  </div>
  )
}

export default Enqbtn