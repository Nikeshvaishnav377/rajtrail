import React from "react";
import "./Culture.css";

const cultureData = [
  { title: "Folk Music", img: "/images/folkmusic.jpg" },
  { title: "Traditional Dance", img: "/images/traditionaldance.jpg" },
  { title: "Rajasthani Cuisine", img: "/images/rajasthanicuisine.jpg" },
  { title: "Handicrafts", img: "/images/handicrafts.jpg" },
  { title: "Festivals", img: "/images/festivals.jpg" }
];

const Culture = () => {
  return (
    <section className="culture">
      <h2>Experience Rajasthan’s Rich Culture</h2>
      <div className="culture-grid">
        {cultureData.map((item, index) => (
          <div className="culture-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Culture;
