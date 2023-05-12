"use client";
import welcomeStyle from "../styles/welcome_page.scss";
import global from "../styles/global.scss";
import React from "react";
import { useState } from "react";

function WelcomePage({
  logo,
  logoAlt,
  welcomeText,
  btnImg,
  btnAlt,
  handleClick,
}) {
  return (
    <>
      <section className="welcome">
        <div className="logo">
          <img src={logo} alt={logoAlt} />
        </div>
        <div className="welcome-text">
          <h3>{welcomeText}</h3>
        </div>
        <div className="next-btn">
          <img onClick={handleClick} src={btnImg} alt={btnAlt} />
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
