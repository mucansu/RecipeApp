"use client";
import React from "react";
import navbar from "../styles/navbar.scss";

function Navbar({ logo, menu, logoAlt, menuAlt }) {
  return (
    <>
      <nav>
        <img src={logo} alt={logoAlt} />
        <img src={menu} alt={menuAlt} />
      </nav>
    </>
  );
}

export default Navbar;
