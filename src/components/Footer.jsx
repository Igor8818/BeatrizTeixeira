import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/siteData';
import { InstagramIcon, LattesIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E040B] border-t-2 border-[#C8A261]/40 pt-16 pb-12 text-rose-200/70 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-rose-900/40">
          {/* Identidade */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#C8A261]/40 bg-[#2D0812] flex-shrink-0 shadow-md">
                <img
                  src="./images/fv-logo.jpg"
                  alt="FV Advogados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif-editorial text-xl font-bold text-white">
                  Dra. Beatriz Teixeira Figueiredo
                </h4>
                <p className="text-[11px] text-[#C8A261] font-semibold">
                  {PROFILE_INFO.officeName} ({PROFILE_INFO.officeSince})
                </p>
              </div>
            </div>

            <p className="text-rose-200/80 text-xs leading-relaxed max-w-sm">
              Graduada pela UESC, Pós-graduanda pela PUC/RS e com capacitações executivas pela FGV. Atuação dedicada à defesa estratégica e assessoria jurídica para empresas e trabalhadores.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={PROFILE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2D0812] border border-rose-900/60 hover:border-[#C8A261] hover:text-[#E8D5B0] flex items-center justify-center transition-colors"
                title="Instagram Dra. Beatriz"
              >
                <InstagramIcon className="w-4 h-4 text-[#C8A261]" />
              </a>
              <a
                href={PROFILE_INFO.officeInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2D0812] border border-rose-900/60 hover:border-[#C8A261] hover:text-[#E8D5B0] flex items-center justify-center transition-colors"
                title="Instagram FV Advogados"
              >
                <InstagramIcon className="w-4 h-4 text-[#C8A261]" />
              </a>
              <a
                href={PROFILE_INFO.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2D0812] border border-rose-900/60 hover:border-[#C8A261] hover:text-[#E8D5B0] flex items-center justify-center transition-colors"
                title="Currículo Lattes CNPq"
              >
                <LattesIcon className="w-4 h-4 text-[#C8A261]" />
              </a>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#E8D5B0]">
              Navegação
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-white transition-colors">
                  Áreas de Atuação &amp; Escritório
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Perfil &amp; Trajetória
                </a>
              </li>
              <li>
                <a href="#artigos" className="hover:text-white transition-colors">
                  Artigos &amp; Publicações
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Locais */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-[#E8D5B0]">
              Atendimento Jurídico
            </h5>
            <p className="text-xs text-rose-200/80 leading-relaxed">
              Itabuna, Ilhéus e sul da Bahia — Atendimento presencial no escritório FV Advogados Associados ou telepresencial em todo o Brasil.
            </p>
            <div className="space-y-1 pt-1 font-mono text-[11px] text-rose-200/90">
              <p>Telefone: {PROFILE_INFO.officePhone}</p>
              <p>E-mail: {PROFILE_INFO.emailOffice}</p>
              <p>Atuação: {PROFILE_INFO.officeSince}</p>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior com Créditos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-rose-200/60">
          <p>
            © {new Date().getFullYear()} Dra. Beatriz Teixeira Figueiredo — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Desenvolvido por{' '}
              <a
                href="https://github.com/Igor8818"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 hover:text-[#E8D5B0] transition-colors underline underline-offset-2"
              >
                Igor Hagge (@igor_hagge)
              </a>
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#2D0812] border border-rose-900/60 text-rose-200 hover:text-white hover:border-[#C8A261] transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-rose-950/60 text-center text-[10px] text-rose-300/40">
          Este site possui caráter estritamente informativo, institucional e acadêmico, em total conformidade com o Provimento nº 205/2021 e o Código de Ética e Disciplina da OAB.
        </div>
      </div>
    </footer>
  );
};
