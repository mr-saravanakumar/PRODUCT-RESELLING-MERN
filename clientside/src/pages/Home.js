import React, { useState } from "react";
import { FiPhoneIncoming } from "react-icons/fi";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandVscode } from "react-icons/tb";
import {SiJavascript,SiMongodb } from "react-icons/si";
import { FaReact,FaNodeJs } from "react-icons/fa";
import {DiCss3Full } from "react-icons/di";
import Product from '../pages/Product.js'
import { useNavigate } from "react-router";
import land from '../images/istockphoto-136232360-170667a.jpg';
import laptop from '../images/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg';
import logo from '../images/2483952.png';
import fur from '../images/spacejoy-RqO6kwm4tZY-unsplash.jpg';
import bike from '../images/489203.jpg';
import car from '../images/33115.jpg';
import phone from '../images/bagus-hernawan-A6JxK37IlPo-unsplash.jpg';
import Admin from '../pages/Admin.js'
import './Home.css';
function Home() {
  const [admin,setAdmin]=useState("");
  const navigate=useNavigate();

  const Admin=()=>{
     if(admin==="ADMIN")
     {
        navigate("/Admin");
     }
     else{
        alert("Admin password incorrect");
     }
  }
  return (
    <div className="home">
     <div id="main-div">
     <img src={logo} alt="" className="image-home"/>
     <div className="contents">
     <h1>Best Way </h1>
     <h3>To Look Stylish On a</h3>
     <h2> Budget Is To Try Second Hand</h2>
     </div>
     </div>
     <div className="header-all">
     <h2>AVAILABLE</h2>
     <p className="underline-header"></p>
     </div>
     <div class="container">
     <div class="gallery">
         <figure class="gallery__item gallery__item--1">
             <img src={bike} alt="" class="gallery__img"/>
         </figure>
         <figure class="gallery__item gallery__item--2">
             <img src={car} alt="" class="gallery__img"/>
         </figure>
         <figure class="gallery__item gallery__item--3">
             <img src={phone} alt="" class="gallery__img"/>
         </figure>
         <figure class="gallery__item gallery__item--4">
             <img src={laptop} alt="" class="gallery__img"/>
         </figure>
         <figure class="gallery__item gallery__item--5">
             <img src={land} alt="" class="gallery__img"/>
         </figure>
         <figure class="gallery__item gallery__item--6">
             <img src={fur} alt="" class="gallery__img"/>
         </figure>
     </div>
 </div>
 <button className="button-2" onClick={()=>navigate('/Product')}>BUY PRODUCTS</button>
 <div id="admin"> 
 <h6>ADMIN</h6>
 <input type="password" className="admin-pass" onChange={(e)=>setAdmin(e.target.value)}/><br/>
 <button className="admin-btn" onClick={()=>Admin()}>GO</button> 
 </div>
 <div className="footer">
 <div className="footer-flex">
 <div className="term-1">
 <p>Terms and Conditions</p>
 <p><span>The Reseller shall be responsible for the sales and promotions  of the products. Furthermore, the Reseller shall provide the Company with the details about the promotions, sale pricing, customer details and other necessary information required by the Company in a timely manner.The Reseller shall be responsible for the sales and promotions of the products. Furthermore, the Reseller shall provide the Company with the details about the promotions, sale pricing.</span></p>
 </div>
 <div className="term-2">
 <p>Contact</p>
 <p><span><FiPhoneIncoming style={{backgroundColor:"white",padding:"5px"}}/>123-456-789</span></p>
 <p>About</p>
 <p><span>Buy and sell second hand Other Household Items in India. Product Reselling provides the best Free Online Classified Advertising in India.</span></p>
 </div>
 <div className="term-3">
 <p>Developers</p><br/><br/>
 <p>Saravanakumar (20BCS049)</p>
 <p>Siva Muneeswaran (20BCS053)</p>
 </div>
 </div>
 <div className="icons-footer">
 <p><span style={{marginLeft:"30px",marginTop:"-80px",color:"white"}}>TOOLS</span></p><br/>
 <p style={{marginLeft:"-700px",marginTop:"-20px"}}>
 <TbBrandVscode/>
 <AiFillHtml5/>
 <DiCss3Full/>
 <SiJavascript/>
 <FaReact/>
 <FaNodeJs/>
 <SiMongodb/>
 </p>
 </div>
 </div>
 </div>
  );
}

export default Home;