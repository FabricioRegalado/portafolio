import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

const ProjectLightbox = ({ project, images, initialIndex, trigger, onClose }) => {
  const dialogRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(initialIndex);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [trigger]);

  const changeImage = (direction) => {
    setImageIndex((index) => (index + direction + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      const buttons = dialogRef.current.querySelectorAll('button:not([disabled])');
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    if (images.length > 1 && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog fixed inset-0 m-0 w-full max-w-none h-full max-h-none border-0 bg-transparent p-4 md:p-8 open:flex items-center justify-center"
      aria-label={`Vista ampliada de ${project.title}`}
      aria-modal="true"
      onKeyDown={handleKeyDown}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <motion.div
        className="relative w-full max-w-6xl max-h-full bg-[#2e2a38] border border-[#5a536b] rounded-card overflow-y-auto shadow-2xl text-white"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22 }}
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Cerrar imagen ampliada"
          className="absolute top-3 right-3 z-10 h-11 w-11 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition"
        >
          <FaTimes />
        </button>

        <div className="relative bg-[#211e29] flex items-center justify-center">
          <OptimizedImage
            key={images[imageIndex]}
            image={images[imageIndex]}
            sizes="(min-width: 1280px) 1152px, calc(100vw - 32px)"
            alt={`${project.title} - imagen ${imageIndex + 1}`}
            className="max-w-full max-h-[78vh] w-auto h-auto object-contain"
          />
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => changeImage(-1)} aria-label="Imagen anterior"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition">
                <FaChevronLeft />
              </button>
              <button type="button" onClick={() => changeImage(1)} aria-label="Imagen siguiente"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#2e2a38]/95 border border-[#5a536b] text-white grid place-items-center hover:border-primary transition">
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <p className="text-sm md:text-base font-medium">{project.title}</p>
          <span role="status" className="text-xs text-gray-300 shrink-0">{imageIndex + 1} / {images.length}</span>
        </div>
      </motion.div>
    </dialog>
  );
};

export default ProjectLightbox;
