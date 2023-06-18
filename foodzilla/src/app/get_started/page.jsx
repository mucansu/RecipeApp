"use client";

import "../../../styles/login-page.scss";
import React from "react";
import Link from "next/link";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function GetStartedPage() {
  return (
    <>
      <Navbar />
      <section className="welcome">
        <img className="logo" src="foodzilla_logo.svg" />
        <div className="welcome-text">
          <h3>
            But no time to wait.
            <br /> Let's start cooking!
          </h3>
        </div>

        <Link href="../login_page">
          <img
            className="get-started"
            src="get-started.svg"
            alt="Go to PageWelcome2"
          />
        </Link>
      </section>
      <Footer />
    </>
  );
}
