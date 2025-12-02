import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { dokumen } from '../data/mockData';
import { FileText, Download, Calendar } from 'lucide-react';

const DokumenSection = () => {
  return (
    <section id="dokumen" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dokumen Publik</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses dokumen penting RT 003 dengan transparansi penuh
          </p>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dokumen.map((doc) => (
            <Card key={doc.id} className="shadow-lg hover:shadow-xl transition-all duration-300 border-none">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="bg-red-50 p-3 rounded-xl">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{doc.date}</span>
                      </div>
                      <span className="px-2 py-1 bg-gray-100 rounded">{doc.type}</span>
                      <span className="px-2 py-1 bg-gray-100 rounded">{doc.size}</span>
                    </div>

                    {/* Download Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Dokumen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Informasi Penting</h3>
            <p className="text-sm text-blue-800">
              Semua dokumen yang tersedia di halaman ini adalah untuk kepentingan transparansi dan informasi warga. 
              Dokumen bersifat publik dan dapat diunduh secara gratis. Untuk pertanyaan lebih lanjut, silakan hubungi pengurus RT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DokumenSection;
