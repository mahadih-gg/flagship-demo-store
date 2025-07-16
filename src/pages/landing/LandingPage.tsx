import FlagshipWrapper from "../../components/FlagshipWrapper";
import DemoSection from "../../components/landing/DemoSection";
import EntryPointSection from "../../components/landing/EntryPointSection";
import Footer from "../../components/landing/Footer";
import Header from "../../components/landing/Header";
import HeroSection from "../../components/landing/HeroSection";
import StatsSection from "../../components/landing/StatsSection";
import StepsSection from "../../components/landing/StepsSection";
import TestimonialSection from "../../components/landing/TestimonialSection";

const LandingPage = () => {
  return (
    <FlagshipWrapper tenant="ecom">
      <main className="font-helvetica-neue">
        <Header />
        <HeroSection />
        <EntryPointSection />
        <StatsSection />
        <DemoSection />
        <TestimonialSection />
        <StepsSection />
        <Footer />
      </main>
    </FlagshipWrapper>
  );
};

export default LandingPage;