
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProyectosEstrellaSection = () => {
  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Proyectos Estrella</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vestuarios Renovados */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Vestuarios renovados" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <h3 className="font-bold text-xl text-primary">Vestuarios Renovados</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completa renovación de los vestuarios con materiales de primera calidad, 
                ampliación de espacios y nuevas duchas con sistemas de ahorro de agua. 
                Diseño moderno respetando la estética náutica tradicional del club.
              </p>
            </CardContent>
          </Card>
          
          {/* Zona Chillout */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Zona Chillout" 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <h3 className="font-bold text-xl text-primary">Zona Chillout</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Creación de un nuevo espacio de ocio con vistas al mar, 
                mobiliario confortable y ambiente relajado. Un lugar para la socialización 
                entre socios con servicio de bar y posibilidad de eventos privados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProyectosEstrellaSection;
