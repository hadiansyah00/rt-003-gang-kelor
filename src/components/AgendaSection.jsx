import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { agenda } from '../data/mockData';
import { Calendar, Clock, MapPin } from 'lucide-react';

const AgendaSection = () => {
  const getTypeBadge = (type) => {
    const badges = {
      'rutin': { color: 'bg-blue-100 text-blue-700 border-blue-200', label: 'Rutin' },
      'bulanan': { color: 'bg-green-100 text-green-700 border-green-200', label: 'Bulanan' },
      'mingguan': { color: 'bg-purple-100 text-purple-700 border-purple-200', label: 'Mingguan' }
    };
    return badges[type] || badges['rutin'];
  };

  return (
    <section id="agenda" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Agenda Warga</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jadwal kegiatan rutin RT 003
          </p>
        </div>

        {/* Agenda Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agenda.map((item) => {
            const badge = getTypeBadge(item.type);
            return (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <Badge className={`${badge.color} border`}>
                      {badge.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.schedule}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
