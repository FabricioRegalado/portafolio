import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';

const links = [
  { label: 'Inicio', to: 'inicio' },
  { label: 'Sobre Mi', to: 'sobre-mi' },
  { label: 'Habilidades', to: 'habilidades' },
  { label: 'Experiencia', to: 'experiencia' },
  { label: 'Portafolio', to: 'proyectos' },
  { label: 'Contacto', to: 'contacto' },
];

const ThemeSwitch = ({ darkMode, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label="Cambiar tema"
    className={`relative h-7 w-12 rounded-full overflow-hidden shrink-0 transition-colors duration-300 ${
      darkMode ? 'bg-primary' : 'bg-gray-300'
    }`}
  >
    <span
      className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
        darkMode ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </button>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.to);

    const detectActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportBottom = scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight - 2;

      if (viewportBottom >= pageBottom) {
        setActiveSection('contacto');
        return;
      }

      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop - 120;
        if (scrollY >= top) current = id;
      });

      setActiveSection(current);
    };

    detectActiveSection();
    window.addEventListener('scroll', detectActiveSection);
    window.addEventListener('resize', detectActiveSection);
    return () => {
      window.removeEventListener('scroll', detectActiveSection);
      window.removeEventListener('resize', detectActiveSection);
    };
  }, []);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const getLinkClass = (to) =>
    `text-[12px] uppercase tracking-wide px-3 py-2 rounded-xl transition cursor-pointer ${
      activeSection === to ? 'bg-primary text-white' : 'text-[#363636] dark:text-gray-200 hover:text-primary'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#121723]/90 backdrop-blur border-b border-[#e8e8e8] dark:border-[#2b3447] shadow-sm'
          : 'bg-white/70 dark:bg-[#121723]/70 backdrop-blur'
      }`}
    >
      <nav className={`section-shell flex items-center justify-between transition-all ${scrolled ? 'h-16' : 'h-[74px]'}`}>
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-xl bg-primary text-white grid place-items-center font-bold text-sm">FR</span>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-[#212121] dark:text-white">Fabricio Regalado</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#7a7a7a] dark:text-gray-400">Ingeniero en Informatica</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-1 bg-white dark:bg-[#1b2230] border border-[#ececec] dark:border-[#2f3a50] rounded-2xl px-2 py-1 shadow-sm">
            {links.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  duration={700}
                  smooth="easeInOutCubic"
                  offset={item.to === 'contacto' ? -8 : -72}
                  onClick={() => setActiveSection(item.to)}
                  className={getLinkClass(item.to)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeSwitch darkMode={darkMode} onToggle={toggleTheme} />
            <a
              href="./cv.pdf"
              download
              className="h-10 px-4 rounded-xl bg-[#1f1f1f] dark:bg-primary text-white text-xs font-semibold uppercase tracking-wide inline-flex items-center gap-2 hover:bg-black dark:hover:bg-primary-dark transition"
            >
              <FaFileDownload className="text-[11px]" />
              CV
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="lg:hidden h-11 w-11 rounded-xl border border-[#d9d9d9] dark:border-[#2f3a50] bg-white dark:bg-[#1b2230] grid place-items-center text-[#333] dark:text-gray-100"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[#ececec] dark:border-[#2f3a50] bg-white/95 dark:bg-[#131a27]/95 backdrop-blur">
          <ul className="section-shell py-4 grid gap-1">
            <li className="pb-2">
              <div className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl border border-[#ececec] dark:border-[#2f3a50] text-sm text-[#333] dark:text-gray-200">
                <span>Tema</span>
                <ThemeSwitch darkMode={darkMode} onToggle={toggleTheme} />
              </div>
            </li>

            {links.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  duration={700}
                  smooth="easeInOutCubic"
                  offset={item.to === 'contacto' ? -8 : -72}
                  onClick={() => {
                    setActiveSection(item.to);
                    setOpen(false);
                  }}
                  className={`block py-2.5 px-3 text-sm rounded-xl transition cursor-pointer ${
                    activeSection === item.to
                      ? 'text-primary bg-primary/10'
                      : 'text-[#333] dark:text-gray-200 hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="./cv.pdf"
                download
                className="h-11 rounded-xl bg-[#1f1f1f] dark:bg-primary text-white text-sm font-semibold inline-flex items-center justify-center gap-2 w-full"
              >
                <FaFileDownload />
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
