import { MessageCircle, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import darbLogo from "@/assets/darb-logo.png";

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="relative z-10 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Social Links - ${language === 'ar' ? 'Right' : 'Left'} */}
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-4`}>
            <a
              href="https://wa.me/96824790888"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:info@darb.com"
              className="w-10 h-10 rounded-full bg-gradient-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center">
            <img 
              src={darbLogo} 
              alt="DARB" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Contact & Language - ${language === 'ar' ? 'Left' : 'Right'} */}
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
            <LanguageSwitcher />
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="tel:+96824790888" className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-2`}>
                <Phone size={18} />
                <span className="hidden sm:inline">+968 2479 0888</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;