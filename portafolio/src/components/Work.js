import React from 'react';
import { motion } from 'framer-motion';

const workExperience = [
  {
    company: 'FITA SERVICIOS FINANCIEROS',
    position: 'Analista TI',
    description:
      'Responsable de analisis, implementacion de soluciones tecnologicas. Soporte tecnico especializado en sistemas financieros, gestion de bases de datos y aseguramiento de calidad.',
    period: 'Actualidad',
    skills: ['MySQL', 'Bash', 'Soporte Tecnico', 'Reporteria'],
    responsibilities: [
      'Mantenimiento de aplicaciones financieras',
      'Administracion de bases de datos MySQL',
      'Soporte tecnico a usuarios finales y analisis de problemas',
      'Documentacion tecnica de sistemas y procesos',
      'Participacion en pruebas y validacion de nuevas funcionalidades',
    ],
  },
  {
    company: 'CANVE SA DE CV',
    position: 'Residencia Profesional',
    description:
      'Desarrollo e implementacion de sistema inteligente para prediccion de inventarios utilizando redes neuronales, analisis de datos y modelado estadistico.',
    period: 'Jun 2024 - Dic 2024',
    skills: ['Python', 'Redes Neuronales', 'HTML/CSS', 'JavaScript'],
    responsibilities: [
      'Analisis y preprocesamiento de datos de inventario',
      'Modelado y entrenamiento de redes neuronales',
      'Desarrollo de interfaz web para predicciones',
      'Evaluacion y optimizacion de modelos de ML',
    ],
  },
];

const Work = () => {
  return (
    <section id="experiencia" className="py-20 md:py-24">
      <div className="section-shell">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Mi trayectoria en el mundo de la tecnologia.</p>

        <div className="relative mt-12 space-y-8 md:space-y-12">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#d7d7d7] dark:bg-[#2d374d]" />

          {workExperience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`md:w-[48%] panel-card p-6 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} relative`}
            >
              <div
                className={`hidden md:block absolute top-7 h-3 w-3 rounded-full bg-primary ${
                  index % 2 === 0 ? '-right-[26px]' : '-left-[26px]'
                }`}
              />

              <p className="text-xs uppercase tracking-wide text-primary font-semibold">{job.period}</p>
              <h3 className="mt-2 text-2xl font-bold text-[#1f1f1f] dark:text-white">{job.position}</h3>
              <p className="text-sm text-muted dark:text-gray-300 font-medium">{job.company}</p>
              <p className="mt-4 text-sm text-[#4b5563] dark:text-gray-300 leading-relaxed">{job.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-[#374151] dark:text-gray-300">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={`${job.company}-${skill}`}
                    className="px-3 py-1 rounded-full bg-[#f7f7f7] dark:bg-[#252e40] dark:border-[#35425b] border text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
