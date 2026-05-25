import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/home/FinalCTA";
import { AlertCircle, Check } from "lucide-react";
import { SOLUTIONS, MIGRATION_STEPS } from "@/lib/solutions";

export const metadata = {
    title: "Solutions · Mettry",
    description:
        "Mettry pour les collectivités, foncières tertiaires et établissements de santé. Cas d'usage, témoignages, méthodologie de migration.",
};

export default function SolutionsPage() {
    return (
        <>
            <Section>
                <Container>
                    <div className="max-w-3xl">
                        <Eyebrow>Solutions</Eyebrow>
                        <RevealOnScroll>
                            <h1 className="mt-6">Pensé pour les organisations qui pilotent un parc.</h1>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.1}>
                            <p className="mt-6 text-lg lg:text-xl max-w-[56ch]">
                                Mettry s&apos;adapte à votre métier. Voici comment nos clients utilisent
                                la plateforme selon leur typologie d&apos;activité.
                            </p>
                        </RevealOnScroll>
                    </div>
                </Container>
            </Section>

            {/* Solutions par typologie */}
            <div>
                {SOLUTIONS.map((sol, idx) => {
                    const Icon = sol.icon;
                    const reversed = idx % 2 === 1;
                    return (
                        <section
                            key={sol.id}
                            id={sol.id}
                            className={reversed ? "bg-bg-off-white" : "bg-white"}
                            style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
                        >
                            <Container>
                                <div className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                                    <div>
                                        <div className="flex items-center gap-3 mb-5">
                                            <div
                                                className="w-12 h-12 rounded-card flex items-center justify-center"
                                                style={{ background: `${sol.color}15` }}
                                            >
                                                <Icon size={22} style={{ color: sol.color }} />
                                            </div>
                                            <span
                                                className="text-xs uppercase tracking-widest font-semibold"
                                                style={{ fontFamily: "var(--font-mono)", color: sol.color }}
                                            >
                                                {sol.label}
                                            </span>
                                        </div>
                                        <h2 className="mb-7">{sol.title}</h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                            <div>
                                                <div className="text-xs uppercase tracking-wider font-semibold text-error mb-4">
                                                    Vos contraintes
                                                </div>
                                                <ul className="flex flex-col gap-3">
                                                    {sol.pains.map((p) => (
                                                        <li key={p} className="flex items-start gap-2.5 text-[14px] leading-relaxed">
                                                            <AlertCircle size={14} className="text-error shrink-0 mt-1" />
                                                            <span>{p}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-dark)] mb-4">
                                                    Ce que Mettry apporte
                                                </div>
                                                <ul className="flex flex-col gap-3">
                                                    {sol.benefits.map((b) => (
                                                        <li key={b} className="flex items-start gap-2.5 text-[14px] leading-relaxed">
                                                            <Check size={14} className="text-[var(--accent-dark)] shrink-0 mt-1" strokeWidth={3} />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Témoignage */}
                                    <RevealOnScroll delay={0.1}>
                                        <article
                                            className="rounded-card p-7 lg:p-8 border-2"
                                            style={{
                                                background: `linear-gradient(180deg, ${sol.color}08, white)`,
                                                borderColor: `${sol.color}30`,
                                            }}
                                        >
                                            <div
                                                className="text-3xl mb-3"
                                                style={{ fontFamily: "var(--font-display)", color: sol.color, fontWeight: 800 }}
                                            >
                                                “
                                            </div>
                                            <p className="text-[15px] leading-relaxed italic mb-6">{sol.testimonial.quote}</p>
                                            <div className="flex items-center gap-3 pt-5 border-t border-border-default">
                                                <div
                                                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                                                    style={{ background: sol.color, fontFamily: "var(--font-display)" }}
                                                >
                                                    {sol.testimonial.initial}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold">{sol.testimonial.name}</div>
                                                    <div className="text-xs text-ink-tertiary">{sol.testimonial.role}</div>
                                                </div>
                                            </div>
                                        </article>
                                    </RevealOnScroll>
                                </div>
                            </Container>
                        </section>
                    );
                })}
            </div>

            {/* Migration en 4 étapes */}
            <Section>
                <Container>
                    <div className="max-w-3xl mb-12">
                        <Eyebrow>Méthodologie</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-6">Une migration accompagnée, en 4 étapes claires.</h2>
                        </RevealOnScroll>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {MIGRATION_STEPS.map((step, i) => (
                            <RevealOnScroll key={step.num} delay={i * 0.08}>
                                <div className="h-full bg-white border border-border-default rounded-card p-6">
                                    <div
                                        className="text-xs uppercase tracking-wider font-semibold text-[var(--accent-dark)] mb-3"
                                        style={{ fontFamily: "var(--font-mono)" }}
                                    >
                                        {step.num}
                                    </div>
                                    <h3 className="mb-2 text-lg">{step.title}</h3>
                                    <p className="text-sm leading-relaxed mb-4">{step.desc}</p>
                                    <div className="pt-3 border-t border-border-default text-xs font-semibold text-ink-tertiary">
                                        {step.duration}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </Container>
            </Section>

            <FinalCTA />
        </>
    );
}