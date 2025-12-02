import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { struktur, visiMisi } from '../data/mockData';
import { Target, CheckCircle } from 'lucide-react';

const ProfilSection = () => {
  return (
    <section id="profil" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Profil RT 003</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Struktur kepengurusan dan visi misi untuk kemajuan bersama
          </p>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Target className="w-6 h-6" />
                <span>Visi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{visiMisi.visi}</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <CheckCircle className="w-6 h-6" />
                <span>Misi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Struktur Kepengurusan */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Struktur Kepengurusan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {struktur.map((person) => (
              <Card key={person.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-blue-100 ring-4 ring-blue-200">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{person.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{person.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilSection;
