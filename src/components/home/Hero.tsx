"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { HeroDashboard } from "./HeroDashboard";

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
                        <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02]" style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.035em" }}>
                            Le pilotage<br />
                            de votre<br />
                            patrimoine<br />
                            immobilier,<br />
                            <span className="relative inline-block">
                                <span className="absolute inset-x-0 bottom-1 h-3 -z-10" style={{ background: "rgba(245,160,66,0.45)" }} aria-hidden="true" />
                                <span className="relative">enfin centralisé.</span>
                            </span>
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

                        <div className="mt-10 text-[11px] uppercase tracking-[0.14em] font-semibold text-ink-tertiary">
                            Inclus dans toutes les offres
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