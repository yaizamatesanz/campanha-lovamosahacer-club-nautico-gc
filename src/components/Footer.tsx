
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
        <div className="flex flex-col items-center justify-center mb-6">
          {/* Club logo and campaign info - CENTER */}
          <div className="text-center mb-8">
            {/* Club logo */}
            <div className="bg-white rounded-md p-4 inline-block mb-4">
              <h2 className="text-nautical-blue text-4xl font-bold">RCNGC</h2>
            </div>
            
            {/* Campaign information */}
            <div>
              <p className="text-lg">Campaña electoral 2025 · 14-28 abril</p>
            </div>
          </div>
          
          {/* Digito logo and text - CENTER */}
          <div className="flex flex-col items-center text-center mb-6">
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
                className="object-contain mx-auto"
              />
            </a>
            <p className="text-sm">Powered by Dìgito Cominicaciòn</p>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center">
          <button 
            onClick={scrollToTop}
            className="bg-nautical-blue border border-white rounded-full p-2 hover:bg-nautical-blue/80 transition-colors"
            aria-label="Volver arriba"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

