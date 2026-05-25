"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { generateDemoDates, DEMO_TIMESLOTS } from "@/lib/demo-dates";

interface Step2CalendarProps {
    initialDate?: string;
    initialTime?: string;
    onBack: () => void;
    onNext: (data: { date: string; time: string }) => void;
}

export function Step2Calendar({ initialDate, initialTime, onBack, onNext }: Step2CalendarProps) {
    const [dates] = useState(() => generateDemoDates(8));
    const [selectedDate, setSelectedDate] = useState<string | undefined>(initialDate);
    const [selectedTime, setSelectedTime] = useState<string | undefined>(initialTime);

    const canSubmit = !!selectedDate && !!selectedTime;

    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className="text-xs font-semibold text-ink-secondary uppercase tracking-wider mb-3">
                    Choisissez une date
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {dates.map((d) => {
                        const active = selectedDate === d.key;
                        return (
                            <button
                                key={d.key}
                                type="button"
                                onClick={() => setSelectedDate(d.key)}
                                className={cn(
                                    "flex flex-col items-center py-3 rounded-[var(--radius-btn)] border transition-all",
                                    active
                                        ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_4px_12px_-2px_rgba(5,137,133,0.4)]"
                                        : "bg-white border-border-default text-ink-primary hover:border-[var(--accent)] hover:bg-[var(--accent-xlight)]"
                                )}
                                aria-pressed={active}
                            >
                                <span className={cn("text-[11px] uppercase tracking-wider", active ? "text-white/85" : "text-ink-tertiary")}>
                                    {d.dayShort}
                                </span>
                                <span className="text-xl font-bold mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                                    {d.dayNum}
                                </span>
                                <span className={cn("text-[11px]", active ? "text-white/85" : "text-ink-tertiary")}>
                                    {d.monthShort}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div>
                <p className="text-xs font-semibold text-ink-secondary uppercase tracking-wider mb-3">
                    Choisissez un créneau (durée : 30 min)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {DEMO_TIMESLOTS.map((t) => {
                        const active = selectedTime === t;
                        return (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTime(t)}
                                disabled={!selectedDate}
                                className={cn(
                                    "h-11 rounded-[var(--radius-btn)] border text-sm font-medium transition-all",
                                    "disabled:opacity-40 disabled:cursor-not-allowed",
                                    active
                                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                                        : "bg-white border-border-default text-ink-primary hover:border-[var(--accent)] hover:bg-[var(--accent-xlight)]"
                                )}
                                aria-pressed={active}
                            >
                                {t}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" size="sm" onClick={onBack} type="button">
                    <ChevronLeft size={16} /> Retour
                </Button>
                <Button
                    type="button"
                    disabled={!canSubmit}
                    onClick={() => canSubmit && onNext({ date: selectedDate!, time: selectedTime! })}
                >
                    Étape suivante
                </Button>
            </div>
        </div>
    );
}