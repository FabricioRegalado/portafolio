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
      className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-gray-800 scroll-mt-20 pt-24 md:pt-32"
    >
      {/* Contenido de texto */}
      <motion.div
        className="flex-1 text-center md:text-left mb-8 md:mb-0 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
          Hola, soy <span className="text-gray-900">Fabricio Regalado</span>
        </h1>
        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed mb-6 text-gray-800 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ingeniero en informática y desarrollador web. Transformo ideas en aplicaciones
          modernas y escalables con un diseño atractivo y funcional.
        </motion.p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-black text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Contáctame
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.05, y: -5 }}
            className="border border-black px-8 py-3 rounded-lg font-medium text-black bg-white hover:bg-gray-200 transition-all duration-300"
          >
            Descargar CV
          </motion.a>
        </div>

        {/* Iconos de Redes Sociales */}
        <div className="flex justify-center md:justify-start space-x-6 mt-8">
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
              className="text-gray-800 hover:text-black transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1.3 }}
            >
              {React.cloneElement(social.icon, {
                size: 30,
              })}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Imagen con efecto flotante */}
      <motion.div
        className="relative flex-1 w-full md:w-1/2 rounded-lg overflow-hidden shadow-2xl z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, y: -10 }}
      >
        <div className="bg-yellow-400 absolute inset-0 -z-10 rounded-lg"></div>
        <img
          src="/images/hero-image.jpg"
          alt="Hero"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
