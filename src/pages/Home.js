import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import TravelTips from "../components/TravelTips"; 
import ContactForm from "../components/ContactForm"; 
import Testimonials from "../components/Testimonials";
import Culture from "../components/Culture"; 
import Blog from "../components/Blog"; 
import FAQ from "../components/FAQ";
import "./Home.css";

const Home = () => {
  return (
    <>
      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Hero />
        <Destinations />
        <Culture />
        <TravelTips />
        <Testimonials />
        <Blog />
        <FAQ />
        <ContactForm />
      </motion.div>
    </>
  );
};

export default Home;
