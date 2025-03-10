import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  { question: "What is the best time to visit Rajasthan?", answer: "October to March is the best time." },
  { question: "Is Rajasthan safe for tourists?", answer: "Yes, Rajasthan is very safe for tourists." },
  { question: "What are the must-visit places?", answer: "Jaipur, Udaipur, Jaisalmer, and Jodhpur." }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? "active" : ""}`} 
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;