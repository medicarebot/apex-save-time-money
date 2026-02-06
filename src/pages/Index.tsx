import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { DifferentiationSection } from "@/components/home/DifferentiationSection";
import { ModulesSection } from "@/components/home/ModulesSection";
import { IndustrySolutionsSection } from "@/components/home/IndustrySolutionsSection";
import { ROISection } from "@/components/home/ROISection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { EnterpriseSection } from "@/components/home/EnterpriseSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <DifferentiationSection />
      <ModulesSection />
      <IndustrySolutionsSection />
      <ROISection />
      <HowItWorksSection />
      <EnterpriseSection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
