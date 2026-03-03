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
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col items-center justify-center text-center h-full cursor-default"
      variants={cardVariants}
      whileHover={{ scale: 1.12, y: -8 }}
    >
      <motion.div
        className="relative mb-4"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 0.5 }}
      >
        <motion.div 
          className="text-5xl mb-3 p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20"
          whileHover={{ rotate: 12, scale: 1.1 }}
        >
          {skill.icon}
        </motion.div>
      </motion.div>
      <h4 className="text-sm md:text-base font-bold text-secondary dark:text-white group-hover:text-primary transition-colors">
        {skill.name}
      </h4>
    </motion.div>
  );
};

const About = () => {
  return (
    <motion.section
      id="habilidades"
      className="py-24 px-6 scroll-mt-16 bg-gray-50 dark:bg-gray-900"
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
          <h2 className="text-5xl md:text-6xl font-bold text-secondary dark:text-white mb-4">
            Habilidades y
            <span className="text-primary"> Competencias</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conjunto de habilidades técnicas y competencias profesionales que desarrollo y perfecciono continuamente.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.08, 
                delayChildren: 0.2 
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