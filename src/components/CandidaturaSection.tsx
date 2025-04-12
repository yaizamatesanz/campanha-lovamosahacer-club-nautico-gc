
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TeamMember {
  name: string;
  position: string;
  age?: number;
  image: string;
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Adolfo López Martínez",
    position: "Candidato a Presidente",
    image: "/lovable-uploads/57a92179-c9d6-4153-bb68-b0d1b707098e.png",
    featured: true
  },
  {
    name: "Isabel Sánchez",
    position: "Vicepresidenta",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Francisco Rodríguez",
    position: "Secretario",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "María González",
    position: "Tesorera",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Pedro Ortiz",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Ana Martín",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Carlos Hernández",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Laura Díaz",
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
        <div className="mb-12 overflow-hidden rounded-lg shadow-md">
          <AspectRatio ratio={16 / 7} className="bg-muted">
            <img 
              src="/lovable-uploads/9bb8737f-7814-4d8d-ac45-23e6b6d76f96.png" 
              alt="Equipo completo" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        {/* Featured member - President */}
        <div className="max-w-3xl mx-auto mb-12">
          {teamMembers.filter(m => m.featured).map((president) => (
            <Card key="president" className="overflow-hidden border-0 shadow-lg animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="h-full overflow-hidden">
                  <img 
                    src={president.image} 
                    alt={president.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="font-bold text-2xl text-primary mb-2">{president.name}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{president.position}</p>
                  <p className="text-muted-foreground">
                    Con experiencia y dedicación, Adolfo López lidera un equipo comprometido 
                    con la renovación del Real Club Náutico de Gran Canaria. Su visión 
                    combina tradición y modernidad para devolver al Club el prestigio que merece.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-primary">Equipo Directivo</h3>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.filter(m => !m.featured).map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in border-0 shadow-md" style={{animationDelay: `${index * 0.1}s`}}>
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
