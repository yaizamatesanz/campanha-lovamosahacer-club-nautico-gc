
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play by default
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-nautical-blue text-white py-20">
      {/* Video background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-nautical-blue/60 z-10"></div>
        <div className="w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            muted
            loop
            playsInline
          >
            {/* Sailing video loop */}
            <source src="https://player.vimeo.com/external/517090081.sd.mp4?s=46d9f3883f0da233831f057f7e688a04b34f0339&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video control button */}
          <button 
            onClick={togglePlay}
            className="absolute z-20 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-sm transition-all duration-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
          </button>
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
