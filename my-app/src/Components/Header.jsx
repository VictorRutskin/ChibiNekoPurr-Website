import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCat, faBookOpen, faLink } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        Chibi<span className="highlight">NekoPurr</span>
      </div>
      <nav>
        <NavLink to="/" className="nav-link" data-text="Home">
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        <NavLink to="/cats" className="nav-link" data-text="My Cats">
          <FontAwesomeIcon icon={faCat} /> My Cats
        </NavLink>
        <NavLink to="/wiki" className="nav-link" data-text="Game Wiki">
          <FontAwesomeIcon icon={faBookOpen} /> Game Wiki
        </NavLink>
        <NavLink to="/links" className="nav-link" data-text="Links">
          <FontAwesomeIcon icon={faLink} /> Links
        </NavLink>
      </nav>
    </header>
  );
}
