import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
const Login = () => {
  const[logusername,setLogUsername]=useState("");
  const[logpassword,setLogPassword]=useState("");
  const[logrestatus,setLogRestatus]=useState("");
  const login=() => { Axios.post("http://localhost:3001/login",{
      username:logusername,password:logpassword
    }).then((response)=>{
      if(response.data.message){
        setLogRestatus(response.data.message);
      }
      else{
        setLogRestatus(response.data)
      }
     console.log(response.data)
    }).catch(()=>{
          alert("registers failed");
    })
}
   
  return (
   
  )
}

export default Login
