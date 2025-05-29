import React from "react";
import "../App.css";

export default function MyCats() {
  return (
    <div className="page">
      <h1 className="title">My Purrfect Companions</h1>
      <div className="cat-cards">
        <div className="cat-card">
          <img src="/balulk.jpg" alt="Balulk" />
          <h2>Balulk</h2>
          <p>Maine Coon Mix - Living</p>
          <p>Balulk is a fluffy void with a heart of gold and a meow that can summon snacks...</p>
        </div>
        <div className="cat-card">
          <img src="/mochi.jpg" alt="Mochi" />
          <h2>Mochi <span className="memory">(in Loving Memory)</span></h2>
          <p>Scottish Fold - Forever Cherished</p>
          <p>Mochi was a sweet, gentle soul who loved cuddles and chasing sunbeams...</p>
        </div>
      </div>
    </div>
  );
}
