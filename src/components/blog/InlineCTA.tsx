"use client";

import { ArrowRight } from "lucide-react";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";

interface InlineCTAProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
}

export function InlineCTA({
    eyebrow = "Mettry — pour aller plus loin",
    title = "Voyez Mettry sur votre patrimoine",
    description = "30 minutes avec un expert FM, on part de vos sites et on vous montre les bonnes pratiques en live.",
    buttonLabel = "Réserver une démo",
}: InlineCTAProps) {
    const { openDemo } = useDemoModal();

    return (
        <div
            className="not-prose my-11 relative overflow-hidden rounded-card p-7"
            style={{
                background: "linear-gradient(135deg, var(--color-teal-deeper), #0A3A3D)",
            }}
        >
            <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(245,160,66,0.25), transparent 65%)",
                    filter: "blur(35px)",
                }}
                aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-5 items-center">
                <div>
                    <div
                        className="text-[11px] uppercase tracking-[0.14em] font-bold text-orange mb-3"
                        style={{ fontFamily: "var(--font-mono)" }}
                    >
                        {eyebrow}
                    </div>
                    <h3
                        className="text-white mb-2"
                        style={{ fontFamily: "var(--font-display)", fontSize: "22px", letterSpacing: "-0.018em" }}
                    >
                        {title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed max-w-md">{description}</p>
                </div>
                <button
                    type="button"
                    onClick={openDemo}
                    className="inline-flex items-center justify-center gap-2 h-12 px-5 bg-white text-ink-primary text-sm font-semibold rounded-[var(--radius-btn)] hover:-translate-y-px transition-transform whitespace-nowrap shrink-0"
                    style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 24px -6px rgba(0,0,0,0.35)" }}
                >
                    {buttonLabel}
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}