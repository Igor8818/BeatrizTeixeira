import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ARTIGOS_LATTES } from '../data/siteData';

export default function ArticlesSection({ onScrollToContact }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section
      id="producao"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBE9EA] text-[#9E1B32] mb-2">
            Artigos & Produção Científica
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
            Conhecimento para proteger seus direitos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Pesquisas, publicações e projetos sobre relações de trabalho, mulheres, crédito
            rural e cidadania digital.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ARTIGOS_LATTES.map((artigo) => (
          <div
            key={artigo.id}
            className="group bg-white rounded-2xl border border-stone-100 shadow-[0_6px_25px_rgb(0,0,0,0.04)] hover:shadow-[0_14px_35px_rgb(158,27,50,0.10)] transition-all duration-300 flex flex-col overflow-hidden"
          >
            <div className="h-44 overflow-hidden relative">
              <img
                src={artigo.image}
                alt={artigo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium">
                {artigo.year}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9E1B32] block mb-1.5">
                  {artigo.category}
                </span>
                <h3 className="text-base font-bold text-stone-900 mb-2.5 line-clamp-2 group-hover:text-[#9E1B32] transition-colors">
                  {artigo.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 mb-5">
                  {artigo.excerpt}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedArticle(artigo)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9E1B32] hover:bg-[#7D1326] text-white text-xs font-semibold transition cursor-pointer"
                >
                  Ler resumo <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Leitura do Artigo */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/65 text-white flex items-center justify-center hover:bg-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FBE9EA] text-[#9E1B32]">
                {selectedArticle.category} • {selectedArticle.year}
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                {selectedArticle.title}
              </h3>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600">
                <strong>Referência no Currículo Lattes:</strong> {selectedArticle.reference}
              </div>
              <div className="space-y-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="pt-4 flex justify-between items-center border-t border-stone-100">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onScrollToContact();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9E1B32] text-white text-xs font-semibold cursor-pointer"
                >
                  Tirar dúvida sobre este tema <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
