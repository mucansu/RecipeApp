"use client";
import React from "react";

import Link from "next/link";
import "../../../styles/login-page.scss";
import Navbar from "../../../components/navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="logo">
        <img src="../foodzilla_logo.svg" alt="../Foodzilla logo" />
      </div>
      <div className="login-container">
        <form className="login">
          <label>
            <div>Username</div>
            <input type="text" name="username" />
          </label>

          <label>
            <div>Password</div>
            <input type="password" name="password" />
          </label>

          <img className="loginBtn" type="submit" src="login.svg" />
        </form>

        <div className="link-container">
          <Link className="new-user" href="#">
            New User
          </Link>
          <Link className="forgot-pswrd" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>
    </>

  );
}
