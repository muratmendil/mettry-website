"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { HeroDashboard } from "./HeroDashboard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Zap, ShieldCheck, Smartphone } from "lucide-react";

const TRUST_PILLS = [
    { icon: "flag" as const, label: "Données hébergées en France" },
    { icon: Zap, label: "Intégration GRDF / Enedis" },
    { icon: ShieldCheck, label: "Décret Tertiaire intégré" },
    { icon: Smartphone, label: "Application mobile" },
];

function FlagFR() {
    return (
        <svg width={16} height={11} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="rounded-[2px] overflow-hidden">
            <rect width="6.67" height="14" fill="#002395" />
            <rect x="6.67" width="6.67" height="14" fill="#FFFFFF" />
            <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
        </svg>
    );
}

export function Hero() {
    const { openDemo } = useDemoModal();

    const scrollToFeatures = () => {
        const el = document.getElementById("features-showcase");
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <section
            className="hero-section relative overflow-hidden pt-8 pb-24 lg:pt-12 lg:pb-32"
            style={{ background: "var(--color-bg-off-white)" }}
        >
            {/* Decorative blob discret */}
            <div
                className="absolute -top-20 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(5,137,133,0.08), transparent 60%)",
                    filter: "blur(60px)",
                }}
                aria-hidden="true"
            />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center relative">
                    {/* Left: copy */}
                    <div>
                        <Eyebrow>Nouveau · Intégration GRDF & Enedis</Eyebrow>

                        <h1
                            className="mt-7 text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02]"
                            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.035em" }}
                        >
                            Le pilotage<br />
                            de votre<br />
                            patrimoine<br />
                            immobilier,<br />
                            <span style={{
                                backgroundImage: "linear-gradient(180deg, transparent 60%, rgba(245,160,66,0.5) 60%, rgba(245,160,66,0.5) 95%, transparent 95%)",
                                boxDecorationBreak: "clone",
                                WebkitBoxDecorationBreak: "clone",
                                paddingLeft: "0.04em",
                                paddingRight: "0.04em",
                            }}>enfin centralisé.</span>
                        </h1>

                        <p className="mt-7 text-lg leading-relaxed text-ink-secondary max-w-[52ch]">
                            Mettry remplace votre GMAO, votre suivi énergétique, votre ticketing et votre GED — dans une seule interface, pensée par des experts du terrain.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button size="lg" onClick={openDemo}>
                                Demander une démo gratuite <ArrowRight size={18} />
                            </Button>
                            <Button size="lg" variant="ghost" onClick={scrollToFeatures}>
                                <Play size={14} fill="currentColor" /> Voir le produit en 2 min
                            </Button>
                        </div>

                        <div className="mt-10">
                            <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-tertiary mb-4">
                                Inclus dans toutes les offres
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {TRUST_PILLS.map((pill) => {
                                    return (
                                        <span
                                            key={pill.label}
                                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-border-default text-[13px] font-medium text-ink-primary"
                                        >
                                            {pill.icon === "flag" ? (
                                                <FlagFR />
                                            ) : (
                                                <pill.icon size={14} className="text-ink-secondary" />
                                            )}
                                            {pill.label}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: dashboard mock */}
                    <div className="relative">
                        <HeroDashboard />
                    </div>
                </div>
            </Container>
        </section>
    );
}