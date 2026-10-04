export const contactEmail = 'oscarfabricio55@gmail.com';

export const validateContactField = (name, value) => {
  const clean = value.trim();
  if (name === 'nombre') {
    if (!clean) return 'El nombre es obligatorio.';
    if (clean.length < 2) return 'Escribe al menos 2 caracteres.';
  }
  if (name === 'email') {
    if (!clean) return 'El correo es obligatorio.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean)) return 'Ingresa un correo válido, como nombre@ejemplo.com.';
  }
  if (name === 'mensaje') {
    if (!clean) return 'El mensaje es obligatorio.';
    if (clean.length < 10) return 'Escribe al menos 10 caracteres.';
  }
  return '';
};

export const validateContactForm = (data) => Object.fromEntries(
  Object.entries(data).map(([name, value]) => [name, validateContactField(name, value)])
);

export const createEmailDraft = (data) => {
  const subject = `Nuevo mensaje de ${data.nombre.trim()}`;
  const body = `Nombre: ${data.nombre.trim()}\nEmail: ${data.email.trim()}\n\nMensaje:\n${data.mensaje.trim()}`;
  return {
    url: `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    text: `Para: ${contactEmail}\nAsunto: ${subject}\n\n${body}`,
  };
};

export const openEmailDraft = (url) => window.location.assign(url);
