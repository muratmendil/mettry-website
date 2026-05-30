"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/cn";

interface Props {
    annual: boolean;
    onToggle: (annual: boolean) => void;
}

export function PricingHero({ annual, onToggle }: Props) {
    return (
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
                    <Eyebrow>Tarifs</Eyebrow>
                    <RevealOnScroll>
                        <h1 className="mt-6">Un prix transparent, sans surprise.</h1>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <p className="mt-6 text-lg lg:text-xl max-w-[56ch] mx-auto">
                            Base mensuelle + tarif par bâtiment. Vous ne payez que ce que vous utilisez.
                            30 à 40% moins cher qu&apos;une combinaison GMAO + SME du marché.
                        </p>
                    </RevealOnScroll>

                    {/* Toggle */}
                    <div className="mt-10 flex justify-center">
                        <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white border border-border-default">
                            <button
                                type="button"
                                onClick={() => onToggle(false)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                                    !annual ? "bg-bg-off-white text-ink-primary shadow-sm" : "text-ink-secondary"
                                )}
                            >
                                Mensuel
                            </button>
                            <button
                                type="button"
                                onClick={() => onToggle(true)}
                                className={cn(
                                    "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all",
                                    annual ? "bg-bg-off-white text-ink-primary shadow-sm" : "text-ink-secondary"
                                )}
                            >
                                Annuel
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange text-white">
                                    −2 mois
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}