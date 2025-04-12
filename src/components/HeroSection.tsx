import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="inicio" className="relative bg-white text-nautical-blue pt-24 pb-16">
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center max-w-5xl mx-auto`}>
          <h1 className="mb-6 font-playfair leading-tight">
            <span className="text-5xl lg:text-8xl font-bold text-nautical-blue md:text-6xl">LO VAMOS</span>
            <span className="text-5xl lg:text-8xl font-bold text-nautical-gold md:text-6xl"> A HACER</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 mx-auto text-nautical-blue font-medium">
            Adolfo López Martínez – Candidato a presidente del RCNGC
          </p>
        </div>
        
        {/* Video container */}
        <div className="w-full max-w-5xl mx-auto relative rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://drive.google.com/file/d/1ZuSsKRMN93DQiDqovdD2sFjU7s-9xgwM/preview" width="100%" height="500" allow="autoplay" className="w-full border-0"></iframe>
        </div>
        
        {/* Voting information - Now visible below the video */}
        <div className="mt-12">
          <div className="bg-gray-100 text-nautical-blue py-4 px-8 rounded-md max-w-5xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-center">
              Vota el 29 de abril de 10:00 a 20:00 en el Club Náutico de Gran Canaria
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;