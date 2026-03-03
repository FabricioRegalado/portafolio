import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="relative bg-secondary dark:bg-gray-950 text-white py-20 scroll-mt-16 overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 text-center space-y-12 relative z-10">
        {/* Sección Información */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Oscar Fabricio Regalado Pérez
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Transformando ideas en aplicaciones funcionales y modernas.
          </p>
        </motion.div>

        {/* Redes Sociales */}
        <motion.div
          className="flex justify-center gap-8 text-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            { icon: <FaEnvelope />, link: "mailto:oscarfabricio55@gmail.com", label: "Correo" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10, y: -8 }}
              className="text-gray-300 hover:text-primary transition-colors duration-300 relative group"
              aria-label={social.label}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="mailto:oscarfabricio55@gmail.com"
            whileHover={{ scale: 1.08 }}
            className="flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark shadow-lg hover:shadow-2xl transition-all"
          >
            <FaEnvelope className="mr-2" />
            Contáctame
          </motion.a>
          <motion.a
            href="./cv.pdf"
            download
            whileHover={{ scale: 1.08 }}
            className="flex items-center border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
          >
            <FaFileDownload className="mr-2" />
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-sm text-gray-400 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            © {new Date().getFullYear()} Oscar Fabricio Regalado Pérez. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
