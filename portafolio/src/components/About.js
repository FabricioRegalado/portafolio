import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaJsSquare,
  FaCogs,
  FaLaptopCode,
} from "react-icons/fa";
import { SiDart, SiFlutter, SiMysql } from "react-icons/si";

// Datos para habilidades (simplificados)
const backendSkills = [
  { name: "C#", level: "85%", icon: <FaCogs className="text-yellow-500" /> },
  { name: "Java", level: "85%", icon: <FaJava className="text-yellow-500" /> },
  { name: "SQL", level: "80%", icon: <SiMysql className="text-yellow-500" /> },
  { name: "Python", level: "70%", icon: <FaPython className="text-yellow-500" /> },
  { name: "JavaScript", level: "70%", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "Dart", level: "65%", icon: <SiDart className="text-yellow-500" /> },
];

const webSkills = [
  { name: "HTML", level: "100%", icon: <FaHtml5 className="text-yellow-500" /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt className="text-yellow-500" /> },
  { name: "Flutter", level: "50%", icon: <SiFlutter className="text-yellow-500" /> },
  { name: "React", level: "50%", icon: <FaReact className="text-yellow-500" /> },
];

// Barra de progreso animada
const ProgressBar = ({ level }) => (
  <div className="w-32 h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
    <motion.div
      className="h-full bg-yellow-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: level }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </div>
);

// Tarjeta de skill refinada y llamativa
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-white to-yellow-50 rounded-lg shadow-sm p-4 flex items-center space-x-4 border-2 border-transparent transition-all hover:shadow-lg hover:border-yellow-400"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-4xl">
        <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.3 }}>
          {skill.icon}
        </motion.div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-gray-800 font-semibold">{skill.name}</h4>
        <ProgressBar level={skill.level} />
      </div>
    </motion.div>
  );
};

// Componente para renderizar cada categoría de habilidades
const SkillsCategory = ({ title, icon, subtitle, skills }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-2">
        {icon} {title}
      </h3>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre-mí" className="py-24 bg-gray-50 px-6 scroll-mt-16">
      <div className="container mx-auto">
        {/* Encabezado */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Sobre Mí
        </motion.h2>
        <motion.div
          className="text-center max-w-3xl mx-auto text-gray-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg leading-relaxed">
            Soy <strong>Ingeniero en Informática</strong> graduado del{" "}
            <strong>Instituto Tecnológico de Ciudad Guzmán</strong>. Me apasiona desarrollar
            soluciones modernas en el <strong>Back-end</strong> y el <strong>Front-end</strong>, utilizando
            tecnologías actualizadas.
          </p>
        </motion.div>
        {/* Categorías de habilidades */}
        <SkillsCategory
          title="Habilidades Back-end"
          icon={<FaCogs className="mr-2 text-yellow-500" />}
          subtitle="Tecnologías para el desarrollo del servidor."
          skills={backendSkills}
        />
        <SkillsCategory
          title="Habilidades Web"
          icon={<FaLaptopCode className="mr-2 text-yellow-500" />}
          subtitle="Herramientas para crear interfaces modernas."
          skills={webSkills}
        />
      </div>
    </section>
  );
};

export default About;
