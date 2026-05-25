"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { PLANS, type Plan } from "@/lib/pricing";

interface Props {
    annual: boolean;
}

export function PlanCards({ annual }: Props) {
    return (
        <section className="py-12 lg:py-16">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
                    {PLANS.map((plan, i) => (
                        <RevealOnScroll key={plan.id} delay={i * 0.08}>
                            <PlanCardSingle plan={plan} annual={annual} />
                        </RevealOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function PlanCardSingle({ plan, annual }: { plan: Plan; annual: boolean }) {
    const { openDemo } = useDemoModal();

    const fmt = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

    const handleCta = () => {
        if (plan.cta.action === "demo") openDemo();
    };

    if (plan.highlight) {
        return (
            <article
                className="relative h-full rounded-card overflow-hidden p-7 lg:p-8 flex flex-col"
                style={{
                    background: "linear-gradient(180deg, #0F5559 0%, #0A3A3D 100%)",
                    transform: "scale(1.02)",
                    boxShadow: "var(--shadow-lg-mettry)",
                }}
            >
                <div
                    className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(245,160,66,0.22), transparent 65%)",
                        filter: "blur(40px)",
                    }}
                    aria-hidden="true"
                />
                <div className="relative flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                        <span
                            className="text-xs uppercase tracking-widest font-semibold text-orange"
                            style={{ fontFamily: "var(--font-mono)" }}
                        >
                            {plan.name}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-orange text-white">
                            Le plus choisi
                        </span>
                    </div>

                    <p className="text-white/75 text-sm mb-6">{plan.tagline}</p>

                    {plan.baseMonthly !== null && (
                        <PriceDisplayDark base={plan.baseMonthly} perBuilding={plan.perBuilding!} annual={annual} fmt={fmt} />
                    )}

                    <Button variant="on-dark" className="w-full mt-7 mb-7" onClick={handleCta}>
                        {plan.cta.label}
                    </Button>

                    <ul className="flex flex-col gap-3">
                        {plan.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                                <span className="shrink-0 w-4 h-4 rounded-full bg-orange flex items-center justify-center mt-0.5">
                                    <Check size={10} className="text-white" strokeWidth={3.5} />
                                </span>
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        );
    }

    // Variante normale (claire)
    return (
        <article className="relative h-full bg-white rounded-card border border-border-default p-7 lg:p-8 flex flex-col">
            <div className="flex-1 flex flex-col">
                <span
                    className="text-xs uppercase tracking-widest font-semibold text-[var(--accent-dark)] mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    {plan.name}
                </span>
                <p className="text-ink-secondary text-sm mb-6">{plan.tagline}</p>

                {plan.baseMonthly !== null ? (
                    <PriceDisplayLight base={plan.baseMonthly} perBuilding={plan.perBuilding!} annual={annual} fmt={fmt} />
                ) : (
                    <div className="mb-7">
                        <div className="text-4xl font-bold leading-none mb-2" style={{ fontFamily: "var(--font-display)" }}>
                            Sur devis
                        </div>
                        <div className="text-sm text-ink-tertiary">À partir de 28€/bâtiment/mois</div>
                    </div>
                )}

                {plan.cta.action === "demo" ? (
                    <Button variant="ghost" className="w-full mt-7 mb-7" onClick={handleCta}>
                        {plan.cta.label}
                    </Button>
                ) : (
                    <Link href="/contact" className="w-full mt-7 mb-7">
                        <Button variant="ghost" className="w-full">
                            {plan.cta.label}
                        </Button>
                    </Link>
                )}

                <ul className="flex flex-col gap-3">
                    {plan.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-primary">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-[var(--accent-light)] flex items-center justify-center mt-0.5">
                                <Check size={10} className="text-[var(--accent-dark)]" strokeWidth={3.5} />
                            </span>
                            <span>{b}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

// ─── Sous-blocs prix ───

function PriceDisplayLight({
    base,
    perBuilding,
    annual,
    fmt,
}: {
    base: number;
    perBuilding: number;
    annual: boolean;
    fmt: Intl.NumberFormat;
}) {
    const baseDisplayed = annual ? Math.round((base * 10) / 12) : base;
    const perDisplayed = annual ? Math.round((perBuilding * 10) / 12) : perBuilding;

    return (
        <div className="mb-2">
            <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-4xl font-bold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                    {fmt.format(baseDisplayed)}
                </span>
                <span className="text-sm text-ink-tertiary">/ mois</span>
            </div>
            <div className="text-sm text-ink-secondary">
                + <span className="font-semibold tabular-nums">{fmt.format(perDisplayed)}</span> / bâtiment / mois
            </div>
            {annual && (
                <div className="text-xs text-success font-semibold mt-1.5">Engagement annuel · 2 mois offerts</div>
            )}
        </div>
    );
}

function PriceDisplayDark({
    base,
    perBuilding,
    annual,
    fmt,
}: {
    base: number;
    perBuilding: number;
    annual: boolean;
    fmt: Intl.NumberFormat;
}) {
    const baseDisplayed = annual ? Math.round((base * 10) / 12) : base;
    const perDisplayed = annual ? Math.round((perBuilding * 10) / 12) : perBuilding;

    return (
        <div className="mb-2">
            <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-4xl font-bold tabular-nums text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {fmt.format(baseDisplayed)}
                </span>
                <span className="text-sm text-white/65">/ mois</span>
            </div>
            <div className="text-sm text-white/75">
                + <span className="font-semibold tabular-nums">{fmt.format(perDisplayed)}</span> / bâtiment / mois
            </div>
            {annual && (
                <div className="text-xs text-orange font-semibold mt-1.5">Engagement annuel · 2 mois offerts</div>
            )}
        </div>
    );
}