import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaBootstrap,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const projects = [
  {
    title: "Sistema de Inventario",
    description:
      "Sistema de predicción del comportamiento del inventario utilizando modelos estadísticos y Machine Learning.",
    technologies: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-gray-700" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
    images: ["/images/san_camilo0.png", "/images/san_camilo1.png", "/images/san_camilo2.png"],
  },
  {
    title: "Sistema de Pedidos",
    description:
      "Aplicación de gestión de pedidos con panel de control interactivo, autenticación y gráficos dinámicos.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
    images: ["/images/pd0.png", "/images/pd1.png", "/images/pd2.png"],
  },
  {
    title: "SPA - BE FIT SUPPLEMENTS",
    description:
      "Aplicación de una sola página (SPA) para catálogo de suplementos con filtrado dinámico y contacto directo por WhatsApp.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
    ],
    images: ["/images/beFitS0.png", "/images/beFitS1.png"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="proyectos" // ID para asegurar el desplazamiento correcto
      className="py-16 bg-gray-100 px-6 scroll-mt-16"
    >
      <div className="container mx-auto">
        {/* Encabezado */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Proyectos Recientes
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Explora algunos de los proyectos que he desarrollado recientemente.
        </motion.p>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white shadow-md cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal con Carrusel */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-lg p-6 max-w-3xl w-full shadow-2xl relative overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón Cerrar */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>

                {/* Carrusel */}
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="w-full h-64 rounded-lg mb-6"
                >
                  {selectedProject.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <motion.img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Contenido */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {selectedProject.description}
                </p>
                <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">
                  Tecnologías Utilizadas:
                </h4>
                <div className="flex justify-center gap-4 text-3xl">
                  {selectedProject.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                    >
                      {tech.icon}
                      <span className="text-sm text-gray-600 mt-2">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
