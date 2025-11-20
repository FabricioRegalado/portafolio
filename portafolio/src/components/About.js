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
  FaUsers,
  FaComment,
  FaLightbulb,
  FaUserFriends,
  FaBrain,
  FaGitSquare,
  FaAndroid
} from "react-icons/fa";
import { SiDart, SiFlutter, SiMysql } from "react-icons/si";

// Datos unificados con habilidades blandas
const allSkills = [
  // Técnicas
  { name: "C#", icon: <FaCogs className="text-primary dark:text-primary-dark" /> },
  { name: "Java", icon: <FaJava className="text-primary dark:text-primary-dark" /> },
  { name: "SQL", icon: <SiMysql className="text-primary dark:text-primary-dark" /> },
  { name: "Python", icon: <FaPython className="text-primary dark:text-primary-dark" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-primary dark:text-primary-dark" /> },
  { name: "Dart", icon: <SiDart className="text-primary dark:text-primary-dark" /> },
  { name: "HTML", icon: <FaHtml5 className="text-primary dark:text-primary-dark" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-primary dark:text-primary-dark" /> },
  { name: "Flutter", icon: <SiFlutter className="text-primary dark:text-primary-dark" /> },
  { name: "React", icon: <FaReact className="text-primary dark:text-primary-dark" /> },
  { name: "Git", icon: <FaGitSquare className="text-primary dark:text-primary-dark" /> },
  { name: "Kotlin", icon: <FaAndroid className="text-primary dark:text-primary-dark" /> },
  
  // Habilidades blandas
  { name: "Trabajo en equipo", icon: <FaUsers className="text-primary dark:text-primary-dark" /> },
  { name: "Comunicación", icon: <FaComment className="text-primary dark:text-primary-dark" /> },
  { name: "Resolución de problemas", icon: <FaLightbulb className="text-primary dark:text-primary-dark" /> },
  { name: "Liderazgo", icon: <FaUserFriends className="text-primary dark:text-primary-dark" /> },
  { name: "Pensamiento crítico", icon: <FaBrain className="text-primary dark:text-primary-dark" /> },
];

// Animaciones
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 80,
      damping: 15
    } 
  },
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-primary/10 dark:border-gray-700 hover:border-primary/30 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center h-full"
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        rotate: Math.random() * 4 - 2 // Pequeña rotación aleatoria al hacer hover
      }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
        <motion.div 
          className="text-5xl p-5 bg-primary/20 dark:bg-primary-dark/20 rounded-2xl mb-4 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110"
          whileHover={{ rotate: 15 }}
        >
          {skill.icon}
        </motion.div>
      </div>
      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
        {skill.name}
      </h4>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section
      id="habilidades"
      className="py-28 px-6 scroll-mt-16 bg-gradient-to-b from-primary/8 to-white dark:from-gray-900 dark:to-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Habilidades y Competencias
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Conjunto de habilidades técnicas y competencias profesionales que desarrollo y perfecciono continuamente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.1, 
                delayChildren: 0.3 
              } 
            }
          }}
        >
          {allSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;