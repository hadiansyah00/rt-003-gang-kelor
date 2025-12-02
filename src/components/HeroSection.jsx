import React from 'react';
import { Button } from './ui/button';
import { Bell, FileEdit } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1706019373106-c05bca9094c9"
          alt="Railway and Flyover Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Website Informasi Resmi
            <span className="block mt-2 text-blue-300">RT 003 / RW 005</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Media informasi digital untuk warga yang transparan, cepat, dan akurat.
            <span className="block mt-2">Melayani dengan sepenuh hati untuk kemajuan bersama.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('#berita')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Bell className="w-5 h-5 mr-2" />
              Pengumuman Terbaru
            </Button>
            <Button
              onClick={() => scrollToSection('#kontak')}
              size="lg"
              variant="outline"
              className="bg-blue-600/20 text-white border-2 border-white hover:bg-white hover:text-blue-900 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <FileEdit className="w-5 h-5 mr-2" />
              Ajukan Surat
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
