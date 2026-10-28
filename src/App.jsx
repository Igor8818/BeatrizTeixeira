import React, { useState, useRef } from 'react';
import { Camera, MessageCircle } from 'lucide-react';
import { DEFAULT_LAWYER_PHOTOS, PROFILE_INFO } from './data/siteData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AreasSection from './components/AreasSection';
import DiferenciaisSection from './components/DiferenciaisSection';
import CtaBanner from './components/CtaBanner';
import AboutSection from './components/AboutSection';
import ArticlesSection from './components/ArticlesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PhotoCustomizerModal from './components/PhotoCustomizerModal';

export default function App() {
  const [photos, setPhotos] = useState(DEFAULT_LAWYER_PHOTOS);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoTargetKey, setPhotoTargetKey] = useState('all');
  const [preselectedArea, setPreselectedArea] = useState('');
  const fileInputRef = useRef(null);

  const scrollToSection = (sectionId = 'contato', areaTitle = '') => {
    if (areaTitle) {
      setPreselectedArea(areaTitle);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        if (photoTargetKey === 'all') {
          setPhotos((prev) => ({
            ...prev,
            hero: result,
            about: result,
            contact: result,
          }));
        } else {
          setPhotos((prev) => ({ ...prev, [photoTargetKey]: result }));
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerPhotoSelector = (target = 'all') => {
    setPhotoTargetKey(target);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans selection:bg-[#9E1B32] selection:text-white">
      {/* Input oculto para upload de foto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="hidden"
      />

      {/* Cabeçalho Fixo Enxuto */}
      <Navbar onScrollTo={scrollToSection} />

      {/* Conteúdo Principal Integrado (Single-Page Fluida) */}
      <main>
        <HeroSection
          photoUrl={photos.hero}
          onScrollTo={scrollToSection}
          onOpenPhotoModal={() => setPhotoModalOpen(true)}
        />

        <AreasSection
          onScrollToContact={(areaTitle) => scrollToSection('contato', areaTitle)}
        />

        <DiferenciaisSection />

        <CtaBanner onScrollToContact={() => scrollToSection('contato')} />

        <AboutSection photoUrl={photos.about} />

        <ArticlesSection onScrollToContact={() => scrollToSection('contato')} />

        <FaqSection />

        <ContactSection
          photoUrl={photos.contact}
          preselectedArea={preselectedArea}
        />
      </main>

      {/* Rodapé Bordô */}
      <Footer
        onScrollTo={scrollToSection}
        onOpenPhotoModal={() => setPhotoModalOpen(true)}
      />

      {/* Botões Flutuantes no Canto Inferior Direito */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setPhotoModalOpen(true)}
          title="Personalizar fotos"
          className="w-11 h-11 rounded-full bg-[#9E1B32] hover:bg-[#7D1326] text-white shadow-lg flex items-center justify-center transition cursor-pointer border-2 border-white"
        >
          <Camera className="w-5 h-5" />
        </button>

        <a
          href={`https://wa.me/${PROFILE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20Dra.%20Beatriz!%20Gostaria%20de%20agendar%20uma%20consulta.`}
          target="_blank"
          rel="noreferrer"
          title="Falar no WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:scale-105 text-white shadow-xl flex items-center justify-center transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Modal de Personalização de Fotos */}
      <PhotoCustomizerModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        photos={photos}
        onTriggerUpload={triggerPhotoSelector}
        onResetPhotos={(defaultPhotos) => setPhotos(defaultPhotos)}
      />
    </div>
  );
}
