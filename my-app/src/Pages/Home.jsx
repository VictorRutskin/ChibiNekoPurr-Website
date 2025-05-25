import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "../App.css";
// import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  faHome,
  faCat,
  faBookOpen,
  faLink,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
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

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 ChibiNekoPurr. All rights reserved.</p>
      <p>Website made with ♥ for the community</p>
    </footer>
  );
}

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>
          Welcome to <span className="highlight">ChibiNekoPurr's</span> Digital
          Realm
        </h1>
        <p>
          Join me on a cyberpunk adventure filled with games, laughs, and pixel
          purrfection!
        </p>
        <button className="button">Find Me Online</button>
      </section>

      <section className="links-box">
        <h2>Featured Links</h2>
        <ul>
          <li>
            <i className="fab fa-twitch"></i> Twitch Channel
          </li>
          <li>
            <i className="fab fa-youtube"></i> YouTube
          </li>
          <li>
            <i className="fab fa-discord"></i> Discord Community
          </li>
        </ul>

        <a href="#">View All Links</a>
      </section>

      <section className="support">
        <h2>Support the Stream</h2>
        <p>Your support helps keep the streams running and evolving.</p>
        <button className="button">Donate & Support</button>
      </section>
    </div>
  );
}

function MyCats() {
  return (
    <div className="page">
      <h1 className="title">My Purrfect Companions</h1>
      <div className="cat-cards">
        <div className="cat-card">
          <img src="/balulk.jpg" alt="Balulk" />
          <h2>Balulk</h2>
          <p>Maine Coon Mix - Living</p>
          <p>
            Balulk is a fluffy void with a heart of gold and a meow that can
            summon snacks...
          </p>
        </div>
        <div className="cat-card">
          <img src="/mochi.jpg" alt="Mochi" />
          <h2>
            Mochi <span className="memory">(in Loving Memory)</span>
          </h2>
          <p>Scottish Fold - Forever Cherished</p>
          <p>
            Mochi was a sweet, gentle soul who loved cuddles and chasing
            sunbeams...
          </p>
        </div>
      </div>
    </div>
  );
}

function GameWiki() {
  return (
    <div className="page">
      <h1 className="title">Catropolis Quest Chronicles</h1>
      <div className="wiki">
        <aside className="wiki-sidebar">
          <ul>
            <li>All</li>
            <li>Key Characters</li>
            <li>World Lore</li>
            <li>Overview</li>
          </ul>
        </aside>
        <main className="wiki-content">
          <h2>Catropolis Quest: Key Characters</h2>
          <p>
            <strong>Whiskerwind the Brave</strong> - The main protagonist of
            Catropolis Quest...
          </p>
          <p>
            <strong>Shadowclaw the Mysterious</strong> - A secretive rogue who
            lurks in Meowtropolis...
          </p>
        </main>
      </div>

      <section className="dev-log">
        <h2>Dev Log & Progress</h2>
        <div className="log-item">
          <h3>Dialogue System Overhaul</h3>
          <p>Status: Planning</p>
        </div>
        <div className="log-item">
          <h3>Character Customization System v1</h3>
          <p>Status: In Progress</p>
        </div>
        <div className="log-item">
          <h3>Alpha 0.1 Release</h3>
          <p>Status: Completed</p>
        </div>
      </section>
    </div>
  );
}

function Links() {
  return (
    <div className="page">
      <h1 className="title">Connect With Me</h1>
      <div className="link-section">
        <h2>Streaming Platforms</h2>
        <ul>
          <li>Twitch Channel</li>
          <li>YouTube</li>
        </ul>
        <h2>Social Media</h2>
        <ul>
          <li>Discord</li>
          <li>Twitter</li>
          <li>TikTok</li>
          <li>Instagram</li>
        </ul>
        <h2>Support the Stream</h2>
        <ul>
          <li>Ko-Fi</li>
          <li>Streamlabs</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<MyCats />} />
        <Route path="/wiki" element={<GameWiki />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
