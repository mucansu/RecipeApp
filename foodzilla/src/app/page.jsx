"use client";

import React from "react";
import { useState } from "react";
import WelcomePage from "../../components/welcome_page";
import global from "../../styles/global.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Home({ title, imgSrc }) {
  const [starterPage, setStarterPage] = useState(false);

  return (
    <>
      <Navbar />
      <WelcomePage
        logo={"/foodzilla_logo.svg"}
        logoAlt={"Foodzilla logo"}
        welcomeText={
          "Your cooking is worth saving. Get organized with foodzilla"
        }
        btnImg={"/forward.svg"}
      />
      <Footer />
    </>
  );
}
