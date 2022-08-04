import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./LandingTop.css";
import { toast } from "react-toastify";
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function LandingTop() {
  // const email = useParams();
  // const [userData, setUserData] = useState([]);
  const {logout} = useLogout();
  const {user} = useAuthContext();

  // useEffect(() => {
  //   const url = "http://localhost:8000/api/home";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //       setUserData(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // let user ;
  // user = userData.find(({item})=>{ item.email === {email}});
  // console.log(user)
  /* console.log(`data is: ${resp.Data}`) */

  const handleClick = ()=>{
    logout();
  }

  let navigate = useNavigate();
  const showSettings = () => {
    if (document.getElementById("options").className === "options") {
      document.getElementById("options").classList.add("optionsHidden");
      document.getElementById("options").classList.remove("options");
    } else {
      document.getElementById("options").classList.remove("optionsHidden");
      document.getElementById("options").classList.add("options");
    }
  };
  return (
    <div className="LandingTop">
      <div className="details">
      {user ? 
          <div className="User" id="User" onClick={() => showSettings()}>
            <h5>
              <i className="LandingIcon fa-solid fa-user"></i>
              Welcome, {user.username}
              <i className=" LandingIconDown fa-solid fa-caret-down"></i>
            </h5>
          </div> : 
          <div className="User" id="User" onClick={()=>navigate("/login")}>
            <h5>
              <i className="LandingIcon fa-solid fa-user"></i>
              Login
            </h5>
          </div>
        }
        {user && <div className="optionsHidden" id="options">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Settings <i className=" optionsIcons fa-solid fa-gear"></i>
            </li>
            <li className="list-group-item">
              Profile <i className=" optionsIcons  fa-solid fa-user"></i>
            </li>

            <li className="list-group-item " onClick={handleClick}>
              Log Out
              <i className=" optionsIcons  fa-solid fa-arrow-right-from-bracket"></i>
            </li>
          </ul>
        </div>}
      </div>
    </div>
  );
}
