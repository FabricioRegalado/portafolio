import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'C#',
  'Java',
  'SQL',
  'Python',
  'JavaScript',
  'Dart',
  'HTML',
  'CSS',
  'Flutter',
  'React',
  'Git',
  'Kotlin',
  'Trabajo en equipo',
  'Comunicacion',
  'Resolucion de problemas',
  'Liderazgo',
  'Pensamiento critico',
];

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 md:py-24 bg-[#ededed] dark:bg-[#131826] transition-colors duration-300">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-title"
        >
          Habilidades
        </motion.h2>

        <p className="section-subtitle">
          Conjunto de habilidades tecnicas y competencias profesionales que desarrollo y perfecciono continuamente.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.02 }}
              className="panel-card px-4 py-3 text-sm font-medium text-[#2d2d2d] dark:text-gray-100 hover:border-primary hover:text-primary transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
