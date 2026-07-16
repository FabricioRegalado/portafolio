import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub, FaSearchPlus, FaTimes } from 'react-icons/fa';

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
  {
    title: "Identificador interno de personas relacionadas",
    description:
      "Aplicación (SPA) para identificar personas relacionadas internamente mediante un sistema de búsqueda y visualización de resultados.",
    technologies: ['Vite', 'React', 'Tailwind CSS'],
    image: `${process.env.PUBLIC_URL}/images/MOCKRELACIONADAS.png`,
    demo: '#',
    repo: '#',
  },
  {
    title: "Plataforma interna de evaluación de areas",
    description:
      "Aplicación web para evaluar internamente las áreas de la empresa mediante un sistema de cuestionarios y reportes de resultados.",
    technologies: ['Vite', 'React', 'Tailwind CSS'],
    image: [
      `${process.env.PUBLIC_URL}/images/MOCKEVLUACION1.png`,
      `${process.env.PUBLIC_URL}/images/MOCKEVLUACION2.png`,
      `${process.env.PUBLIC_URL}/images/MOCKEVLUACION3.png`,
      `${process.env.PUBLIC_URL}/images/MOCKEVLUACION4.png`,
    ],
    demo: '#',
    repo: '#',
  },
];

const isValidUrl = (url) => typeof url === 'string' && url.trim() !== '' && url !== '#';

const getProjectImages = (project) => {
  const source = project.images || project.image;
  return Array.isArray(source) ? source : [source];
};

const ProjectActions = ({ project }) => {
  const hasDemo = isValidUrl(project.demo);
  const hasRepo = isValidUrl(project.repo);

  if (!hasDemo && !hasRepo) return null;

  return (
    <div className="mt-auto pt-5 flex flex-wrap gap-2">
      {hasDemo && (
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
      {hasRepo && (
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
  );
};

const ProjectCard = ({ project, index, featured = false, onImageClick }) => {
  const images = getProjectImages(project);
  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  const changeImage = (direction) => {
    setCurrentImage((current) => (current + direction + images.length) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={`group bg-[#2e2a38] border rounded-card overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 ${
        featured ? 'border-primary/40' : 'border-[#3b3647]'
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-56 md:h-64' : 'h-44'}`}>
        <button
          type="button"
          onClick={() => onImageClick(project, currentImage)}
          aria-label={`Ampliar imagen ${currentImage + 1} de ${project.title}`}
          className="absolute inset-0 w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        >
          <img
            key={images[currentImage]}
            src={images[currentImage]}
            alt={`${project.title} - imagen ${currentImage + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <span className="absolute right-3 bottom-3 h-9 w-9 rounded-full bg-[#2e2a38]/90 border border-[#5a536b] text-white grid place-items-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <FaSearchPlus className="text-sm" />
          </span>
        </button>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={() => changeImage(-1)}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#2e2a38]/90 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              type="button"
              onClick={() => changeImage(1)}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#2e2a38]/90 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
            >
              <FaChevronRight className="text-xs" />
            </button>
            <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-1.5">
              {images.map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImage(imageIndex)}
                  aria-label={`Mostrar imagen ${imageIndex + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    currentImage === imageIndex ? 'w-5 bg-primary' : 'w-1.5 bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={`flex flex-col flex-1 ${featured ? 'p-6' : 'p-5'}`}>
        <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-lg'} font-semibold text-white`}>{project.title}</h3>
        <p className={`mt-2 text-sm text-gray-300 leading-relaxed ${featured ? '' : 'line-clamp-3'}`}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={`${project.title}-${tech}`} className="px-2.5 py-1 rounded-full text-xs bg-[#3a3548] text-gray-200">
              {tech}
            </span>
          ))}
        </div>

        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const featuredProjects = projects.filter((project) => isValidUrl(project.demo) || isValidUrl(project.repo)).slice(0, 2);
  const regularProjects = projects.filter((project) => !featuredProjects.includes(project));
  const selectedImages = selectedProject ? getProjectImages(selectedProject) : [];

  const openLightbox = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
  };

  const changeLightboxImage = (direction) => {
    setSelectedImageIndex((current) => (current + direction + selectedImages.length) % selectedImages.length);
  };

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const imageCount = getProjectImages(selectedProject).length;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
      if (event.key === 'ArrowLeft' && imageCount > 1) {
        setSelectedImageIndex((current) => (current - 1 + imageCount) % imageCount);
      }
      if (event.key === 'ArrowRight' && imageCount > 1) {
        setSelectedImageIndex((current) => (current + 1) % imageCount);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="section-dark py-20 md:py-24">
      <div className="section-shell">
        <h2 className="text-3xl md:text-5xl font-bold text-center">Portafolio</h2>
        <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
          Proyectos reales desarrollados con enfoque funcional, visual y técnico.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured
              onImageClick={openLightbox}
            />
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {regularProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onImageClick={openLightbox} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 p-4 md:p-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Vista ampliada de ${selectedProject.title}`}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-full bg-[#2e2a38] border border-[#5a536b] rounded-card overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                autoFocus
                aria-label="Cerrar imagen ampliada"
                className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
              >
                <FaTimes />
              </button>

              <div className="relative max-h-[78vh] bg-[#211e29] flex items-center justify-center">
                <img
                  key={selectedImages[selectedImageIndex]}
                  src={selectedImages[selectedImageIndex]}
                  alt={`${selectedProject.title} - imagen ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-[78vh] object-contain"
                />

                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => changeLightboxImage(-1)}
                      aria-label="Imagen anterior"
                      className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      type="button"
                      onClick={() => changeLightboxImage(1)}
                      aria-label="Imagen siguiente"
                      className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
              <div className="px-5 py-4 flex items-center justify-between gap-4">
                <p className="text-sm md:text-base text-white font-medium">{selectedProject.title}</p>
                {selectedImages.length > 1 && (
                  <span className="text-xs text-gray-300 shrink-0">
                    {selectedImageIndex + 1} / {selectedImages.length}
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
