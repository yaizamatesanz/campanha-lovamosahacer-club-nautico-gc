
import { useState } from 'react';
import { ChevronDown } from "lucide-react";

const CartaSocioSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="carta" className="section-padding bg-nautical-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-playfair text-center">Carta a los socios</h2>
          
          <div className="bg-nautical-blue p-8 rounded-lg">
            <div className="mb-6 text-white">
              <p className="text-xl font-medium mb-6 italic">Estimado consocio,</p>
              
              <div className={expanded ? "" : "line-clamp-3"}>
                <p className="mb-4">
                  El próximo día 29 de abril de 10:00 a 20:00 horas, tenemos una cita donde 
                  podrás ejercer el derecho al voto para la elección de la Junta Directiva que te 
                  acompañará y atenderá durante los próximos tres años.
                </p>
                
                <p className="mb-4">
                  A título personal he disfrutado del enorme privilegio durante estos años 
                  anteriores, de haber desarrollado mi cargo de Vicepresidente, acompañado d...
                </p>
                
                {/* Additional paragraphs will be shown when expanded */}
                {expanded && (
                  <>
                    <p className="mb-4">
                      En esta nueva etapa me acompañan algunos de los miembros de la anterior Junta Directiva que desempeñaron 
                      una labor efectiva, completa y exitosa, a los que se le suman otros nuevos, personas que viven intensamente 
                      nuestro Club con un claro conocimiento del mismo y la ilusión de renovar.
                    </p>
                    
                    <p className="mb-4">
                      Durante todo este período, habrás podido comprobar cuál ha sido nuestro sistema de trabajo, basado 
                      fundamentalmente en el tiempo de dedicación, excelencia y control en las contrataciones, atención cercana 
                      directa y personalizada a todos los socios y socias, y en general todo aquello conducente al confort 
                      durante el tiempo que disfrutas de nuestras instalaciones, además de un espíritu de superación día a día 
                      sobre lo andado, siempre tendente a que sientas nuestro Club cada vez más tuyo.
                    </p>
                    
                    <p className="mb-4">
                      Muchas gracias y un afectuoso saludo,<br />
                      <span className="font-bold">Adolfo López Martínez</span><br />
                      Candidato a Presidente del Real Club Náutico de Gran Canaria
                    </p>
                  </>
                )}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 bg-nautical-blue text-white border border-white/30 rounded-md px-6 py-3 hover:bg-nautical-blue/80 transition-colors"
              >
                {expanded ? "Leer menos" : "Leer carta completa"}
                <ChevronDown className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartaSocioSection;
