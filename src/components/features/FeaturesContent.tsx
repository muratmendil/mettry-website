"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { MODULES } from "@/lib/modules";
import { ModuleMock } from "./ModuleMock";
import { IntegrationsSection } from "./IntegrationsSection";
import { cn } from "@/lib/cn";

interface Props {
    initialModule?: string;
}

export function FeaturesContent({ initialModule }: Props) {
    const initialIndex = Math.max(
        0,
        MODULES.findIndex((m) => m.id === initialModule)
    );
    const [active, setActive] = useState(initialIndex);
    const { openDemo } = useDemoModal();
    const router = useRouter();
    const searchParams = useSearchParams();
    const tabsRef = useRef<HTMLDivElement | null>(null);
    const moduleRef = useRef<HTMLElement | null>(null);

    // Sync URL ?module= sans naviguer
    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("module", MODULES[active].id);
        router.replace(`/fonctionnalites?${params.toString()}`, { scroll: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    const handleSelect = (idx: number) => {
        setActive(idx);
        if (moduleRef.current) {
            const offset = 72 + 64;
            const top =
                moduleRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const m = MODULES[active];
    const Icon = m.icon;

    return (
        <>
            {/* Hero */}
            <Section>
                <Container>
                    <div className="max-w-3xl">
                        <Eyebrow>Fonctionnalités</Eyebrow>
                        <RevealOnScroll>
                            <h1 className="mt-6">
                                Tout ce qu&apos;il faut pour piloter votre patrimoine,{" "}
                                <span className="text-ink-tertiary">rien de superflu.</span>
                            </h1>
                        </RevealOnScroll>
                        <RevealOnScroll delay={0.1}>
                            <p className="mt-6 text-lg lg:text-xl max-w-[56ch]">
                                Sept modules pensés pour s&apos;assembler. Activez ce dont vous
                                avez besoin, étendez progressivement, payez à l&apos;usage réel.
                            </p>
                        </RevealOnScroll>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Button size="lg" onClick={openDemo}>
                                Demander une démo <ArrowRight size={18} />
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                onClick={() => {
                                    if (tabsRef.current) {
                                        const top =
                                            tabsRef.current.getBoundingClientRect().top +
                                            window.scrollY -
                                            80;
                                        window.scrollTo({ top, behavior: "smooth" });
                                    }
                                }}
                            >
                                Voir les modules
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Tabs sticky */}
            <div
                ref={tabsRef}
                className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-[14px] backdrop-saturate-[160%] border-y border-border-default"
            >
                <Container>
                    <div
                        className="flex gap-1 overflow-x-auto no-scrollbar py-3"
                        role="tablist"
                    >
                        {MODULES.map((mod, i) => {
                            const TabIcon = mod.icon;
                            return (
                                <button
                                    key={mod.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active === i}
                                    onClick={() => handleSelect(i)}
                                    className={cn(
                                        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0",
                                        active === i
                                            ? "bg-ink-primary text-white"
                                            : "bg-bg-off-white text-ink-secondary hover:bg-border-default hover:text-ink-primary"
                                    )}
                                >
                                    <TabIcon size={14} />
                                    {mod.label}
                                </button>
                            );
                        })}
                    </div>
                </Container>
            </div>

            {/* Module actif */}
            <section
                ref={moduleRef}
                className="relative"
                style={{
                    paddingTop: "var(--section-y)",
                    paddingBottom: "var(--section-y)",
                }}
            >
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start mb-14">
                        {/* Colonne gauche : texte */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-14 h-14 rounded-card flex items-center justify-center"
                                    style={{ background: `${m.color}15` }}
                                >
                                    <Icon size={26} style={{ color: m.color }} />
                                </div>
                                <span
                                    className="text-xs uppercase tracking-widest font-semibold"
                                    style={{ fontFamily: "var(--font-mono)", color: m.color }}
                                >
                                    Module · {m.label}
                                </span>
                            </div>
                            <h2 className="mb-5">{m.title}</h2>
                            <p className="text-lg mb-7 max-w-[56ch]">{m.lead}</p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {m.kpis.map((k) => (
                                    <div
                                        key={k.label}
                                        className="border-l-2 pl-3"
                                        style={{ borderColor: m.color }}
                                    >
                                        <div
                                            className="text-2xl font-bold leading-none"
                                            style={{
                                                fontFamily: "var(--font-display)",
                                                color: m.color,
                                            }}
                                        >
                                            {k.value}
                                        </div>
                                        <div className="text-[12px] text-ink-tertiary mt-1.5 leading-tight">
                                            {k.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button onClick={openDemo}>Voir ce module en démo</Button>
                        </div>

                        {/* Colonne droite : mock */}
                        <div>
                            <ModuleMock module={m} />
                        </div>
                    </div>

                    {/* Grille de features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                        {m.features.map((f, i) => (
                            <RevealOnScroll key={f.title} delay={(i % 3) * 0.08}>
                                <div className="h-full bg-white border border-border-default rounded-card p-6">
                                    <div
                                        className="w-8 h-8 rounded-md flex items-center justify-center mb-4"
                                        style={{ background: `${m.color}15` }}
                                    >
                                        <Check
                                            size={16}
                                            style={{ color: m.color }}
                                            strokeWidth={3}
                                        />
                                    </div>
                                    <h3 className="text-lg mb-2">{f.title}</h3>
                                    <p className="text-[14px] leading-relaxed">{f.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </Container>
            </section>

            <IntegrationsSection />
            <FinalCTA />
        </>
    );
}