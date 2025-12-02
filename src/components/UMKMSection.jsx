import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { umkm, karangTaruna } from '../data/mockData';
import { Phone, Store, Users, Calendar } from 'lucide-react';

const UMKMSection = () => {
  const handleContact = (phone) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <section id="umkm" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UMKM Section */}
        <div className="mb-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">UMKM Warga RT 003</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dukung usaha mikro dan kecil warga RT kita
            </p>
          </div>

          {/* UMKM Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkm.map((business) => (
              <Card key={business.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 border-none shadow-md">
                      <Store className="w-3 h-3 mr-1" />
                      {business.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{business.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{business.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="font-medium">{business.owner}</span>
                  </div>
                  <Button
                    onClick={() => handleContact(business.phone)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Hubungi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Karang Taruna Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Karang Taruna RT 003</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kegiatan dan program kepemudaan RT 003
            </p>
          </div>

          {/* Karang Taruna Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {karangTaruna.map((activity) => (
              <Card key={activity.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bergabung dengan Karang Taruna</h3>
                  <p className="text-sm text-gray-700">
                    Karang Taruna RT 003 terbuka untuk seluruh pemuda usia 13-35 tahun. 
                    Mari bersama membangun lingkungan yang lebih baik melalui berbagai kegiatan sosial dan pemberdayaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UMKMSection;
