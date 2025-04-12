
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CartaSocioSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="carta" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Carta a los Socios</h2>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-6">
            <p className="text-lg font-medium text-primary mb-4">Estimados socios y socias:</p>
            
            <div className={`space-y-4 text-muted-foreground ${!expanded && 'line-clamp-3'}`}>
              <p>
                Es para mí un honor dirigirme a todos vosotros para presentar mi candidatura a la presidencia 
                del Real Club Náutico de Gran Canaria, una institución con más de un siglo de historia que 
                ha sido parte fundamental de nuestras vidas.
              </p>
              
              <p>
                Durante los últimos años he observado con preocupación cómo nuestro querido club ha ido 
                perdiendo el brillo y la relevancia que siempre lo caracterizó. Es hora de recuperar 
                la esencia que nos hizo grandes, adaptándola a los nuevos tiempos.
              </p>
              
              <p>
                Mi equipo y yo traemos un proyecto renovador pero respetuoso con nuestra tradición. 
                Un proyecto pensado para todos los socios, desde los más veteranos hasta los más jóvenes, 
                con especial atención al deporte base como semillero de futuros campeones.
              </p>
              
              <p>
                Os prometo una gestión transparente, eficiente y cercana, donde cada socio sienta que 
                su voz es escuchada. Trabajaremos incansablemente para modernizar nuestras instalaciones, 
                potenciar la actividad deportiva y social, y devolver al Club Náutico el prestigio nacional 
                e internacional que merece.
              </p>
              
              <p>
                Como reza nuestro lema, "Lo vamos a hacer". No es una promesa vacía, es un compromiso 
                firme respaldado por un equipo de profesionales con experiencia y, sobre todo, con un 
                profundo amor por nuestro club.
              </p>
              
              <p>
                Os pido vuestro apoyo el próximo 29 de abril. Juntos podemos escribir un nuevo capítulo 
                en la historia del Real Club Náutico de Gran Canaria.
              </p>
              
              <p className="font-medium">
                Un cordial saludo,<br />
                Adolfo López Martínez
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => setExpanded(!expanded)}
              className="text-primary hover:text-primary/80 hover:bg-gray-100"
            >
              {expanded ? (
                <>
                  Leer menos <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Leer completa <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartaSocioSection;
