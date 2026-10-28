import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { AREAS_ATUACAO, PROFILE_INFO } from '../data/siteData';

export default function Footer({ onScrollTo, onOpenPhotoModal }) {
  const [newsletter, setNewsletter] = useState({ nome: '', email: '', telefone: '' });
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletter.email) return;
    setNewsletterSuccess(true);
    setNewsletter({ nome: '', email: '', telefone: '' });
  };

  return (
    <footer className="bg-[#380811] text-rose-100/90 pt-16 pb-12 relative overflow-hidden">
      {/* Linha artística decorativa no canto inferior direito */}
      <svg
        className="absolute right-0 bottom-0 w-96 h-96 text-white/5 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 50 380 C 120 260, 240 280, 310 150 C 350 70, 390 120, 380 390"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="280" cy="240" r="95" stroke="currentColor" strokeWidth="4" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo no topo do Footer */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="block text-xl font-bold text-white">
              {PROFILE_INFO.name}
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-rose-200/75 mt-0.5">
              Advogada • {PROFILE_INFO.officeName} ({PROFILE_INFO.officeSince})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/images/fv-logo.jpg"
              alt="FV Advogados Associados"
              className="w-10 h-10 rounded-full border border-white/20 object-cover"
            />
            <div className="text-xs">
              <p className="font-bold text-white">{PROFILE_INFO.officeName}</p>
              <p className="text-rose-200/80">Itabuna - Bahia • {PROFILE_INFO.officePhone}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Coluna 1: Newsletter / Informativo */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Receba informativos jurídicos
            </h4>
            {newsletterSuccess ? (
              <div className="p-4 rounded-xl bg-white/10 text-xs text-rose-100">
                Cadastro realizado! Você receberá nossas orientações jurídicas para empresas
                e trabalhadores.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <input
                  type="text"
                  placeholder="Nome"
                  value={newsletter.nome}
                  onChange={(e) => setNewsletter({ ...newsletter, nome: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/15 text-xs text-white placeholder-rose-200/50 focus:outline-none focus:border-rose-300"
                />
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={newsletter.email}
                  onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/15 text-xs text-white placeholder-rose-200/50 focus:outline-none focus:border-rose-300"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-white text-[#380811] font-bold text-xs flex items-center justify-between hover:bg-rose-50 transition cursor-pointer"
                >
                  <span>Cadastrar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-2 space-y-2.5 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Navegação
            </h4>
            <button
              onClick={() => onScrollTo('inicio')}
              className="block hover:text-white transition cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => onScrollTo('atuacao')}
              className="block hover:text-white transition cursor-pointer"
            >
              Áreas de Atuação
            </button>
            <button
              onClick={() => onScrollTo('sobre')}
              className="block hover:text-white transition cursor-pointer"
            >
              Sobre & Trajetória
            </button>
            <button
              onClick={() => onScrollTo('producao')}
              className="block hover:text-white transition cursor-pointer"
            >
              Artigos & Pesquisa
            </button>
            <button
              onClick={() => onScrollTo('duvidas')}
              className="block hover:text-white transition cursor-pointer"
            >
              Dúvidas Frequentes
            </button>
            <button
              onClick={() => onScrollTo('contato')}
              className="block hover:text-white transition cursor-pointer"
            >
              Agendar Consulta
            </button>
            <button
              onClick={onOpenPhotoModal}
              className="block text-rose-300 hover:text-white transition cursor-pointer pt-1"
            >
              Personalizar Fotos
            </button>
          </div>

          {/* Coluna 3: Áreas de Atuação */}
          <div className="lg:col-span-3 space-y-2.5 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Áreas de Atuação
            </h4>
            {AREAS_ATUACAO.map((area) => (
              <button
                key={area.id}
                onClick={() => onScrollTo('atuacao')}
                className="block text-left hover:text-white transition cursor-pointer"
              >
                {area.title}
              </button>
            ))}
          </div>

          {/* Coluna 4: Contato & Escritório */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contato & Escritório
            </h4>
            <p className="flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-rose-300 shrink-0" />
              <span>FV Advogados Associados (Desde 1990)</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-rose-300 shrink-0" />
              <span>{PROFILE_INFO.officePhone}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <InstagramIcon className="w-4 h-4 text-rose-300 shrink-0" />
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline"
              >
                {PROFILE_INFO.instagramHandle}
              </a>
            </p>
            <p className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
              <span>Itabuna — Bahia (Atendimento Presencial e Online)</span>
            </p>
          </div>
        </div>

        {/* Linha inferior de créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200/75">
          <div>
            <p className="font-semibold text-white">
              {PROFILE_INFO.name} — {PROFILE_INFO.education}
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} {PROFILE_INFO.shortName} •{' '}
              {PROFILE_INFO.officeName}. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PROFILE_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 h-9 rounded-full border border-white/20 hover:bg-white/15 flex items-center gap-1.5 text-white transition text-[11px] font-semibold"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              {PROFILE_INFO.instagramHandle}
            </a>
            <a
              href={PROFILE_INFO.officeInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 h-9 rounded-full border border-white/20 hover:bg-white/15 flex items-center gap-1.5 text-white transition text-[11px] font-semibold"
            >
              <Building2 className="w-3.5 h-3.5" />
              @fvadvogadosassociados
            </a>
            <a
              href={PROFILE_INFO.lattesUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 h-9 rounded-full border border-white/20 hover:bg-white/15 flex items-center gap-1.5 text-white transition text-[11px] font-semibold"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Lattes CNPq
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
