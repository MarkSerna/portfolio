'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Menu, X, Globe, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cvHref = PORTFOLIO_DATA.personal.cvUrls[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: language === 'es' ? 'Sobre Mí' : 'About Me' },
    { href: '#proyectos', label: language === 'es' ? 'Proyectos' : 'Projects' },
    { href: '#experiencia', label: language === 'es' ? 'Experiencia' : 'Experience' },
    { href: '#habilidades', label: language === 'es' ? 'Habilidades' : 'Skills' },
    { href: '#contacto', label: language === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-slate-100 font-semibold tracking-tight focus:outline-none"
            aria-label="Marco Serna - Inicio"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform motion-reduce:transform-none">
              MS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
              <span className="text-[10px] text-cyan-300 font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                FULL STACK & RPA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switch + CV Download + Social Links + Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 transition-colors cursor-pointer"
              aria-label={`${language.toUpperCase()} - ${language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}`}
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language.toUpperCase()}</span>
              <span className="text-[10px] text-slate-300">({language === 'es' ? 'EN' : 'ES'})</span>
            </button>

            {/* Quick CV Download in Navbar */}
            <a
              href={cvHref}
              download={language === 'es' ? 'CV-Marco-Serna.pdf' : 'Resume-Marco-Serna.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title={language === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>CV</span>
            </a>

            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Perfil de GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              aria-label="Perfil de LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Contact Button */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 shadow-sm shadow-cyan-500/20 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Contactar' : 'Get in Touch'}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-100 border border-slate-700"
              aria-label={`${language.toUpperCase()} - ${language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}`}
            >
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-200 hover:text-white bg-slate-900 border border-slate-800"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17]/98 border-b border-white/10 px-4 pt-3 pb-6 backdrop-blur-xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-100 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-300 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cvHref}
                  download={language === 'es' ? 'CV-Marco-Serna.pdf' : 'Resume-Marco-Serna.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CV</span>
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="px-3.5 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{language === 'es' ? 'Escribir' : 'Email'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
