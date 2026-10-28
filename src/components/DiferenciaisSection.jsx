import React from 'react';
import { DIFERENCIAIS } from '../data/siteData';

export default function DiferenciaisSection() {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FBE9EA] text-[#9E1B32] mb-4">
          Excelência Jurídica
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
          Por que escolher um{' '}
          <span className="text-[#9E1B32]">acompanhamento sob medida</span>
        </h2>
        <p className="mt-3 text-stone-600 text-base">
          Princípios que guiam cada atendimento a empresas e trabalhadores, com segurança
          técnica, clareza e resultados consistentes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DIFERENCIAIS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-7 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(158,27,50,0.10)] transition-all duration-300 overflow-hidden"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FBE9EA] to-transparent absolute -top-8 -right-8 opacity-70 group-hover:scale-125 transition-transform" />
              <div className="w-11 h-11 rounded-xl bg-[#FDF2F3] text-[#9E1B32] flex items-center justify-center mb-6 group-hover:bg-[#9E1B32] group-hover:text-white transition-colors">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
