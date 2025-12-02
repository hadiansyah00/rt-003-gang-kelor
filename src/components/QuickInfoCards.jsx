import React from 'react';
import { Bell, Calendar, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const QuickInfoCards = () => {
  const infoCards = [
    {
      icon: Bell,
      title: 'Pengumuman',
      description: 'Informasi terkini untuk warga',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      href: '#berita'
    },
    {
      icon: Calendar,
      title: 'Agenda Warga',
      description: 'Jadwal kegiatan RT',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      href: '#agenda'
    },
    {
      icon: FileText,
      title: 'Layanan Administrasi',
      description: 'Pengurusan surat & dokumen',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      href: '#layanan'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <Card
              key={index}
              onClick={() => scrollToSection(card.href)}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${card.bgColor} p-3 rounded-xl`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfoCards;
