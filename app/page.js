
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import StatsSection from "@/components/StatsSection";
import ServicesList from "@/components/Service/ServicesList";
import AboutUs from "@/components/About/AboutUs";
import Partners from "@/components/About/Partners";
import History from "@/components/About/History";
import Shops from "@/components/Service/Shops";
import WhyUs from "@/components/Service/WhyUs";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      <StatsSection />
      <ServicesList />
      <ServicesSection />
      <AboutUs />
      <History />
      <Shops />
      <WhyUs />
      <Partners />
      <ContactForm />
    </div>
  );
}
