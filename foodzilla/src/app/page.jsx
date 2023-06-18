"use client";


import "../../styles/welcome_page.scss";
import "../../styles/global.scss";

import React, { useState } from "react";
import Link from "next/link";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Home() {

  const [nextText, setNextText] = useState(false);

  const handleClick = () => {
    setNextText(true);
  };
  return (
    <>
      <Navbar />
      <section className="welcome">
        <img className="logo" src="foodzilla_logo.svg" />
        {!nextText ? (
          <>
            <div className="welcome-text">
              <h3>
                Your cooking is worth saving.
                <br />
                Get organized with Foodzilla.
              </h3>
            </div>

            <img
              className="forward"
              onClick={handleClick}
              src="forward.svg"
              alt="Go to PageWelcome2"
            />
          </>
        ) : (
          <>
            <div className="welcome-text">
              <h3>
                Create your personal recipe library. <br />
                Share recipes with friends. <br />
                Save your favorites.
              </h3>
            </div>
            <Link href="/get_started">
              <img
                className="forward"
                src="forward.svg"
                alt="Go to PageWelcome2"
              />
            </Link>
          </>
        )}
      </section>
      <Footer />
    </>
  );

}
