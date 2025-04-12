
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
    position: "Presidente",
    image: "/lovable-uploads/57a92179-c9d6-4153-bb68-b0d1b707098e.png",
    featured: true
  },
  {
    name: "Fernando Ojeda Álvarez",
    position: "Comodoro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Joaquín Espinosa Chirino",
    position: "Secretario",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Matías Jiménez Brito",
    position: "Contador",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Ana Mª Blázquez Santana",
    position: "Tesorera",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Mavi Jiménez Sarmiento",
    position: "Presidenta de Recreo",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Elena Mª Rodríguez Fominaya",
    position: "Presidenta de Cultura",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Alejandro Martín Santana",
    position: "Vicepresidente",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Manuel Padrón Rodríguez",
    position: "Vicecomodoro",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Eduardo Ojeda Ensell",
    position: "Vicesecretario",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Alicia Cabrera Mateos",
    position: "Vicepresidenta de Recreo",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Fernando Jiménez del Campo",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Enrique Viera Molina",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "María José Ortiz Guillén",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Carmen Viniegra Guinea",
    position: "Vocal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
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
