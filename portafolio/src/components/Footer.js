import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="relative bg-gradient-to-br from-primary/80 via-primary/60 to-primary-dark dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 py-16 scroll-mt-16"
    >
      <div className="container mx-auto px-6 lg:px-20 text-center space-y-12">
        {/* Sección Información */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-md">
            Oscar Fabricio Regalado Pérez
          </h2>
          <p className="text-lg md:text-xl mt-4 font-light text-gray-800 dark:text-gray-200 drop-shadow-md">
            Transformando ideas en aplicaciones funcionales y modernas.
          </p>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          className="flex justify-center gap-6 text-4xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <FaGithub />,
              link: "https://github.com/FabricioRegalado",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/oscar-fabricio-regalado-p%C3%A9rez-90181b225/",
              label: "LinkedIn",
            },
            { icon: <FaEnvelope />, link: "mailto:oscarfabricio55@gmail.com", label: "Correo Electrónico" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, y: -5 }}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
              aria-label={social.label}
            >
              {React.cloneElement(social.icon, {
                className: "drop-shadow-lg hover:drop-shadow-2xl",
              })}
            </motion.a>
          ))}
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="mailto:oscarfabricio55@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center bg-black text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaEnvelope className="mr-2" />
            Contáctame
          </motion.a>
          <motion.a
            href="./cv.pdf"
            download
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center border border-gray-800 dark:border-gray-600 text-black dark:text-gray-200 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            <FaFileDownload className="mr-2" />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-sm text-gray-800 dark:text-gray-200 drop-shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            © {new Date().getFullYear()} Oscar Fabricio Regalado Pérez. Todos
            los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
