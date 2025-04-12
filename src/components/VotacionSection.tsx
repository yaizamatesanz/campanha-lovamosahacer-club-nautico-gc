
import React from 'react';
import { Calendar, Clock, MapPin } from "lucide-react";

const VotacionSection = () => {
  return (
    <section id="votacion" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-nautical-blue mb-12 font-playfair text-center">Información de Votación</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-nautical-blue text-white p-6 rounded-t-lg">
            <h3 className="text-3xl font-bold text-center font-playfair">Jornada Electoral</h3>
          </div>
          
          <div className="bg-white p-8 rounded-b-lg shadow-md">
            <div className="space-y-8">
              {/* Fecha */}
              <div className="flex items-start gap-4">
                <Calendar className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Fecha</h4>
                  <p className="text-xl text-nautical-blue">29 de abril de 2025</p>
                </div>
              </div>
              
              {/* Horario */}
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Horario</h4>
                  <p className="text-xl text-nautical-blue">De 10:00 a 20:00 horas</p>
                </div>
              </div>
              
              {/* Lugar */}
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Lugar</h4>
                  <p className="text-xl text-nautical-blue">Club Náutico de Gran Canaria</p>
                  <p className="text-nautical-blue">Salón Social, planta primera</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="bg-nautical-blue text-white p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-center font-playfair">Presentación del Programa</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VotacionSection;
