"use client";

import { useState } from "react";
import { ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { generateDemoDates } from "@/lib/demo-dates";
import type { DemoStep1 } from "@/lib/demo-schema";

interface Step3RecapProps {
    data: DemoStep1 & { date: string; time: string };
    onBack: () => void;
    onSubmit: () => void;
    submitting?: boolean;
}

export function Step3Recap({ data, onBack, onSubmit, submitting }: Step3RecapProps) {
    const [rgpd, setRgpd] = useState(false);

    // Retrouve le slot lisible
    const dateReadable =
        generateDemoDates(8).find((s) => s.key === data.date)?.readable ?? data.date;

    return (
        <div className="flex flex-col gap-5">
            <div className="rounded-card border border-border-default bg-bg-off-white p-5 flex flex-col gap-3">
                <RecapLine label="Nom" value={data.name} />
                <RecapLine label="Email" value={data.email} />
                <RecapLine label="Organisation" value={data.organization} />
                <RecapLine label="Rôle" value={data.role} />
                <RecapLine label="Parc" value={data.parcSize} />
                <div className="h-px bg-border-default" />
                <RecapLine label="Date" value={dateReadable} highlight />
                <RecapLine label="Créneau" value={`${data.time} (30 min)`} highlight />
            </div>

            <label className="flex items-start gap-3 cursor-pointer select-none">
                <span className="relative flex shrink-0 mt-0.5">
                    <input
                        type="checkbox"
                        checked={rgpd}
                        onChange={(e) => setRgpd(e.target.checked)}
                        className="peer sr-only"
                    />
                    <span
                        className={cn(
                            "w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center",
                            rgpd
                                ? "bg-[var(--accent)] border-[var(--accent)]"
                                : "bg-white border-border-default peer-hover:border-ink-tertiary"
                        )}
                    >
                        {rgpd && <Check size={13} className="text-white" strokeWidth={3} />}
                    </span>
                </span>
                <span className="text-sm text-ink-secondary leading-relaxed">
                    J&apos;accepte que Mettry traite mes données pour me recontacter, conformément à sa{" "}
                    <a href="/politique-confidentialite" className="text-[var(--accent-dark)] underline" target="_blank">
                        politique de confidentialité
                    </a>
                    .
                </span>
            </label>

            <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="sm" onClick={onBack} type="button" disabled={submitting}>
                    <ChevronLeft size={16} /> Retour
                </Button>
                <Button type="button" disabled={!rgpd || submitting} onClick={onSubmit}>
                    {submitting ? "Envoi…" : "Confirmer la démo"}
                </Button>
            </div>
        </div>
    );
}

function RecapLine({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
    return (
        <div className="flex justify-between items-baseline gap-4">
            <span className="text-xs uppercase tracking-wider text-ink-tertiary font-semibold">{label}</span>
            <span
                className={cn(
                    "text-sm font-medium text-right",
                    highlight ? "text-[var(--accent-dark)] font-semibold" : "text-ink-primary"
                )}
            >
                {value}
            </span>
        </div>
    );
}