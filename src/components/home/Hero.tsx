"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { HeroDashboard } from "./HeroDashboard";

const TRUST_PILLS = [
    "Données hébergées en France",
    "RGPD compliant",
    "Décret Tertiaire intégré",
    "Migration accompagnée",
];

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
        <section className="hero-section relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
            {/* Decorative blobs */}
            <div
                className="absolute -top-20 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, var(--accent-light), transparent 60%)",
                    filter: "blur(60px)",
                    opacity: 0.7,
                }}
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(245,160,66,0.18), transparent 60%)",
                    filter: "blur(70px)",
                }}
                aria-hidden="true"
            />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center relative">
                    {/* Left: copy */}
                    <div>
                        <Eyebrow>Nouveau · Intégration GRDF & Enedis</Eyebrow>

                        <h1 className="mt-6">
                            Le pilotage de votre patrimoine immobilier,{" "}
                            <span className="relative inline-block">
                                <span
                                    className="absolute inset-x-0 bottom-1 h-3 -z-10"
                                    style={{ background: "rgba(245,160,66,0.35)" }}
                                    aria-hidden="true"
                                />
                                <span className="relative">enfin centralisé.</span>
                            </span>
                        </h1>

                        <p className="mt-6 text-lg lg:text-xl leading-relaxed text-ink-secondary max-w-[56ch]">
                            Mettry remplace votre GMAO, votre suivi énergétique, votre ticketing
                            et votre GED — dans une seule interface, pensée par des experts du terrain.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button size="lg" onClick={openDemo}>
                                Demander une démo <ArrowRight size={18} />
                            </Button>
                            <Button size="lg" variant="ghost" onClick={scrollToFeatures}>
                                <Play size={16} /> Voir le produit
                            </Button>
                        </div>

                        {/* Trust pills */}
                        <div className="hero-trust mt-10 flex flex-wrap gap-2">
                            {TRUST_PILLS.map((label) => (
                                <span
                                    key={label}
                                    className="trust-pill inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-medium text-ink-secondary bg-white border border-border-default"
                                >
                                    {label}
                                </span>
                            ))}
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