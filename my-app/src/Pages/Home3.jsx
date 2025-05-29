import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>
          Welcome to <span className="highlight">My</span> Digital
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
          <li className="twitch">
            <i className="fab fa-twitch"></i> Twitch Channel
          </li>
          <li className="youtube">
            <i className="fab fa-youtube"></i> YouTube
          </li>
          <li className="discord">
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
