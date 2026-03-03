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
  FaExternalLinkAlt,
  FaGithubSquare,
  FaTimes,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";


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
    demo: "#",
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
    demo: "#",
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
    demo: "#",
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
    demo: "#",
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
    demo: "#",
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
    demo: "#",
    repo: "#",
  },
  {
    title: "SPA Catálogo Scian - Actividad BMX",
    description:
      "Plataforma de una sola página que vincula el catálogo SCIAN con actividades de BMX, mostrando en el buscador solo los elementos que coinciden entre ambas clasificaciones. Utiliza filtrado dinámico para facilitar la exploración de la intersección entre SCIAN y BMX.",
    technologies: [
      { name: "Vite", icon: <SiVite className="text-violet-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/catMok1.png`,
      `${process.env.PUBLIC_URL}/images/catMok2.png`,
      `${process.env.PUBLIC_URL}/images/catMok3.png`,
    ],
    demo: "https://fabricioregalado.github.io/catalogo-scian-bmx/",
    repo: "#",
  },
  {
    title: "Generador de Tokens CONDUSEF - REUNE / REDECO",
    description:
      "Aplicación web para la generación y renovación de tokens de CONDUSEF (REUNE y REDECO) mediante consumo de API. Incluye envío automático de tokens por correo electrónico a usuarios seleccionados y un flujo seguro para la gestión de credenciales e información.",
    technologies: [
      { name: "Vite", icon: <SiVite className="text-violet-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-green-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/MokTokens1.png`,
      
    ],
    demo: "#",
    repo: "#",
  },
  {
    title: "SPA Catálogo Repostería Garcia's",
    description:
      "Aplicación de una sola página para explorar el catálogo de productos de Repostería Garcia's. Incluye tarjetas interactivas con enlace directo a Instagram para facilitar el contacto y la consulta de pedidos.",
    technologies: [
      { name: "Vite", icon: <SiVite className="text-violet-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/MokReposteria1.png`,
      `${process.env.PUBLIC_URL}/images/MokReposteria2.png`,
      
    ],
    demo: "https://fabricioregalado.github.io/reposteria-garcias/",
    repo: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const hasValidUrl = (url) => typeof url === "string" && url.trim() !== "" && url !== "#";

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <section id="proyectos" className="relative min-h-screen bg-gray-50 dark:bg-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-secondary dark:text-white">
            Proyectos
            <span className="text-primary"> Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trabajos realizados con dedicación y atención al detalle
          </p>
        </motion.div>

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
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:border-primary/50 dark:hover:border-primary/40"
                onClick={() => setSelectedProject(project)}
              >
                {/* Imagen con overlay */}
                {!loadedImages[index] && (
                  <div className="w-full h-56 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}

                <div className="relative overflow-hidden h-56 bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    loading="lazy"
                    onLoad={() => setLoadedImages((s) => ({ ...s, [index]: true }))}
                  />
                  {/* Overlay animado */}
                  <motion.div
                    className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0.5 }}
                      whileHover={{ scale: 1 }}
                    >
                      +
                    </motion.div>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-secondary dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center gap-1.5 text-xs text-primary dark:text-primary-light"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs text-gray-600 dark:text-gray-400">
                        +{project.technologies.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl md:max-w-4xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl my-6"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 text-secondary dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 transition"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes className="text-lg" />
                </button>

                <Swiper
                  navigation={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  modules={[Navigation, Autoplay]}
                  className="w-full h-48 sm:h-64 md:h-96"
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
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 max-h-96 md:max-h-none overflow-y-auto md:overflow-y-visible">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-2 sm:mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {(hasValidUrl(selectedProject.demo) || hasValidUrl(selectedProject.repo)) && (
                  <div className="flex flex-wrap gap-3">
                    {hasValidUrl(selectedProject.demo) && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Ver demo
                      </a>
                    )}
                    {hasValidUrl(selectedProject.repo) && (
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition"
                      >
                        <FaGithubSquare className="text-lg" />
                        Ver repositorio
                      </a>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-base sm:text-lg md:text-lg font-semibold text-secondary dark:text-white mb-3 sm:mb-4">
                    Tecnologías utilizadas
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col items-center gap-1 sm:gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-xl sm:text-2xl">{tech.icon}</div>
                        <span className="text-xs text-center text-secondary dark:text-gray-200 font-medium line-clamp-1">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
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