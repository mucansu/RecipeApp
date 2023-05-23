"use client";
import React, { useState } from "react";
import "../../../styles/new-user.scss";
import Link from "next/link";

export default function NewUserPage() {
  const [förnamn, setFörnamn] = useState("");
  const [efternamn, setEfternamn] = useState("");
  const [epost, setEpost] = useState("");
  const [användarnamn, setAnvändarnamn] = useState("");
  const [lösenord, setLösenord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Förnamn: ${förnamn}, Efternamn: ${efternamn}, Epost: ${epost}, Användarnamn: ${användarnamn}, Lösenord: ${lösenord}`
    );
    // Handle submission här..? send to server? Backend?
  };

  return (
    <div className="new-user-container">
      <img className="logo" src="../foodzilla_logo.svg" alt="Foodzilla Logo" />
      <form onSubmit={handleSubmit}>
        <label>
          Förnamn
          <input
            type="text"
            name="förnamn"
            value={förnamn}
            onChange={(e) => setFörnamn(e.target.value)}
          />
        </label>

        <label>
          Efternamn
          <input
            type="text"
            name="efternamn"
            value={efternamn}
            onChange={(e) => setEfternamn(e.target.value)}
          />
        </label>

        <label>
          Epost
          <input
            type="text"
            name="epost"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
          />
        </label>

        <label>
          Användarnamn
          <input
            type="text"
            name="användarnamn"
            value={användarnamn}
            onChange={(e) => setAnvändarnamn(e.target.value)}
          />
        </label>

        <label>
          Lösenord
          <input
            type="password"
            name="lösenord"
            value={lösenord}
            onChange={(e) => setLösenord(e.target.value)}
          />
        </label>

        <Link href="#">
          <div className="center-button">
            <button type="submit">Skapa konto</button>
          </div>
        </Link>
      </form>
    </div>
  );
}
