'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Cpu, Layout, Server, Sparkles, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const { language } = useLanguage();
  const { skillGroups } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ElementType> = {
    Layout,
    Server,
    Cpu,
    Wrench
  };

  return (
    <section id="habilidades" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'STACK TECNOLÓGICO' : 'TECH STACK MATRIX'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'es' ? 'Habilidades & Herramientas Comprobadas' : 'Verified Skills & Tooling'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'es'
              ? 'Tecnologías y frameworks aplicados directamente en proyectos de producción, repositorios y sistemas de alto desempeño.'
              : 'Technologies and frameworks actively applied in production workloads, open repositories, and high-performance services.'}
          </p>
        </div>

        {/* 4 Quadrants Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group, idx) => {
            const Icon = iconMap[group.icon] || Cpu;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{group.name[language]}</h3>
                      <div className="text-[11px] font-mono text-cyan-400">
                        {group.skills.length} {language === 'es' ? 'tecnologías clave' : 'core technologies'}
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                          skill.highlight
                            ? 'bg-slate-900/90 border-cyan-500/30 shadow-sm shadow-cyan-500/5'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.highlight ? 'bg-cyan-400' : 'bg-slate-500'
                            }`}
                          ></span>
                          <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800/70 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {language === 'es' ? 'Validado en Código Real' : 'Validated in Live Code'}
                  </span>
                  <span className="font-mono text-slate-500">2024 – 2026</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
