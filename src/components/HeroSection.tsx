
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-nautical-blue text-white py-20">
      {/* Hero content - POSITIONED ABOVE THE VIDEO */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-8`}>
          <h1 className="mb-6 font-playfair leading-tight text-center">
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-nautical-gold">LO VAMOS</span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-nautical-white">A HACER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto text-nautical-white text-center">
            Adolfo López Martínez – Candidato a presidente del RCNGC
          </p>
        </div>
        
        {/* Video container */}
        <div className="w-full max-w-6xl mx-auto relative rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            src="https://drive.google.com/file/d/1ZuSsKRMN93DQiDqovdD2sFjU7s-9xgwM/preview" 
            width="100%" 
            height="500" 
            allow="autoplay"
            className="w-full"
          ></iframe>
        </div>
        
        {/* Voting information - POSITIONED BELOW THE VIDEO */}
        <div className="mt-12">
          <div className="bg-nautical-gold/90 text-nautical-black py-4 px-8 rounded-md max-w-3xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-center">
              Vota el 29 de abril de 10:00 a 20:00 en el Club Náutico de Gran Canaria
            </p>
          </div>
          
          <div className="mt-8 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
