import { BrowserChrome } from "@/components/ui/BrowserChrome";
import { Sparkline } from "@/components/ui/Sparkline";
import { CountUp } from "@/components/ui/CountUp";
import { HeroDashboardTicker } from "./HeroDashboardTicker";
import { Bell, Search, Building, Bolt, Inbox, FileText, Calendar, LayoutDashboard } from "lucide-react";

const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: "Vue d'ensemble", active: true },
    { icon: Building, label: "Bâtiments" },
    { icon: Bolt, label: "Énergie" },
    { icon: Inbox, label: "Tickets", count: 7 },
    { icon: FileText, label: "Documents" },
    { icon: Calendar, label: "Planning" },
];

const KPIS = [
    { label: "Bâtiments", value: 24, suffix: "", spark: [12, 14, 13, 15, 18, 22, 24] },
    { label: "Tickets ouverts", value: 7, suffix: "", spark: [12, 9, 11, 8, 10, 6, 7], tone: "warn" as const },
    { label: "Conso totale", value: 1.24, decimals: 2, suffix: " GWh", spark: [1.55, 1.48, 1.42, 1.39, 1.31, 1.28, 1.24], tone: "success" as const },
];

const BAR_DATA = [62, 71, 58, 64, 52, 48, 41, 38, 44, 39, 35, 31];
const BAR_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export function HeroDashboard() {
    const maxBar = Math.max(...BAR_DATA);

    return (
        <div className="relative">
            <BrowserChrome url="app.mettry.io/dashboard" hero>
                <div className="flex h-[520px] bg-bg-off-white">
                    {/* Sidebar */}
                    <aside className="w-[200px] shrink-0 border-r border-border-default bg-white py-4 px-3 flex flex-col gap-1">
                        <div className="px-2 mb-3 flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "#0D4A4D" }}>
                                <span className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-display)" }}>M</span>
                            </div>
                            <span className="text-sm font-semibold">Mairie de Villeneuve</span>
                        </div>
                        {SIDEBAR_ITEMS.map((it) => {
                            const I = it.icon;
                            return (
                                <div
                                    key={it.label}
                                    className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors ${it.active
                                        ? "bg-[var(--accent-light)] text-[var(--accent-dark)] font-semibold"
                                        : "text-ink-secondary"
                                        }`}
                                >
                                    <I size={15} />
                                    <span className="flex-1">{it.label}</span>
                                    {it.count && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange text-white font-bold">
                                            {it.count}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </aside>

                    {/* Main */}
                    <div className="flex-1 overflow-hidden flex flex-col">
                        {/* Topbar */}
                        <div className="h-12 border-b border-border-default flex items-center px-5 gap-4 bg-white">
                            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md bg-bg-off-white max-w-xs">
                                <Search size={13} className="text-ink-tertiary" />
                                <span className="text-xs text-ink-tertiary">Rechercher…</span>
                            </div>
                            <Bell size={16} className="text-ink-secondary" />
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-deeper)] flex items-center justify-center">
                                <span className="text-[11px] font-bold text-white">MD</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-5 overflow-hidden">
                            <div className="flex items-baseline justify-between mb-3">
                                <h3 className="text-[15px] font-semibold">Vue d&apos;ensemble</h3>
                                <HeroDashboardTicker />
                            </div>

                            {/* KPIs */}
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {KPIS.map((kpi) => (
                                    <div
                                        key={kpi.label}
                                        className="bg-white border border-border-default rounded-lg p-3"
                                    >
                                        <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold mb-1.5">
                                            {kpi.label}
                                        </div>
                                        <div className="flex items-end justify-between gap-2">
                                            <div
                                                className="text-2xl font-bold tabular-nums leading-none"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                <CountUp to={kpi.value} decimals={kpi.decimals ?? 0} suffix={kpi.suffix} />
                                            </div>
                                            <Sparkline
                                                points={kpi.spark}
                                                width={56}
                                                height={22}
                                                stroke={
                                                    kpi.tone === "warn"
                                                        ? "#F5A042"
                                                        : kpi.tone === "success"
                                                            ? "#07BC0C"
                                                            : "var(--accent)"
                                                }
                                                fill={
                                                    kpi.tone === "warn"
                                                        ? "#F5A042"
                                                        : kpi.tone === "success"
                                                            ? "#07BC0C"
                                                            : "var(--accent)"
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bar chart */}
                            <div className="bg-white border border-border-default rounded-lg p-4">
                                <div className="flex items-baseline justify-between mb-3">
                                    <div>
                                        <div className="text-xs text-ink-tertiary uppercase tracking-wider font-semibold">
                                            Consommation énergétique
                                        </div>
                                        <div className="text-sm font-semibold mt-0.5">12 derniers mois · tous sites</div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ background: "#07BC0C", animation: "pulseDot 2s ease-in-out infinite" }}
                                        />
                                        <span className="text-success font-semibold">−18%</span>
                                        <span className="text-ink-tertiary">vs N-1</span>
                                    </div>
                                </div>

                                <div className="h-[130px] flex items-end gap-1.5">
                                    {BAR_DATA.map((v, i) => {
                                        const h = (v / maxBar) * 100;
                                        return (
                                            <div
                                                key={i}
                                                className="flex-1 flex flex-col items-center justify-end gap-1.5"
                                            >
                                                <div
                                                    className="w-full rounded-t-[3px] origin-bottom"
                                                    style={{
                                                        height: `${h}%`,
                                                        background:
                                                            i >= 8
                                                                ? "linear-gradient(to top, var(--accent), var(--accent-dark))"
                                                                : "linear-gradient(to top, var(--accent-light), #b3dcd9)",
                                                        animation: `barGrow 0.7s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.04}s backwards`,
                                                    }}
                                                />
                                                <span className="text-[9px] text-ink-tertiary">{BAR_LABELS[i]}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserChrome>

            {/* Floating cards */}
            <FloatingCardEnergy />
            <FloatingCardOperat />
        </div>
    );
}

function FloatingCardEnergy() {
    return (
        <div
            className="hidden sm:flex absolute -right-2 sm:right-2 top-[8%] bg-white rounded-card border border-border-default p-3.5 z-10 items-center gap-3"
            style={{ boxShadow: "var(--shadow-lg-mettry)", animation: "floatSlow 4s ease-in-out infinite" }}
        >
            <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "rgba(7,188,12,0.12)" }}>
                <Bolt size={18} style={{ color: "#07BC0C" }} />
            </div>
            <div>
                <div className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    <span style={{ color: "#07BC0C" }}>−14%</span> conso. énergie
                </div>
                <div className="text-[11px] text-ink-tertiary mt-0.5">vs N-1 sur 12 sites</div>
            </div>
        </div>
    );
}

function FloatingCardOperat() {
    return (
        <div
            className="hidden sm:flex absolute -left-4 sm:left-6 -bottom-4 bg-white rounded-card border border-border-default px-4 py-2.5 z-10 items-center gap-2.5"
            style={{ boxShadow: "var(--shadow-lg-mettry)", animation: "floatSlow 4s ease-in-out infinite", animationDelay: "1s" }}
        >
            <span className="w-2 h-2 rounded-full bg-success" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--accent-dark)" }}>OPERAT</span>
            <span className="text-xs text-ink-secondary">— 12 bâtiments prêts à déclarer</span>
        </div>
    );
}