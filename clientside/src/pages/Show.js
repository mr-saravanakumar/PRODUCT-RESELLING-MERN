import React, { useState } from 'react'
import './Show.css';
import imgs from '../images/91684259.webp';
const Show = () => {
  const[slide,setSlide]=useState(false);
  return (
    <div>
    <div className="show">
      <h3 onClick={()=>{
        setSlide((prev)=>!prev)
      }}>YOUR SELLINGS</h3>
      <div className="show-grid" id={slide?"active":"deactive"}>
       <div className="style-con">
        <img src={imgs} alt=""/>
        <div className="sho-det">
        <span>MODEL</span>
        <span>PRICE</span>
        <span>PHNO</span>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Show
