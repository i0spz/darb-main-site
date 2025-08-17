import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const InsuranceSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const insuranceCompanies = [
    {
      name: "Takaful Oman Insurance Company",
      url: "https://www.takafuloman.om",
      backgroundImage: "src/assets/takaful-logo.png"
    },
    {
      name: "OQ Insurance Company",
      url: "https://oqic.com",
      backgroundImage: "/src/assets/OQIC-Logo.png"
    },
    {
      name: "Oman United Insurance",
      url: "https://www.omanutd.com",
      backgroundImage: "src/assets/OMUTD-insu-logo.png"
    },
    {
      name: "Newindiaoman Insurance",
      url: "https://www.newindiaoman.com",
      backgroundImage: "src/assets/india-insu-logo.png"
    },
    {
      name: "Iran Insurance",
      url: "http://bimehir.ae",
      backgroundImage: "src/assets/Iran_Insurance-logo.png"
    },
    {
      name: "Wataniya Insurance",
      url: "#",
      backgroundImage: "src/assets/wataniya-logo.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.insuranceCompanies}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.insuranceDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceCompanies.map((company, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={company.backgroundImage}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {company.name}
                </h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}
                  >
                    <span>{t.visitSite}</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
