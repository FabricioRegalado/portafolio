import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="inicio" tabIndex={-1} className="pt-20">
      <div className="section-shell">
        <div className="panel-card overflow-hidden">
          <div className="grid md:grid-cols-2 min-h-[72vh]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-[340px]"
            >
              <OptimizedImage
                image="hero-image"
                sizes="(min-width: 1152px) 536px, (min-width: 768px) 50vw, calc(100vw - 48px)"
                fetchpriority="high"
                alt="Foto de Fabricio"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary p-8 md:p-12 text-secondary flex flex-col justify-center"
            >
              <p className="text-xs uppercase tracking-[0.2em]">Portafolio Personal</p>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">Fabricio Regalado </h1>
              <p className="mt-5 text-lg md:text-xl font-medium">Ingeniero en Informática</p>
              <p className="mt-4 text-sm md:text-base max-w-lg leading-relaxed">
                Ingeniero en Informática y Desarrollador Web. Creo experiencias digitales modernas, funcionales con
                atención al detalle.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="px-6 py-3 rounded-xl bg-white text-primary-ink font-semibold hover:bg-[#f8f8f8] transition"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="px-6 py-3 rounded-xl border border-secondary/70 text-secondary font-semibold hover:bg-white/20 transition inline-flex items-center gap-2"
                >
                  <FaEnvelope />
                  Contacto
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
