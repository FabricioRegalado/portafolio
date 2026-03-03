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
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8 min-h-screen scroll-mt-20 pt-24 md:pt-32 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido de texto */}
      <motion.div
        className="flex-1 text-center md:text-left mt-8 md:mt-0 z-10"
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-secondary dark:text-white">
          Hola, soy
          <span className="text-primary"> Fabricio</span>
        </h1>
        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed mb-8 text-gray-600 dark:text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Ingeniero en Informática y Desarrollador Web. Creo experiencias digitales modernas, funcionales con atención al detalle.
        </motion.p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(37, 99, 235, 0.3)" }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark shadow-md transition"
          >
            Ver Proyectos
          </motion.a>
          <motion.a
            href="./cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="inline-block border-2 border-primary px-8 py-4 rounded-lg font-semibold text-primary hover:bg-primary hover:text-white transition"
          >
            Descargar CV
          </motion.a>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="flex gap-6 justify-center md:justify-start text-2xl text-secondary dark:text-gray-300">
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
              className="hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              whileHover={{ scale: 1.3, y: -5 }}
            >
              {React.cloneElement(social.icon, {
                size: 28,
              })}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Imagen con efecto flotante */}
      <motion.div
        className="relative flex-1 w-full md:w-1/2 z-10 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`}
              alt="Foto de Fabricio"
              className="w-full h-[300px] md:h-[520px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border-2 border-primary/20 rounded-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
