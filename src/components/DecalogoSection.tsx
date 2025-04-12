
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Initiative {
  number: number;
  title: string;
  description: string;
}

const initiatives: Initiative[] = [
  {
    number: 1,
    title: "Renovación de Instalaciones",
    description: "Modernización completa de las instalaciones deportivas manteniendo la esencia y tradición del club."
  },
  {
    number: 2,
    title: "Escuela Náutica",
    description: "Potenciar la escuela náutica con nuevos programas formativos y mejores recursos para todas las edades."
  },
  {
    number: 3,
    title: "Eventos Internacionales",
    description: "Atraer competiciones de prestigio internacional que posicionen al club en el panorama mundial."
  },
  {
    number: 4,
    title: "Sostenibilidad",
    description: "Implementar políticas medioambientales para convertir al club en referente de sostenibilidad."
  },
  {
    number: 5,
    title: "Área Social",
    description: "Revitalizar el área social con nuevas actividades y espacios para el disfrute de todos los socios."
  },
  {
    number: 6,
    title: "Gestión Transparente",
    description: "Establecer sistemas de gestión transparentes con comunicación continua a los socios."
  },
  {
    number: 7,
    title: "Deporte Base",
    description: "Apoyo decidido al deporte base como semillero de futuros campeones y promotor de valores."
  },
  {
    number: 8,
    title: "Tecnología",
    description: "Digitalización de servicios y comunicaciones para facilitar la interacción con el club."
  },
  {
    number: 9,
    title: "Colaboraciones",
    description: "Establecer alianzas estratégicas con instituciones y empresas para beneficio de los socios."
  },
  {
    number: 10,
    title: "Patrimonio Histórico",
    description: "Preservar y poner en valor el rico patrimonio histórico y cultural del Real Club Náutico."
  }
];

const DecalogoSection = () => {
  return (
    <section id="decalogo" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Decálogo de Iniciativas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => (
            <Card key={initiative.number} className="border-l-4 border-l-primary hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: `${initiative.number * 0.1}s`}}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {initiative.number}
                  </div>
                  <h3 className="font-bold text-lg text-primary">{initiative.title}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecalogoSection;
