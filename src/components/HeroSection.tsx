
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-nautical-blue text-white py-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-nautical-blue/60 z-10"></div>
        <div className="w-full h-full flex items-center justify-center">
          <iframe 
            src="https://drive.google.com/file/d/1ZuSsKRMN93DQiDqovdD2sFjU7s-9xgwM/preview" 
            width="100%" 
            height="100%" 
            allow="autoplay"
            className="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="mb-6 font-playfair leading-tight">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-nautical-gold">LO VAMOS</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-nautical-white">A HACER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-nautical-white">
            Adolfo López Martínez – Candidato a presidente del RCNGC
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-nautical-gold text-nautical-black hover:bg-nautical-gold/90 font-medium"
          >
            <a href="#votacion">
              Información de Votación
            </a>
          </Button>
        </div>

        {/* Banner */}
        <div className="absolute bottom-10 left-0 right-0 bg-nautical-gold/90 text-nautical-black py-4 px-4 md:px-8 mt-16 rounded-md max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium">
            Vota el 29 de abril de 10:00 a 20:00 en el Club Náutico de Gran Canaria
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
