import { BrowserChrome } from "@/components/ui/BrowserChrome";
import { Check, Download, Filter, ChevronDown } from "lucide-react";

export function FeatureMockDashboard() {
    return (
        <BrowserChrome url="app.mettry.io/dashboard">
            <div className="h-[360px] bg-bg-off-white p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xs uppercase tracking-wider text-ink-tertiary font-semibold">
                            Dashboard configurable
                        </div>
                        <div className="text-base font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
                            Janvier 2026 · Tous sites
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white border border-border-default">
                            <Filter size={12} /> Filtres
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-white border border-border-default">
                            <Download size={12} /> Export
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2.5 flex-1">
                    {["Conso", "Tickets", "Coût", "Sites"].map((label, i) => (
                        <div key={label} className="bg-white rounded-md p-3 border border-border-default flex flex-col justify-between">
                            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold">
                                {label}
                            </div>
                            <div className="text-xl font-bold tabular-nums" style={{ fontFamily: "var(--font-display)" }}>
                                {["1.24", "7", "€42k", "24"][i]}
                            </div>
                            <div
                                className="h-1 rounded-full"
                                style={{ background: "linear-gradient(to right, var(--accent), var(--accent-light))" }}
                            />
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-md p-4 border border-border-default flex-1 flex items-center">
                    <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="grad-d" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 0 40 Q 50 30 80 35 T 160 25 T 240 30 T 320 18 T 400 22 L 400 60 L 0 60 Z"
                            fill="url(#grad-d)"
                        />
                        <path
                            d="M 0 40 Q 50 30 80 35 T 160 25 T 240 30 T 320 18 T 400 22"
                            fill="none"
                            stroke="var(--accent)"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>
        </BrowserChrome>
    );
}

export function FeatureMockIntegration() {
    return (
        <BrowserChrome url="app.mettry.io/energie">
            <div className="h-[360px] bg-bg-off-white p-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
                    <span className="text-xs font-semibold text-success">Synchronisation active</span>
                    <span className="text-xs text-ink-tertiary ml-auto">dernière mise à jour : 14:23</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {[
                        { name: "GRDF", desc: "12 PCE synchronisés", color: "#1F8A5B" },
                        { name: "Enedis", desc: "8 PDL synchronisés", color: "#3498DB" },
                    ].map((p) => (
                        <div key={p.name} className="bg-white rounded-md p-4 border border-border-default flex items-center gap-3">
                            <div
                                className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-base"
                                style={{ background: p.color, fontFamily: "var(--font-display)" }}
                            >
                                {p.name[0]}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold">{p.name}</div>
                                <div className="text-xs text-ink-tertiary">{p.desc}</div>
                            </div>
                            <Check size={16} className="text-success" />
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-md p-4 border border-border-default flex-1">
                    <div className="text-xs uppercase tracking-wider text-ink-tertiary font-semibold mb-3">
                        Index relevés automatiquement · derniers 30 jours
                    </div>
                    <div className="h-[170px] flex items-end gap-1">
                        {Array.from({ length: 30 }).map((_, i) => {
                            const h = 30 + Math.sin(i * 0.5) * 20 + Math.random() * 30;
                            return (
                                <div
                                    key={i}
                                    className="flex-1 rounded-t-sm"
                                    style={{
                                        height: `${h}%`,
                                        background: `linear-gradient(to top, var(--accent), var(--accent-light))`,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </BrowserChrome>
    );
}

export function FeatureMockDecret() {
    return (
        <BrowserChrome url="app.mettry.io/decret-tertiaire">
            <div className="h-[360px] bg-bg-off-white p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xs uppercase tracking-wider text-ink-tertiary font-semibold">
                            Décret Tertiaire — OPERAT
                        </div>
                        <div className="text-base font-bold mt-1" style={{ fontFamily: "var(--font-display)" }}>
                            Déclaration 2025
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-success text-white">
                        <Check size={12} strokeWidth={3} /> Prêt à exporter
                    </span>
                </div>

                <div className="bg-white rounded-md border border-border-default flex-1 overflow-hidden">
                    <div className="grid grid-cols-12 px-3 py-2 text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold border-b border-border-default bg-bg-off-white">
                        <div className="col-span-5">Site</div>
                        <div className="col-span-3">Surface</div>
                        <div className="col-span-3">Conso DJU</div>
                        <div className="col-span-1 text-right">État</div>
                    </div>
                    {[
                        { name: "Mairie Centrale", surface: "2 450 m²", conso: "187 kWh/m²", ok: true },
                        { name: "Médiathèque", surface: "1 100 m²", conso: "142 kWh/m²", ok: true },
                        { name: "Gymnase Nord", surface: "1 850 m²", conso: "234 kWh/m²", ok: true },
                        { name: "École Pasteur", surface: "3 200 m²", conso: "168 kWh/m²", ok: true },
                        { name: "Centre social", surface: "780 m²", conso: "—", ok: false },
                    ].map((row) => (
                        <div key={row.name} className="grid grid-cols-12 px-3 py-2.5 text-sm border-b border-border-default last:border-0 items-center">
                            <div className="col-span-5 font-medium">{row.name}</div>
                            <div className="col-span-3 text-ink-tertiary tabular-nums">{row.surface}</div>
                            <div className="col-span-3 tabular-nums font-semibold">{row.conso}</div>
                            <div className="col-span-1 flex justify-end">
                                {row.ok ? (
                                    <Check size={14} className="text-success" strokeWidth={2.5} />
                                ) : (
                                    <ChevronDown size={14} className="text-ink-tertiary" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between bg-[var(--accent-xlight)] rounded-md px-4 py-2.5 text-sm">
                    <span className="text-ink-secondary">
                        <span className="font-semibold text-[var(--accent-dark)]">4 sites prêts</span>, 1 en attente d&apos;index
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-dark)]">
                        <Download size={13} /> Export OPERAT
                    </span>
                </div>
            </div>
        </BrowserChrome>
    );
}