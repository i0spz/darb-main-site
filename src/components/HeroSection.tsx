import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22%3e%3cpath d=%22m0 .5 32 32M32 .5 0 32%22/%3e%3c/svg%3e')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-3 animate-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            {t.heroTitle}
            <span className="block text-primary">{t.heroSubtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-button hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="tel:+96824790888" className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                <span>{t.callNowForHelp}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent/10 text-lg px-8 py-6"
            >
              {t.learnMore}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;