import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importación correcta de módulos


import "swiper/css";
import "swiper/css/effect-coverflow";
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
  FaGithubSquare,
  FaTimes,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiVite } from "react-icons/si";


const projects = [
  {
    title: "Sistema Inteligente de Gestión de Inventarios",
    description:
      "Sistema avanzado para predecir el comportamiento del inventario utilizando modelos estadísticos y Machine Learning.",
    technologies: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-primary dark:text-primary-dark" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-gray-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/san_camilo0.png`,
      `${process.env.PUBLIC_URL}/images/san_camilo1.png`,
      `${process.env.PUBLIC_URL}/images/san_camilo2.png`,
    ],
    repo: "#",
  },
  {
    title: "Plataforma de Gestión de Pedidos",
    description:
      "Aplicación interactiva para gestionar pedidos con panel de control, autenticación y gráficos dinámicos.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/pd0.png`,
      `${process.env.PUBLIC_URL}/images/pd1.png`,
      `${process.env.PUBLIC_URL}/images/pd2.png`,
    ],
    repo: "#",
  },
  {
    title: "SPA - Catálogo BE FIT SUPPLEMENTS",
    description:
      "Aplicación de una sola página (SPA) para explorar un catálogo de suplementos con filtrado dinámico y contacto directo por WhatsApp.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/beFitS0.png`,
      `${process.env.PUBLIC_URL}/images/beFitS1.png`,
    ],
    repo: "#",
  },
  {
    title: "MONCHIES BURGERS - App de Pedidos Online",
    description:
      "Aplicación para realizar pedidos personalizados en línea, explorar el menú interactivo y realizar órdenes vía WhatsApp.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/burg0.png`,
      `${process.env.PUBLIC_URL}/images/burg1.png`,
      `${process.env.PUBLIC_URL}/images/burg3.png`,
      `${process.env.PUBLIC_URL}/images/burg4.png`,
    ],
    repo: "#",
  },
  {
    title: "Asesorados Gym - App de Entrenamientos Personalizados",
    description:
      "Aplicación para crear entrenamientos personalizados en musculación, con planes semanales, series, repeticiones y videos de ejemplo.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Vite", icon: <SiVite className="text-violet-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "GitHub Pages", icon: <FaGithubSquare className="text-white" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/gym0.png`,
      `${process.env.PUBLIC_URL}/images/gym1.png`,
      `${process.env.PUBLIC_URL}/images/gym2.png`,
      `${process.env.PUBLIC_URL}/images/gym3.png`,
    ],
    repo: "#",
  },
  {
    title: "Dashboard de Gestión Empresarial",
    description:
      "Plataforma integral para la gestión de la tienda de suplementos Be Fit, funcionando como un sistema de punto de venta con análisis de datos, reportes dinámicos y autenticación segura.",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/beFitPunto.png`,
      `${process.env.PUBLIC_URL}/images/beFitPunto1.png`,
      `${process.env.PUBLIC_URL}/images/beFitPunto2.png`,
    ],
    repo: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Animación de tarjeta
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  };

  // Animación de fondo modal
  const modalOverlay = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="proyectos" className="relative min-h-screen bg-white dark:bg-gray-900 py-20 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-primary dark:text-primary-dark">Proyectos</span> Destacados
        </motion.h2>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <article
                className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transform transition-all"
                onClick={() => setSelectedProject(project)}
              >
                {/* Skeleton until image loads */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}

                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onLoad={() => setLoadedImages((s) => ({ ...s, [index]: true }))}
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 50 }} // Added exit animation to slide down
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl relative transition-colors"
              initial={{ scale: 0.9, opacity: 0, y: -20 }} // Adjusted initial position slightly higher
              animate={{ scale: 1, opacity: 1, y: 0 }} // Adjusted animation to settle slightly lower
              exit={{ scale: 0.9, opacity: 0, y: 50 }} // Added exit animation to slide down
              onClick={(e) => e.stopPropagation()}
            >
              {/* Move close button inside modal content */}
              <div className="relative">
                <button
                  className="absolute top-4 right-4 z-50 text-gray-600 dark:text-gray-200 bg-gray-100/60 dark:bg-gray-700/60 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 transition-colors sm:top-4 sm:right-4 md:top-4 md:right-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              {/* Carrusel */}
              <Swiper
                navigation={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Configuración de autoplay
                modules={[Navigation, Autoplay]} // Agregar Autoplay a los módulos
                className="h-96 w-full"
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Contenido del modal */}
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gray-100 dark:bg-gray-700 backdrop-blur-sm rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-3xl">{tech.icon}</div>
                      <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
                

              </div>
            </motion.div>
          </motion.div>
          
        )}
        
      </AnimatePresence>
    </section>
  );
};

export default Projects;