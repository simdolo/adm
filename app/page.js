import AboutUsHp from "@/components/AboutUsHp";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ServicesSection />
      <AboutUsHp />
      <ContactForm />
    </div>
  );
}
