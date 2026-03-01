import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Work />
      <About />
      <Footer />
    </div>
  );
};

export default App;
