import { Hero } from "@/components/home/Hero";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ModulesSection } from "@/components/home/ModulesSection";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyMettrySection } from "@/components/home/WhyMettrySection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofStrip />
      <ProblemSection />
      <ModulesSection />
      <FeatureShowcase />
      <TestimonialsSection />
      <WhyMettrySection />
      <FinalCTA />
    </>
  );
}