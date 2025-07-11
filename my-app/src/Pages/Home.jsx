import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/Home.css";
import throne from "../images/throne.png";
import ProfileStream from "../Components//ProfileStream";
import "../Styles/Home.css";

const links = [
  {
    label: "Patreon",
    url: "https://patreon.com/ChibiNekoPurr",
    icon: "fab fa-patreon",
    className: "patreon",
  },
  {
    label: "Throne",
    url: "https://throne.com/chibinekopurr",
    icon: "custom-throne",
    className: "throne",
  },
  {
    label: "Ko-Fi",
    url: "https://ko-fi.com/ChibiNekoPurr",
    icon: "fas fa-coffee",
    className: "kofi",
  },
  {
    label: "Twitch",
    url: "https://twitch.tv/ChibiNekoPurr",
    icon: "fab fa-twitch",
    className: "twitch",
  },
  {
    label: "Streamlabs",
    url: "https://streamlabs.com/ChibiNekoPurr",
    icon: "fas fa-donate",
    className: "streamlabs",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@ChibiNekoPurr",
    icon: "fab fa-youtube",
    className: "youtube",
  },
  {
    label: "Discord",
    url: "https://discord.gg/ev3SZUG3Cc",
    icon: "fab fa-discord",
    className: "discord",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/ChibiNekoPurr",
    icon: "fab fa-instagram",
    className: "instagram",
  },
  // {
  //   label: "X (Twitter)",
  //   url: "https://twitter.com/ChibiNekoPurr",
  //   icon: "fab fa-x-twitter",
  //   className: "X",
  // },
];

export default function Links() {
  return (
    <div className="links-page-bg">
      <ProfileStream />

    

      {/* SOCIAL / DONATION LINKS */}
      <div className="links-list">
        {links.map((link) => (
          <a
            key={link.label}
            className={`link-card ${link.className}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon === "custom-throne" ? (
              <img src={throne} alt="Throne" className="custom-link-icon" />
            ) : (
              <i className={link.icon}></i>
            )}
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      {/* SUPPORT SECTION */}
      <section className="support">
        <h2>Support the Stream</h2>
        <p>Your support helps keep the streams running and evolving.</p>
        {/* <button className="button">Donate & Support</button> */}
      </section>
    </div>
  );
}
