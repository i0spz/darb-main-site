import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import numbersBackground from "@/assets/numbers-bg.jpg";

const NumbersSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: t.happyCustomers,
      description: t.happyCustomersDesc
    },
    {
      icon: Clock,
      number: language === 'ar' ? "15 دقيقة" : "15 min",
      label: t.averageResponseTime,
      description: t.averageResponseTimeDesc
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.ourNumbers}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.numbersDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={numbersBackground} 
                alt={t.statisticsBackground} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-8">
                  <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-6`}>
                    <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">
                        {stat.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;