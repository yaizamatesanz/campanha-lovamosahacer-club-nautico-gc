
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  User, 
  Coins, 
  Activity, 
  Calendar, 
  Search, 
  Mic, 
  Handshake, 
  Users, 
  Award, 
  UserPlus 
} from 'lucide-react';

interface Initiative {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const initiatives: Initiative[] = [
  {
    number: 1,
    title: "Dedicación al Socio",
    description: "Dedicar tiempo al Club y a su gente, con atención directa y personalizada al socio/a.",
    icon: User
  },
  {
    number: 2,
    title: "Gestión Responsable",
    description: "Cuidar el presupuesto como si fuera propio, con responsabilidad, transparencia y calidad en proyectos y decisiones.",
    icon: Coins
  },
  {
    number: 3,
    title: "Vida Social",
    description: "Activar la vida social, aumentando la oferta de actividades con una imagen actualizada y moderna.",
    icon: Activity
  },
  {
    number: 4,
    title: "Semana Grande",
    description: "Instaurar la Semana Grande como cita emblemática del RCNGC, con la concentración de los actos más importantes de nuestra entidad.",
    icon: Calendar
  },
  {
    number: 5,
    title: "Escucha Activa",
    description: "Realizar encuestas periódicas para escuchar y tener en cuenta la opinión de los socios/as en las decisiones.",
    icon: Search
  },
  {
    number: 6,
    title: "Impulso Cultural",
    description: "Impulsar actos culturales, tanto públicos como privados, para conectar el Club con la ciudad y con su historia.",
    icon: Mic
  },
  {
    number: 7,
    title: "Relaciones Institucionales",
    description: "Fomentar buenas relaciones institucionales con las Administraciones Públicas tanto civiles como militares.",
    icon: Handshake
  },
  {
    number: 8,
    title: "Recursos Humanos",
    description: "Optimizar los recursos humanos, reforzando la cercanía y las relaciones con los empleados.",
    icon: Users
  },
  {
    number: 9,
    title: "Referentes Deportivos",
    description: "Involucrar a los grandes campeones en la vida activa del Club, como referentes deportivos y humanos, aportando conocimiento y experiencia a las jóvenes promesas.",
    icon: Award
  },
  {
    number: 10,
    title: "Recuperación de Socios",
    description: "Trabajar desde el primer día en la recuperación del socio/a, de baja además de incrementar la incorporación de nuevas altas.",
    icon: UserPlus
  }
];

const DecalogoSection = () => {
  return (
    <section id="decalogo" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Una Tripulación Comprometida</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos un equipo de 14+1 socios y socias con experiencia, tiempo y ganas de trabajar por y para el Club. 
            Creemos en la escucha activa, en el valor de lo compartido y en recuperar el espíritu del RCNGC 
            desde la cercanía, el respeto y la acción.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={initiative.number} 
                className="border-l-4 border-l-primary hover:shadow-md transition-shadow animate-fade-in" 
                style={{animationDelay: `${initiative.number * 0.1}s`}}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                      {initiative.number}
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="text-primary w-6 h-6" />
                      <h3 className="font-bold text-lg text-primary">{initiative.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DecalogoSection;

