import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const websiteName = "Beautiful Homes";
  const slogan = "Find Your Gem";
  return (
    <header className="header">
      <div className="header-background">
        <div className="logo">
          <FontAwesomeIcon icon={faHome} size="2x" />
          <h1>{websiteName}</h1>
        </div>
        <p>{slogan}</p>
      </div>
    </header>
  );
}

export default Header;