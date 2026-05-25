"use client";

import { useMemo, useState } from "react";
import { Building } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Props {
    annual: boolean;
}

export function PricingEstimator({ annual }: Props) {
    const [count, setCount] = useState(15);

    // Plan Complet (référence pour l'estimateur)
    const base = 129;
    const perBld = 32;

    const monthly = base + perBld * count;
    const yearly = annual ? monthly * 10 : monthly * 12;
    const savings = annual ? monthly * 2 : 0;

    // Format formaté
    const fmt = useMemo(
        () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }),
        []
    );

    return (
        <section className="py-12">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-card border border-border-default p-6 lg:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
                        <div className="flex items-start justify-between gap-6 flex-wrap mb-6">
                            <div>
                                <div className="text-xs uppercase tracking-wider font-semibold text-ink-tertiary mb-2">
                                    Estimateur · Plan Complet
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <Building size={20} className="text-[var(--accent-dark)]" />
                                    <span className="text-3xl font-bold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                                        {count}
                                    </span>
                                    <span className="text-lg text-ink-secondary">bâtiment{count > 1 ? "s" : ""}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs uppercase tracking-wider font-semibold text-ink-tertiary mb-2">
                                    {annual ? "Coût annuel" : "Coût mensuel"}
                                </div>
                                <div className="flex items-baseline gap-1.5 justify-end">
                                    <span
                                        className="text-4xl lg:text-5xl font-bold tabular-nums text-[var(--accent-dark)]"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {fmt.format(yearly)}
                                    </span>
                                    <span className="text-sm text-ink-tertiary">/ {annual ? "an" : "mois"}</span>
                                </div>
                                {annual && (
                                    <div className="text-xs text-success font-semibold mt-1">
                                        {fmt.format(savings)} d&apos;économies vs mensuel
                                    </div>
                                )}
                            </div>
                        </div>

                        <input
                            type="range"
                            min={1}
                            max={100}
                            value={count}
                            onChange={(e) => setCount(parseInt(e.target.value, 10))}
                            className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[var(--accent)]"
                            style={{
                                background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${count}%, var(--color-border-default) ${count}%, var(--color-border-default) 100%)`,
                            }}
                            aria-label="Nombre de bâtiments"
                        />
                        <div className="flex justify-between text-xs text-ink-tertiary mt-2 font-medium">
                            <span>1</span>
                            <span>25</span>
                            <span>50</span>
                            <span>75</span>
                            <span>100+</span>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border-default text-sm text-ink-secondary">
                            Base {fmt.format(base)}/mois + {fmt.format(perBld)}/bâtiment/mois.
                            Au-delà de 100 bâtiments, passage en plan Enterprise avec tarif négocié.
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}