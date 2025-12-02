import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuickInfoCards from "./components/QuickInfoCards";
import ProfilSection from "./components/ProfilSection";
import WilayahSection from "./components/WilayahSection";
import BeritaSection from "./components/BeritaSection";
import AgendaSection from "./components/AgendaSection";
import LayananSection from "./components/LayananSection";
import DokumenSection from "./components/DokumenSection";
import UMKMSection from "./components/UMKMSection";
import KontakSection from "./components/KontakSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <QuickInfoCards />
          <ProfilSection />
          <WilayahSection />
          <BeritaSection />
          <AgendaSection />
          <LayananSection />
          <DokumenSection />
          <UMKMSection />
          <KontakSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
