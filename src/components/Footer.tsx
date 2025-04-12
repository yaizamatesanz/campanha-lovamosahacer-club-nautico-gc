
import { ChevronUp } from "lucide-react";

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
          {/* Club logo */}
          <div className="bg-white rounded-md p-4 mb-8">
            <h2 className="text-nautical-blue text-4xl font-bold">RCNGC</h2>
          </div>
          
          {/* Campaign information */}
          <div className="text-center">
            <p className="text-lg">Campaña electoral 2025 · 14-28 abril</p>
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
