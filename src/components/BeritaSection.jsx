import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { berita } from '../data/mockData';
import { Calendar, Tag, Eye } from 'lucide-react';

const BeritaSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = ['Semua', 'Kegiatan', 'Pengumuman', 'Layanan'];

  const filteredBerita = selectedCategory === 'Semua'
    ? berita
    : berita.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Kegiatan': 'bg-blue-100 text-blue-700 border-blue-200',
      'Pengumuman': 'bg-amber-100 text-amber-700 border-amber-200',
      'Layanan': 'bg-green-100 text-green-700 border-green-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section id="berita" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Berita & Pengumuman</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Informasi terkini dan pengumuman penting untuk warga RT 003
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Tag className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredBerita.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(item.category)} border`}>
                    {item.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 line-clamp-3 mb-4">{item.excerpt}</p>
                <Button
                  variant="outline"
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeritaSection;
