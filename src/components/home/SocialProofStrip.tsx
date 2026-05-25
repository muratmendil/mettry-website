import { Container } from "@/components/ui/Container";

const STATS = [
    { value: "200k+", label: "m² pilotés" },
    { value: "120+", label: "bâtiments" },
    { value: "−18%", label: "conso. moyenne" },
];

const CLIENTS = [
    { initial: "M", name: "Mairie de Villeneuve", color: "#058985" },
    { initial: "T", name: "Tertia Group", color: "#0D4A4D" },
    { initial: "C", name: "CHU Lyon-Sud", color: "#F5A042" },
    { initial: "S", name: "SCI Rhône Patrimoine", color: "#197378" },
    { initial: "É", name: "Établissement Loire", color: "#3498DB" },
    { initial: "P", name: "Polyclinique Beaujolais", color: "#7A5AE0" },
    { initial: "I", name: "IUT Lyon-Croix-Rousse", color: "#058985" },
    { initial: "R", name: "Résidences Saône", color: "#0D4A4D" },
];

export function SocialProofStrip() {
    // On duplique la liste pour le marquee infini
    const marqueeItems = [...CLIENTS, ...CLIENTS];

    return (
        <section className="bg-bg-off-white border-y border-border-default py-12 lg:py-14 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
                    <p className="text-sm font-medium text-ink-secondary max-w-md">
                        Mettry est utilisé par les collectivités, foncières et établissements de santé qui pilotent leur patrimoine au quotidien.
                    </p>
                    <div className="flex gap-8 lg:gap-12">
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <div
                                    className="text-3xl font-bold leading-none text-[var(--accent-dark)]"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-xs text-ink-tertiary uppercase tracking-wider font-semibold mt-1.5">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Marquee — plein-largeur, hors Container */}
            <div className="relative overflow-hidden">
                <div
                    className="flex gap-14 w-max"
                    style={{ animation: "marquee 36s linear infinite" }}
                >
                    {marqueeItems.map((c, i) => (
                        <div key={i} className="flex items-center gap-3 shrink-0">
                            <div
                                className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-sm"
                                style={{ background: c.color, fontFamily: "var(--font-display)" }}
                                aria-hidden="true"
                            >
                                {c.initial}
                            </div>
                            <span className="text-sm font-medium text-ink-secondary whitespace-nowrap">
                                {c.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}