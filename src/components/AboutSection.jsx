import React, { useState } from 'react';
import {
  GraduationCap,
  ExternalLink,
  Phone,
  MapPin,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { PROFILE_INFO } from '../data/siteData';

export default function AboutSection({ photoUrl }) {
  const [activeLattesTab, setActiveLattesTab] = useState('institucional');

  return (
    <section
      id="sobre"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Bloco Principal Sobre a Especialista */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Moldura da foto à esquerda com cartão flutuante de credencial */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#3A0812] to-[#7D1326] p-3 pb-0 shadow-xl border border-rose-100">
            <img
              src={photoUrl}
              alt={PROFILE_INFO.name}
              className="w-full h-[420px] sm:h-[460px] object-cover object-top rounded-t-2xl"
            />
          </div>

          {/* Badge Flutuante no canto inferior direito */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-stone-100 flex items-center gap-3.5 max-w-xs">
            <div className="w-11 h-11 rounded-full bg-[#FDF2F3] text-[#9E1B32] flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                UESC • PÓS-GRADUANDA PUC/RS
              </p>
              <p className="text-xs text-stone-500">
                FV Advogados Associados • Itabuna/BA
              </p>
            </div>
          </div>
        </div>

        {/* Texto Sobre a Especialista à direita */}
        <div className="lg:col-span-7 space-y-5 lg:pl-6">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBE9EA] text-[#9E1B32]">
            Sobre a Especialista
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Compromisso em ajudar{' '}
            <span className="text-[#9E1B32]">empresas e trabalhadores</span> a protegerem
            seus direitos.
          </h2>

          <p className="text-stone-600 leading-relaxed text-base">
            Sou a <strong>Dra. Beatriz Teixeira Figueiredo</strong>, advogada integrante do
            escritório <strong>FV Advogados Associados</strong> (referência em Itabuna - BA
            desde 1990), graduada em Direito pela{' '}
            <strong>Universidade Estadual de Santa Cruz (UESC)</strong> e{' '}
            <strong>pós-graduanda pela PUC/RS</strong>.
          </p>

          <p className="text-stone-600 leading-relaxed text-base">
            Minha trajetória combina a advocacia consultiva e contenciosa para empresas e
            pessoas físicas à experiência prática em órgãos essenciais da Justiça baiana —
            com passagens pela <strong>1ª Vara da Fazenda Pública</strong> e{' '}
            <strong>1ª Vara da Família de Itabuna (TJ/BA)</strong> e pela{' '}
            <strong>7ª Promotoria de Justiça de Ilhéus (MP/BA)</strong> — além da extensão no{' '}
            <strong>SERMULHER/UESC</strong> e pesquisa científica no grupo{' '}
            <strong>CINESTESIA (CNPq)</strong>.
          </p>

          {/* Card Destaque FV Advogados Associados */}
          <div className="rounded-2xl bg-[#FDF6F7] border border-rose-200/70 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/images/fv-logo.jpg"
                alt="FV Advogados Associados"
                className="w-14 h-14 rounded-2xl object-cover shadow-sm border border-rose-200 shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-stone-900">
                    FV Advogados Associados
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#9E1B32] text-white">
                    Desde 1990
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#9E1B32]" /> Itabuna - Bahia
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#9E1B32]" /> (73) 3211-3550
                  </span>
                </p>
              </div>
            </div>

            <a
              href={PROFILE_INFO.officeInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-rose-200 text-[#9E1B32] hover:bg-[#9E1B32] hover:text-white text-xs font-bold transition self-start sm:self-center shrink-0"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              {PROFILE_INFO.officeInstagramHandle}
            </a>
          </div>

          {/* 3 Caixas de Destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="rounded-xl bg-white border border-stone-200/80 p-4 text-center shadow-2xs">
              <p className="text-base font-bold text-[#9E1B32]">FV Advogados</p>
              <p className="text-xs text-stone-600 mt-1">
                Tradição jurídica desde 1990
              </p>
            </div>
            <div className="rounded-xl bg-white border border-stone-200/80 p-4 text-center shadow-2xs">
              <p className="text-base font-bold text-[#9E1B32]">UESC & PUC/RS</p>
              <p className="text-xs text-stone-600 mt-1">
                Graduação e Pós-graduação
              </p>
            </div>
            <div className="rounded-xl bg-white border border-stone-200/80 p-4 text-center shadow-2xs">
              <p className="text-base font-bold text-[#9E1B32]">1º Lugar UESC</p>
              <p className="text-xs text-stone-600 mt-1">
                Pesquisa e extensão premiada
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subseção Integrada: Trajetória Acadêmica e Institucional (Lattes CNPq) */}
      <div className="mt-16 bg-[#FDF6F7] rounded-3xl p-6 sm:p-10 border border-rose-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-rose-200/60">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B32]">
              Formação, Prática Jurídica & Currículo Lattes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Trajetória Acadêmica e Institucional
            </h3>
          </div>
          <a
            href={PROFILE_INFO.lattesUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-rose-200 text-[#9E1B32] text-xs font-bold shadow-xs hover:bg-[#9E1B32] hover:text-white transition self-start"
          >
            Acessar Lattes Oficial (CNPq) <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Abas interativas */}
        <div className="flex flex-wrap gap-2 my-6">
          {[
            { id: 'institucional', label: 'Formação, FV Advogados, TJ/BA e MP/BA' },
            { id: 'projetos', label: 'Projetos de Pesquisa, Ensino e Extensão' },
            { id: 'producoes', label: 'Publicações, Capítulos e Prêmios' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveLattesTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeLattesTab === tab.id
                  ? 'bg-[#9E1B32] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-rose-50 border border-rose-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeLattesTab === 'institucional' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">
                Atuação Atual • Advocacia & Pós-Graduação
              </span>
              <h4 className="font-bold text-stone-900 mt-1">
                Advogada na FV Advogados Associados & Pós-graduanda pela PUC/RS
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Atuação jurídica em Itabuna e região pelo escritório FV Advogados Associados
                (fundado em 1990), assessorando empresas e trabalhadores na defesa estratégica
                e preventiva de seus direitos, com especialização em andamento pela PUC/RS.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">2020 – 2026 • UESC</span>
              <h4 className="font-bold text-stone-900 mt-1">
                Graduação em Direito — Universidade Estadual de Santa Cruz
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Trabalho de Conclusão: &ldquo;Cacau e Crédito Rural: Programa de Recuperação da
                Lavoura Cacaueira Baiana no Complexo Triunfo-Itumirim, em Una-BA&rdquo;
                (Orientadora: Profa. Samene Batista Pereira Santana).
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">2022 – 2025 • TJ/BA</span>
              <h4 className="font-bold text-stone-900 mt-1">
                Tribunal de Justiça da Bahia — 1ª Vara da Fazenda Pública e 1ª Vara da Família
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Experiência prática nos Gabinetes da 1ª Vara da Fazenda Pública (2024–2025) e
                da 1ª Vara da Família (2022–2023) da Comarca de Itabuna, atuando em demandas de
                Direito Público e Direito das Famílias.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">2023 • MP/BA</span>
              <h4 className="font-bold text-stone-900 mt-1">
                Ministério Público do Estado da Bahia — 7ª Promotoria de Justiça de Ilhéus
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Atuação na 7ª Promotoria de Justiça da Comarca de Ilhéus, auxiliando na
                fiscalização da lei e na defesa de direitos coletivos e individuais
                indisponíveis.
              </p>
            </div>
          </div>
        )}

        {activeLattesTab === 'projetos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">2022 – 2025 • Extensão</span>
              <h4 className="font-bold text-stone-900 mt-1">
                SERMULHER — Serviço de Referência dos Direitos da Mulher
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Extensionista vinculada ao Departamento de Ciências Jurídicas da UESC, atuando
                no acolhimento jurídico, formação da Patrulha Guardiã e curadoria SERMULHER
                INDICA.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">
                2023 – Atual • Pesquisa CNPq
              </span>
              <h4 className="font-bold text-stone-900 mt-1">
                CINESTESIA: Grupo de Pesquisa em Direito, Filosofia e Cinema
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Pesquisadora nos campos de Direito e Arte e Direito e Memória, e organizadora
                do I e III Seminário de Direito e Cinema da UESC.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-rose-100">
              <span className="text-xs font-bold text-[#9E1B32]">2025 – 2026 • Ensino</span>
              <h4 className="font-bold text-stone-900 mt-1">
                Agrariedade e Sustentabilidade na Emergência Climática
              </h4>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Monitoria acadêmica em Direito Ambiental e Direito Agrário na UESC e
                organização da Oficina de Direito Agrário e Segurança Alimentar.
              </p>
            </div>
          </div>
        )}

        {activeLattesTab === 'producoes' && (
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-rose-100">
              <p className="text-xs font-bold text-[#9E1B32]">🏆 PRÊMIO ACADÊMICO (2023)</p>
              <p className="text-sm font-semibold text-stone-800 mt-0.5">
                1º Lugar entre os resumos de extensão apresentados no 10º Simpósio de Ensino,
                Extensão, Inovação e Pesquisa da UESC.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-100">
              <p className="text-xs font-bold text-[#9E1B32]">
                📚 CAPÍTULO DE LIVRO PUBLICADO (2025)
              </p>
              <p className="text-sm text-stone-700 mt-0.5">
                <strong>ER-Plantão Médico como audiovisualidade revolucionária:</strong> a
                masculinidade negra através de Peter Benton. In: Memórias do 3º NODIN —
                Novembro de Direitos e Identidades Negras da UESC (Direitos Humanos e
                Letramento Racial).
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-100">
              <p className="text-xs font-bold text-[#9E1B32]">
                🎓 OFICINAS E CURSOS MINISTRADOS (2024–2025)
              </p>
              <p className="text-sm text-stone-700 mt-0.5">
                • Curso de Capacitação para a Patrulha Guardiã (2025) • SERMÃE: Oficina sobre
                direitos das mulheres brasileiras gestantes e mães (2024) • Oficina sobre
                Empoderamento Feminino (2024) • É Digital, mas é Legal? Conversas sobre
                Cidadania Digital e Violência Online (2024).
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
