import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ModulesSection } from "@/components/home/ModulesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
