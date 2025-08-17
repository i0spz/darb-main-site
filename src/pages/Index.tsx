import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import NumbersSection from "@/components/NumbersSection";
import InsuranceSection from "@/components/InsuranceSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <NumbersSection />
      <InsuranceSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
