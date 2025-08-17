import { MessageCircle, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import darbLogo from "@/assets/darb-logo.png";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className={`grid md:grid-cols-3 gap-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src={darbLogo} 
              alt="DARB" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-muted-foreground leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-card-foreground">{t.contactUs}</h3>
            <div className="space-y-3">
              <a 
                href="tel:+96824790888"
                className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300`}
              >
                <Phone size={18} />
                <span>+968 2479 0888</span>
              </a>
              <a 
                href="mailto:info@darb.com"
                className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300`}
              >
                <Mail size={18} />
                <span>info@darb.com</span>
              </a>
              <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-3 text-muted-foreground`}>
                <MapPin size={18} />
                <span>{t.location}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-card-foreground">{t.followUs}</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/96824790888"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:info@darb.com"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;