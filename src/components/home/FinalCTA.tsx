"use client";

import { Check, Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";

const GUARANTEES = ["Sans carte bleue", "Démo personnalisée", "Migration incluse", "Garantie 30 jours"];

const MAIL_LINK_STYLE: React.CSSProperties = {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.25)",
};

const CURVE_STYLE: React.CSSProperties = { top: 0, transform: "translateY(-99%)" };

const BLOB_TOP_RIGHT: React.CSSProperties = {
    background: "radial-gradient(circle, rgba(245,160,66,0.12), transparent 60%)",
    filter: "blur(80px)",
};

const BLOB_BOTTOM_LEFT: React.CSSProperties = {
    background: "radial-gradient(circle, rgba(5,137,133,0.3), transparent 60%)",
    filter: "blur(90px)",
};

export function FinalCTA() {
    const { openDemo } = useDemoModal();

    return (
        <section className="relative" style={{ background: "#0D4A4D" }}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute left-0 right-0 w-full h-[60px] lg:h-[80px]" style={CURVE_STYLE} aria-hidden="true">
                <path d="M0 80 Q 720 0 1440 80 L 1440 80 L 0 80 Z" fill="#0D4A4D" />
            </svg>

            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={BLOB_TOP_RIGHT} aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={BLOB_BOTTOM_LEFT} aria-hidden="true" />

            <Container>
                <div className="relative py-20 lg:py-28 text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-white/90 bg-white/10 border border-white/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                        Prêt à passer à l&apos;action
                    </span>

                    <h2 className="text-white mt-7 mb-7" style={{ fontSize: "clamp(36px, 4.4vw, 56px)" }}>
                        Prêt à simplifier la gestion de votre patrimoine ?
                    </h2>

                    <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                        Réservez votre démo gratuite — 30 minutes, sans engagement. Un de nos experts FM vous guide à travers la plateforme avec votre cas d&apos;usage.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                        <Button variant="on-dark" size="lg" onClick={openDemo}>
                            Réserver ma démo <ArrowRight size={18} />
                        </Button>
                        <a href="mailto:contact@mettry.io" className="inline-flex items-center justify-center gap-2 h-14 px-7 text-base font-semibold rounded-[var(--radius-btn)] text-white transition-all hover:-translate-y-px" style={MAIL_LINK_STYLE}>
                            <Mail size={17} />
                            contact@mettry.io
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
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