import React from "react";
import ChibiAvatar from "../images/Chibi.jpg";
import "../Styles/ProfileStream.css";

export default function ProfileStream() {
  return (
    <div className="profile-stream-card lr-layout">
      {/* Profile (Left) */}
      <div className="profile-block">
        <img
          src={ChibiAvatar}
          alt="ChibiNekoPurr Avatar"
          className="profile-avatar"
        />
        <div className="profile-text-block">
          <h1 className="profile-username">@ChibiNekoPurr</h1>
          <p className="profile-bio">
            Streamer, cosplayer, game developer, gamer! she/her{" "}
            <span role="img" aria-label="heart">
              💜
            </span>
          </p>
          <a
            href="https://www.twitch.tv/chibinekopurr/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="schedule-link"
          >
            <i className="fas fa-calendar-alt"></i> See Full Stream Schedule
          </a>
        </div>
      </div>

      {/* Stream (Right) */}
      <div className="stream-embed-block">
        <iframe
          src="https://player.twitch.tv/?channel=chibinekopurr&parent=victorrutskin.github.io"
          height="400"
          width="100%"
          allowFullScreen={true}
          frameBorder="0"
          scrolling="no"
          title="Twitch Stream"
        ></iframe>
      </div>
    </div>
  );
}
