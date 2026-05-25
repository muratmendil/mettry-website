import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const TESTIMONIALS = [
    {
        quote:
            "On a remplacé 4 outils par Mettry en six semaines. L'équipe de maintenance a gagné une demi-journée par semaine, et le rapport au COMEX se fait en 10 minutes au lieu de deux jours.",
        name: "Marc L.",
        role: "Directeur du patrimoine",
        org: "Collectivité, 35 sites",
        initial: "M",
        color: "#058985",
    },
    {
        quote:
            "Le module Décret Tertiaire à lui seul a justifié notre investissement. On a déclaré nos 22 sites OPERAT pour 2024 en une demi-journée, alors qu'avant c'était un cauchemar mensuel.",
        name: "Sophie B.",
        role: "Responsable énergie",
        org: "Foncière tertiaire, 22 sites",
        initial: "S",
        color: "#F5A042",
    },
    {
        quote:
            "Ce qu'on apprécie le plus, c'est que les développeurs comprennent notre métier. À chaque demande, on a une réponse pertinente — pas un ticket qui traîne 3 semaines.",
        name: "Nicolas T.",
        role: "Responsable maintenance",
        org: "CHU, 18 bâtiments",
        initial: "N",
        color: "#7A5AE0",
    },
];

export function TestimonialsSection() {
    return (
        <section
            className="py-24 lg:py-32 relative"
            style={{
                background: "linear-gradient(180deg, white 0%, var(--accent-xlight) 100%)",
            }}
        >
            <Container>
                <div className="max-w-3xl mb-12">
                    <Eyebrow>Ils utilisent Mettry</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Une équipe qui parle votre langue.</h2>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <RevealOnScroll key={t.name} delay={i * 0.08}>
                            <article className="h-full bg-white rounded-card p-7 border border-border-default relative" style={{ boxShadow: "var(--shadow-card)" }}>
                                <Quote
                                    size={32}
                                    className="text-[var(--accent-light)] absolute top-5 right-5"
                                    fill="currentColor"
                                />
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star key={j} size={14} className="text-orange" fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-[15px] leading-relaxed text-ink-primary italic mb-7">
                                    « {t.quote} »
                                </p>
                                <div className="flex items-center gap-3 pt-5 border-t border-border-default">
                                    <div
                                        className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                                        style={{ background: t.color, fontFamily: "var(--font-display)" }}
                                        aria-hidden="true"
                                    >
                                        {t.initial}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold">{t.name}</div>
                                        <div className="text-xs text-ink-tertiary">
                                            {t.role} · {t.org}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}