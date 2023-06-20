import axios from 'axios';
import React,{useEffect, useState}from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import Product from './Product.js';
import {BsFillCartCheckFill ,BsArrowLeftSquareFill,BsCurrencyDollar,BsFillTelephoneInboundFill} from "react-icons/bs";
import {BiCategory} from "react-icons/bi";
import {VscSettingsGear,VscSymbolString} from "react-icons/vsc";
import { MdWrongLocation } from "react-icons/md";
import './SingleProduct.css';
const deleteProduct=()=>{
  console.log("product deleted");
}
const SingleProduct = () => {

const navigate = useNavigate()
const[spro,setSpro]=useState(null);

const {id} =useParams();

useEffect(()=>{
  if(!id){
    return ;
  }
  axios.get(`http://localhost:3001/products/${id}`).then(response=>{
  setSpro(response.data);
  console.log(response.data);
  })
},[id]);

if(!spro) return '';

  return (
    <div id="single">
    <div>
    <h1>PRODUCT VIEW</h1>
    </div>
    <div className='main-container'>
     <div className="left-img">
     <img src={spro.img} alt={spro._id} id="img-left"/>
     </div>
     <div className="right-container">
     <h5>DETAILS</h5><br/>
     <p><BiCategory/>{spro.cat}</p><br/>
     <p><BsCurrencyDollar />{spro.price}</p><br/>
     <p><VscSettingsGear/>{spro.model}</p><br/>
     <p><BsFillTelephoneInboundFill/>{spro.phno}</p><br/>
     <p><MdWrongLocation/>{spro.loc}</p><br/>
     </div>
     <div className="desc">
     <h5>DESCRIPTION</h5><br/>
     <p>{spro.des}</p>
     </div>
     </div>
     <div style={{display: 'flex'}}>
     <div className="desc-btn">
     <button className="back-btn"style={{display: 'flex',
     backgroundColor:"#2ed573",
     border:"2px solid #2f3542",
     cursor:"pointer",
     borderRadius:"10px",
    }} onClick={() =>navigate("/Product")}><BsArrowLeftSquareFill id="icon-btn"/><span className="icon-btn-two">BACK</span></button>
     </div>
     </div>
    </div>
  )
}

export default SingleProduct

