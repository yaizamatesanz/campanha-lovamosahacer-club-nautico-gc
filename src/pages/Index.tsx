
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CandidaturaSection from "@/components/CandidaturaSection";
import DecalogoSection from "@/components/DecalogoSection";
import ProyectosEstrellaSection from "@/components/ProyectosEstrellaSection";
import CartaSocioSection from "@/components/CartaSocioSection";
import VotacionSection from "@/components/VotacionSection";
import ProgramaPresentacionSection from "@/components/ProgramaPresentacionSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Update document title
  useEffect(() => {
    document.title = "Adolfo López - Candidato a Presidente RCNGC";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <CandidaturaSection />
      <DecalogoSection />
      <ProyectosEstrellaSection />
      <CartaSocioSection />
      <VotacionSection />
      <ProgramaPresentacionSection />
      <Footer />
    </div>
  );
};

export default Index;
