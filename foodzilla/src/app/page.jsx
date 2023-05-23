"use client";

import React from "react";
import { useState } from "react";
import WelcomePage from "./welcome_page";
import global from "../../styles/global.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Home({ title, imgSrc }) {
  return (
    <>
      <Navbar />
      <WelcomePage
        logo={"/foodzilla_logo.svg"}
        logoAlt={"Foodzilla logo"}
        btnImg={"/forward.svg"}
        getStartedBtn={"/get-started.svg"}
      />
      <Footer />
    </>
  );
}
