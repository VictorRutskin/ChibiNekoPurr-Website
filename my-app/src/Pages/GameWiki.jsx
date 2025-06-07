import React from "react";
import "../App.css";
import "../Styles/GameWiki.css";

export default function GameWiki() {
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
            <strong>Whiskerwind the Brave</strong> - The main protagonist...
          </p>
          <p>
            <strong>Shadowclaw the Mysterious</strong> - A secretive rogue...
          </p>
        </main>
      </div>

      {/* Inline YouTube Video */}
      <section className="yt-section">
        <h2>Gameplay Video</h2>
        <div className="yt-container">
          <iframe
            src="https://www.youtube.com/embed/dTvKvnY4Ajs?si=1"
            title="Catropolis Quest Gameplay"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

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
