import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        repeat: Infinity, // Loop the animation infinitely
        repeatType: "reverse", // Subtle reverse effect for looping
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 bg-white px-6 md:px-16 py-4 border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Texto Animado */}
        <motion.div className="text-2xl font-bold text-gray-800 flex space-x-1">
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
        <ul className="hidden md:flex md:items-center md:space-x-8">
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
                className="text-gray-800 hover:text-yellow-200 transition duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icono del Menú Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white rounded-lg mt-4 shadow-md"
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
                    className="text-gray-700 hover:text-yellow-500 transition duration-300 cursor-pointer"
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
