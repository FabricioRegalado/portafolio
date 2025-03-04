import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
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
      { name: "SQL Server", icon: <FaDatabase className="text-gray-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
    images: [
      `${process.env.PUBLIC_URL}/images/san_camilo0.png`,
      `${process.env.PUBLIC_URL}/images/san_camilo1.png`,
      `${process.env.PUBLIC_URL}/images/san_camilo2.png`,
    ],
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
    images: [
      `${process.env.PUBLIC_URL}/images/pd0.png`,
      `${process.env.PUBLIC_URL}/images/pd1.png`,
      `${process.env.PUBLIC_URL}/images/pd2.png`,
    ],
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
    images: [
      `${process.env.PUBLIC_URL}/images/beFitS0.png`,
      `${process.env.PUBLIC_URL}/images/beFitS1.png`,
    ],
  },
  {
    title: "MONCHIES BURGERS App",
    description:
      "Aplicación de pedidos en línea para MONCHIES BURGERS, que permite a los clientes personalizar sus órdenes, explorar el menú interactivo y realizar pedidos vía WhatsApp.",
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
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="proyectos" className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con efecto neón */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold mb-16 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            textShadow: "0 0 20px rgba(255, 255, 0, 0.5)"
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Proyectos Destacados
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
              <div 
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer transform transition-all hover:-translate-y-2 shadow-2xl hover:shadow-yellow-500/20"
                onClick={() => setSelectedProject(project)}
              >
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                
                {/* Imagen principal */}
                <motion.img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Overlay de información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full flex items-center gap-2 text-sm text-gray-200 hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            variants={modalOverlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden border border-slate-600/30 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Carrusel */}
              <Swiper
                navigation={true}
                modules={[Navigation]}
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
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-slate-700/30 backdrop-blur-sm rounded-xl flex flex-col items-center gap-2 hover:bg-slate-700/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-3xl">{tech.icon}</div>
                      <span className="text-sm text-slate-200 font-medium">
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