import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ModulesSection } from "@/components/home/ModulesSection";
import { SyncAnimation } from "@/components/home/sync-animation/SyncAnimation";

const FeatureShowcase = dynamic(() => import("@/components/home/FeatureShowcase").then((m) => ({ default: m.FeatureShowcase })));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })));
const WhyMettrySection = dynamic(() => import("@/components/home/WhyMettrySection").then((m) => ({ default: m.WhyMettrySection })));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA").then((m) => ({ default: m.FinalCTA })));

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofStrip />
      <SyncAnimation />
      <ProblemSection />
      <ModulesSection />
      <FeatureShowcase />
      <TestimonialsSection />
      <WhyMettrySection />
      <FinalCTA />
    </>
  );
}