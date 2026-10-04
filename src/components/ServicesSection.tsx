import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Battery, Key, Fuel, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

import backGround from "@/assets/bg-1.png";

// A basic modal component
const ServiceModal = ({ title, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-background border border-border rounded-lg shadow-xl p-8 w-full max-w-md relative animate-zoom-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // State to manage the visibility of the modal and the data to show
  const [modalService, setModalService] = useState(null);

  const services = [
    {
      icon: Wrench,
      title: t.emergencyRepairs,
      description: t.emergencyRepairsDesc,
      // You can add more detailed descriptions here for the popup
      fullDescription: "Our emergency repair service is available 24/7 to help with a wide range of common roadside issues, including flat tires, minor engine problems, and more. We aim to get you back on the road safely and quickly."
    },
    {
      icon: Battery,
      title: t.jumpStartService,
      description: t.jumpStartServiceDesc,
      fullDescription: "If your car won't start due to a dead battery, our jump-start service will get you going. Our technicians can also test your battery's health and provide a replacement if needed."
    },
    {
      icon: Key,
      title: t.lockoutAssistance,
      description: t.lockoutAssistanceDesc,
      fullDescription: "Locked your keys in your car? Our skilled technicians use safe, non-damaging tools to unlock your vehicle and retrieve your keys, so you can get back to your day without hassle."
    },
    {
      icon: Fuel,
      title: t.fuelDelivery,
      description: t.fuelDeliveryDesc,
      fullDescription: "Running on empty? Don't get stranded. We provide emergency fuel delivery directly to your location, offering various fuel types to ensure you can reach the nearest gas station."
    }
  ];

  const openModal = (service) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

  return (
    <section className="py-20 relative bg-cover bg-black/60 bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${backGround})` }} >
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
                className="bg-gradient-card/10 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group hover:-translate-y-2 cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(service)}
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
      
      {/* Render the modal when modalService has a value */}
      {modalService && (
        <ServiceModal 
          title={modalService.title} 
          description={modalService.fullDescription} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default ServicesSection;