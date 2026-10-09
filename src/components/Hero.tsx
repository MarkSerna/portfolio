'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Hero() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;

  const cvHref = personal.cvUrls[language];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="glow-ambient w-96 h-96 bg-cyan-500/20 top-20 left-1/4 -translate-x-1/2"></div>
      <div className="glow-ambient w-96 h-96 bg-blue-600/15 top-40 right-1/4 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-200 mb-6 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            <span className="font-medium text-emerald-300">{personal.status[language]}</span>
          </div>

          {/* Location & Title Badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personal.location}</span>
            <span className="text-slate-500">•</span>
            <span>Full Stack & RPA Specialist</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            <span className="block text-slate-100">Marco Eduar</span>
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Serna López
            </span>
          </h1>

          {/* Subtitle / Core Value Proposition */}
          <p className="text-lg sm:text-2xl font-medium text-slate-200 mb-6 leading-relaxed max-w-3xl mx-auto">
            {language === 'es' ? (
              <>
                Desarrollador <span className="text-cyan-400 font-semibold">Full Stack</span> especializado en{' '}
                <span className="text-teal-300 font-semibold">Automatización de Procesos (RPA)</span> y{' '}
                <span className="text-blue-400 font-semibold">Sistemas en Tiempo Real</span>.
              </>
            ) : (
              <>
                <span className="text-cyan-400 font-semibold">Full Stack Developer</span> specialized in{' '}
                <span className="text-teal-300 font-semibold">Robotic Process Automation (RPA)</span> and{' '}
                <span className="text-blue-400 font-semibold">Real-Time Scalable Systems</span>.
              </>
            )}
          </p>

          {/* Description with enhanced contrast */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-normal font-normal">
            {personal.bio[language]}
          </p>

          {/* Action CTAs: Proyectos, Contactar, Descargar CV */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>{language === 'es' ? 'Explorar Proyectos Clave' : 'Explore Key Projects'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" />
            </a>

            {/* CV Download Button */}
            <a
              href={cvHref}
              download={language === 'es' ? 'CV-Marco-Serna.pdf' : 'Resume-Marco-Serna.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer group"
              title={language === 'es' ? 'Descargar Currículum en PDF' : 'Download Resume in PDF'}
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform motion-reduce:transform-none" />
              <span>{language === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
            </a>

            <a
              href="#contacto"
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{language === 'es' ? 'Contactar' : 'Get in Touch'}</span>
            </a>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Technical Attributes Strip (Without unverified arbitrary metrics) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 rounded-xl border border-white/10 text-left flex flex-col justify-between hover:border-cyan-500/30 transition-all"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-mono">
                  {stat.value}
                </div>
                <div className="mt-1">
                  <div className="text-xs font-semibold text-slate-100">{stat.label[language]}</div>
                  <div className="text-[11px] text-slate-300 font-normal">{stat.sub[language]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
