"use client";

import { useState } from "react";
import { PricingHero } from "./PricingHero";
import { PricingEstimator } from "./PricingEstimator";
import { PlanCards } from "./PlanCards";
import { ComparisonTable } from "./ComparisonTable";
import { FAQAccordion } from "./FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export function PricingPageContent() {
    const [annual, setAnnual] = useState(true);

    return (
        <>
            <PricingHero annual={annual} onToggle={setAnnual} />
            <PricingEstimator annual={annual} />
            <PlanCards annual={annual} />
            <ComparisonTable />
            <FAQAccordion />
            <FinalCTA />
        </>
    );
}