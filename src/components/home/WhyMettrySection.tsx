import { Layers, MapPin, Sparkles, TrendingDown, Wrench, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const REASONS = [
    {
        icon: Layers,
        title: "Tout-en-un",
        desc: "Un seul abonnement, une seule équipe à former, une seule source de vérité pour vos données.",
    },
    {
        icon: MapPin,
        title: "Données en France",
        desc: "Hébergement OVHcloud à Strasbourg. Souveraineté garantie, RGPD respecté nativement.",
    },
    {
        icon: Sparkles,
        title: "Ergonomie soignée",
        desc: "Designé avec et pour les équipes terrain. Mobile-first, raccourcis clavier, pas de friction.",
    },
    {
        icon: TrendingDown,
        title: "Moins cher",
        desc: "30 à 40% moins coûteux que la combinaison GMAO + suivi énergétique + ticketing du marché.",
    },
    {
        icon: Wrench,
        title: "Migration accompagnée",
        desc: "Notre équipe importe vos données depuis vos outils existants. Vous n'avez rien à ressaisir.",
    },
    {
        icon: Smartphone,
        title: "App mobile native",
        desc: "iOS et Android pour vos techniciens : tickets, photos, signature électronique sur le terrain.",
    },
];

export function WhyMettrySection() {
    return (
        <Section>
            <Container>
                <div className="max-w-3xl mb-12">
                    <Eyebrow>Pourquoi Mettry</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Six raisons d&apos;arrêter d&apos;empiler les outils.</h2>
                    </RevealOnScroll>
                </div>

                <div className="rounded-card border border-border-default overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {REASONS.map((r, i) => {
                        const Icon = r.icon;
                        const isLastRow = i >= REASONS.length - (REASONS.length % 3 || 3);
                        const isLastCol = (i + 1) % 3 === 0;
                        return (
                            <div
                                key={r.title}
                                className={`p-7 lg:p-8 ${!isLastCol ? "lg:border-r" : ""} ${!isLastRow ? "border-b" : ""} border-border-default`}
                            >
                                <div
                                    className="w-11 h-11 rounded-md flex items-center justify-center mb-5"
                                    style={{ background: "var(--accent-light)" }}
                                >
                                    <Icon size={20} className="text-[var(--accent-dark)]" />
                                </div>
                                <h3 className="mb-3 text-xl">{r.title}</h3>
                                <p className="text-[15px] leading-relaxed">{r.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}