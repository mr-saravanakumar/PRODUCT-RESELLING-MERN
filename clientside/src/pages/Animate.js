import React from 'react'
import './Animate.css';
import img1 from '../images/2019-07-19T000000Z_248071301_RC16C7040F80_RTRMADP_3_RUSSIA-SMARTPHONE.webp';
const Animate = () => {
  return (
    <div id="animation">
    <div id="animate">
      <img src={img1}  className="ani"/>
      <img src={img1} className="ani"/>
      <img src={img1} className="ani"/>
      <img src={img1} className="ani"/>
      <img src={img1} className="ani"/>
      <img src={img1} className="ani"/>
    </div>
    </div>
  )
}

export default Animate
