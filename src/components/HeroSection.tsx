
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-nautical-blue text-white py-20">
      {/* Video background (placeholder) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-nautical-blue/80 z-10"></div>
        <div className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight">
            "Lo vamos a hacer"
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Adolfo López Martínez – Candidato a presidente del RCNGC
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 font-medium"
          >
            <a href="#votacion">
              Información de Votación
            </a>
          </Button>
        </div>

        {/* Banner */}
        <div className="absolute bottom-10 left-0 right-0 bg-accent/90 text-primary py-4 px-4 md:px-8 mt-16 rounded-md max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-medium">
            Vota el 29 de abril de 10:00 a 20:00 en el Club Náutico de Gran Canaria
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
