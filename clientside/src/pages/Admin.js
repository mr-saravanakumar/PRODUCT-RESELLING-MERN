import React, { useState ,useEffect} from 'react'
import Axios from 'axios';
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from 'sweetalert2' ;
import './Admin.css';
const Admin = () => {
  const [admin,setAdmin]=useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/auth/admin")
     .then((response) => {
      // console.log(response.data.length);
      var userlength = response.data.length;
      setAdmin(response.data);
     })
     .catch(() => {
      console.log("error");
     });
   },[]);

   const deleteuser=(id)=>{
      if(window.confirm("Are you sure you?"))
      {
        Swal.fire('OOPS!','USER Deleted Successfully','success')
        Axios.delete(`http://localhost:3001/auth/delete/${id}`);
        setAdmin(admin.filter((val)=>{
        return val._id !=id;
      }))
      }
       return;
   }

  return (
    <div id="admin-container">
      <h2>ADMIN PANEL</h2>
      <h5></h5>
      <h3>CURRENT-USERS</h3>
      <h4>{admin.length}</h4>
      <div className="admin-main-container">
       {
        admin.map((ad)=>( 
          <div className="admin-user">
          <div className='admin-text'>
          <h6>USER-ID</h6><br/>
          <h6>USERNAME</h6><br/>
          <h6>USER-ENCRYPTED-PASSWORD</h6> 
          </div>
          <div className="admin-detail">
          <h6>{ad._id}</h6><br/>
          <h6>{ad.username}</h6><br/>
          <h6>{ad.password}</h6>
          </div>
          <button className="admin-delete-btn" onClick={()=>{deleteuser(ad._id)}}><RiDeleteBinFill/></button> 
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Admin;
