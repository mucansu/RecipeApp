"use client";
import welcomeStyle from "../styles/welcome_page.scss";
import global from "../styles/global.scss";
import React from "react";
import { useState } from "react";

function WelcomePage({ logo, logoAlt, btnImg, btnAlt }) {
  const [introPage, setIntroPage] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  return (
    <>
      <section className="welcome">
        <div className="logo">
          <img src={logo} alt={logoAlt} />
        </div>
        {!getStarted ? (
          <div className="welcome-text">
            {!introPage ? (
              <h4>
                Your cooking is worth saving. Get organized with foodzilla
              </h4>
            ) : (
              <h4>
                Create your personal recepie liberary. Share recepies with
                friends. Save your favorites
              </h4>
            )}
          </div>
        ) : null}
        <div className="next-btn">
          <img
            onClick={() => setIntroPage(!introPage)}
            src={btnImg}
            alt={btnAlt}
          />
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
