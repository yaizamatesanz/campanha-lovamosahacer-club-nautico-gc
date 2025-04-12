import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Candidatura', href: '#candidatura' },
  { name: 'Decálogo', href: '#decalogo' },
  { name: 'Proyectos Estrella', href: '#proyectos' },
  { name: 'Carta al Socio', href: '#carta' },
  { name: 'Información de Votación', href: '#votacion' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#inicio" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/34b02698-6e92-4c84-b2f0-9530a14b1a89.png" 
              alt="Real Club Náutico de Gran Canaria Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-playfair text-xl font-semibold">
              <span className="text-nautical-blue font-bold tracking-wide">LO VAMOS</span>{" "}
              <span className="text-nautical-gold font-bold">A HACER</span>
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nautical-blue hover:text-nautical-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-nautical-blue"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-nautical-white shadow-md px-4 py-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nautical-blue hover:text-nautical-gold transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
