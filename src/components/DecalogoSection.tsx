
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
    title: "Dedicar tiempo al Club y a su gente",
    description: "Con atención directa y personalizada al socio/a.",
    icon: User
  },
  {
    number: 2,
    title: "Cuidar el presupuesto como si fuera propio",
    description: "Con responsabilidad, transparencia y calidad en proyectos y decisiones.",
    icon: Coins
  },
  {
    number: 3,
    title: "Activar la vida social",
    description: "Aumentando la oferta de actividades con una imagen actualizada y moderna.",
    icon: Activity
  },
  {
    number: 4,
    title: "Instaurar la Semana Grande",
    description: "Como cita emblemática del RCNGC, con la concentración de los actos más importantes de nuestra entidad.",
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
    <section id="decalogo" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-nautical-blue mb-6 font-playfair">Decálogo de iniciativas</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-nautical-gold mb-6">UNA TRIPULACIÓN COMPROMETIDA</h3>
            <p className="text-lg text-nautical-blue mx-auto">
              Somos un equipo de 14+1 socios y socias con experiencia, tiempo y ganas de trabajar por y para 
              el Club. Creemos en la escucha activa, en el valor de lo compartido y en recuperar el espíritu del 
              RCNGC desde la cercanía, el respeto y la acción. Este decálogo resume los compromisos que 
              asumimos como grupo para que el Club vuelva a ser un orgullo para todos.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Card 
                key={initiative.number} 
                className="border-l-4 border-l-nautical-gold bg-gray-50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-nautical-blue text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold">
                        {initiative.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-nautical-blue mb-2">{initiative.title}</h3>
                      <p className="text-nautical-blue">{initiative.description}</p>
                    </div>
                  </div>
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
