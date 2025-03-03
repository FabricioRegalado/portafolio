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

// Datos originales con colores amarillos
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

// Animaciones mejoradas
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const ProgressBar = ({ level }) => (
  <div className="w-full h-3 bg-gray-200 rounded-full mt-2 overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full relative"
      initial={{ width: 0 }}
      animate={{ width: level }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
    </motion.div>
  </div>
);

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl p-6 border-2 border-transparent hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-100/30"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-start space-x-4">
        <div className="text-4xl p-3 bg-yellow-50 rounded-lg">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="transition-transform duration-300"
          >
            {skill.icon}
          </motion.div>
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h4>
          <ProgressBar level={skill.level} />
          <span className="text-sm text-gray-600 mt-2 block">{skill.level}</span>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsCategory = ({ title, icon, subtitle, skills }) => {
  return (
    <div className="mb-16">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center mb-4 space-x-3">
          <span className="text-3xl text-yellow-500">{icon}</span>
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl">{subtitle}</p>
      </motion.div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
        }}
      >
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <motion.section
      id="sobre-mí"
      className="py-28 px-6 scroll-mt-16 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Sobre Mí
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Soy <strong className="text-yellow-500">Ingeniero en Informática</strong> graduado del{" "}
              <strong className="text-yellow-600">Instituto Tecnológico de Ciudad Guzmán</strong>. 
              Especialista en desarrollar soluciones modernas con enfoque full-stack, 
              combinando lo mejor del <strong className="text-yellow-500">Back-end</strong> y{" "}
              <strong className="text-yellow-600">Front-end</strong>.
            </p>
          </div>
        </motion.div>

        <SkillsCategory
          title="Back-end"
          icon={<FaCogs />}
          subtitle="Tecnologías para construir arquitecturas escalables y robustas."
          skills={backendSkills}
        />
        
        <SkillsCategory
          title="Web"
          icon={<FaLaptopCode />}
          subtitle="Creación de interfaces modernas y experiencias de usuario intuitivas."
          skills={webSkills}
        />
      </div>
    </motion.section>
  );
};

export default About;