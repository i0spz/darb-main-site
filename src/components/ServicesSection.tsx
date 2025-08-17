import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Battery, Key, Fuel } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Wrench,
      title: t.emergencyRepairs,
      description: t.emergencyRepairsDesc
    },
    {
      icon: Battery,
      title: t.jumpStartService,
      description: t.jumpStartServiceDesc
    },
    {
      icon: Key,
      title: t.lockoutAssistance,
      description: t.lockoutAssistanceDesc
    },
    {
      icon: Fuel,
      title: t.fuelDelivery,
      description: t.fuelDeliveryDesc
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.ourServices}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;