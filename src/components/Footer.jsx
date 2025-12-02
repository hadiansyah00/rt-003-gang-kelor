import React from 'react';
import { rtInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-12 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-sm">RT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">RT 003</h3>
                <p className="text-sm text-blue-200">RW 005 Menteng</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Media informasi digital resmi RT 003 untuk transparansi, komunikasi, dan layanan yang lebih baik kepada seluruh warga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Profil RT', href: '#profil' },
                { label: 'Informasi Wilayah', href: '#wilayah' },
                { label: 'Berita', href: '#berita' },
                { label: 'Dokumen', href: '#dokumen' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {[
                { label: 'Surat Pengantar KTP', href: '#layanan' },
                { label: 'Surat Domisili', href: '#layanan' },
                { label: 'UMKM Warga', href: '#umkm' },
                { label: 'Karang Taruna', href: '#umkm' },
                { label: 'Kontak & Aspirasi', href: '#kontak' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-blue-100">{rtInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-blue-100 break-all">{rtInfo.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-blue-100">{rtInfo.address}</span>
              </li>
            </ul>
            <div className="flex items-center space-x-3 mt-4">
              <button className="w-8 h-8 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-blue-200">
              © 2025 RT 003 / RW 005 Menteng. All rights reserved.
            </p>
            <p className="text-sm text-blue-200">
              Dibuat dengan ❤️ untuk kemajuan warga
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
