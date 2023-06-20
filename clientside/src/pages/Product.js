import React from 'react'
import './Products.css';
import { AiOutlineBars,AiOutlineClose} from "react-icons/ai";
import { useState ,useEffect} from 'react'
import {motion} from "framer-motion";
import { BsFillCartCheckFill} from "react-icons/bs";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import LocationProduct from './LocationProduct.js';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const currentuser=window.localStorage.getItem("userID");
  const navigate=useNavigate();
  const[btn,setBtn] = useState(true);
  const[search,setSearch] =useState("");
  const[searchLocation,setSearchLocation] =useState("");
   const[nav,setNav]=useState(true);
   const[product,setProduct]=useState([]);
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

   const [active, setActive] = useState(false);
   const handleClick = () => {
     setActive(!active);
   };

  return (
    <motion.div className="product-nav"
    initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transistion:{duration:2}}}
    >
    <div className="con">
     <AiOutlineBars id="icon" 
     onClick={()=>{
      setNav((prev)=>!prev)
     }}/>
    </div>
    <div className="navpro" id={nav?"navactive":"navdeactive"}>
    <ol>
    <AiOutlineClose id="cancel"
    onClick={()=>{
      setNav((prev)=>!prev)
     }}
    />
    <li><button activeClassName="active-btn" className="button" onClick={(e)=>setSearch("")}><span>ALL</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("bike")}><span>BIKE</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("car")}><span>CAR</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("mobile")}><span>MOBILE</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("electronics")}><span>ELECTRONICS</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("properties")}><span>PROPERTIES</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("furniture")}><span>FURNITURE</span></button></li>
    <li><button className="button" onClick={(e)=>setSearch("others")}><span>OTHERS</span></button></li>
    </ol>
    </div>
    <div className="main-container">
      {product.filter((val)=>{
        if(search==""){
          return val;
        }
        else if(val.cat.toLowerCase().includes(search.toLowerCase())){
          return val;
        }
        else if(val.length<0){
           return<p style={{margin:"300px"}}>no items found</p>
        }
      }).map((product)=>( 
      currentuser!==product.id?
      <>
      <div className="product-container">
      <div key={product._id}>
      <img src={product.img} alt="" className="img"/>
      </div>
      <div className="bottom">
      <span>${product.price}</span>
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
    </motion.div>

  )
}

export default Product;
