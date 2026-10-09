'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { BookOpen, Award, Bot, CheckCircle2, Code2, Globe2, Radio, Sparkles } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const { personal, education, certifications, languages } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: Radio,
      title: {
        es: "Sistemas en Tiempo Real & Geoespacial",
        en: "Real-Time & Geospatial Systems"
      },
      desc: {
        es: "Diseño de arquitecturas reactivas con WebSockets, Socket.IO, Redis y bases de datos geoespaciales (PostGIS/Mapbox). Implementación de telemetría vehicular sincronizada y microservicios de optimización de rutas (VRP).",
        en: "Designing reactive architectures with WebSockets, Socket.IO, Redis, and geospatial databases (PostGIS/Mapbox). Synchronized live vehicle telemetry and algorithmic vehicle routing solvers."
      },
      accent: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30"
    },
    {
      icon: Bot,
      title: {
        es: "Automatización Robótica (RPA) & Pipelines ETL",
        en: "Robotic Automation (RPA) & ETL Pipelines"
      },
      desc: {
        es: "Construcción de bots empresariales en Python para ingesta autónoma de documentos, validación estricta de esquemas XML tributarios y sincronización en MariaDB/MySQL, sustituyendo tareas operativas manuales y repetitivas.",
        en: "Building enterprise Python automation bots for autonomous document retrieval, strict tax XML schema validation, and DB sync, replacing manual clerical and repetitive workflows."
      },
      accent: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30"
    },
    {
      icon: Code2,
      title: {
        es: "Ingeniería de Software & Código Robusto",
        en: "Software Engineering & Clean Architecture"
      },
      desc: {
        es: "Desarrollo integral con TypeScript, Python, C# (.NET 8 WinUI) y PHP (Laravel). Énfasis en Clean Architecture, testing automatizado, empaquetado de librerías para la comunidad (NPM) y contenerización con Docker.",
        en: "End-to-end development with TypeScript, Python, C# (.NET 8 WinUI), and PHP (Laravel). Strong focus on Clean Architecture, automated testing, community libraries (NPM), and Docker containerization."
      },
      accent: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'CONOCE MI ENFOQUE' : 'GET TO KNOW MY APPROACH'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'es' ? 'Soluciones Técnicas con Impacto de Negocio' : 'Technical Solutions with Real Business Impact'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {language === 'es'
              ? 'Combino la capacidad de resolver problemas complejos de backend y tiempo real con interfaces frontend pulidas, priorizando el rendimiento, la mantenibilidad del código y la automatización de procesos repetitivos.'
              : 'I bridge deep backend engineering and real-time computing with polished user interfaces, prioritizing performance, codebase maintainability, and extreme automation of manual workflows.'}
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel p-6 sm:p-7 rounded-2xl border ${pillar.border} hover:bg-slate-900/80 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center text-cyan-400 mb-5 border border-white/5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title[language]}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">{pillar.desc[language]}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'es' ? 'Enfoque de Producción' : 'Production Focused'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education, Certifications & Languages Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2.5 text-cyan-300 mb-4 font-semibold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>{language === 'es' ? 'Educación Formal' : 'Education'}</span>
            </div>
            {education.map((edu, i) => (
              <div key={i}>
                <div className="text-base font-bold text-white leading-snug">{edu.degree[language]}</div>
                <div className="text-xs text-cyan-300 font-mono mt-1">{edu.institution} • {edu.period}</div>
                <div className="text-xs text-slate-300 mt-1">{edu.location}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2.5 text-teal-300 mb-4 font-semibold text-sm">
              <Award className="w-4 h-4" />
              <span>{language === 'es' ? 'Certificaciones Técnicas' : 'Certifications'}</span>
            </div>
            {certifications.map((cert, i) => (
              <div key={i}>
                <div className="text-base font-bold text-white leading-snug">{cert.name}</div>
                <div className="text-xs text-teal-300 font-mono mt-1">{cert.issuer}</div>
                <div className="text-xs text-slate-300 mt-1">{language === 'es' ? 'Emitido en' : 'Issued'} {cert.year}</div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2.5 text-blue-300 mb-4 font-semibold text-sm">
              <Globe2 className="w-4 h-4" />
              <span>{language === 'es' ? 'Idiomas' : 'Languages'}</span>
            </div>
            <div className="space-y-2.5">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-100">{lang.name[language]}</span>
                  <span className="font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {lang.level[language]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
