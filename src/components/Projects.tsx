'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { 
  ArrowUpRight, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Lock, 
  Package, 
  Radio, 
  ShieldCheck, 
  Terminal,
  Activity,
  MapPin,
  Smartphone
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function Projects() {
  const { language } = useLanguage();
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<'all' | 'realtime' | 'rpa' | 'opensource'>('all');

  const categories = [
    { id: 'all', label: { es: 'Todos los Proyectos', en: 'All Projects' } },
    { id: 'realtime', label: { es: 'Sistemas en Tiempo Real', en: 'Real-Time Systems' } },
    { id: 'rpa', label: { es: 'RPA & Automatización', en: 'RPA & Automation' } },
    { id: 'opensource', label: { es: 'Open Source & Herramientas', en: 'Open Source & DevTools' } }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Vectorial mockups generator tailored to each project's domain
  const renderVisualMockup = (project: Project) => {
    switch (project.id) {
      case 'geo-transport':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-cyan-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            {/* Background Map Grid & Wave */}
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span className="font-semibold text-[11px]">TELEMETRY FEED // SOCKET.IO</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px]">
                LATENCY: 142ms
              </span>
            </div>

            {/* Live Map Vector Representation */}
            <div className="relative z-10 my-auto flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-200 font-bold">Ruta Escolar #04</div>
                  <div className="text-[10px] text-slate-400">4.8521° N, 75.5089° W • PostGIS</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-[10px] text-slate-400">ESTIMATED (VRP)</div>
                <div className="text-sm font-bold text-cyan-400 font-mono">14 MIN RESTANTES</div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">Mapbox GL • Redis Pub/Sub</span>
              <span className="text-cyan-400 font-bold">● 24 VEHICLES CONNECTED</span>
            </div>
          </div>
        );

      case 'rpa-invoicing':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-emerald-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-transparent"></div>
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <Bot className="w-3.5 h-3.5" />
                <span className="font-semibold text-[11px]">RPA PIPELINE // GMAIL & XML ETL</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px]">
                WORKFLOW: AUTONOMOUS
              </span>
            </div>

            {/* Pipeline Step Representation */}
            <div className="relative z-10 my-auto space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-white/5">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  1. Ingesta Correo API
                </span>
                <span className="text-slate-400">100% OK</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-white/5">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  2. Validación XML Schema (DIAN)
                </span>
                <span className="text-emerald-400 font-bold">VALIDADO</span>
              </div>
              <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-white/5">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  3. Conciliación MariaDB / NestJS
                </span>
                <span className="text-cyan-400 font-mono">0.08s</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span>Error Humano: 0.00%</span>
              <span className="text-emerald-400 font-bold">+85% AHORRO DE TIEMPO</span>
            </div>
          </div>
        );

      case 'haltsense':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-amber-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span className="font-semibold text-[11px]">HALTSENSE // MEDIAPIPE FACEMESH</span>
              </div>
              <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-[10px]">
                LIVE: 32 FPS
              </span>
            </div>

            {/* Biometric Scores Display */}
            <div className="relative z-10 my-auto grid grid-cols-3 gap-2 text-center">
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">EAR (Ojos)</div>
                <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">0.31</div>
                <div className="text-[9px] text-slate-500">Normal (&gt;0.22)</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">MAR (Boca)</div>
                <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">0.19</div>
                <div className="text-[9px] text-slate-500">Sin bostezo</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">PERCLOS</div>
                <div className="text-sm font-bold text-amber-400 font-mono mt-0.5">3.8%</div>
                <div className="text-[9px] text-slate-500">Alerta &gt;12%</div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">solvePnP Pose • WebSockets</span>
              <span className="text-emerald-400 font-bold">ESTADO OPERARIO: VIGILANTE</span>
            </div>
          </div>
        );

      case 'stickynotes':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-blue-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            {/* Top Windows 11 Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-blue-400">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="font-semibold text-[11px]">STICKYNOTES // .NET 8 WINUI 3</span>
              </div>
              <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded text-[10px]">
                FLUENT MICA ALT
              </span>
            </div>

            {/* Windows 11 Note Card Simulation */}
            <div className="relative z-10 my-auto bg-slate-900/90 p-3 rounded-lg border border-blue-500/30 shadow-lg">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5 border-b border-white/5 pb-1">
                <span className="text-cyan-300 font-bold">Nota Rápida #1 • SQLite WAL</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Drive Sync OK
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-tight">
                Persistencia instantánea en milisegundos con EF Core 8 y cifrado seguro de credenciales con DPAPI.
              </p>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">Clean Architecture • C#</span>
              <span className="text-cyan-400 font-bold">ARRANQUE &lt; 250ms</span>
            </div>
          </div>
        );

      case 'oura-ui':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-purple-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Package className="w-3.5 h-3.5" />
                <span className="font-semibold text-[11px]">NPM PACKAGE // OURA-UI</span>
              </div>
              <span className="bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded text-[10px]">
                10 kB GZIPPED
              </span>
            </div>

            {/* Terminal Command Simulation */}
            <div className="relative z-10 my-auto bg-slate-900/90 p-3 rounded-lg border border-purple-500/30">
              <div className="text-[11px] text-slate-400 flex items-center gap-2 mb-1">
                <Terminal className="w-3 h-3 text-purple-400" />
                <span className="text-purple-300 font-bold">npm install oura-ui</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-sans">
                ✓ 0 runtime dependencies • 100% TypeScript typed • Vitest passed
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">Dark Mode • i18n 10 Idiomas</span>
              <span className="text-purple-400 font-bold">PUBLICADO EN NPM</span>
            </div>
          </div>
        );

      case 'mobile-view':
        return (
          <div className="h-48 sm:h-52 w-full bg-slate-950/80 rounded-xl border border-teal-500/20 p-4 relative overflow-hidden flex flex-col justify-between font-mono text-xs">
            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-2">
              <div className="flex items-center gap-2 text-teal-400">
                <Smartphone className="w-3.5 h-3.5" />
                <span className="font-semibold text-[11px]">VS CODE EXTENSION // MOBILE VIEW</span>
              </div>
              <span className="bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-0.5 rounded text-[10px]">
                OPEN VSX MARKETPLACE
              </span>
            </div>

            {/* Mobile Viewport Simulation */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <div className="w-40 bg-slate-900 border border-teal-500/40 rounded-xl p-2 text-center shadow-lg">
                <div className="w-8 h-1 bg-slate-700 rounded-full mx-auto mb-1.5"></div>
                <div className="text-[10px] text-teal-300 font-bold">iPhone 15 Pro • 393x852</div>
                <div className="text-[9px] text-slate-400 mt-0.5">Rotación 90° • Zoom 100%</div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">Chromium Webview Simulator</span>
              <span className="text-teal-400 font-bold">DISPONIBLE EN OPEN VSX</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'PORTAFOLIO TÉCNICO' : 'TECHNICAL PORTFOLIO'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'es' ? 'Proyectos & Casos de Estudio Seleccionados' : 'Featured Projects & Case Studies'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'es'
              ? 'Proyectos de ingeniería estructurados en Problema → Solución → Resultado. Incluye casos de estudio empresariales de alta confidencialidad y proyectos open source con código verificable.'
              : 'Engineering initiatives structured in Problem → Solution → Result. Encompassing high-confidentiality enterprise case studies alongside open-source software with verifiable repositories.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-cyan-500/30 transition-all group"
            >
              <div>
                {/* Visual Vector Mockup Header */}
                <div className="p-4 sm:p-5 pb-0">
                  {renderVisualMockup(project)}
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Category & Privacy Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400">
                      {project.categoryLabel[language]}
                    </span>
                    
                    {project.isPrivate ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[11px] font-medium" title="Caso de estudio protegido sin datos sensibles ni nombres de clientes">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>{project.badge ? project.badge[language] : (language === 'es' ? 'Caso de Estudio Confidencial' : 'Enterprise Case Study')}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px] font-medium">
                        <ShieldCheck className="w-3 h-3 text-cyan-400" />
                        <span>{project.badge ? project.badge[language] : (language === 'es' ? 'Open Source' : 'Open Source')}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 font-medium leading-relaxed">
                    {project.subtitle[language]}
                  </p>

                  {/* Problem -> Solution -> Result Structured Flow */}
                  <div className="space-y-3.5 mb-6 text-xs sm:text-sm leading-relaxed">
                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                      <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                        {language === 'es' ? 'Problema / Desafío' : 'Problem / Challenge'}
                      </div>
                      <p className="text-slate-300">{project.problem[language]}</p>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                      <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {language === 'es' ? 'Solución Técnica' : 'Technical Solution'}
                      </div>
                      <p className="text-slate-300">{project.solution[language]}</p>
                    </div>

                    <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
                      <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {language === 'es' ? 'Resultado Medible' : 'Measurable Impact'}
                      </div>
                      <p className="text-slate-200 font-medium">{project.result[language]}</p>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="bg-slate-950/60 p-2 rounded-lg border border-white/5 text-center">
                          <div className="text-xs font-bold text-cyan-400 font-mono">{m.value}</div>
                          <div className="text-[10px] text-slate-400">{m.label[language]}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="px-6 py-4 sm:px-7 bg-slate-950/40 border-t border-white/5 flex items-center justify-between">
                {project.isPrivate ? (
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'es' ? 'Propiedad Intelectual Protegida' : 'Confidential Architecture'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.packageUrl && (
                      <a
                        href={project.packageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                      >
                        <Package className="w-3.5 h-3.5" />
                        <span>{project.id === 'oura-ui' ? 'NPM' : 'Open VSX'}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                <a
                  href="#contacto"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                >
                  <span>{language === 'es' ? 'Consultar detalles' : 'Inquire details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
