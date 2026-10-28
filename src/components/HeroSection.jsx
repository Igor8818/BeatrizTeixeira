import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Scale, Award, ChevronDown } from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';
import { InstagramIcon, LattesIcon } from './Icons';

export const HeroSection = ({ photos }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-1rem)] lg:min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 overflow-hidden bg-[#2D0812] text-white"
    >
      {/* Background ambient lighting - Vinho Rubi & Champagne */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#C8A261]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Tag Institucional Champagne */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#3D0E1A] border border-[#C8A261]/50 text-[11px] sm:text-xs text-[#E8D5B0] font-semibold tracking-wide shadow-md max-w-full truncate">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#C8A261] animate-pulse flex-shrink-0" />
              <span className="truncate">FV Advogados Associados (Desde 1990) • UESC • PUC/RS • FGV</span>
            </div>

            {/* Headline Principal - Cormorant Garamond */}
            <h1 className="font-serif-editorial text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Advocacia estratégica,{' '}
              <span className="text-[#C8A261] italic font-semibold">
                segurança jurídica
              </span>{' '}
              e clareza de direitos.
            </h1>

            {/* Subtítulo com excelente contraste */}
            <p className="text-xs sm:text-base text-rose-100/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Atuação dedicada a ajudar empresas e trabalhadores a entenderem e protegerem seus direitos, unindo a tradição de mais de 34 anos da banca <strong className="text-white font-semibold">FV Advogados Associados</strong> à formação contínua pela <strong className="text-white font-semibold">PUC/RS</strong>, <strong className="text-white font-semibold">FGV</strong> e <strong className="text-white font-semibold">UESC</strong>.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#C8A261] hover:bg-[#DFBD7F] text-[#2D0812] font-bold text-xs sm:text-sm shadow-lg shadow-[#C8A261]/25 hover:shadow-[#C8A261]/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Agendar Consulta Jurídica</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#artigos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#1E050C] hover:bg-[#3D0E1A] text-rose-100 hover:text-white border border-[#C8A261]/40 hover:border-[#C8A261] font-medium text-xs sm:text-sm shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#C8A261]" />
                <span>Ver Pesquisas &amp; Publicações</span>
              </a>
            </div>

            {/* 3 Métricas em Destaque extraídas do Lattes Oficial */}
            <div className="pt-3 sm:pt-4 grid grid-cols-3 gap-2 max-w-lg mx-auto lg:mx-0 border-t border-rose-900/40">
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E8D5B0] block leading-none">
                  1º Lugar
                </span>
                <span className="text-[10px] sm:text-xs text-rose-200/80 font-medium tracking-wide mt-1 block">
                  Pesquisa UESC
                </span>
              </div>
              <div className="text-center lg:text-left border-x border-rose-900/40 px-1 sm:px-3">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E8D5B0] block leading-none">
                  PUC &amp; FGV
                </span>
                <span className="text-[10px] sm:text-xs text-rose-200/80 font-medium tracking-wide mt-1 block truncate">
                  Pós-Graduação
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="font-serif-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#E8D5B0] block leading-none">
                  Desde 1990
                </span>
                <span className="text-[10px] sm:text-xs text-rose-200/80 font-medium tracking-wide mt-1 block">
                  Banca FV Advogados
                </span>
              </div>
            </div>

            {/* Links Sociais e Acadêmicos Oficiais */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[11px] sm:text-xs text-rose-200/70">
              <span className="font-medium text-rose-200/80">Canais:</span>
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3D0E1A] border border-rose-900/50 text-rose-100 hover:border-[#C8A261] hover:text-[#E8D5B0] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#C8A261]" />
                <span className="font-medium">{PROFILE_INFO.instagramHandle}</span>
              </a>

              <a
                href={PROFILE_INFO.officeInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3D0E1A] border border-rose-900/50 text-rose-100 hover:border-[#C8A261] hover:text-[#E8D5B0] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8A261]" />
                <span className="font-medium">{PROFILE_INFO.officeInstagramHandle}</span>
              </a>

              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3D0E1A] border border-rose-900/50 text-rose-100 hover:border-[#C8A261] hover:text-[#E8D5B0] transition-colors"
              >
                <LattesIcon className="w-3.5 h-3.5 text-[#C8A261]" />
                <span className="font-medium">Lattes CNPq</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Retrato em Destaque Calibrado para Mobile */}
          <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              {/* Moldura deslocada dourada fina */}
              <div className="absolute inset-1.5 sm:inset-2 -right-1.5 -bottom-1.5 sm:-right-2 sm:-bottom-2 rounded-2xl border-2 border-[#C8A261]/40 pointer-events-none" />
              
              {/* Moldura de fundo sólida em Vinho Rubi */}
              <div className="absolute inset-1.5 sm:inset-2 rounded-2xl bg-gradient-to-b from-[#3D0E1A] to-[#2D0812] border border-rose-900/50 shadow-2xl overflow-hidden" />

              {/* Foto Principal Nítida */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-2xl pt-3 sm:pt-4">
                <img
                  src={photos?.hero || './images/beatriz-figueiredo.jpg'}
                  alt="Dra. Beatriz Teixeira Figueiredo"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-all duration-500 filter contrast-105"
                  onError={(e) => {
                    e.target.src = './images/beatriz-figueiredo.jpg';
                  }}
                />
              </div>

              {/* Selo Circular Giratório Champagne */}
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 z-20 w-16 h-16 sm:w-22 sm:h-22 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#2D0812] border-2 border-[#C8A261] shadow-xl flex items-center justify-center">
                  <div className="w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="circlePathHeroBia"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[7.5px] uppercase tracking-[0.24em] fill-[#E8D5B0] font-bold">
                        <textPath xlinkHref="#circlePathHeroBia">
                          • ADVOCACIA • ÉTICA • DIREITOS •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8A261] absolute" />
                </div>
              </div>

              {/* Floating Badge - Escritório */}
              <div className="absolute -bottom-2 left-2 sm:left-4 z-20 bg-[#2D0812]/95 border border-[#C8A261]/40 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-xl flex items-center gap-1.5 sm:gap-2">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-[#C8A261]/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8D5B0]" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] text-[#C8A261] font-semibold uppercase tracking-wider">Banca Jurídica</p>
                  <p className="text-[10px] sm:text-xs font-bold text-white">FV Advogados</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicador Suave de Rolagem Centralizado */}
      <div className="relative z-10 hidden lg:flex justify-center pt-2">
        <a
          href="#atuacao"
          className="inline-flex flex-col items-center text-[10px] text-rose-200/60 hover:text-[#E8D5B0] transition-colors"
          title="Rolar para Especialidades"
        >
          <span className="tracking-widest uppercase mb-1">Explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A261]" />
        </a>
      </div>
    </section>
  );
};
