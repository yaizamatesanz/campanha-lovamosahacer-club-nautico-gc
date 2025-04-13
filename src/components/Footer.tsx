
import { ChevronUp } from "lucide-react";
import Image from "@/components/ui/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-nautical-blue text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Campaign information */}
          <div className="mb-4">
            <p className="text-lg">Campaña electoral 2025 · 14-28 abril</p>
          </div>
          
          {/* Digito logo and text */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.digitocomunicacion.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mb-2"
            >
              <Image 
                src="/lovable-uploads/8bf99b2e-2c9b-401b-b389-4acbabc7e05a.png" 
                alt="Digito Comunicación Logo" 
                width={200} 
                height={100} 
                className="object-contain"
              />
            </a>
            <p className="text-sm">Powered by Dìgito Comunicaciòn</p>
            <a 
              href="https://www.digitocomunicacion.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white/80 hover:text-white underline mt-1"
            >
              www.digitocomunicacion.com
            </a>
          </div>
        
          {/* Back to top button */}
          <div className="mt-6">
            <button 
              onClick={scrollToTop}
              className="bg-nautical-blue border border-white rounded-full p-2 hover:bg-nautical-blue/80 transition-colors"
              aria-label="Volver arriba"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

