import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  X,
  ZoomIn,
} from 'lucide-react';
import { AREAS_ATUACAO, PROFILE_INFO } from '../data/siteData';

export default function AreasSection({ onScrollToContact }) {
  const [selectedArea, setSelectedArea] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section
      id="atuacao"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBE9EA] text-[#9E1B32] mb-2">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Assessoria jurídica para{' '}
            <span className="text-[#9E1B32]">empresas e pessoas físicas</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
            Atuação consultiva, preventiva e contenciosa no escritório{' '}
            <strong>FV Advogados Associados</strong>, com soluções claras e personalizadas.
          </p>
        </div>
      </div>

      {/* Grade de 6 Áreas de Atuação */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {AREAS_ATUACAO.map((area) => {
          const IconComponent = area.icon;
          return (
            <div
              key={area.id}
              className="group bg-white rounded-2xl border border-stone-100 shadow-[0_6px_28px_rgb(0,0,0,0.05)] hover:shadow-[0_14px_38px_rgb(158,27,50,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-white/95 text-[#9E1B32] flex items-center justify-center shadow-sm">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2.5 group-hover:text-[#9E1B32] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9E1B32] hover:bg-[#7D1326] text-white text-xs font-semibold transition cursor-pointer"
                  >
                    Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá, Dra. Beatriz! Gostaria de orientação jurídica sobre ${area.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-stone-500 hover:text-[#9E1B32] inline-flex items-center gap-1 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de Detalhes da Área de Atuação (evita páginas extras desnecessárias) */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-60 sm:h-72">
              <img
                src={selectedArea.image}
                alt={selectedArea.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/65 text-white flex items-center justify-center hover:bg-black cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={() => setLightboxImage(selectedArea.image)}
                className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-lg flex items-center justify-center transition cursor-pointer"
                title="Ampliar imagem"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-16 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-200 block">
                  Área de Atuação • FV Advogados Associados
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-0.5">
                  {selectedArea.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="space-y-3.5 text-stone-600 leading-relaxed text-sm sm:text-base">
                {selectedArea.fullContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="bg-[#FDF6F7] rounded-2xl p-5 sm:p-6 border border-rose-100">
                <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-3.5">
                  Principais frentes de atuação em {selectedArea.title}:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedArea.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#9E1B32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedArea(null);
                      onScrollToContact(selectedArea.title);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9E1B32] hover:bg-[#7D1326] text-white font-semibold text-xs sm:text-sm shadow-md transition cursor-pointer"
                  >
                    Agendar consulta nesta área <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá, Dra. Beatriz! Preciso de orientação em ${selectedArea.title}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-200 hover:border-[#9E1B32] text-stone-700 hover:text-[#9E1B32] font-semibold text-xs sm:text-sm transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setSelectedArea(null)}
                  className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox para Zoom */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage}
              alt="Visualização ampliada"
              className="w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
