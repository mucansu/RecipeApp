/* 
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
*/
// Import necessary packages and styles
import welcomeStyle from "../styles/welcome_page.scss";
import global from "../styles/global.scss";
import React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';


// Logo Component
// This component displays the logo of the application.
// Props: src (source url of the logo image), alt (alternate text for the image)
function Logo({src, alt}) {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
}

// WelcomeText Component
// This component displays the welcome text of the application.
// It conditionally renders different text based on the 'introPage' state.
// Props: introPage (boolean to decide which text to display)
function WelcomeText({introPage}) {
  return (
    <div className="welcome-text">
      {!introPage ? (
        <h4>
          Your cooking is worth saving. Get organized with Foodzilla.
        </h4>
      ) : (
        <h4>
          Create your personal recipe library. Share recipes with friends. Save your favorites.
        </h4>
      )}
    </div>
  );
}

// NextButton Component
// This component displays a button that changes the 'introPage' state on click or key press.
// It has accessibility features, such as role and onKeyDown attributes.
// Props: onClick (function to execute when button is clicked or pressed), src (source url of the button image), alt (alternate text for the image)
function NextButton({onClick, src, alt}) {
  return (
    <div className="next-btn" role="button" onClick={onClick} onKeyDown={onClick} tabIndex="0">
      <img src={src} alt={alt} />
    </div>
  );
}

// GetStartedButton Component
function GetStartedButton() {
  const router = useRouter(); // allows you to manipulate the browser history

  const handleClick = () => {
    router.push("/get-started"); // navigate to "/get-started" when button is clicked
  }

  return (
    <button className="get-started-btn" onClick={handleClick}>
      Get started
    </button>
  );
}

// WelcomePage Component
// This is the main component that combines the Logo, WelcomeText, and NextButton components.
// It uses a state hook 'introPage' to control the text displayed in the WelcomeText component.
// Props: logo (source url of the logo image), logoAlt (alternate text for the logo image), btnImg (source url of the button image), btnAlt (alternate text for the button image)
function WelcomePage({ logo, logoAlt, btnImg, btnAlt, getStartedBtn}) {
  const [introPage, setIntroPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  const handleNextClick = () => {
    if (!introPage) {
      setIntroPage(true);
    } else {
      setNextPage(true);
    }
  };

  return (
    <section className="welcome">
      <Logo src={logo} alt={logoAlt} />
      {!nextPage ? (
        <WelcomeText introPage={introPage} />
      ) : (
        <h4>But no time to wait. Let's start cooking!</h4>
      )}
      {!nextPage ? (
        <NextButton onClick={handleNextClick} src={btnImg} alt={btnAlt} />
      ) : (
        <img src={getStartedBtn} />
      )}
    </section>
  );
}

export default WelcomePage;