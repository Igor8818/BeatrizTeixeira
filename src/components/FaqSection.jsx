import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section
      id="duvidas"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBE9EA] text-[#9E1B32] mb-3">
          Dúvidas Frequentes
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
          Tire suas <span className="text-[#9E1B32]">dúvidas</span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Respostas rápidas para as perguntas mais comuns sobre consultas e assessoria
          jurídica.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-stone-200/80 shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition"
              >
                <span
                  className={`text-sm sm:text-base font-semibold transition-colors ${
                    isOpen ? 'text-[#9E1B32]' : 'text-stone-800'
                  }`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#9E1B32]' : 'text-stone-400'
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
