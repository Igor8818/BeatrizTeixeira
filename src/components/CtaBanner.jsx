import React from 'react';
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';

export default function CtaBanner({ onScrollToContact }) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#9E1B32] via-[#821428] to-[#4A0E17] text-white">
        {/* Imagem de fundo à direita com fusão suave em gradiente */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-25 lg:opacity-45 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
            alt="Justiça e Direito"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#821428] via-[#821428]/70 to-transparent" />
        </div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/15 backdrop-blur-sm border border-white/20 text-rose-100 mb-5">
            Atendimento em Itabuna & Online
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Precisa de orientação jurídica para sua empresa ou seus direitos?
          </h2>
          <p className="text-rose-100/90 text-base sm:text-lg leading-relaxed mb-8">
            Agende uma consulta presencial no escritório{' '}
            <strong>FV Advogados Associados</strong> em Itabuna ou por videoconferência.
            Vamos analisar sua demanda com clareza, sigilo e estratégia.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => onScrollToContact()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#821428] font-semibold text-sm hover:bg-rose-50 transition shadow-lg cursor-pointer"
            >
              Agendar consulta <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-sm text-white font-medium text-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-rose-100/90 pt-4 border-t border-white/15">
            <span className="inline-flex items-center gap-2">
              <Building2 className="w-4 h-4 text-rose-200" />
              FV Advogados Associados (Fundado em 1990)
            </span>
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-rose-200" />
              UESC | Pós-graduanda PUC/RS
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-200" />
              Empresas & Trabalhadores
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
