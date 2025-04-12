
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const CartaSocioSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="carta" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center flex items-center justify-center gap-3">
          <Mail className="h-8 w-8 text-nautical-gold" />
          Carta a los Socios
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="mb-6">
            <p className="text-lg font-medium text-primary mb-4">Estimado consocio,</p>
            
            <div className={cn("space-y-4 text-muted-foreground", !expanded && "line-clamp-5")}>
              <p>
                El próximo día 29 de abril de 10:00 a 20:00 horas, tenemos una cita donde podrás ejercer el derecho al 
                voto para la elección de la Junta Directiva que te acompañará y atenderá durante los próximos tres años.
              </p>
              
              <p>
                A título personal he disfrutado del enorme privilegio durante estos años anteriores, de haber desarrollado 
                mi cargo de Vicepresidente, acompañado de un equipo extraordinario que ahora, por normativa estatutaria, 
                debe ser renovado.
              </p>
              
              <p>
                En esta nueva etapa me acompañan algunos de los miembros de la anterior Junta Directiva que desempeñaron 
                una labor efectiva, completa y exitosa, a los que se le suman otros nuevos, personas que viven intensamente 
                nuestro Club con un claro conocimiento del mismo y la ilusión de renovar.
              </p>
              
              <p>
                Durante todo este período, habrás podido comprobar cuál ha sido nuestro sistema de trabajo, basado 
                fundamentalmente en el tiempo de dedicación, excelencia y control en las contrataciones, atención cercana 
                directa y personalizada a todos los socios y socias, y en general todo aquello conducente al confort 
                durante el tiempo que disfrutas de nuestras instalaciones, además de un espíritu de superación día a día 
                sobre lo andado, siempre tendente a que sientas nuestro Club cada vez más tuyo.
              </p>
              
              <p>
                Nos queda mucho por recorrer y añadir a esta etapa magnífica que vemos cercana. Tenemos nuevos proyectos 
                que consolidaremos si confías en nosotros, la permanencia garantizada de por vida de nuestra entidad al 
                estar prevista próximamente la compra de los 9.965 m² de terreno hasta el mar, aprobada en Junta General 
                hace unos días, así como la renovación de la concesión de la Marina Deportiva. Son los más importantes, 
                y en su consecución algunos miembros de esta propuesta de Junta han tenido mucho que ver.
              </p>
              
              <p>
                Como proyectos estrella, está el de la reforma integral de los vestuarios, cuyo proyecto está terminado 
                disponiéndose de las correspondientes ofertas y comparativos.
              </p>
              
              <p>
                Otro proyecto estrella también finalizado y diseñado es el del Chill Out, que sustituirá al actual quiosco 
                de la terraza solárium y proporcionará una calidad a la nueva instalación como tú deseas y te mereces.
              </p>
              
              <p>
                Para la náutica, hemos diseñado un sistema moderno e innovador para la nueva rampa de varada de embarcaciones 
                lejos de los obsoletos sistemas de acabado como el actual, que se deterioraron en poco tiempo, haciendo 
                intransitable y peligroso el uso de la misma. También, el refuerzo de la iluminación de la Marina, mejoras 
                en la zona de solárium en la escalera al mar, solicitud de la Bandera Azul, etc. Se suman a otras propuestas, 
                todas estas tendentes a que te sientas más cómodo.
              </p>
              
              <p>
                Conocedores en profundidad de nuestro Club y con el convencimiento de haber cumplido hasta hoy con lo 
                prometido, contemplamos mejoras en todas las secciones: edificio, restauración, cultura, gimnasio, recreo, 
                ocio, juegos, frontenis, coro, piragüismo, vela, etc., que abordan y atienden a lo que nos comunicas en el 
                día a día en nuestro Club.
              </p>
              
              <p>
                El tiempo de dedicación de una persona y su disponibilidad es indispensable para una gestión completa. 
                Ello garantiza una gestión económica estudiada y con resultados óptimos, unas actividades pensadas y 
                diseñadas para todos, con modernidad y diseño actual, un control económico exhaustivo y necesario para 
                no desbordar los presupuestos, etc.
              </p>
              
              <p>
                No se trata de prometer un sinfín de cosas, se trata de ejecutar las necesarias.
              </p>
              
              <p>
                De otra parte, en las modificaciones de nuestro devenir diario, haremos los cambios necesarios para 
                reincorporar de nuevo a nuestro Club a todos y todas los que por diversas circunstancias se han tenido 
                que dar de baja. Queremos que estén con nosotros otra vez, les debemos el que hoy estemos aquí.
              </p>
              
              <p>
                En general, la atención a nuestros mayores, jóvenes y niños/as será objeto de especial atención porque 
                lo que hagamos, son el futuro.
              </p>
              
              <p>
                Por último insistimos en el principio en que una premisa fundamental contrastada será en
                un período muy cercano. El tiempo de dedicación al Club, del que afortunadamente disponemos y ha deparado 
                una atención cercana, personal y directa al socio, ello es indispensable y continuaremos en esta práctica 
                mejorándola día a día.
              </p>
              
              <p className="font-semibold text-nautical-blue">
                Ahora, todo esto: <span className="text-nautical-gold">LO VAMOS A HACER</span>
              </p>
              
              <p>
                Previa al día 29 (día de votación), en la noche del día 28 presentaremos a las 19:30h en el Salón Los Paragüitas 
                del Club, nuestro programa.
                Te esperamos.
              </p>
              
              <p>
                Para ello necesitamos tu confianza y por ello:
              </p>
              
              <p className="font-semibold text-nautical-blue">
                TE PEDIMOS NOS DES TU VOTO.
              </p>
              
              <p className="font-medium">
                Muchas gracias y un afectuoso saludo,<br />
                <span className="font-bold text-nautical-blue">Adolfo López Martínez</span><br />
                Candidato a Presidente del Real Club Náutico de Gran Canaria
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
