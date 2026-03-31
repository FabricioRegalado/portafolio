import React from 'react';
import { Toaster } from 'sileo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#f1f1f1] dark:bg-[#0f1117] text-[#1a1a1a] dark:text-gray-100 transition-colors duration-300">
      <Toaster
        position="top-right"
        options={{
          fill: '#FFFFFF',
          roundness: 14,
          styles: {
            title: 'text-[#111827]!',
            description: 'text-[#374151]!',
            badge: 'bg-[#f3f4f6]!',
            button: 'bg-[#111827] text-white! hover:bg-[#1f2937]!',
          },
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
