import React, { useState } from 'react';
import { Scale, Menu, X, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { PROFILE_INFO } from '../data/siteData';

export default function Navbar({ onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'atuacao', label: 'Áreas de Atuação' },
    { id: 'sobre', label: 'Sobre & Trajetória' },
    { id: 'producao', label: 'Artigos & Pesquisa' },
    { id: 'duvidas', label: 'Dúvidas' },
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logotipo Dra. Beatriz Figueiredo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-left group cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9E1B32] to-[#5E0D1B] text-white flex items-center justify-center shadow-sm">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-lg sm:text-xl font-bold tracking-tight text-stone-900 group-hover:text-[#9E1B32] transition-colors">
              {PROFILE_INFO.shortName}
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-500">
              FV Advogados Associados • OAB/BA
            </span>
          </div>
        </button>

        {/* Navegação Desktop Enxuta (Single-Page) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-700 hover:text-[#9E1B32] hover:bg-[#FDF2F3]/60 transition cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          <a
            href={PROFILE_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            title={PROFILE_INFO.instagramHandle}
            className="p-2 rounded-lg text-stone-600 hover:text-[#9E1B32] transition"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => handleNavClick('contato')}
            className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9E1B32] hover:bg-[#821428] text-white text-xs sm:text-sm font-semibold shadow-sm transition cursor-pointer"
          >
            Agendar Consulta <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Botão Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-stone-200 text-stone-700"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-5 space-y-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-[#FDF2F3] hover:text-[#9E1B32]"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contato')}
            className="block w-full text-center mt-3 px-4 py-3 rounded-xl bg-[#9E1B32] text-white text-sm font-semibold"
          >
            Agendar Consulta
          </button>
        </div>
      )}
    </header>
  );
}
