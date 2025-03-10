import React from "react";
import "./Destinations.css";

const places = [
  { name: "Jaipur", img: "/images/jaipur.jpg" },
  { name: "Udaipur", img: "/images/udaipur.jpg" },
  { name: "Jaisalmer", img: "/images/jaisalmer.jpeg" },
  { name: "Jodhpur", img: "/images/jodhpur.jpg" }
];

const Destinations = () => {
  return (
    <section className="destinations">
      <h2>Top Destinations</h2>
      <div className="dest-grid">
        {places.map((place, index) => (
          <div className="dest-card" key={index}>
            <img src={place.img} alt={place.name} />
            <h3>{place.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;