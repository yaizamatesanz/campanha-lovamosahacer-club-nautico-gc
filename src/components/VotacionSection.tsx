
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const VotacionSection = () => {
  return (
    <section id="votacion" className="section-padding bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white text-center">Información de Votación</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-none text-white">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fecha */}
                <div className="flex flex-col items-center text-center">
                  <Calendar className="h-12 w-12 mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Fecha</h3>
                  <p className="text-lg">29 de abril</p>
                </div>
                
                {/* Horario */}
                <div className="flex flex-col items-center text-center">
                  <Clock className="h-12 w-12 mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Horario</h3>
                  <p className="text-lg">10:00 a 20:00</p>
                </div>
                
                {/* Lugar */}
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-12 w-12 mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">Lugar</h3>
                  <p className="text-lg">Club Náutico de Gran Canaria</p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/20 text-center">
                <h3 className="text-xl font-bold mb-4">Presentación del Programa</h3>
                <p className="text-lg mb-2">
                  28 de abril a las 19:30
                </p>
                <p className="text-accent">
                  Salón Los Paragüitas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VotacionSection;
