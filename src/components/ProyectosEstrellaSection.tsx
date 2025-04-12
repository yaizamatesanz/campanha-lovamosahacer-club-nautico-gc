
import React from 'react';

const ProyectosEstrellaSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-nautical-blue mb-12 font-playfair text-center">Proyectos Estrella</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Zona Chillout */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/3de752c7-35e1-455c-a413-651717b85969.png" 
                alt="Zona Chillout" 
                className="w-full h-full object-cover"
              />
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
