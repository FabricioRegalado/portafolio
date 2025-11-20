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

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.6
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className={`fixed w-full z-50 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 px-4 md:px-16 py-3 border-b border-white/40 dark:border-gray-800/40 transition-shadow duration-300 backdrop-filter ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Texto Animado */}
        <motion.div className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex space-x-1">
          {"Codificando...".split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Menú en Escritorio */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          {["Inicio", "Proyectos", "Habilidades", "Contacto"].map((item, index) => (
            <li key={index}>
              <Link
                to={
                  item === "Habilidades"
                    ? "habilidades" // Ensure this matches the correct section ID
                    : item.toLowerCase().replace(" ", "-")
                }
                smooth={true}
                duration={500}
                offset={-64}
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={(e) => toggleDark(e)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
            className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span className={animating ? 'icon-rotating' : ''}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 text-2xl focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
            className="md:hidden bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg mt-4 shadow-md"
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              {["Inicio", "Proyectos", "Habilidades", "Contacto"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={
                      item === "Habilidades"
                        ? "habilidades" // Ensure this matches the correct section ID
                        : item.toLowerCase().replace(" ", "-")
                    }
                    smooth={true}
                    duration={500}
                    offset={-64}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark transition duration-300 cursor-pointer"
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
