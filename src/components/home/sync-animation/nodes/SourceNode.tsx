"use client";

interface SourceNodeProps {
    letter: string;
    name: string;
    energy: string;
    value: number;
    meterLabel: string;
    color: string;
    opacity: number;
    translateY: number;
    compact?: boolean;
}

export function SourceNode({
    letter,
    name,
    energy,
    value,
    meterLabel,
    color,
    opacity,
    translateY,
    compact = false,
}: SourceNodeProps) {
    const width = compact ? 140 : 240;
    const padding = compact ? "10px 12px" : "16px 20px";
    const pastilleSize = compact ? 28 : 36;
    const pastilleFontSize = compact ? 14 : 18;
    const nameFontSize = compact ? 12 : 16;
    const energyFontSize = compact ? 10 : 12;
    const valueFontSize = compact ? 18 : 24;
    const meterFontSize = compact ? 9 : 11;
    const gap = compact ? 8 : 12;
    const mb = compact ? 6 : 12;

    return (
        <div
            style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                willChange: "transform, opacity",
                width,
                padding,
                boxShadow: "0 20px 60px -20px rgba(13,74,77,0.18), 0 1px 3px rgba(13,20,22,0.05)",
            }}
            className="bg-white rounded-2xl"
        >
            <div className="flex items-center" style={{ gap, marginBottom: mb }}>
                <div
                    className="rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color, width: pastilleSize, height: pastilleSize }}
                >
                    <span className="text-white font-bold" style={{ fontFamily: "var(--font-display)", fontSize: pastilleFontSize }}>
                        {letter}
                    </span>
                </div>
                <div>
                    <div className="font-bold leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: nameFontSize }}>
                        {name}
                    </div>
                    <div className="text-ink-tertiary leading-tight mt-0.5" style={{ fontSize: energyFontSize }}>
                        {energy}
                    </div>
                </div>
            </div>
            <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-1">
                    <span
                        className="font-bold tabular-nums leading-none"
                        style={{ fontFamily: "var(--font-display)", fontSize: valueFontSize }}
                    >
                        {value}
                    </span>
                    <span className="text-ink-tertiary font-semibold" style={{ fontSize: meterFontSize }}>
                        MWh
                    </span>
                </div>
                <div className="inline-flex items-center gap-1 font-semibold" style={{ color, fontSize: meterFontSize }}>
                    <span className="w-1 h-1 rounded-full" style={{ background: color }} />
                    {meterLabel}
                </div>
            </div>
        </div>
    );
}