import React, { useState } from 'react'
import {useCookies} from "react-cookie";
import Axios from 'axios';
import { BsFillPersonFill,BsFillUnlockFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './Logsing.css';
import Addproducts from './Addproducts';
const Rs = () => {
  const[cookies,setCookies]=useCookies(["access_token"]);
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[restatus,setRestatus]=useState("");
  const[logstatus,setLogStatus]=useState("");

  const[tog,setTog]=useState(false);
    const register=async(e)=>{
      if(username&&password){
      e.preventDefault();
      await Axios.post("http://localhost:3001/auth/register",{
        username, 
        password,  
     }).then((response)=>{
      if(response.data.message){
        setRestatus(response.data.message);
      }else{
        setRestatus(response.data[0])
      }
    });
  }
  else{
    setRestatus("ENTER THE INPUTS");
  }
  }
 const navigate = useNavigate()
  const login=async(e)=>{
    if(username&&password){
    e.preventDefault();
      await Axios.post("http://localhost:3001/auth/login",{
        username, 
        password,  
    }).then((response) => {
    if(response.data.message){
       setLogStatus(response.data.message) 
    }else if(response.data[0]){
      setLogStatus(response.data[0]);
    }
    else{
    navigate("/Product")
    setCookies("access_token",response.data.token);
    window.localStorage.setItem("userID",response.data.userID);
  }
  })
}
else{setLogStatus("ENTER THE INPUTS")}
  }

  return (
    <div className="body">
    {tog?
      <div className="login">
      <span className="title">SIGNIN</span>
      <BsFillPersonFill className='upper'/>
      <input type="text" id="incon"onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Uername"/><br/>
      <BsFillUnlockFill className='upper'/>
      <input type="password" id="incon"onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/><br/>
      <p><span>{logstatus}</span></p>
      <button onClick={login}>SIGNIN</button>
      <span style={{color:"blue",marginLeft:"140px",cursor:"pointer"}} onClick={()=>setTog(false)}>SignUp?</span>
      </div>:
      <div className="Register">
      <span className="title">SIGNUP</span>
      <span id="underline"></span>
      <BsFillPersonFill className='upper'/>
      <input type="text" id="incon"onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Uername"/><br/>
      <BsFillUnlockFill className='upper'/>
      <input type="password" id="incon"onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
      <p><span>{restatus}</span></p>
      <button onClick={register}>REGISTER</button>
      <span style={{color:"blue",marginLeft:"140px",cursor:"pointer"}} onClick={()=>setTog(true)}>Login?</span>
      </div>}
      </div>
  )
}

export default Rs;
