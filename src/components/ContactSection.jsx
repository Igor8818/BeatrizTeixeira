import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { PROFILE_INFO, AREAS_ATUACAO } from '../data/siteData';
import { WhatsAppIcon } from './Icons';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    area: AREAS_ATUACAO[0].title,
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Dra. Beatriz Figueiredo!%0A%0A*Nome:* ${encodeURIComponent(
      formData.nome
    )}%0A*Área de Interesse:* ${encodeURIComponent(
      formData.area
    )}%0A*Mensagem:* ${encodeURIComponent(formData.mensagem)}`;
    window.open(`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-28 bg-[#2D0812] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Coluna Esquerda: Canais Diretos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#3D0E1A] border border-[#C8A261]/40 text-xs text-[#E8D5B0] font-semibold uppercase tracking-wider">
                Atendimento Jurídico
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Inicie seu atendimento com acolhimento e clareza.
              </h2>
              {/* Linha decorativa dourada */}
              <div className="w-16 h-1 bg-[#C8A261] rounded-full" />

              <p className="text-rose-100/90 text-sm sm:text-base leading-relaxed font-normal">
                Orientação jurídica individualizada para pessoas físicas, empresas, trabalhadores e produtores rurais. Atendimento presencial no escritório FV Advogados em Itabuna ou online por videoconferência em todo o Brasil.
              </p>
            </div>

            {/* Lista de Contatos */}
            <div className="space-y-3.5 pt-2">
              <a
                href={PROFILE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#3D0E1A] border border-[#C8A261]/50 hover:border-[#C8A261] transition-colors group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8A261] text-[#2D0812] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <WhatsAppIcon className="w-6 h-6 fill-[#2D0812]" />
                </div>
                <div>
                  <span className="text-xs text-[#E8D5B0] font-bold block uppercase tracking-wider">
                    WhatsApp &amp; Atendimento Rápido
                  </span>
                  <span className="text-base font-bold text-white">
                    {PROFILE_INFO.phoneDirect}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#3D0E1A] border border-rose-900/50">
                <div className="w-12 h-12 rounded-xl bg-[#2D0812] border border-rose-900/50 flex items-center justify-center flex-shrink-0 text-[#E8D5B0]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-rose-200/70 font-medium block">
                    Telefone Escritório (FV Advogados Associados)
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {PROFILE_INFO.officePhone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#3D0E1A] border border-rose-900/50">
                <div className="w-12 h-12 rounded-xl bg-[#2D0812] border border-rose-900/50 flex items-center justify-center flex-shrink-0 text-[#E8D5B0]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-rose-200/70 font-medium block">
                    E-mail Institucional
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {PROFILE_INFO.emailOffice}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#3D0E1A] border border-rose-900/50">
                <div className="w-12 h-12 rounded-xl bg-[#2D0812] border border-rose-900/50 flex items-center justify-center flex-shrink-0 text-[#E8D5B0]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-rose-200/70 font-medium block">
                    Localização &amp; Sede
                  </span>
                  <span className="text-sm font-bold text-white">
                    {PROFILE_INFO.city}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Direcionado para WhatsApp */}
          <div className="lg:col-span-7 bg-[#3D0E1A] border-2 border-[#C8A261]/30 rounded-2xl p-6 sm:p-9 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-rose-900/50">
              <div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-white">
                  Formulário de Atendimento
                </h3>
                <p className="text-xs text-rose-200/80 mt-1">
                  Envie sua mensagem para iniciar contato diretamente via WhatsApp.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A261]/20 border border-[#C8A261]/40 text-[#E8D5B0] text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Atendimento Ágil</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">
              <div>
                <label className="block text-xs font-bold text-rose-100 uppercase tracking-wider mb-2">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria dos Santos"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#2D0812] border border-rose-900/60 text-white placeholder-rose-200/40 text-sm focus:outline-none focus:border-[#C8A261] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-rose-100 uppercase tracking-wider mb-2">
                  Área de Interesse
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#2D0812] border border-rose-900/60 text-white text-sm focus:outline-none focus:border-[#C8A261] transition-colors"
                >
                  {AREAS_ATUACAO.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Consultoria Geral / Outra Área">
                    Outra Demanda / Consultoria Preventiva
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-rose-100 uppercase tracking-wider mb-2">
                  Breve Resumo da Demanda
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Descreva brevemente a sua situação ou dúvida..."
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#2D0812] border border-rose-900/60 text-white placeholder-rose-200/40 text-sm focus:outline-none focus:border-[#C8A261] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#C8A261] hover:bg-[#DFBD7F] text-[#2D0812] font-bold text-sm sm:text-base shadow-xl shadow-[#C8A261]/25 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Enviar Mensagem via WhatsApp</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <p className="text-[11px] text-center text-rose-200/70 pt-2 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A261]" />
                <span>Atendimento regido pelo sigilo profissional da OAB.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
