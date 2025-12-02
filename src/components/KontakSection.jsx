import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { rtInfo } from '../data/mockData';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const KontakSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast.success("Aspirasi Terkirim!", {
      description: "Terima kasih. Aspirasi Anda akan segera ditindaklanjuti oleh pengurus RT.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Kontak & Aspirasi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sampaikan aspirasi, saran, atau keluhan Anda kepada pengurus RT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-blue-900">Informasi Kontak</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Telepon</p>
                    <p className="text-gray-900 font-semibold">{rtInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-900 font-semibold break-all">{rtInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Alamat</p>
                    <p className="text-gray-900 font-semibold">{rtInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Waktu Pelayanan</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p><strong>Senin - Jumat:</strong> 09:00 - 15:00 WIB</p>
                  <p><strong>Sabtu:</strong> 09:00 - 12:00 WIB</p>
                  <p><strong>Minggu & Libur:</strong> Tutup</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Aspirasi Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-blue-900">Form Aspirasi Warga</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Topik aspirasi"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan / Aspirasi</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sampaikan aspirasi, saran, atau keluhan Anda..."
                      rows={6}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Aspirasi
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontakSection;
