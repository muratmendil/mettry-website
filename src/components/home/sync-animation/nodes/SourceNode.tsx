"use client";

interface SourceNodeProps {
    /** Lettre dans la pastille (E ou G) */
    letter: string;
    /** Nom du fournisseur (Enedis, GRDF) */
    name: string;
    /** Libellé énergie (Électricité, Gaz naturel) */
    energy: string;
    /** Valeur MWh affichée (déjà calculée par le parent en fonction de p) */
    value: number;
    /** Compteur affiché à droite (ex: "23 PDL", "8 PCE") */
    meterLabel: string;
    /** Couleur de la pastille et des accents */
    color: string;
    /** Opacité de la carte */
    opacity: number;
    /** Translation pour l'entrée (px) */
    translateY: number;
}

export function SourceNode({ letter, name, energy, value, meterLabel, color, opacity, translateY }: SourceNodeProps) {
    return (
        <div
            style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                willChange: "transform, opacity",
                width: 240,
            }}
            className="bg-white rounded-2xl px-5 py-4"
        >
            <div
                style={{
                    boxShadow: "0 20px 60px -20px rgba(13,74,77,0.18), 0 1px 3px rgba(13,20,22,0.05)",
                }}
            />
            <div className="flex items-center gap-3 mb-3">
                {/* Pastille lettre */}
                <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color }}
                >
                    <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                        {letter}
                    </span>
                </div>
                <div>
                    <div className="font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        {name}
                    </div>
                    <div className="text-xs text-ink-tertiary leading-tight mt-0.5">{energy}</div>
                </div>
            </div>
            <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-1">
                    <span
                        className="text-2xl font-bold tabular-nums leading-none"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        {value}
                    </span>
                    <span className="text-[11px] text-ink-tertiary font-semibold">MWh</span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold" style={{ color }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    {meterLabel}
                </div>
            </div>
        </div>
    );
}