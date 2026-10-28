import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Building2,
} from 'lucide-react';
import { AREAS_ATUACAO, PROFILE_INFO } from '../data/siteData';

export default function ContactSection({ photoUrl, preselectedArea }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    area: preselectedArea || '',
    perfilCliente: 'Pessoa Física / Trabalhador',
    preferenciaContato: 'WhatsApp',
    mensagem: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedArea) {
      setFormData((prev) => ({ ...prev, area: preselectedArea }));
    }
  }, [preselectedArea]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Foto da Advogada à Esquerda */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-t from-[#3A0812] via-[#7D1326] to-[#9E1B32] pt-6 px-4 flex items-end justify-center shadow-xl">
            <img
              src={photoUrl}
              alt="Dra. Beatriz Figueiredo Atendimento"
              className="relative z-10 w-full h-[430px] object-cover object-top rounded-t-2xl"
            />
          </div>

          <div className="w-full max-w-md mt-4 rounded-2xl bg-[#FDF6F7] border border-rose-100 p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#9E1B32] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">
                  FV Advogados Associados • Itabuna/BA
                </p>
                <p className="text-xs text-stone-600">
                  Atendimento: {PROFILE_INFO.officePhone}
                </p>
              </div>
            </div>
            <a
              href={`tel:${PROFILE_INFO.officePhone.replace(/\D/g, '')}`}
              className="px-3.5 py-2 rounded-xl bg-white border border-rose-200 text-[#9E1B32] text-xs font-bold hover:bg-[#9E1B32] hover:text-white transition"
            >
              Ligar
            </a>
          </div>
        </div>

        {/* Formulário Completo à Direita */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBE9EA] text-[#9E1B32] mb-2">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Agende sua <span className="text-[#9E1B32]">consulta</span>
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Presencial em Itabuna na <strong>FV Advogados Associados</strong> ou online por
              videoconferência.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-stone-100 shadow-[0_12px_45px_rgb(0,0,0,0.06)]">
            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FDF2F3] text-[#9E1B32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Solicitação registrada!
                </h3>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  Obrigado, <strong>{formData.nome || 'visitante'}</strong>. Clique abaixo
                  para enviar sua mensagem diretamente no WhatsApp de atendimento.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Olá, Dra. Beatriz! Meu nome é ${formData.nome} (${formData.perfilCliente}). Gostaria de atendimento sobre ${
                        formData.area || 'Consultoria Jurídica'
                      }. ${formData.mensagem}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md hover:opacity-95 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continuar no WhatsApp
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-3 rounded-full border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 transition cursor-pointer"
                  >
                    Editar dados
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Nome completo ou Empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome ou razão social"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E1B32] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E1B32] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(73) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E1B32] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Qual área jurídica procura?
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#9E1B32] transition"
                    >
                      <option value="">Selecione uma opção</option>
                      {AREAS_ATUACAO.map((a) => (
                        <option key={a.id} value={a.title}>
                          {a.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Você busca atendimento para:
                    </label>
                    <select
                      value={formData.perfilCliente}
                      onChange={(e) =>
                        setFormData({ ...formData, perfilCliente: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-700 bg-white focus:outline-none focus:border-[#9E1B32] transition"
                    >
                      <option value="Pessoa Física / Trabalhador">
                        Pessoa Física / Trabalhador
                      </option>
                      <option value="Empresa / Empregador">Empresa / Empregador</option>
                      <option value="Produtor Rural">Produtor Rural</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1.5">
                      Como prefere ser contatado?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['WhatsApp', 'Ligação', 'E-mail'].map((metodo) => {
                        const active = formData.preferenciaContato === metodo;
                        return (
                          <button
                            type="button"
                            key={metodo}
                            onClick={() =>
                              setFormData({ ...formData, preferenciaContato: metodo })
                            }
                            className={`py-2.5 px-2 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition cursor-pointer ${
                              active
                                ? 'bg-[#FDF2F3] border-[#9E1B32] text-[#9E1B32]'
                                : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                            }`}
                          >
                            {metodo === 'WhatsApp' && (
                              <MessageCircle className="w-3.5 h-3.5" />
                            )}
                            {metodo === 'Ligação' && <Phone className="w-3.5 h-3.5" />}
                            {metodo === 'E-mail' && <Mail className="w-3.5 h-3.5" />}
                            {metodo}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1.5">
                    Mensagem{' '}
                    <span className="font-normal text-stone-400">(opcional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente sua situação ou dúvida jurídica"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#9E1B32] transition"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-stone-500">
                    Seus dados são protegidos pelo sigilo profissional da advocacia.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#9E1B32] hover:bg-[#7D1326] text-white font-semibold text-sm shadow-lg shadow-[#9E1B32]/20 transition cursor-pointer shrink-0"
                  >
                    Solicitar agendamento <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
