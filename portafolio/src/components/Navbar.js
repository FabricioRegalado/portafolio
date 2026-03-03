import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved ? saved === 'dark' : prefersDark;
    setDarkMode(initial);
    if (initial) document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = (e) => {
    // localized ripple on the button + icon rotation
    if (animating) return;
    setAnimating(true);

    // create ripple element at button
    const btn = e && e.currentTarget ? e.currentTarget : null;
    if (btn) {
      btn.classList.add('relative', 'overflow-hidden');
      const ripple = document.createElement('span');
      ripple.className = 'absolute inset-0 rounded-full bg-primary/40 dark:bg-primary-dark/40 ripple-effect';
      ripple.setAttribute('aria-hidden', 'true');
      btn.appendChild(ripple);
      // remove ripple after animation (matches 600ms in CSS)
      setTimeout(() => {
        ripple.remove();
      }, 650);
    }
    // apply a theme-changing class to html for iOS-like effect
    const html = document.documentElement;
    html.classList.add('theme-changing');

    // rotate icon via animating state and flip theme shortly after ripple
    setTimeout(() => {
      const next = !darkMode;
      setDarkMode(next);
      if (next) html.classList.add('dark');
      else html.classList.remove('dark');
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }, 120);

    // remove theme-changing after animation completes (matches CSS durations)
    setTimeout(() => {
      html.classList.remove('theme-changing');
      setAnimating(false);
    }, 760);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 dark:bg-secondary/95 shadow-lg backdrop-blur-md" : "bg-white dark:bg-secondary"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div className="text-xl md:text-2xl font-bold text-primary hover:text-primary-dark transition-colors duration-300 cursor-default">
          FR
        </motion.div>

        {/* Menú en Escritorio */}
        <ul className="hidden md:flex md:items-center md:space-x-1">
          {["Inicio", "Proyectos", "Experiencia", "Habilidades", "Contacto"].map((item, index) => (
            <li key={index}>
              <Link
                to={
                  item === "Habilidades"
                    ? "habilidades"
                    : item === "Experiencia"
                    ? "experiencia"
                    : item.toLowerCase().replace(" ", "-")
                }
                smooth={true}
                duration={500}
                offset={-64}
                className="relative px-4 py-2 text-secondary dark:text-gray-200 font-medium transition duration-300 cursor-pointer group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={(e) => toggleDark(e)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition"
          >
            <span className={animating ? 'icon-rotating' : ''}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>
        </div>

        {/* Icono del Menú Móvil */}
        <div className="flex items-center md:hidden space-x-2">
          {/* Mobile theme toggle (visible on small screens) */}
          <button
            onClick={(e) => toggleDark(e)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition"
          >
            <span className={animating ? 'icon-rotating' : ''}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary dark:text-gray-300 text-2xl focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-secondary transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
          {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col items-center space-y-3 py-4">
              {["Inicio", "Proyectos", "Experiencia", "Habilidades", "Contacto"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      item === "Habilidades"
                        ? "habilidades"
                        : item === "Experiencia"
                        ? "experiencia"
                        : item.toLowerCase().replace(" ", "-")
                    }
                    smooth={true}
                    duration={500}
                    offset={-64}
                    onClick={() => setIsOpen(false)}
                    className="text-secondary dark:text-gray-200 hover:text-primary dark:hover:text-primary-light font-medium transition duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
