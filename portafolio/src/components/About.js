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
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import { SiDart, SiFlutter, SiMysql } from "react-icons/si";

// Datos para habilidades
const backendSkills = [
  { name: "C#", level: "85%", icon: <FaCogs className="text-purple-600" /> },
  { name: "Java", level: "85%", icon: <FaJava className="text-red-500" /> },
  { name: "SQL", level: "80%", icon: <SiMysql className="text-blue-500" /> },
  { name: "Python", level: "70%", icon: <FaPython className="text-yellow-500" /> },
  { name: "JavaScript", level: "70%", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Dart", level: "65%", icon: <SiDart className="text-blue-400" /> },
];

const webSkills = [
  { name: "HTML", level: "100%", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Flutter", level: "50%", icon: <SiFlutter className="text-blue-400" /> },
  { name: "React", level: "50%", icon: <FaReact className="text-blue-500" /> },
];

// Componente para renderizar una categoría de habilidades
const SkillsCategory = ({ title, icon, subtitle, skills }) => {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-2">
        {icon} {title}
      </h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icono con fondo circular */}
            <div className="flex items-center justify-center text-5xl mb-2">
              <div className="bg-gray-100 p-3 rounded-full">{skill.icon}</div>
            </div>
            {/* Nombre */}
            <h4 className="text-lg font-semibold text-center text-gray-700 mb-2">
              {skill.name}
            </h4>
            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.2 }}
              />
            </div>
            {/* Porcentaje */}
            <p className="text-gray-600 mt-2 text-center">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="sobre-mí" // Asegúrate de que este ID coincida con el enlace en el Navbar
      className="py-24 bg-gray-50 px-6 scroll-mt-16"
    >
      <div className="container mx-auto">
        {/* Encabezado animado */}
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
          <p className="text-lg leading-relaxed mb-4">
            Soy <strong>Ingeniero en Informática</strong> graduado del{" "}
            <strong>Instituto Tecnológico de Ciudad Guzmán</strong>. Me apasiona desarrollar
            soluciones modernas y adaptables tanto en el <strong>Back-end</strong> como en
            el <strong>Front-end</strong>, usando tecnologías actualizadas.
          </p>
          <p className="text-lg leading-relaxed">
            Mi objetivo es crear aplicaciones eficientes que resuelvan problemas reales y
            ofrezcan una excelente experiencia al usuario.
          </p>
        </motion.div>

        {/* Habilidades Back-end */}
        <SkillsCategory
          title="Habilidades Back-end"
          icon={<FaCogs className="mr-2 text-yellow-500" />}
          subtitle="Tecnologías que domino para crear soluciones robustas y escalables en el servidor."
          skills={backendSkills}
        />

        {/* Habilidades Web */}
        <SkillsCategory
          title="Habilidades Web"
          icon={<FaLaptopCode className="mr-2 text-yellow-500" />}
          subtitle="Herramientas modernas para desarrollar interfaces atractivas y responsivas."
          skills={webSkills}
        />
      </div>
    </section>
  );
};

export default About;
