import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/lib/pricing";

export const metadata = {
    title: "Tarifs",
    description: "Tarifs transparents pour Mettry : Essentiel, Complet et Enterprise.",
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
};

export default function TarifsPage() {
    return (
        <>
            <JsonLd id="faq-jsonld" data={faqJsonLd} />
            <PricingPageContent />
        </>
    );
}