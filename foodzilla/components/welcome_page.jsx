"use client";

import "../styles/welcome_page.scss";
import "../styles/global.scss";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./navbar";

function WelcomePage({ logo, logoAlt, text }) {
  const [nextText, setNextText] = useState(false);

  const handleClick = () => {
    setNextText(true);
  };

  return (
    <>
      <Navbar />
      <section className="welcome">
        <img src={logo} alt={logoAlt} />
        {!nextText ? (
          <>
            <h4>Your cooking is worth saving. Get organized with Foodzilla.</h4>

            <img
              onClick={handleClick}
              src="forward.svg"
              alt="Go to PageWelcome2"
            />
          </>
        ) : (
          <>
            <h4>Tjena.</h4>
            <Link href="../login_page">
              <img src="forward.svg" alt="Go to PageWelcome2" />
            </Link>
          </>
        )}
      </section>
    </>
  );
}

export default WelcomePage;
