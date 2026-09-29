import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import PainPointsSection from "./components/sections/PainPointsSection/PainPointsSection";
import HowItWorksSection from "./components/sections/HowItWorksSection/HowItWorksSection";
import BenefitsSection from "./components/sections/BenefitsSection/BenefitsSection";
import WhyGuardianSection from "./components/sections/WhyGuardianSection/WhyGuardianSection";
import PricingSection from "./components/sections/PricingSection/PricingSection";
import ContactSection from "./components/sections/ContactSection/ContactSection";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <PainPointsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <WhyGuardianSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
