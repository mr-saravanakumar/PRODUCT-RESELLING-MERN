import React,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {NavLink} from "react-router-dom";
import Swal from 'sweetalert2' ;
import Admin from "./pages/Admin";
const Navbar=()=>{

  const[cookies,setCookies]=useCookies(["access_token"]);
   const navigate=useNavigate();

  const logout=()=>{
    if(window.confirm("Are you sure you want to do logout"))
    {
      Swal.fire('Thank you','Logout Successfully','success')
      setCookies("access_token","");
      window.localStorage.removeItem("userID");
      navigate("/");
    }
    
  }
    return(
      <div style={{display: 'flex'}}>
      <h3 id="project">PRODUCTRESELLING</h3>
      <div style={{marginLeft:"-300px"}}>
      {cookies.access_token ?
      <ul>
      <li><NavLink to="/Home" activeClassName="active" className="nav">HOME</NavLink></li>
      <li><NavLink to="/Addproducts" className="nav">SELL</NavLink></li>
      <li><NavLink to="/Product" className="nav">PRODUCTS</NavLink></li>
      <li><NavLink to="/LocationProduct" className="nav">NEAR BY</NavLink></li>
      <li><NavLink to="/Mysell" className="nav">MY ADS</NavLink></li>
      
      <button onClick={logout} className="logout">Logout</button>
      </ul>
      :<li><NavLink to="/"  className="nav" id="RL">SIGNUP</NavLink></li>
      }
      <NavLink to="/Admin"></NavLink>
      </div>
      </div>
    )
}
export default Navbar;