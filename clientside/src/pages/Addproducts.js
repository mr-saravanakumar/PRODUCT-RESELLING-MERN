import React,{useState} from "react";
import {useCookies} from "react-cookie";
import './Addproducts.css';
import  Axios  from "axios";
import Img from "../images/3627569.jpg";
import Swal from 'sweetalert2' ;
import {motion} from "framer-motion";
export default function Addproducts(){
 const id=window.localStorage.getItem("userID");
 const[cat,setCat] = useState('');
 const[price,setPrice] = useState(0);
 const[phno,setPhno] = useState(0);
 const[model,setModel]=useState('');
 const[des,setDes]=useState('');
 const[img,setImg]=useState('');
 const[add,setAdd]=useState('');
 const[loc,setLoc]=useState('');
 const details=async(e)=> {
  if(img&&cat&&model&&price&&phno&&des){
    if(phno.length==10){
  e.preventDefault();
  await Axios.post("http://localhost:3001/products",{
    img,
    cat,
    model,
    price,
    phno,
    des,
    loc,
    id,
  }).then((response)=>{
    if(response.data.message){
    Swal.fire('Thank you','Product added Successfully','success')
    setAdd(response.data.message)}
  }).catch(()=>{
     setAdd("Failed to add product");
  }); 
  }
  else{
    setAdd("phno must be 10 digit");
  }
}
else{
  setAdd("ALL FIELDS ARE REQUIRED");
  console.log("err");
}
 }

    return(
        <motion.div className="main" 
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transistion:{duration:2}}}
        >
        <div style={{display:"flex"}}>
        <div className="contain">
        <div className="head">
        <p>ADD PRODUCTS</p>
        <p className="underline"></p>
        </div>
        <div className="right-con">
        <div className="left">
        <input type="text" placeholder="Paste the image Url...."onChange={(e)=>setImg(e.target.value)} style={{borderBottom: "1px solid orangered"}}/><br/><br/>
        <img src={img} alt="" className="pro-img"/><br/><br/>
        <input type="text" placeholder="Enter the Location..." onChange={(e)=>setLoc(e.target.value)} style={{borderBottom: "1px solid orangered"}}/><br/><br/>
        <span>DESCRIPTION</span><br/>
        <textarea cols={30} rows={8} placeholder="Type something about the products" onChange={(e)=>setDes(e.target.value)}>
        </textarea>
        </div>
        <div className="right">
        <select onChange={(e)=>setCat(e.target.value)}>
        <option>SELECT CATEGORY</option>
        <option value="mobile">MOBILE</option>
        <option value="car">CAR</option>
        <option value="bike">BIKES</option>
        <option value="properties">PROPERTIES</option>
        <option value="electronics">ELECTRONICS</option>
        <option value="furniture">FURNITURE</option>
        <option value="others">OTHERS</option>
        </select><br/><br/>
        <span>MODEL</span><br/><input type="text" onChange={(e)=>setModel(e.target.value)} style={{borderBottom: "1px solid orangered"}}/><br/><br/>
        <span>PRICE</span><br/><input type="number" maxLength={6}  className="price" onChange={(e)=>setPrice(e.target.value)} style={{borderBottom: "1px solid orangered"}}/><br/><br/>
        <span>PHONENO</span><br/><input type="tel" maxLength={10} onChange={(e)=>setPhno(e.target.value)} style={{borderBottom: "1px solid orangered"}}/><br/><br/>
        <span id="add-title">{add}</span>
        <button onClick={details} id="btn-add">ADD</button>
        </div>
        </div>
        </div>
        </div>
        </motion.div>
    )
}