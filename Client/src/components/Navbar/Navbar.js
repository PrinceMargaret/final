import React from "react";
import NavbarBottom from "../NavbarBottom/NavbarBottom";
import NavbarTop from "../NavbarTop/NavbarTop";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      
        <NavbarTop />
        <NavbarBottom />
      
    </div>
  );
}
