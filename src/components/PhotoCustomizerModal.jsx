import React from 'react';
import { Camera, X } from 'lucide-react';
import { DEFAULT_LAWYER_PHOTOS } from '../data/siteData';

export default function PhotoCustomizerModal({
  isOpen,
  onClose,
  photos,
  onTriggerUpload,
  onResetPhotos,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FDF2F3] text-[#9E1B32] flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Personalizar Fotos da Dra. Beatriz
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          O site já vem configurado com a foto profissional do Instagram da{' '}
          <strong>Dra. Beatriz Figueiredo (@beatrizfigueiredoadv)</strong>. Se desejar, você
          também pode testar outras fotos em cada seção:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => onTriggerUpload('hero')}
            className="p-3.5 rounded-2xl border border-stone-200 hover:border-[#9E1B32] text-center space-y-2 transition cursor-pointer"
          >
            <img
              src={photos.hero}
              alt="Hero"
              className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#9E1B32]"
            />
            <span className="block text-xs font-bold text-stone-800">
              Foto do Topo (Hero)
            </span>
          </button>

          <button
            onClick={() => onTriggerUpload('about')}
            className="p-3.5 rounded-2xl border border-stone-200 hover:border-[#9E1B32] text-center space-y-2 transition cursor-pointer"
          >
            <img
              src={photos.about}
              alt="Sobre"
              className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#9E1B32]"
            />
            <span className="block text-xs font-bold text-stone-800">
              Foto Sobre Mim
            </span>
          </button>

          <button
            onClick={() => onTriggerUpload('contact')}
            className="p-3.5 rounded-2xl border border-stone-200 hover:border-[#9E1B32] text-center space-y-2 transition cursor-pointer"
          >
            <img
              src={photos.contact}
              alt="Contato"
              className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-[#9E1B32]"
            />
            <span className="block text-xs font-bold text-stone-800">
              Foto Contato
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onTriggerUpload('all')}
            className="px-5 py-2.5 rounded-full bg-[#9E1B32] hover:bg-[#7D1326] text-white text-xs font-semibold transition cursor-pointer"
          >
            Trocar todas as fotos de uma vez
          </button>
          <button
            onClick={() => onResetPhotos(DEFAULT_LAWYER_PHOTOS)}
            className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
          >
            Restaurar foto oficial do Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
