import AboutUsHp from "@/components/AboutUsHp";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutUsHp />
      <ContactForm />
    </div>
  );
}
