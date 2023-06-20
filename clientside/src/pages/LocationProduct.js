import React,{useState,useEffect}from 'react'
import Axios from 'axios'
import Product from './Product.js'
import { Link } from 'react-router-dom';
import './LocationProduct.css';
import { MdWrongLocation } from "react-icons/md";
const LocationProduct = () => {
  const[product,setProduct]=useState([]);
  const[loc,setloc]=useState("");
  const currentuser=window.localStorage.getItem("userID");

  useEffect(() => {
    Axios.get("http://localhost:3001/products")
     .then((response) => {
      console.log(response.data);
      setProduct(response.data);
     })
     .catch(() => {
      console.log("error");
     });
   },[]);

  return (
    <div>
    <div className="location-search" >
      <input type="text" className="location"onChange={(e)=>setloc(e.target.value)}/>
      <MdWrongLocation/>
    </div>
    <div className="location-search-grid">
    {product.filter((val)=>{
        if(loc==""){
          return val;
        }
        else if(val.loc.toLowerCase().includes(loc.toLowerCase())){
          return val;
        }
        else if(val.length<0){
           return<p>no items found</p>
        }
      }).map((product)=>( 
      currentuser!==product.id?
      <>
      <div className="product-container">
      <div key={product._id}>
      <img src={product.img} alt="" className="img"/>
      </div>
      <div className="bottom">
      <span>{product.loc}</span>
      <Link to={`/Product/${product._id}`}>
      <button className="btn-icon">
      see more....
      </button>
      </Link>
      </div>
      </div>
      </>
      :null
    ))}
    </div>
    </div>
  )
}

export default LocationProduct;
