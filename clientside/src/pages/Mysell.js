import React from 'react'
import { useEffect,useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2' ;
import './Mysell.css';
const Mysell = () => {
  const currentuser=window.localStorage.getItem("userID");
  console.log(currentuser);
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

   const deleteproduct =(id)=>{
      if(window.confirm("Are you sure you want to do that?"))
      {
        Swal.fire('Thank you','Product Deleted Successfully','success')
        Axios.delete(`http://localhost:3001/products/delete/${id}`);
        setProduct(product.filter((val)=>{
        return val._id !=id;
      }))
      }
       return;
}

  return (
    <div className='mysell-main'>
    <p>MY SELL</p>
    <p className='underline'></p>
      <div className='mysell'>
      {product.map((product)=>( 
        currentuser===product.id?
        <>
        {
        <div className="mysell-container">
        <div key={product._id}>
        <img src={product.img} alt="" className="mysell-img"/><br/>
        <button className="mysell-btn" onClick={()=>{deleteproduct(product._id)}}>DELETE</button>
        </div>
        <div className="mysell-bottom">
        <span>${product.price}</span><br/>
        <span>{product.loc}</span><br/>
        <span>{product.phno}</span>
        </div>
        </div>
        }
        </>
        :null
        ))}
    </div>
    </div>
  )
}

export default Mysell
