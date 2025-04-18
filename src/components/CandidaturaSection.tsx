
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
    age: 76,
    image: "/lovable-uploads/57a92179-c9d6-4153-bb68-b0d1b707098e.png",
    featured: true
  },
  {
    name: "Fernando Ojeda Álvarez",
    position: "Comodoro",
    age: 52,
    image: "/lovable-uploads/16013d2f-2dd0-41e9-904d-cad549c2b9c1.png"
  },
  {
    name: "Joaquín Espinosa Chirino",
    position: "Secretario",
    age: 54,
    image: "/lovable-uploads/eb682b10-73f9-4393-aead-61c90f6e2cb8.png"
  },
  {
    name: "Matías Jiménez Brito",
    position: "Contador",
    age: 57,
    image: "/lovable-uploads/02d75ef8-ab64-4520-9be1-da7579b81b2d.png"
  },
  {
    name: "Ana Blázquez",
    position: "Tesorera",
    age: 62,
    image: "/lovable-uploads/dcb3b991-c15d-405e-9d1c-af78437f0fb2.png"
  },
  {
    name: "Mavi Jiménez Sarmiento",
    position: "Presidenta de Recreo",
    age: 60,
    image: "/lovable-uploads/974a134d-515b-479c-b54c-785d3f3af4d3.png"
  },
  {
    name: "Elena Rodríguez Fominaya",
    position: "Presidenta de Cultura",
    age: 64,
    image: "/lovable-uploads/53075023-67e5-4fa8-8aa1-1afd8e25e801.png"
  },
  {
    name: "Alejandro Martín Santana",
    position: "Vicepresidente",
    age: 53, // Updated from 63 to 53
    image: "/lovable-uploads/bc0e4138-c93e-4468-a9f4-658e5a515250.png"
  },
  {
    name: "Manuel Padrón Rodríguez",
    position: "Vice-comodoro",
    age: 47,
    image: "/lovable-uploads/119d9b13-2ed4-4168-906d-fb47ba105705.png"
  },
  {
    name: "Eduardo Ojeda Ensell",
    position: "Vice-secretario",
    age: 53,
    image: "/lovable-uploads/1c08babc-dd55-42ad-9f6e-f05785c3cc0f.png"
  },
  {
    name: "Alicia Cabrera Mateos",
    position: "Vicepresidenta de Recreo",
    age: 50,
    image: "/lovable-uploads/66cdc463-6509-491d-b2c1-dcf3251fe1e0.png"
  },
  {
    name: "Fernando Jiménez del Campo",
    position: "Vocal (Náutica)",
    age: 58,
    image: "/lovable-uploads/4d3fdfc8-ceda-4fea-95a3-ec1323cd5378.png"
  },
  {
    name: "Enrique Viera Molina",
    position: "Vocal (Cultura)",
    age: 58,
    image: "/lovable-uploads/5cab1f9c-661e-4a78-b27c-414ed168b874.png"
  },
  {
    name: "Mª José Ortiz Guillén",
    position: "Vocal (Área)",
    age: 48,
    image: "/lovable-uploads/1b849463-1131-4c4f-9536-4bbe0b6ab00d.png"
  },
  {
    name: "Carmen Viniegra Guinea",
    position: "Vocal (Área)",
    age: 51,
    image: "/lovable-uploads/45e26150-745e-44f0-8985-749304a31bf8.png"
  }
];

const CandidaturaSection = () => {
  return <section id="candidatura" className="section-padding bg-white rounded">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-10">Candidatura</h2>
        
        {/* Team photo with text overlay */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-md relative">
          <AspectRatio ratio={16 / 7} className="bg-muted">
            <img src="/lovable-uploads/828256ca-f4bf-4165-bf97-21d714daee9e.png" alt="Equipo completo" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Equipo Adolfo López</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">Comprometidos con el futuro del Real Club Náutico</p>
            </div>
          </AspectRatio>
        </div>
        
        {/* Additional section title and description */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">UNA TRIPULACIÓN COMPROMETIDA</h3>
          <p className="text-muted-foreground text-lg">
            Somos un equipo de socios y socias con experiencia, tiempo y ganas de trabajar por y para el 
            Club. Creemos en la escucha activa, en el valor de lo compartido y en recuperar el espíritu del 
            RCNGC desde la cercanía, el respeto y la acción.
          </p>
        </div>
        
        {/* Featured member - President */}
        <div className="max-w-3xl mx-auto mb-12">
          {teamMembers.filter(m => m.featured).map(president => <Card key="president" className="overflow-hidden border-0 shadow-lg animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="h-full overflow-hidden">
                  <img src={president.image} alt={president.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="font-bold text-2xl text-primary mb-2">{president.name}</h3>
                  {president.age && <p className="text-muted-foreground mb-1">{president.age} años</p>}
                  <p className="text-lg text-muted-foreground mb-1">{president.position}</p>
                  <p className="text-muted-foreground">
                    Con experiencia y dedicación, Adolfo López lidera un equipo comprometido 
                    con la renovación del Real Club Náutico de Gran Canaria. Su visión 
                    combina tradición y modernidad para devolver al Club el prestigio que merece.
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-primary">Equipo Directivo</h3>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.filter(m => !m.featured).map((member, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in border-0 shadow-md" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <CardHeader className="pb-2 pt-4">
                <h3 className="font-bold text-lg text-primary">{member.name}</h3>
              </CardHeader>
              <CardContent className="pt-0">
                {member.age && <p className="text-sm text-muted-foreground">{member.age} años</p>}
                <p className="text-muted-foreground">{member.position}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default CandidaturaSection;
