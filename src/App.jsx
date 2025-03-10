import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Destinations from "./components/Destinations";
import TravelTips from "./components/TravelTips"; 
import ContactForm from "./components/ContactForm"; 
import Testimonials from "./components/Testimonials";
import Culture from "./components/Culture"; 
import Blog from "./components/Blog"; 
import FAQ from "./components/FAQ";
import Footer from "./components/Footer"; // ✅ Import Footer
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/travel-tips" element={<TravelTips />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />  {/* ✅ Add Footer */}
    </Router>
  );
}

export default App;
