import React from 'react';
import {
  Scale,
  GraduationCap,
  Building2,
  Briefcase,
  Camera,
  Phone,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { PROFILE_INFO } from '../data/siteData';

export default function HeroSection({ photoUrl, onScrollTo, onOpenPhotoModal }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#FDF6F7] to-[#F9E2E6] pt-8 pb-16 lg:py-20 border-b border-rose-100/80"
    >
      {/* Marca d'água deslizante no fundo */}
      <div className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden opacity-[0.045]">
        <div className="whitespace-nowrap text-[95px] sm:text-[140px] font-black tracking-tight text-[#9E1B32] animate-marquee">
          direito • empresas • trabalhadores • justiça • estratégia • ética • direito •
        </div>
      </div>

      {/* Matriz de pontinhos decorativos */}
      <div
        className="hidden lg:block absolute left-[46%] top-20 w-28 h-28 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#9E1B32 1.75px, transparent 1.75px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Título, Subtítulo, Botões e Redes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-rose-200/80 shadow-xs text-xs font-semibold text-[#9E1B32]">
              <Scale className="w-3.5 h-3.5 shrink-0" />
              <span>Advogada @fvadvogadosassociados • UESC | Pós-graduanda PUC/RS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-stone-900 tracking-tight leading-[1.12]">
              Ajudo <span className="text-[#9E1B32]">empresas</span> e{' '}
              <span className="text-[#9E1B32]">trabalhadores</span> a entenderem seus direitos.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Atuação jurídica estratégica e humanizada em <strong>Itabuna e região</strong>,
              integrando a tradição do escritório{' '}
              <strong>FV Advogados Associados (desde 1990)</strong> à atualização acadêmica
              contínua pela <strong>UESC</strong> e <strong>PUC/RS</strong>.
            </p>

            {/* Dupla de botões */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onScrollTo('contato')}
                className="px-7 py-3.5 rounded-full bg-[#9E1B32] hover:bg-[#821428] text-white font-semibold text-sm shadow-lg shadow-[#9E1B32]/25 hover:shadow-xl hover:shadow-[#9E1B32]/30 transition-all cursor-pointer"
              >
                Agendar consulta
              </button>
              <button
                onClick={() => onScrollTo('atuacao')}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#9E1B32] text-stone-800 hover:text-white font-semibold text-sm border border-stone-200 hover:border-[#9E1B32] shadow-xs transition-all cursor-pointer"
              >
                Áreas de atuação
              </button>
            </div>

            {/* Links de Redes Sociais, Escritório e Lattes */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                title="Instagram Profissional @beatrizfigueiredoadv"
                className="px-3.5 h-10 rounded-full border border-stone-300/80 bg-white/90 hover:bg-[#9E1B32] hover:border-[#9E1B32] text-stone-700 hover:text-white inline-flex items-center gap-2 text-xs font-semibold transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-[#9E1B32] group-hover:text-white" />
                {PROFILE_INFO.instagramHandle}
              </a>

              <a
                href={PROFILE_INFO.officeInstagramUrl}
                target="_blank"
                rel="noreferrer"
                title="FV Advogados Associados (@fvadvogadosassociados)"
                className="px-3.5 h-10 rounded-full border border-stone-300/80 bg-white/90 hover:bg-[#9E1B32] hover:border-[#9E1B32] text-stone-700 hover:text-white inline-flex items-center gap-2 text-xs font-semibold transition-colors shadow-xs"
              >
                <Building2 className="w-4 h-4 text-[#9E1B32]" />
                FV Advogados
              </a>

              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noreferrer"
                title="Currículo Lattes CNPq Oficial"
                className="px-3.5 h-10 rounded-full border border-stone-300/80 bg-white/90 hover:bg-[#9E1B32] hover:border-[#9E1B32] text-stone-700 hover:text-white inline-flex items-center gap-1.5 text-xs font-semibold transition-colors shadow-xs"
              >
                <GraduationCap className="w-4 h-4 text-[#9E1B32]" />
                Lattes CNPq
              </a>

              <a
                href={`tel:${PROFILE_INFO.officePhone.replace(/\D/g, '')}`}
                title="Telefone FV Advogados Associados"
                className="px-3.5 h-10 rounded-full border border-stone-300/80 bg-white/90 hover:bg-[#9E1B32] hover:border-[#9E1B32] text-stone-700 hover:text-white inline-flex items-center gap-1.5 text-xs font-semibold transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E1B32]" />
                {PROFILE_INFO.officePhone}
              </a>
            </div>
          </div>

          {/* Coluna Direita: Círculo Vermelho Rubi + Foto Real do Instagram + Selo Giratório + 3 Pílulas */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[430px] sm:min-h-[500px]">
            {/* Linhas curvas tracejadas sutis ao redor */}
            <svg
              className="absolute w-[108%] h-[108%] text-[#9E1B32]/20 pointer-events-none"
              viewBox="0 0 500 500"
              fill="none"
            >
              <circle
                cx="250"
                cy="265"
                r="205"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="5 5"
              />
              <path
                d="M 410 350 Q 450 320 480 355"
                stroke="#9E1B32"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Selo Redondo Giratório no Canto Superior Direito */}
            <div className="absolute top-2 right-2 sm:right-6 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#3A0812] text-white shadow-xl flex items-center justify-center p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[9.3px] uppercase font-bold tracking-[2.4px] fill-rose-100">
                  <textPath href="#circlePath">
                    • ADVOCACIA • ÉTICA E COMPROMISSO
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Scale className="w-6 h-6 text-rose-200" />
              </div>
            </div>

            {/* Grande Círculo Sólido Vermelho Rubi com a Foto Profissional Real */}
            <div className="relative w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] rounded-full bg-gradient-to-b from-[#B31E38] to-[#4A0813] shadow-2xl flex items-end justify-center overflow-hidden border-4 border-white/70">
              <img
                src={photoUrl}
                alt={PROFILE_INFO.name}
                className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
              />

              {/* Botão discreto caso queira testar outra foto */}
              <button
                onClick={onOpenPhotoModal}
                title="Clique para testar outra foto"
                className="absolute bottom-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 text-white text-[11px] font-medium backdrop-blur-md transition cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-rose-300" />
                Trocar foto
              </button>
            </div>

            {/* Pílula Flutuante 1 — Superior Esquerda: FV Advogados Associados */}
            <div className="absolute top-10 sm:top-14 left-0 sm:left-2 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-rose-100 flex items-center gap-2.5 animate-float-slow">
              <img
                src="/images/fv-logo.jpg"
                alt="FV Advogados Associados"
                className="w-7 h-7 rounded-full object-cover border border-[#9E1B32]/30"
              />
              <div className="text-left">
                <span className="block text-xs font-bold text-stone-900 leading-none">
                  FV Advogados
                </span>
                <span className="block text-[10px] text-stone-500 mt-0.5">
                  Desde 1990 • Itabuna
                </span>
              </div>
            </div>

            {/* Pílula Flutuante 2 — Inferior Esquerda: Pós-graduanda PUC/RS */}
            <div className="absolute bottom-10 sm:bottom-14 left-2 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-rose-100 flex items-center gap-2.5 animate-float-delayed">
              <span className="w-7 h-7 rounded-full bg-[#9E1B32] text-white flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-stone-900 leading-none">
                  Pós-graduanda PUC/RS
                </span>
                <span className="block text-[10px] text-stone-500 mt-0.5">
                  Graduada pela UESC
                </span>
              </div>
            </div>

            {/* Pílula Flutuante 3 — Direita: Empresas & Trabalhadores */}
            <div className="absolute bottom-24 sm:bottom-28 right-0 sm:right-1 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-rose-100 flex items-center gap-2.5 animate-float-slow">
              <span className="w-7 h-7 rounded-full bg-[#9E1B32] text-white flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-800">
                Empresas & Trabalhadores
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
