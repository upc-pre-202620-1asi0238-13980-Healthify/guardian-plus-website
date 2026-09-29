import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import PainPointsSection from "./components/sections/PainPointsSection/PainPointsSection";
import HowItWorksSection from "./components/sections/HowItWorksSection/HowItWorksSection";
import WristbandSection from "./components/sections/WristbandSection/WristbandSection";
import BenefitsSection from "./components/sections/BenefitsSection/BenefitsSection";
import AppTourSection from "./components/sections/AppTourSection/AppTourSection";
import SafeZonesSection from "./components/sections/SafeZonesSection/SafeZonesSection";
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
        <WristbandSection />
        <BenefitsSection />
        <AppTourSection />
        <SafeZonesSection />
        <WhyGuardianSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
