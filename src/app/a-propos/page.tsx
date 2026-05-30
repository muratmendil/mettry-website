import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata = {
    title: "À propos",
    description:
        "L'histoire de Mettry : trois fondateurs, une conviction — le pilotage de patrimoine immobilier mérite mieux qu'un patchwork d'outils.",
};

const STATS = [
    { value: "2020", label: "année de création" },
    { value: "32", label: "personnes dans l'équipe" },
    { value: "120+", label: "clients en France" },
    { value: "200k+", label: "m² pilotés" },
];

const TIMELINE = [
    { year: "2020", title: "Création de Mettry", desc: "Trois fondateurs, un même constat : le pilotage de patrimoine immobilier n'a pas l'outil qu'il mérite." },
    { year: "2021", title: "Premier client", desc: "Une collectivité de 15 bâtiments lance le déploiement initial. Les retours façonnent le produit." },
    { year: "2022", title: "Levée de fonds seed", desc: "2,5 M€ levés pour accélérer le développement et étoffer l'équipe technique." },
    { year: "2024", title: "Module Décret Tertiaire", desc: "Sortie de l'export OPERAT qui devient un argument décisif pour les clients tertiaires et publics." },
    { year: "2025", title: "100ᵉ client", desc: "Mettry franchit le cap symbolique des 100 organisations utilisatrices, avec un NPS de 67." },
    { year: "2026", title: "Aujourd'hui", desc: "32 personnes, 120+ clients, et une roadmap orientée IA pour l'analyse prédictive et l'optimisation énergétique." },
];

const TEAM = [
    { name: "Alexandre M.", role: "CEO & co-fondateur", bio: "Ancien directeur du patrimoine d'une foncière tertiaire (8 ans). HEC Paris.", color: "#058985", initial: "A" },
    { name: "Camille R.", role: "CTO & co-fondatrice", bio: "Ex-tech lead chez Doctolib. Ingénieure Centrale Lyon. Engagée open source.", color: "#F5A042", initial: "C" },
    { name: "Julien B.", role: "COO & co-fondateur", bio: "Ancien consultant énergie chez Schneider Electric. Spécialiste Décret Tertiaire.", color: "#7A5AE0", initial: "J" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero centré sur fond off-white */}
            <section style={{ background: "var(--color-bg-off-white)" }} className="relative overflow-hidden py-20 lg:py-28">
                <div
                    className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(5,137,133,0.08), transparent 60%)",
                        filter: "blur(60px)",
                    }}
                    aria-hidden="true"
                />
                <Container>
                    <div className="relative max-w-3xl mx-auto text-center">
                        <Eyebrow>À propos</Eyebrow>
                        <RevealOnScroll>
                            <h1 className="mt-6">Trois fondateurs, une conviction.</h1>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.1}>
                            <p className="mt-6 text-lg lg:text-xl max-w-[56ch] mx-auto">
                                Mettry est née de la frustration concrète de gérer un parc avec quatre outils
                                disparates. On a construit ce qu&apos;on aurait voulu avoir.
                            </p>
                        </RevealOnScroll>

                        {/* Stats */}
                        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 pt-12 border-t border-border-default text-left">
                            {STATS.map((s, i) => (
                                <RevealOnScroll key={s.label} delay={i * 0.06}>
                                    <div>
                                        <div
                                            className="text-4xl lg:text-5xl font-bold leading-none text-[var(--accent-dark)]"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {s.value}
                                        </div>
                                        <div className="text-xs text-ink-tertiary uppercase tracking-wider font-semibold mt-3">
                                            {s.label}
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Timeline */}
            <section className="bg-white border-y border-border-default" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
                <Container>
                    <div className="max-w-3xl mb-12">
                        <Eyebrow>Notre parcours</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-6">De zéro à 120 clients en six ans.</h2>
                        </RevealOnScroll>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 lg:left-5 top-2 bottom-2 w-px bg-border-default" aria-hidden="true" />

                        <div className="flex flex-col gap-10">
                            {TIMELINE.map((item, i) => (
                                <RevealOnScroll key={item.year} delay={i * 0.05}>
                                    <div className="relative pl-14 lg:pl-16">
                                        <div
                                            className="absolute left-0 top-1 w-9 lg:w-11 h-9 lg:h-11 rounded-full bg-white border-2 flex items-center justify-center text-xs lg:text-sm font-bold"
                                            style={{ borderColor: "var(--accent)", color: "var(--accent-dark)", fontFamily: "var(--font-display)" }}
                                        >
                                            {item.year.slice(-2)}
                                        </div>
                                        <div
                                            className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-dark)] mb-1.5"
                                            style={{ fontFamily: "var(--font-mono)" }}
                                        >
                                            {item.year}
                                        </div>
                                        <h3 className="mb-2 text-xl">{item.title}</h3>
                                        <p className="text-[15px] leading-relaxed max-w-[56ch]">{item.desc}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Équipe */}
            <Section>
                <Container>
                    <div className="max-w-3xl mb-12">
                        <Eyebrow>L&apos;équipe fondatrice</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-6">Trois métiers, une même obsession.</h2>
                        </RevealOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TEAM.map((p, i) => (
                            <RevealOnScroll key={p.name} delay={i * 0.08}>
                                <article className="bg-white border border-border-default rounded-card overflow-hidden">
                                    <div
                                        className="aspect-square flex items-center justify-center"
                                        style={{
                                            background: `linear-gradient(135deg, ${p.color}, ${p.color}80)`,
                                        }}
                                    >
                                        <span
                                            className="text-8xl font-bold text-white/90"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {p.initial}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl mb-1">{p.name}</h3>
                                        <div
                                            className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-dark)] mb-3"
                                            style={{ fontFamily: "var(--font-mono)" }}
                                        >
                                            {p.role}
                                        </div>
                                        <p className="text-[14px] leading-relaxed">{p.bio}</p>
                                    </div>
                                </article>
                            </RevealOnScroll>
                        ))}
                    </div>
                </Container>
            </Section>

            <FinalCTA />
        </>
    );
}