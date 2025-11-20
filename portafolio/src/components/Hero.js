import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 min-h-screen scroll-mt-20 pt-24 md:pt-32 bg-white dark:bg-gray-900"
    >
      {/* Contenido de texto */}
      <motion.div
        className="flex-1 text-center md:text-left mt-8 md:mt-0 z-10"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
          Hola, soy
          <span className="block text-primary dark:text-primary-dark"> Fabricio Regalado</span>
        </h1>
        <motion.p
          className="text-base md:text-lg font-normal leading-relaxed mb-6 text-muted dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ingeniero en informática y desarrollador web. Construyo interfaces modernas,
          accesibles y con foco en la experiencia de usuario.
        </motion.p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.03 }}
            className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium shadow hover:shadow-lg transition"
          >
            Ver proyectos
          </motion.a>
          <motion.a
            href="./cv.pdf"
            download
            whileHover={{ scale: 1.03 }}
            className="inline-block border border-gray-300 px-6 py-3 rounded-md font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            Descargar CV
          </motion.a>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6 text-gray-700 dark:text-gray-200">
          {[
            { icon: <FaInstagram />, link: "https://www.instagram.com/fabricio_ouo/" },
            { icon: <FaGithub />, link: "https://github.com/FabricioRegalado" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/oscar-fabricio-regalado-p%C3%A9rez-90181b225/",
            },
            { icon: <FaEnvelope />, link: "mailto:oscarfabricio55@gmail.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ scale: 1.2 }}
            >
              {React.cloneElement(social.icon, {
                size: 26,
              })}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Imagen con efecto flotante */}
      <motion.div
        className="relative flex-1 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg z-10 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 -z-10"></div>
        <img
          src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`}
          alt="Foto de Fabricio"
          className="w-full h-[300px] md:h-[520px] object-cover rounded-md"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
