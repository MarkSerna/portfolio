'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const { language } = useLanguage();
  const { personal } = PORTFOLIO_DATA;
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#05070a] py-12 relative z-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">
              MS
            </div>
            <div>
              <p className="text-slate-200 font-semibold">{personal.name}</p>
              <p className="text-slate-300 text-[11px]">
                © {year} • {language === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}
              </p>
            </div>
          </div>

          {/* Built With Tech Stack */}
          <div className="text-slate-400 text-center font-mono text-[11px]">
            {language === 'es' ? (
              <>
                Construido con <span className="text-cyan-400">Next.js 15</span>, <span className="text-teal-300">TypeScript</span> y <span className="text-blue-400">Tailwind CSS</span>
              </>
            ) : (
              <>
                Engineered with <span className="text-cyan-400">Next.js 15</span>, <span className="text-teal-300">TypeScript</span> & <span className="text-blue-400">Tailwind CSS</span>
              </>
            )}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer ml-2"
              aria-label={language === 'es' ? 'Volver al inicio' : 'Back to top'}
              title={language === 'es' ? 'Subir' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
