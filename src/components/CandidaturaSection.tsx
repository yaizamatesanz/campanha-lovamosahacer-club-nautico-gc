
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMember {
  name: string;
  position: string;
  age?: number;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adolfo López Martínez",
    position: "Candidato a Presidente",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Vicepresidente",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Secretario",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Tesorero",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nombre Apellido",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const CandidaturaSection = () => {
  return (
    <section id="candidatura" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nuestra Candidatura</h2>
        
        {/* Team photo */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Equipo completo" 
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="pb-2 pt-4">
                <h3 className="font-bold text-lg text-primary">{member.name}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">{member.position}</p>
                {member.age && <p className="text-sm text-muted-foreground">Edad: {member.age}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CandidaturaSection;
