'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Check, Copy, Download, ExternalLink, Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const cvHref = personal.cvUrls[language];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      {/* Background ambient glow */}
      <div className="glow-ambient w-96 h-96 bg-cyan-500/10 bottom-10 right-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'es' ? 'CONVERSEMOS' : 'GET IN TOUCH'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {language === 'es' ? '¿Listo para Construir Algo Extraordinario?' : 'Ready to Build Something Impactful?'}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            {language === 'es'
              ? 'Abierto a oportunidades de tiempo completo, proyectos de automatización RPA y desafíos de ingeniería en tiempo real. Respondo en menos de 24 horas.'
              : 'Open to full-time roles, RPA automation initiatives, and real-time backend/frontend engineering challenges. Guaranteed response within 24 hours.'}
          </p>

          {/* Contact Box */}
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/5 mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
              {/* Primary Email CTA */}
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'es' ? 'Enviar un Correo Directo' : 'Send Direct Email'}</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                title={language === 'es' ? 'Copiar dirección de correo' : 'Copy email address'}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">
                      {language === 'es' ? '¡Correo Copiado!' : 'Email Copied!'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>

              {/* Download CV in Contact */}
              <a
                href={cvHref}
                download={language === 'es' ? 'CV-Marco-Serna.pdf' : 'Resume-Marco-Serna.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                title={language === 'es' ? 'Descargar Currículum en PDF' : 'Download Resume in PDF'}
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform motion-reduce:transform-none" />
                <span>{language === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
              </a>
            </div>

            {/* Quick Access Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/5 text-left">
              {/* LinkedIn Card */}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs text-slate-300">/in/marksernalopez</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/60 flex items-center justify-center text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs text-slate-300">@MarkSerna</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Location & Timezone */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {personal.location} (Remoto / On-site)
            </span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">
              ● {language === 'es' ? 'Zona Horaria: UTC-5 (Colombia)' : 'Timezone: UTC-5 (EST / Colombia)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
