import React from "react";
import "./NavbarTop.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext"
import  {toast} from "react-toastify"

export default function NavbarTop() {
  const {user} = useAuthContext()
  let navigate = useNavigate();

  const handleClick = ()=>{
    if(!user){
      toast.error('Please Log In', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
    else{
      navigate("/library")
    }
  }  

  return (
    <div className="NavbarTop">
      <div className="NavIcon Homebtn">
        <h4 onClick={() => navigate("/")}>
          
            <i className="navTop-icon fa-solid fa-house-chimney"></i> Home
          
        </h4>
      </div>
      <div className=" NavIcon NavbarSearch">
        <h4 onClick={() => navigate("/search")}>
          
            <i className="navTop-icon fa-solid fa-magnifying-glass"></i> Search
          
        </h4>
      </div>
      <div className=" NavIcon NavbarLibrary">
        <h4 onClick={handleClick}>
          
            <i className="navTop-icon fa-solid fa-swatchbook"></i> Library
          
        </h4>
      </div>
      <Outlet />
    </div>
  );
}
