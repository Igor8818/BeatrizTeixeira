import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, X, ExternalLink } from 'lucide-react';
import { ARTIGOS_LATTES, PROFILE_INFO } from '../data/siteData';

export const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="artigos" className="py-16 md:py-28 bg-[#FAF6F0] border-t border-b border-[#C8A261]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#2D0812] text-xs text-[#E8D5B0] font-semibold tracking-wider uppercase shadow-xs">
            Produção Acadêmica &amp; Pesquisa
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#210A11] tracking-tight">
            Artigos Científicos &amp; Publicações
          </h2>
          {/* Linha decorativa dourada */}
          <div className="w-16 h-1 bg-[#C8A261] mx-auto rounded-full mt-2 mb-3" />
          <p className="text-[#523E45] text-sm sm:text-base leading-relaxed">
            Pesquisas empíricas, artigos e projetos de extensão desenvolvidos pela Dra. Beatriz no âmbito da <strong className="text-[#210A11] font-semibold">Universidade Estadual de Santa Cruz (UESC)</strong> e apresentados em eventos jurídicos nacionais.
          </p>
        </div>

        {/* Grade com os 4 Artigos com Tags Elegantes e Bordas Douradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ARTIGOS_LATTES.map((artigo) => (
            <div
              key={artigo.id}
              className="group rounded-2xl bg-white border border-[#C8A261]/25 hover:border-[#C8A261] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#C8A261]/10 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Imagem / Capa + Tag de Categoria */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-[#2D0812] border border-[#C8A261]/30">
                  <img
                    src={artigo.image}
                    alt={artigo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D0812]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold bg-[#2D0812]/90 px-2.5 py-1 rounded-md border border-[#C8A261]/40 text-[#E8D5B0] text-[10px] uppercase tracking-wider">
                      {artigo.category}
                    </span>
                    <span className="text-[11px] font-mono text-rose-200 bg-black/40 px-2 py-0.5 rounded">
                      {artigo.year}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#210A11] group-hover:text-[#C8A261] transition-colors line-clamp-2 leading-snug">
                    {artigo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#523E45] line-clamp-3 leading-relaxed font-normal">
                    {artigo.excerpt}
                  </p>
                </div>
              </div>

              {/* Botão de Acesso */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(artigo)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2D0812] group-hover:text-[#C8A261] transition-colors"
                >
                  <span>Ler resumo e referência</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A261] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <span className="text-[11px] text-[#523E45] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C8A261]" />
                  {artigo.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Leitura do Artigo */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D0812]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-2 border-[#C8A261]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-[#2D0812] hover:bg-slate-200 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C8A261] font-bold">
                {selectedArticle.category} • {selectedArticle.year}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#210A11] leading-snug">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#C8A261]/30 text-xs text-[#523E45] italic">
              <strong>Referência Lattes CNPq:</strong> {selectedArticle.reference}
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#523E45] leading-relaxed">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C8A261] hover:underline font-semibold"
              >
                <span>Ver produção completa no Lattes CNPq</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2D0812] text-white hover:bg-[#3D0E1A] font-bold text-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
