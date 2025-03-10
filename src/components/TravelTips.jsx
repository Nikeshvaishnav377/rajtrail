import React from "react";
import "./TravelTips.css";

const tips = [
  { text: "Best time to visit: October to March.", icon: "🌤️" },
  { text: "Carry light cotton clothes for the daytime, and warm clothes for the night.", icon: "👕" },
  { text: "Try local dishes like Dal Baati Churma, Gatte Ki Sabzi, and Laal Maas.", icon: "🍛" },
  { text: "Respect the culture and traditions while visiting religious places.", icon: "🕌" }
];

const TravelTips = () => {
  return (
    <section className="travel-tips">
      <h2>Travel Tips</h2>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <span className="tip-icon">{tip.icon}</span>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelTips;
