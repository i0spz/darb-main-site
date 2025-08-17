import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const TeamSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const teamMembers = [
    {
      name: language === 'ar' ? "ناصر الوهيبي" : "Nasser Al-Wohaibi",
      position: t.operationsManager,
      image: teamMember1,
      experience: language === 'ar' ? "8+ سنوات" : "8+ Years",
      specialties: [t.emergencyResponse, t.fleetManagement, t.customerService]
    },
    {
      name: language === 'ar' ? "فاطمة الزهراء" : "Fatima Al-Zahra",
      position: t.technicalSupervisor,
      image: teamMember2,
      experience: language === 'ar' ? "6+ سنوات" : "6+ Years", 
      specialties: [t.vehicleDiagnostics, t.repairSolutions, t.training]
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.ourTeam}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.teamDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {member.experience}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-lg text-primary mb-4 font-medium">
                  {member.position}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <Badge 
                      key={specIndex}
                      variant="outline"
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;