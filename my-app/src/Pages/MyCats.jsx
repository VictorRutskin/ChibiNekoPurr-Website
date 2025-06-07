import React from "react";
import "../App.css";
import "../Styles/MyCats.css";
import CatCarouselCard from "../Components/CatCarouselCard";

export default function MyCats() {
  return (
    <div className="page">
      <h1 className="title">My Purrfect Companions</h1>
      <div className="cat-cards">
        <CatCarouselCard
          images={[
            "/balulk.jpg",
            "/balulk2.jpg",
            "/balulk3.jpg",
          ]}
          name="Balulk"
          subtitle="Maine Coon Mix - Living"
          description="Balulk is a fluffy void with a heart of gold and a meow that can summon snacks..."
        />
        <CatCarouselCard
          images={[
            "/mochi.jpg",
            "/mochi2.jpg",
            "/mochi3.jpg",
          ]}
          name="Mochi"
          subtitle="Scottish Fold - Forever Cherished"
          description="Mochi was a sweet, gentle soul who loved cuddles and chasing sunbeams..."
          memory
        />
      </div>
    </div>
  );
}
