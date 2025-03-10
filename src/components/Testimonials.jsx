import React from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "Amit Sharma", review: "Rajasthan is a must-visit! The forts and palaces are breathtaking." },
  { name: "Sophia Williams", review: "Loved the camel safari in Jaisalmer! Amazing experience." },
  { name: "Rajesh Verma", review: "The local food and culture made my trip unforgettable!" }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Tourists Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{t.review}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
