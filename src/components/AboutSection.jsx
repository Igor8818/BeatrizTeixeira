import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { CREDENCIAIS_TABS, PROFILE_INFO } from '../data/siteData';
import { LattesIcon } from './Icons';

export const AboutSection = ({ photos }) => {
  const [activeTabKey, setActiveTabKey] = useState('formacao');
  const currentTab = CREDENCIAIS_TABS[activeTabKey];

  return (
    <section id="sobre" className="py-16 md:py-28 bg-[#2D0812] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A261]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Coluna Esquerda: Retrato Acadêmico & Destaque Lattes */}
          <div className="lg:col-span-5 space-y-6 max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto w-full">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C8A261]/40 shadow-2xl bg-[#1E050C] group">
              <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={photos?.about || './images/beatriz-figueiredo-livros.jpg'}
                  alt="Dra. Beatriz Teixeira Figueiredo"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/beatriz-figueiredo-livros.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E050C]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Legenda sobre a foto sem cobrir as obras jurídicas */}
              <div className="p-4 bg-[#2D0812] border-t border-[#C8A261]/30">
                <p className="text-xs uppercase tracking-wider text-[#E8D5B0] font-bold">
                  Dra. Beatriz Teixeira Figueiredo
                </p>
                <p className="text-sm font-bold text-white">
                  Advogada • FV Advogados Associados
                </p>
                <p className="text-[11px] text-[#C8A261] mt-0.5 font-semibold">
                  UESC • Pós-graduanda PUC/RS
                </p>
              </div>
            </div>

            {/* Links Acadêmicos Diretos */}
            <div className="p-4 rounded-xl bg-[#3D0E1A] border border-[#C8A261]/30 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C8A261]/20 flex items-center justify-center">
                  <LattesIcon className="w-5 h-5 text-[#E8D5B0]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Currículo Lattes CNPq
                  </span>
                  <span className="text-[11px] text-rose-200/80 block font-mono">
                    ID: {PROFILE_INFO.lattesId}
                  </span>
                </div>
              </div>
              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#2D0812] border border-[#C8A261]/40 hover:bg-[#C8A261] hover:text-[#2D0812] text-[#E8D5B0] transition-colors"
                title="Acessar Currículo Lattes Oficial"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Biografia e Abas Interativas */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3D0E1A] border border-[#C8A261]/40 text-xs text-[#E8D5B0] font-semibold uppercase tracking-wider">
                Perfil &amp; Trajetória
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Rigor técnico, vocação acadêmica e defesa ética.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#C8A261] rounded-full" />

              <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed font-normal">
                Advogada integrante da tradicional banca <strong className="text-white font-semibold">FV Advogados Associados</strong> (escritório fundado em 1990 em Itabuna - BA), graduada em Direito pela <strong className="text-white font-semibold">Universidade Estadual de Santa Cruz (UESC)</strong> e pós-graduanda pela <strong className="text-white font-semibold">PUC/RS</strong>.
              </p>
              <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed font-normal">
                Com trajetória reconhecida em <strong className="text-[#E8D5B0] font-semibold">1º Lugar no 10º Simpósio de Extensão da UESC</strong>, sua atuação alia sólida prática em gabinete forense (Fazenda Pública e Família do TJ/BA) e Ministério Público (MP/BA) ao compromisso com a proteção de empresas e trabalhadores.
              </p>
            </div>

            {/* Seletor de Abas para Organização Limpa do Conteúdo */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#3D0E1A] border border-rose-900/50">
                {Object.entries(CREDENCIAIS_TABS).map(([key, tab]) => {
                  const Icon = tab.icon;
                  const isActive = activeTabKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTabKey(key)}
                      className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-[#C8A261] text-[#2D0812] shadow-md'
                          : 'text-rose-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lista dos Itens da Aba Selecionada */}
              <div className="mt-5 space-y-3.5">
                {currentTab.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#3D0E1A]/90 border border-[#C8A261]/25 hover:border-[#C8A261]/60 transition-colors shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8D5B0] bg-[#C8A261]/20 px-2.5 py-0.5 rounded">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#C8A261] font-semibold mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
