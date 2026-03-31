import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const details = [
  { label: 'Nombre', value: 'Oscar Fabricio Regalado Perez' },
  { label: 'Perfil', value: 'Ingeniero en Informatica' },
  { label: 'Email', value: 'oscarfabricio55@gmail.com' },
  { label: 'GitHub', value: 'github.com/FabricioRegalado' },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 md:py-24">
      <div className="section-shell">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-title"
        >
          Sobre Mi
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 panel-card p-6 md:p-10"
        >
          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-start">
            <div className="mx-auto md:mx-0 w-[190px] h-[190px] rounded-full border-4 border-primary overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`}
                alt="Retrato de Fabricio"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-muted dark:text-gray-300 leading-relaxed">
                Ingeniero en Informatica y Desarrollador Web. Creo experiencias digitales modernas, funcionales con
                atencion al detalle.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {details.map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#e8e8e8] dark:border-[#343e52] p-4">
                    <p className="text-xs uppercase tracking-wide text-muted dark:text-gray-400">{item.label}</p>
                    <p className="mt-1 text-sm md:text-base text-[#1f1f1f] dark:text-gray-100 font-medium break-words">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="mailto:oscarfabricio55@gmail.com"
                  className="h-10 w-10 rounded-xl border border-[#e2e2e2] dark:border-[#39445a] grid place-items-center text-[#444] dark:text-gray-200 hover:text-primary hover:border-primary transition"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://github.com/FabricioRegalado"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-[#e2e2e2] dark:border-[#39445a] grid place-items-center text-[#444] dark:text-gray-200 hover:text-primary hover:border-primary transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/oscar-fabricio-regalado-p%C3%A9rez-90181b225/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl border border-[#e2e2e2] dark:border-[#39445a] grid place-items-center text-[#444] dark:text-gray-200 hover:text-primary hover:border-primary transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
