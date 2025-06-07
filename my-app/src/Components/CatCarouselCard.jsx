import React, { useState, useEffect } from "react";

export default function CatCarouselCard({ images, name, subtitle, description, memory }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="cat-card">
      <img src={images[idx]} alt={name} />
      <h2>
        {name}
        {memory && <span className="memory"> (in Loving Memory)</span>}
      </h2>
      <p>{subtitle}</p>
      <p>{description}</p>
    </div>
  );
}
