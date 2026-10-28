import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { AREAS_ATUACAO, PROFILE_INFO } from '../data/siteData';

export const AreasSection = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section id="atuacao" className="py-16 md:py-28 bg-[#FAF6F0] border-t border-b border-[#C8A261]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção com Linha Dourada Decorativa */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2D0812] text-xs text-[#E8D5B0] font-semibold tracking-wider uppercase shadow-xs">
            Especialidades Jurídicas
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#210A11] tracking-tight">
            Áreas de Atuação &amp; Escritório
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#C8A261] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#523E45] text-sm sm:text-base leading-relaxed">
            Assessoria jurídica para pessoas físicas e jurídicas pelo tradicional escritório <strong className="text-[#210A11] font-semibold">FV Advogados Associados</strong>, combinando rigor técnico, escuta ativa e firmeza processual.
          </p>
        </div>

        {/* Banner Institucional do Escritório FV Advogados Associados */}
        <div className="mb-12 sm:mb-14 rounded-2xl bg-white border border-[#C8A261]/30 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Logo do Escritório */}
            <div className="lg:col-span-3 flex sm:flex-row lg:flex-col items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#C8A261]/40 bg-[#1E050C] flex-shrink-0 shadow-md">
                <img
                  src="./images/fv-logo.jpg"
                  alt="FV Advogados Associados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:text-center">
                <span className="text-xs text-[#C8A261] font-bold uppercase tracking-wider block">
                  {PROFILE_INFO.officeSince}
                </span>
                <span className="text-[12px] text-[#523E45] block font-medium">
                  Tradição no Sul da Bahia
                </span>
              </div>
            </div>

            {/* Informações Institucionais */}
            <div className="lg:col-span-9 space-y-4">
              <div>
                <h3 className="text-2xl font-serif-editorial font-bold text-[#210A11]">
                  {PROFILE_INFO.officeName}
                </h3>
                <p className="text-sm sm:text-base text-[#523E45] mt-1 leading-relaxed">
                  Banca advocatícia de referência em Itabuna e no estado da Bahia há mais de 34 anos. Atuação consolidada no contencioso e consultivo Empresarial, Trabalhista, Cível, Contratual, de Família e Agrário, com estrutura física completa e atendimento online para todo o país.
                </p>
              </div>

              {/* Contatos Rápidos do Escritório */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#210A11]">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#C8A261]/20">
                  <MapPin className="w-4 h-4 text-[#C8A261] flex-shrink-0" />
                  <span className="truncate font-semibold">{PROFILE_INFO.city}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#C8A261]/20">
                  <Phone className="w-4 h-4 text-[#C8A261] flex-shrink-0" />
                  <span className="font-semibold">{PROFILE_INFO.officePhone}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#C8A261]/20">
                  <Mail className="w-4 h-4 text-[#C8A261] flex-shrink-0" />
                  <span className="truncate font-semibold">{PROFILE_INFO.emailOffice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grade com os 4 Cards de Especialidade com Números Grandes e Bordas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {AREAS_ATUACAO.map((area, index) => {
            const Icon = area.icon;
            const numberLabel = `0${index + 1}`;
            return (
              <div
                key={area.id}
                className="group rounded-2xl bg-white border border-[#C8A261]/25 hover:border-[#C8A261] p-7 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#C8A261]/10 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Número Grande no Canto Superior */}
                <div className="absolute top-6 right-6 font-serif-editorial text-4xl sm:text-5xl font-bold text-[#C8A261]/20 group-hover:text-[#C8A261]/50 transition-colors pointer-events-none select-none">
                  {numberLabel}
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Ícone em Círculo Rubi com Ícone Dourado */}
                  <div className="w-14 h-14 rounded-2xl bg-[#2D0812] border border-[#C8A261]/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-[#E8D5B0]" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#210A11] group-hover:text-[#C8A261] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-[14px] sm:text-base text-[#523E45] leading-relaxed font-normal">
                    {area.shortDesc}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {area.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#210A11] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#C8A261] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2D0812] hover:text-[#C8A261] transition-colors"
                  >
                    <span>Conhecer detalhes da atuação</span>
                    <ArrowRight className="w-4 h-4 text-[#C8A261] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20consultoria%20na%20%C3%A1rea%20de%20${encodeURIComponent(
                      area.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#C8A261] hover:text-[#DFBD7F] uppercase tracking-wider transition-colors"
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Detalhado da Área de Atuação */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D0812]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-2 border-[#C8A261]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-[#2D0812] hover:bg-slate-200 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2D0812] border border-[#C8A261]/40 flex items-center justify-center flex-shrink-0">
                {React.createElement(selectedArea.icon, {
                  className: 'w-7 h-7 text-[#E8D5B0]',
                })}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C8A261] font-bold">
                  FV Advogados Associados (Fundado em 1990)
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#210A11]">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#523E45] leading-relaxed">
              {selectedArea.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-[#210A11] font-bold">
                Principais Frentes de Atendimento:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#C8A261]/20 text-xs sm:text-sm text-[#210A11] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A261] mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#2D0812] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Voltar
              </button>
              <a
                href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20atendimento%20em%20${encodeURIComponent(
                  selectedArea.title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C8A261] hover:bg-[#DFBD7F] text-[#2D0812] font-bold text-sm shadow-md"
              >
                <span>Falar com Dra. Beatriz sobre essa área</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
