import { motion } from "framer-motion";

const workExperience = [
  {
    company: "FITA SERVICIOS FINANCIEROS",
    position: "Analista TI",
    description:
      "Responsable de análisis, implementación de soluciones tecnológicas. Soporte técnico especializado en sistemas financieros, gestión de bases de datos y aseguramiento de calidad.",
    period: "Actualidad",
    isCurrent: true,
    skills: [
      { name: "MySQL" },
      { name: "Bash" },
      { name: "Soporte Técnico" },
      { name: "Reportería" },
    ],
    responsibilities: [
      "Mantenimiento de aplicaciones financieras",
      "Administración de bases de datos MySQL",
      "Soporte técnico a usuarios finales y análisis de problemas",
      "Documentación técnica de sistemas y procesos",
      "Participación en pruebas y validación de nuevas funcionalidades",
    ],
  },
  {
    company: "CANVE SA DE CV",
    position: "Residencia Profesional",
    description:
      "Desarrollo e implementación de sistema inteligente para predicción de inventarios utilizando redes neuronales, análisis de datos y modelado estadístico.",
    period: "Jun 2024 - Dic 2024",
    isCurrent: false,
    skills: [
      { name: "Python" },
      { name: "Redes Neuronales" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
    responsibilities: [
      "Análisis y preprocesamiento de datos de inventario",
      "Modelado y entrenamiento de redes neuronales",
      "Desarrollo de interfaz web para predicciones",
      "Evaluación y optimización de modelos de ML",
    ],
  },
];

const Work = () => {
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
    <section
      id="experiencia"
      className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Decorative blur elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/8 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-secondary dark:text-white mb-4">
            Experiencia
            <span className="text-primary"> Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Mi trayectoria en el mundo de la tecnología
          </p>
        </motion.div>

        {/* Experiencias */}
        <div className="space-y-12 relative">
          {/* Enhanced Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 transform -translate-x-1/2"></div>

          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className={`md:flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline indicator */}
              <div className="hidden md:flex md:w-1/2 justify-center">
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-primary/40 blur-lg rounded-full w-6 h-6"></div>
                  <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg mt-8"></div>
                </motion.div>
              </div>

              {/* Experience card */}
              <div className="md:w-1/2">
                <motion.div
                  className="group relative bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 border border-gray-700 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 group-hover:from-primary/15 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                            {job.position.split(' ').slice(0, -1).join(' ') && (
                              <span className="text-gray-300">
                                {job.position.split(' ').slice(0, -1).join(' ')}
                              </span>
                            )}
                            <span className="text-primary"> {job.position.split(' ').pop()}</span>
                          </h3>
                          <p className="text-lg text-primary font-semibold">{job.company}</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-col items-start md:items-end gap-2"
                        >
                          {job.isCurrent && (
                            <motion.span
                              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/40 to-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold border border-primary/50 backdrop-blur-sm"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                              Trabajo Actual
                            </motion.span>
                          )}
                          <span className="text-sm font-bold text-primary bg-primary/20 px-3 py-1 rounded-full border border-primary/40">
                            {job.period}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-300 dark:text-gray-400 mb-8 leading-relaxed text-base"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {job.description}
                    </motion.p>

                    {/* Responsibilities and Skills */}
                    <div className="space-y-8">
                      {/* Responsibilities */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="font-bold text-white dark:text-white mb-4 text-lg flex items-center gap-3">
                          <span className="text-primary">◆</span>
                          Responsabilidades
                        </h4>
                        <ul className="space-y-3 pl-2">
                          {job.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              className="text-gray-300 dark:text-gray-400 flex items-start gap-3 group/item"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                            >
                              <span className="text-primary font-bold flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-300">
                                ✓
                              </span>
                              <span className="group-hover/item:text-primary transition-colors duration-300">
                                {resp}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Skills */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="font-bold text-white dark:text-white mb-4 text-lg flex items-center gap-3">
                          <span className="text-primary">◆</span>
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {job.skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              className="relative group/skill"
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + idx * 0.1 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full blur opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative bg-primary/20 dark:bg-primary/25 text-primary dark:text-primary-light px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-primary/50 dark:border-primary/60 hover:border-primary transition-all duration-300 backdrop-blur-sm">
                                {skill.name}
                              </div>
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
