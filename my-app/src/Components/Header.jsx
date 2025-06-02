import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCat,
  faBookOpen,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import "../Styles/Header.css";
import LogoGlitch from "../Components/LogoGlitch";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Ensure dropdown doesn't close when moving between Games and menu
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <header className="header">
      {/* <div className="logo">
        Chibi<span className="highlight">NekoPurr</span>
      </div> */}
      <LogoGlitch />

      <nav className="nav-main">
        <NavLink
          to="/"
          className="nav-link"
          data-text="Home"
          onClick={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        {/* Games Dropdown */}
        <div
          className={`games-dropdown${dropdownOpen ? " open" : ""}`}
          tabIndex={0}
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className="nav-link"
            data-text="Games"
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faBookOpen} /> Games{" "}
            <FontAwesomeIcon icon={faChevronDown} className="chev-icon" />
          </span>
          <div className={`games-dropdown-menu${dropdownOpen ? " show" : ""}`}>
            <NavLink
              to="/Catropolis-Quest"
              className="games-dropdown-item nav-link"
              data-text="Catropolis Quest"
              onClick={handleMouseLeave}
            >
              Catropolis Quest
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/cats"
          className="nav-link"
          data-text="My Cats"
          onClick={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faCat} /> My Cats
        </NavLink>
      </nav>
    </header>
  );
}
