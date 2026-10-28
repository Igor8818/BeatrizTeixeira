import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AreasSection } from './components/AreasSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppIcon } from './components/Icons';
import { DEFAULT_LAWYER_PHOTOS, PROFILE_INFO } from './data/siteData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#2D0812] text-[#1E090F] flex flex-col font-sans selection:bg-[#C8A261] selection:text-[#2D0812]">
      {/* Navegação Fixa */}
      <Navbar />

      {/* Conteúdo com Ritmo e Alternância (Vinho Rubi -> Off-white -> Vinho Rubi -> Off-white -> Vinho Rubi) */}
      <main className="flex-1">
        <HeroSection photos={DEFAULT_LAWYER_PHOTOS} />
        <AreasSection />
        <AboutSection photos={DEFAULT_LAWYER_PHOTOS} />
        <ArticlesSection />
        <ContactSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante de WhatsApp Discreto com Sombra Suave */}
      <a
        href={PROFILE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-black/30 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
        title="Falar com Dra. Beatriz no WhatsApp"
        aria-label="Falar com Dra. Beatriz no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white fill-white" />
      </a>
    </div>
  );
}
