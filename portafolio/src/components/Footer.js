import React, { useState } from 'react';
import { sileo } from 'sileo';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [sending, setSending] = useState(false);
  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  });
  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const validateField = (name, value) => {
    const clean = value.trim();

    if (name === 'nombre') {
      if (!clean) return 'El nombre es obligatorio.';
      if (clean.length < 2) return 'El nombre es muy corto.';
      return '';
    }

    if (name === 'email') {
      if (!clean) return 'El correo es obligatorio.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return 'Ingresa un correo valido.';
      return '';
    }

    if (name === 'mensaje') {
      if (!clean) return 'El mensaje es obligatorio.';
      if (clean.length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
      return '';
    }

    return '';
  };

  const validateForm = (data) => ({
    nombre: validateField('nombre', data.nombre),
    email: validateField('email', data.email),
    mensaje: validateField('mensaje', data.mensaje),
  });

  const getInputStateClass = (name) => {
    if (!touched[name]) return 'border-[#4b4560] focus:border-primary';
    if (errors[name]) return 'border-red-400 focus:border-red-400 bg-red-500/10';
    return 'border-emerald-400 focus:border-emerald-400 bg-emerald-500/10';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (touched[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validateField(name, value),
        }));
      }
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: fieldError }));

    if (fieldError) {
      sileo.warning({
        title: 'Campo por corregir',
        description: fieldError,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = {
      nombre: formData.nombre.trim(),
      email: formData.email.trim(),
      mensaje: formData.mensaje.trim(),
    };
    const nextErrors = validateForm(trimmed);
    const firstError = Object.values(nextErrors).find(Boolean);

    setTouched({ nombre: true, email: true, mensaje: true });
    setErrors(nextErrors);

    if (firstError) {
      sileo.warning({
        title: 'Formulario incompleto',
        description: firstError,
      });
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Nuevo mensaje de ${trimmed.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${trimmed.nombre}\nEmail: ${trimmed.email}\n\nMensaje:\n${trimmed.mensaje}`
    );

    const openMailClient = new Promise((resolve, reject) => {
      try {
        window.location.href = `mailto:oscarfabricio55@gmail.com?subject=${subject}&body=${body}`;
        setTimeout(resolve, 300);
      } catch (error) {
        reject(error);
      }
    });

    sileo
      .promise(openMailClient, {
        loading: { title: 'Preparando envio...' },
        success: {
          title: 'Correo listo',
          description: 'Confirma el envio en tu cliente de correo.',
        },
        error: { title: 'No se pudo abrir el correo' },
      })
      .finally(() => setSending(false));
  };

  return (
    <footer id="contacto" className="section-dark py-20 border-t border-[#3b3647]">
      <div className="section-shell">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contacto</h2>
        <p className="mt-3 text-center text-gray-300 max-w-2xl mx-auto">
          Tienes un proyecto en mente? Escribeme y conversemos.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="bg-[#2e2a38] border border-[#3b3647] rounded-card p-6">
            <h3 className="text-xl font-semibold text-white">Informacion</h3>
            <div className="mt-4 w-24 h-24 rounded-xl border border-[#5a536b] bg-[#262232] p-2 grid place-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/LOGO2026.png`}
                alt="Logo personal"
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-gray-300">Oscar Fabricio Regalado Perez</p>
            <a href="mailto:oscarfabricio55@gmail.com" className="mt-1 block text-sm text-primary hover:text-primary-light">
              oscarfabricio55@gmail.com
            </a>
            <div className="mt-5 flex gap-3 text-gray-200">
              <a
                href="https://github.com/FabricioRegalado"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-xl border border-[#5a536b] grid place-items-center hover:border-primary hover:text-primary transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/fabricio_ouo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-xl border border-[#5a536b] grid place-items-center hover:border-primary hover:text-primary transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/oscar-fabricio-regalado-p%C3%A9rez-90181b225/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-xl border border-[#5a536b] grid place-items-center hover:border-primary hover:text-primary transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:oscarfabricio55@gmail.com"
                aria-label="Correo"
                className="h-10 w-10 rounded-xl border border-[#5a536b] grid place-items-center hover:border-primary hover:text-primary transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#2e2a38] border border-[#3b3647] rounded-card p-6 grid gap-3"
          >
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-white">Enviame un mensaje</h3>
              <p className="text-sm text-gray-400 mt-1">Te abrire tu cliente de correo con el mensaje listo.</p>
            </div>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-11 px-3 rounded-lg bg-[#262232] border text-sm text-white placeholder:text-gray-400 focus:outline-none transition ${getInputStateClass(
                'nombre'
              )}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-11 px-3 rounded-lg bg-[#262232] border text-sm text-white placeholder:text-gray-400 focus:outline-none transition ${getInputStateClass(
                'email'
              )}`}
            />
            <textarea
              rows="4"
              name="mensaje"
              placeholder="Tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 rounded-lg bg-[#262232] border text-sm text-white placeholder:text-gray-400 focus:outline-none transition ${getInputStateClass(
                'mensaje'
              )}`}
            />
            <button
              type="submit"
              disabled={sending}
              className="mt-2 h-11 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>

        <p className="mt-10 text-center text-xs text-gray-400">
          (c) {new Date().getFullYear()} Oscar Fabricio Regalado Perez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
