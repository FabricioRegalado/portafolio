import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Sistema Inteligente de Gestión de Inventarios',
    description:
      'Sistema avanzado para predecir el comportamiento del inventario utilizando modelos estadísticos y Machine Learning.',
    technologies: ['Python', 'JavaScript', 'SQL Server', 'HTML', 'Bootstrap'],
    image: `${process.env.PUBLIC_URL}/images/san_camilo0.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'Plataforma de Gestión de Pedidos',
    description: 'Aplicación interactiva para gestionar pedidos con panel de control, autenticación y gráficos dinámicos.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: `${process.env.PUBLIC_URL}/images/pd0.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'SPA - Catálogo BE FIT SUPPLEMENTS',
    description:
      'Aplicación de una sola página (SPA) para explorar un catálogo de suplementos con filtrado dinámico y contacto directo por WhatsApp.',
    technologies: ['React', 'Node.js', 'Bootstrap', 'WhatsApp'],
    image: `${process.env.PUBLIC_URL}/images/beFitS0.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'MONCHIES BURGERS - App de Pedidos Online',
    description:
      'Aplicación para realizar pedidos personalizados en línea, explorar el menú interactivo y realizar órdenes vía WhatsApp.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'WhatsApp'],
    image: `${process.env.PUBLIC_URL}/images/burg0.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'Asesorados Gym - App de Entrenamientos Personalizados',
    description:
      'Aplicación para crear entrenamientos personalizados en musculación, con planes semanales, series, repeticiones y videos de ejemplo.',
    technologies: ['React', 'Vite', 'Node.js', 'Tailwind CSS', 'GitHub Pages'],
    image: `${process.env.PUBLIC_URL}/images/gym0.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'Dashboard de Gestión Empresarial',
    description:
      'Plataforma integral para la gestión de la tienda de suplementos Be Fit, funcionando como un sistema de punto de venta con análisis de datos, reportes dinámicos y autenticación segura.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: `${process.env.PUBLIC_URL}/images/beFitPunto.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: 'SPA Catálogo Scian - Actividad BMX',
    description:
      'Plataforma de una sola página que vincula el catálogo SCIAN con actividades de BMX, mostrando en el buscador solo los elementos que coinciden entre ambas clasificaciones.',
    technologies: ['Vite', 'React', 'Python', 'Node.js'],
    image: `${process.env.PUBLIC_URL}/images/CatMok1.png`,
    demo: 'https://fabricioregalado.github.io/catalogo-scian-bmx/',
    repo: '#',
  },
  {
    title: 'Generador de Tokens CONDUSEF - REUNE / REDECO',
    description:
      'Aplicación web para la generación y renovación de tokens de CONDUSEF (REUNE y REDECO) mediante consumo de API.',
    technologies: ['Vite', 'React', 'Tailwind CSS', 'Express.js'],
    image: `${process.env.PUBLIC_URL}/images/MokTokens1.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: "SPA Catálogo Repostería Garcia's",
    description:
      "Aplicación de una sola página para explorar el catálogo de productos de Repostería Garcia's con enlace directo a Instagram.",
    technologies: ['Vite', 'React', 'Tailwind CSS'],
    image: `${process.env.PUBLIC_URL}/images/MokReposteria1.png`,
    demo: 'https://fabricioregalado.github.io/reposteria-garcias/',
    repo: '#',
  },
];

const isValidUrl = (url) => typeof url === 'string' && url.trim() !== '' && url !== '#';

const Projects = () => {
  return (
    <section id="proyectos" className="section-dark py-20 md:py-24">
      <div className="section-shell">
        <h2 className="text-3xl md:text-5xl font-bold text-center">Portafolio</h2>
        <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
          Proyectos reales desarrollados con enfoque funcional, visual y técnico.
        </p>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="bg-[#2e2a38] border border-[#3b3647] rounded-card overflow-hidden hover:-translate-y-1 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-44 object-cover" loading="lazy" />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={`${project.title}-${tech}`} className="px-2.5 py-1 rounded-full text-xs bg-[#3a3548] text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {(isValidUrl(project.demo) || isValidUrl(project.repo)) && (
                  <div className="mt-4 flex gap-2">
                    {isValidUrl(project.demo) && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-primary text-white hover:bg-primary-light transition"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    )}
                    {isValidUrl(project.repo) && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-[#5a536b] text-gray-100 hover:border-primary transition"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
