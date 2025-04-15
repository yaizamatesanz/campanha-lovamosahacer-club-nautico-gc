
import React from 'react';
import { Calendar, Clock, MapPin } from "lucide-react";

const ProgramaPresentacionSection = () => {
  return <section className="section-padding bg-white rounded-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-nautical-blue text-white p-6 rounded-t-lg">
            <h3 className="text-3xl font-bold text-center font-playfair">Presentación del Programa</h3>
          </div>
          
          <div className="bg-white p-8 rounded-b-lg shadow-md">
            <div className="space-y-6">
              {/* Fecha */}
              <div className="flex items-start gap-4">
                <Calendar className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Fecha</h4>
                  <p className="text-xl text-nautical-blue">28 de abril de 2025</p>
                </div>
              </div>
              
              {/* Horario */}
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Horario</h4>
                  <p className="text-xl text-nautical-blue">18:00 y 19:00 horas</p>
                </div>
              </div>
              
              {/* Lugar */}
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-nautical-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-nautical-blue">Lugar</h4>
                  <p className="text-xl text-nautical-blue">Salón Los Paragüitas</p>
                </div>
              </div>
              
              {/* Invitation Message */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mt-8">
                <p className="text-center text-nautical-blue text-lg">
                  Te invitamos a conocer en detalle nuestras propuestas y resolver todas tus dudas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProgramaPresentacionSection;
