import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { rtInfo } from '../data/mockData';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Halo, saya ingin konsultasi dengan pengurus RT 003.');
    window.open(`https://wa.me/${rtInfo.whatsapp}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white group-hover:animate-bounce" />
          )}
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-36 lg:bottom-24 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-green-500 p-4 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">RT 003 / RW 005</h3>
                <p className="text-xs text-green-100">Biasanya membalas dalam beberapa menit</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">
                👋 Halo! Selamat datang di layanan konsultasi RT 003.
              </p>
              <p className="text-sm text-gray-600">
                Silakan klik tombol di bawah untuk menghubungi kami via WhatsApp.
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Mulai Chat WhatsApp</span>
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              Konsultasi & Layanan RT 003
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
