import { motion } from "framer-motion";
import { SiMysql, SiDart } from "react-icons/si";

const workExperience = [
  {
    company: "FITA SERVICIOS FINANCIEROS",
    position: "Analista TI",
    description:
      "Responsable de análisis, diseño e implementación de soluciones tecnológicas. Soporte técnico especializado en sistemas financieros, gestión de bases de datos y aseguramiento de calidad.",
    period: "Actualidad",
    isCurrent: true,
    skills: [
      { name: "SQL Server" },
      { name: "Dart" },
      { name: "Soporte Técnico" },
      { name: "Análisis de Sistemas" },
    ],
    responsibilities: [
      "Mantenimiento de aplicaciones financieras",
      "Administración de bases de datos SQL Server",
      "Soporte técnico a usuarios finales y análisis de problemas",
      "Documentación técnica de sistemas y procesos",
      "Participación en pruebas de calidad (QA)",
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
      className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Laboral
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Mi trayectoria profesional en tecnología
          </p>
        </motion.div>

        {/* Experiencias */}
        <div className="grid grid-cols-1 gap-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-l-4 border-primary dark:border-primary-dark shadow-xl hover:shadow-2xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Encabezado */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {job.position}
                    </h3>
                    <p className="text-lg text-primary dark:text-primary-dark font-semibold">
                      {job.company}
                    </p>
                  </div>
                  {job.isCurrent && (
                    <motion.span
                      className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Trabajo Actual
                    </motion.span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{job.period}</p>
              </div>

              {/* Descripción */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {job.description}
              </p>

              {/* Grid de responsabilidades y tecnologías */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Responsabilidades */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                    Responsabilidades
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-primary dark:text-primary-dark font-bold flex-shrink-0 mt-0.5">
                          •
                        </span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tecnologías */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 dark:border-primary-dark/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
