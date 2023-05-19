"use client";
import React from "react";
import Logo from "../welcome_page.jsx";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <div>
      <Logo logo="../foodzilla_logo.svg" logoAlt="../Foodzilla logo" />

      <h1>Get Started</h1>

      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <button type="submit">Log In</button>
      </form>

      <Link href="../new-user">New User</Link>
      <br />
      <Link href="#">Forgot your password?</Link>
    </div>
  );
}
