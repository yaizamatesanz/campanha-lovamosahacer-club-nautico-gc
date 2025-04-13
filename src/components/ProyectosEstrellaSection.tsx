
import React from 'react';
import Image from '@/components/ui/image';

const ProyectosEstrellaSection = () => {
  // Imágenes para el carrusel de la Zona Chillout
  const chilloutImages = [
    "/lovable-uploads/3de752c7-35e1-455c-a413-651717b85969.png",
    "/lovable-uploads/6ff07341-23d3-458b-9cb7-28b2be8622a9.png",
    "/lovable-uploads/3efa9456-b98b-4d76-b996-87d1dbd64144.png",
    "/lovable-uploads/219d5d6a-1a72-40b7-af9b-cf9e0ab50df4.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? chilloutImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === chilloutImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-nautical-blue mb-12 font-playfair text-center">Proyectos Estrella</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Zona Chillout con Carrusel Simple */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden relative">
              <div className="relative w-full h-full">
                <Image 
                  src={chilloutImages[currentImageIndex]} 
                  alt={`Zona Chillout imagen ${currentImageIndex + 1}`} 
                  className="w-full h-64 object-cover transition-all duration-300"
                />
                <button 
                  onClick={goToPreviousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full h-8 w-8 flex items-center justify-center shadow-md"
                  aria-label="Imagen anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  onClick={goToNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full h-8 w-8 flex items-center justify-center shadow-md"
                  aria-label="Siguiente imagen"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {chilloutImages.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-nautical-blue mb-4">Zona Chillout</h3>
              <p className="text-nautical-blue mb-6">
                Creación de un espacio de relax con vistas al mar para el disfrute de 
                los socios. Con mobiliario confortable, sombrillas, servicio de bar y 
                ambiente acogedor. Un lugar ideal para compartir momentos 
                después de las actividades deportivas o simplemente para disfrutar 
                del entorno privilegiado del club en un ambiente distendido y 
                familiar.
              </p>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-nautical-blue font-medium">Ejecución prevista: Junio - Agosto 2025</p>
              </div>
            </div>
          </div>
          
          {/* Vestuarios Renovados */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/de4cda7d-9c97-43ea-830a-539117a395de.png" 
                alt="Vestuarios renovados" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-bold text-nautical-blue mb-4">Vestuarios Renovados</h3>
              <p className="text-nautical-blue mb-6">
                Proyecto integral de renovación de los vestuarios del club, con 
                instalaciones modernas, eficientes y adaptadas a todos los socios. 
                Incluye nuevas duchas, taquillas individuales y sistema de 
                climatización sostenible. El proyecto contempla materiales de 
                primera calidad y diseño funcional que respeta la estética náutica 
                del club.
              </p>
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-nautical-blue font-medium">Ejecución prevista: Septiembre - Diciembre 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosEstrellaSection;
