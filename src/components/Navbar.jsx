import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, MapPin, Newspaper, FileText, Briefcase, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', icon: Home, href: '#home' },
    { label: 'Profil RT', icon: Users, href: '#profil' },
    { label: 'Informasi Wilayah', icon: MapPin, href: '#wilayah' },
    { label: 'Berita', icon: Newspaper, href: '#berita' },
    { label: 'Dokumen', icon: FileText, href: '#dokumen' },
    { label: 'UMKM', icon: Briefcase, href: '#umkm' },
    { label: 'Kontak', icon: MessageSquare, href: '#kontak' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">RT</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-900">RT 003</h1>
                <p className="text-xs text-gray-600">RW 005 Menteng</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 z-50 shadow-lg">
        <div className="flex justify-around items-center h-16">
          {[
            { label: 'Home', icon: Home, href: '#home' },
            { label: 'Info', icon: MapPin, href: '#wilayah' },
            { label: 'Dokumen', icon: FileText, href: '#dokumen' },
            { label: 'Berita', icon: Newspaper, href: '#berita' },
            { label: 'Kontak', icon: MessageSquare, href: '#kontak' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="flex flex-col items-center justify-center space-y-1 flex-1 py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
