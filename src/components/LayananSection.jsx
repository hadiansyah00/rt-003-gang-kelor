import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { layanan } from '../data/mockData';
import { FileText, CheckCircle } from 'lucide-react';

const LayananSection = () => {
  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Administrasi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pengurusan surat dan dokumen untuk warga RT 003
          </p>
        </div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-none">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {layanan.map((service, index) => (
                  <AccordionItem key={service.id} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-14 pr-4 pt-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Persyaratan:</h4>
                        <ul className="space-y-2">
                          {service.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-sm text-blue-900">
                            <strong>Waktu Pelayanan:</strong> Senin - Jumat, 09:00 - 15:00 WIB
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LayananSection;
