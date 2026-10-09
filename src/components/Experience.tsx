'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export default function Experience() {
  const { language } = useLanguage();
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experiencia" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'TRAYECTORIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'es' ? 'Experiencia Laboral en Producción' : 'Proven Production Experience'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'es'
              ? 'Historial de roles orientados a la entrega de valor medible: automatización de tareas críticas, desarrollo full stack e integración de arquitecturas escalables.'
              : 'Career milestones dedicated to delivering measurable business impact: high-stakes process automation, full-stack engineering, and scalable architecture integrations.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-blue-600 opacity-30"></div>

          <div className="space-y-10 sm:space-y-12">
            {experience.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-6 sm:gap-10 group">
                {/* Timeline Node Point */}
                <div className="w-8 sm:w-16 flex items-center justify-center shrink-0 pt-1.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role[language]}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period[language]}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 my-4 text-xs sm:text-sm text-slate-300">
                    {item.description[language].map((desc, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-2.5">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies pill list */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
