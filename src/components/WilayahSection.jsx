import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { wilayahStats } from '../data/mockData';
import { Users, Home, MapPin, Building2 } from 'lucide-react';

const WilayahSection = () => {
  const stats = [
    { icon: Home, label: 'Jumlah KK', value: wilayahStats.jumlahKK, color: 'bg-blue-50 text-blue-600' },
    { icon: Users, label: 'Jumlah Warga', value: wilayahStats.jumlahWarga, color: 'bg-green-50 text-green-600' },
    { icon: MapPin, label: 'Luas Wilayah', value: wilayahStats.luas, color: 'bg-amber-50 text-amber-600' },
    { icon: Building2, label: 'RW', value: wilayahStats.rw, color: 'bg-purple-50 text-purple-600' }
  ];

  return (
    <section id="wilayah" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Informasi Wilayah</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Data statistik dan peta wilayah RT 003
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-lg border-none">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-xl ${stat.color} mb-3`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map and Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Google Maps */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-none h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">Peta Lokasi RT 003</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664713145864!2d106.83147807499385!3d-6.176161893802468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42d4e6c5c57%3A0x301576d14feb9c0!2sMenteng%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1706024000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Peta RT 003"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div>
            <Card className="shadow-lg border-none h-full">
              <CardHeader>
                <CardTitle className="text-blue-900">Detail Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Kelurahan</p>
                    <p className="text-gray-900 font-semibold">{wilayahStats.kelurahan}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Kecamatan</p>
                    <p className="text-gray-900 font-semibold">{wilayahStats.kecamatan}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Kota</p>
                    <p className="text-gray-900 font-semibold">{wilayahStats.kota}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-500 mb-1">RT / RW</p>
                    <p className="text-gray-900 font-semibold">003 / {wilayahStats.rw}</p>
                  </div>
                  <div className="pt-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900 font-medium">Luas Wilayah</p>
                      <p className="text-2xl font-bold text-blue-600 mt-1">{wilayahStats.luas}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WilayahSection;
