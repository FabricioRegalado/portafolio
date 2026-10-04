import React, { useRef, useState } from 'react';
import { sileo } from 'sileo';
import { FaArrowRight, FaArrowUp, FaCheck, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaRegComment, FaUser } from 'react-icons/fa';
import { createEmailDraft, openEmailDraft, validateContactField, validateContactForm } from '../utils/contact';

const fields = [
  { name: 'nombre', label: 'Nombre', icon: FaUser, type: 'text', autoComplete: 'name', placeholder: '¿Cómo te llamas?', maxLength: 100 },
  { name: 'email', label: 'Correo electrónico', icon: FaEnvelope, type: 'email', autoComplete: 'email', placeholder: 'nombre@ejemplo.com', maxLength: 254 },
  { name: 'mensaje', label: 'Mensaje', icon: FaRegComment, placeholder: 'Cuéntame qué tienes en mente y cómo puedo ayudarte…', maxLength: 2000 },
];

const socialLinks = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/FabricioRegalado' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/oscar-fabricio-regalado-p%C3%A9rez-90181b225/' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/fabricio_ouo/' },
];

const Footer = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState('');

  const getInputStateClass = (name) => {
    if (!touched[name]) return 'border-[#8e8598] hover:border-[#685f73] focus:border-primary-ink';
    if (errors[name]) return 'border-red-700 focus:border-red-700 bg-red-50';
    return 'border-emerald-700 focus:border-emerald-700';
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (touched[name]) setErrors((previous) => ({ ...previous, [name]: validateContactField(name, value) }));
    setDraft(null);
    setStatus('');
  };

  const handleBlur = ({ target: { name, value } }) => {
    setTouched((previous) => ({ ...previous, [name]: true }));
    setErrors((previous) => ({ ...previous, [name]: validateContactField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(formData);
    const firstInvalid = Object.keys(nextErrors).find((name) => nextErrors[name]);
    setTouched({ nombre: true, email: true, mensaje: true });
    setErrors(nextErrors);
    if (firstInvalid) {
      formRef.current.elements.namedItem(firstInvalid).focus();
      sileo.warning({ title: 'Revisa el formulario', description: nextErrors[firstInvalid] });
      return;
    }

    const emailDraft = createEmailDraft(formData);
    setDraft(emailDraft);
    sileo.info({ title: 'Preparando correo', description: 'Revisa el borrador y confirma el envío en tu aplicación de correo.' });
    try {
      openEmailDraft(emailDraft.url);
      setStatus('Se solicitó abrir tu aplicación de correo. Revisa el borrador y envíalo allí. Si no se abre, puedes copiar el mensaje.');
    } catch {
      setStatus('No fue posible abrir la aplicación de correo. Puedes copiar el mensaje y enviarlo desde tu correo habitual.');
      sileo.error({ title: 'No se pudo abrir el correo', description: 'Tu borrador sigue disponible para copiarlo.' });
    }
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft.text);
      setStatus('Borrador copiado. Pégalo en tu aplicación de correo y confirma el envío allí.');
    } catch {
      setStatus('No se pudo copiar automáticamente. Abre «Ver borrador» para seleccionar y copiar el texto.');
    }
  };

  return (
    <footer id="contacto" tabIndex={-1} className="section-dark relative overflow-hidden border-t border-white/10">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="section-shell relative pt-16 md:pt-24 pb-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className="min-w-0 lg:py-8">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
              <span aria-hidden="true" className="h-px w-8 bg-primary-light" />
              Contacto
            </p>
            <h2 className="mt-6 text-4xl sm:text-5xl xl:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white">
              Hablemos de tu<br />
              <span className="text-primary-light">próximo proyecto.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">
              ¿Una idea, una colaboración o una oportunidad profesional?
              Cuéntame qué tienes en mente y demos el primer paso.
            </p>

            <a
              href="mailto:oscarfabricio55@gmail.com"
              className="group mt-8 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-4 transition hover:border-primary hover:bg-white/10"
            >
              <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-light">
                <FaEnvelope className="text-lg" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-gray-300">Escríbeme directamente</span>
                <span className="mt-1 block break-all text-sm font-semibold text-white">oscarfabricio55@gmail.com</span>
              </span>
              <FaArrowRight aria-hidden="true" className="shrink-0 text-primary-light transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-8">
              <p className="text-sm text-gray-300">También podemos conectar en</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-4 text-sm text-gray-200 transition hover:border-primary hover:text-primary-light">
                    <Icon aria-hidden="true" className="text-base" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form-help contact-mail-help"
            className="contact-form min-w-0 rounded-3xl border-t-4 border-primary bg-[#faf9f7] p-6 sm:p-8 text-[#25222d] shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
          >
            <div className="mb-7">
              <h3 id="contact-form-title" className="text-2xl sm:text-3xl font-bold tracking-tight">Cuéntame tu idea</h3>
              <p id="contact-form-help" className="mt-2 text-sm leading-relaxed text-[#625a6c]">
                Déjame tus datos y los detalles. Todos los campos son obligatorios.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map(({ name, label, icon: Icon, ...attributes }) => {
                const Field = name === 'mensaje' ? 'textarea' : 'input';
                const error = touched[name] && errors[name];
                const isValid = touched[name] && !errors[name];
                return (
                  <div key={name} className={name === 'mensaje' ? 'sm:col-span-2' : 'min-w-0'}>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <label htmlFor={`contact-${name}`} className="text-sm font-semibold">{label}</label>
                      {name === 'mensaje' && (
                        <span aria-hidden="true" className="text-xs tabular-nums text-[#625a6c]">{formData.mensaje.length} / 2000</span>
                      )}
                    </div>
                    <div className="group relative">
                      <Icon aria-hidden="true" className="pointer-events-none absolute left-4 top-[18px] text-sm text-[#706779] transition-colors group-focus-within:text-primary-ink" />
                      <Field
                        {...attributes}
                        id={`contact-${name}`}
                        name={name}
                        rows={name === 'mensaje' ? 5 : undefined}
                        required
                        value={formData[name]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `contact-${name}-error` : undefined}
                        className={`block w-full rounded-xl border bg-white pl-11 pr-9 py-3.5 text-base sm:text-sm leading-relaxed text-[#25222d] placeholder:text-[#706779] transition-colors ${name === 'mensaje' ? 'min-h-[156px] resize-y' : 'h-[52px]'} ${getInputStateClass(name)}`}
                      />
                      {isValid && <FaCheck aria-hidden="true" className="pointer-events-none absolute right-3 top-[19px] text-xs text-emerald-700" />}
                    </div>
                    {error && <p id={`contact-${name}-error`} className="mt-2 text-sm text-red-800" aria-live="polite">{error}</p>}
                  </div>
                );
              })}
            </div>
            <button type="submit" className="group mt-6 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-secondary shadow-sm transition hover:bg-primary-light hover:shadow-md">
              Preparar correo
              <FaArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </button>
            <p id="contact-mail-help" className="mt-3 text-center text-xs leading-relaxed text-[#625a6c]">
              Se abrirá tu aplicación de correo para que confirmes el envío.
            </p>
            <p role="status" aria-live="polite" className={status ? 'mt-5 rounded-xl border border-[#b9afbf] bg-white p-4 text-sm leading-relaxed text-[#463d51]' : 'sr-only'}>{status}</p>
            {draft && (
              <div className="mt-4 space-y-3">
                <button type="button" onClick={copyDraft} className="min-h-11 rounded-xl border border-primary-ink px-4 text-sm font-semibold text-primary-ink transition hover:bg-primary/10">Copiar mensaje</button>
                <details>
                  <summary className="cursor-pointer py-2 text-sm font-medium text-[#463d51]">Ver borrador</summary>
                  <label htmlFor="email-draft" className="sr-only">Borrador del correo</label>
                  <textarea id="email-draft" readOnly value={draft.text} rows={7} className="mt-2 w-full rounded-xl border border-[#8e8598] bg-white p-3 text-base sm:text-sm text-[#25222d]" />
                </details>
              </div>
            )}
          </form>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm leading-relaxed text-gray-300">
            <p>&copy; {new Date().getFullYear()} Oscar Fabricio Regalado Pérez.</p>
            <p className="mt-1 text-xs">Todos los derechos reservados.</p>
          </div>
          <a href="#inicio" className="group inline-flex min-h-11 items-center gap-3 self-start rounded-full border border-white/20 py-2 pl-4 pr-2 text-sm text-gray-200 transition hover:border-primary hover:text-primary-light sm:self-auto">
            Volver al inicio
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-transform group-hover:-translate-y-0.5"><FaArrowUp /></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
