"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";

const GUARANTEES = [
    "Sans carte bleue",
    "Démo personnalisée",
    "Migration incluse",
    "Garantie 30 jours",
];

export function FinalCTA() {
    const { openDemo } = useDemoModal();

    return (
        <section className="relative" style={{ background: "#0D4A4D" }}>
            {/* Courbe haute */}
            <svg
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="absolute -top-px left-0 w-full h-[60px] lg:h-[80px]"
                style={{ transform: "translateY(-99%)" }}
                aria-hidden="true"
            >
                <path d="M0 80 Q 720 0 1440 80 L 1440 80 L 0 80 Z" fill="#0D4A4D" />
            </svg>

            {/* Blobs déco */}
            <div
                className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(245,160,66,0.18), transparent 60%)",
                    filter: "blur(80px)",
                }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(5,137,133,0.4), transparent 60%)",
                    filter: "blur(90px)",
                }}
                aria-hidden="true"
            />

            <Container>
                <div className="relative py-24 lg:py-32 text-center max-w-3xl mx-auto">
                    <h2 className="text-white mb-6">
                        Prêt à voir Mettry sur votre parc ?
                    </h2>
                    <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        30 minutes avec un expert qui connaît votre métier. On part de vos
                        outils actuels et on vous montre ce que Mettry change concrètement.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                        <Button variant="on-dark" size="lg" onClick={openDemo}>
                            Demander une démo
                        </Button>
                        <Link href="/tarifs">
                            <Button
                                size="lg"
                                className="bg-transparent text-white border border-white/30 shadow-none hover:bg-white/10 hover:border-white/50 hover:-translate-y-px"
                            >
                                Voir les tarifs
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                        {GUARANTEES.map((g) => (
                            <span key={g} className="inline-flex items-center gap-1.5 text-sm text-white/80">
                                <Check size={14} className="text-orange" strokeWidth={3} />
                                {g}
                            </span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}