import { BrowserChrome } from "@/components/ui/BrowserChrome";
import { HeroDashboardTicker } from "./HeroDashboardTicker";
import { Bell, Bolt, Inbox, FileText, Calendar, FolderOpen, Building, LayoutDashboard, ClipboardList, Search, RefreshCw } from "lucide-react";

const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Building, label: "Bâtiments" },
    { icon: Bolt, label: "Énergie" },
    { icon: Inbox, label: "Tickets", count: 12 },
    { icon: ClipboardList, label: "Contrats" },
    { icon: Calendar, label: "Planning" },
    { icon: FolderOpen, label: "GED" },
];

const BAR_DATA_2025 = [62, 71, 58, 64, 52, 48, 41, 38, 44, 39, 45, 51];
const BAR_DATA_2024 = [74, 82, 68, 70, 60, 55, 48, 44, 50, 45, 52, 58];
const BAR_LABELS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];

const TICKETS = [
    { id: "TKT-0892", title: "Maintenance", subtitle: "Hôtel de Ville", color: "#F5A042" },
    { id: "TKT-0891", title: "Contrôle annuel", subtitle: "École J. Ferry", color: "#058985" },
    { id: "TKT-0890", title: "Remplacement", subtitle: "Médiathèque", color: "#07BC0C" },
];

export function HeroDashboard() {
    const maxBar = Math.max(...BAR_DATA_2025, ...BAR_DATA_2024);

    return (
        <div className="relative">
            <BrowserChrome url="app.mettry.io/dashboard" hero>
                <div className="flex bg-bg-off-white" style={{ minHeight: 560 }}>
                    {/* Sidebar */}
                    <aside className="w-[200px] shrink-0 border-r border-border-default bg-white py-4 px-3 flex flex-col gap-0.5">
                        <div className="px-2 mb-4 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "#0D4A4D" }}>
                                <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>M</span>
                            </div>
                            <span className="text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>Mettry</span>
                        </div>
                        {SIDEBAR_ITEMS.map((it) => {
                            const I = it.icon;
                            const itemCls = it.active
                                ? "bg-[var(--accent-light)] text-[var(--accent-dark)] font-semibold"
                                : "text-ink-secondary";
                            return (
                                <div key={it.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] transition-colors ${itemCls}`}>
                                    <I size={15} />
                                    <span className="flex-1">{it.label}</span>
                                    {it.count && (
                                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange text-white font-bold tabular-nums">
                                            {it.count}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </aside>

                    {/* Main */}
                    <div className="flex-1 flex flex-col min-w-0">
                        {/* Topbar */}
                        <div className="h-12 border-b border-border-default flex items-center px-4 gap-3 bg-white">
                            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold">PATRIMOINE</div>
                            <div className="flex items-center gap-1">
                                <span className="text-[13px] font-semibold">Vue d&apos;ensemble</span>
                                <button className="ml-2 px-2.5 py-1 rounded-md bg-[var(--accent-light)] text-[var(--accent-dark)] text-[12px] font-semibold">Hôtel de Ville</button>
                                <button className="px-2.5 py-1 rounded-md bg-bg-off-white text-ink-secondary text-[12px] font-medium">Médiathè...</button>
                            </div>
                            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md bg-bg-off-white max-w-[180px] ml-auto">
                                <Search size={12} className="text-ink-tertiary" />
                                <span className="text-xs text-ink-tertiary">Rechercher...</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 flex flex-col gap-3">
                            {/* KPIs */}
                            <div className="grid grid-cols-3 gap-2.5">
                                <KPICard label="Conso. annuelle" value="487" unit="MWh" delta="−12.4%" deltaColor="#058985" sparklineColor="#058985" up={false} />
                                <KPICard label="Coût énergie" value="€88k" unit="" delta="−€11k" deltaColor="#058985" sparklineColor="#058985" up={false} />
                                <KPICard label="Tickets ouverts" value="12" unit="" delta="+2 cette sem." deltaColor="#F5A042" sparklineColor="#F5A042" up={true} />
                            </div>

                            {/* Bar chart + Tickets récents */}
                            <div className="grid grid-cols-[1.6fr_1fr] gap-3 flex-1 min-h-0">
                                {/* Bar chart */}
                                <div className="bg-white border border-border-default rounded-lg p-3.5 flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold">Consommation kWh</div>
                                            <div className="text-sm font-bold mt-0.5" style={{ fontFamily: "var(--font-display)" }}>Hôtel de Ville · 2025 vs 2024</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px]">
                                            <span className="inline-flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-sm" style={{ background: "var(--accent)" }} />
                                                <span className="font-semibold">2025</span>
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-sm bg-border-default" />
                                                <span className="text-ink-tertiary">2024</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-end gap-1 min-h-[80px]">
                                        {BAR_DATA_2025.map((v, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                                <div className="w-full flex items-end gap-[2px] flex-1">
                                                    <div className="flex-1 rounded-t-[2px] bg-border-default" style={{ height: `${(BAR_DATA_2024[i] / maxBar) * 100}%` }} />
                                                    <div className="flex-1 rounded-t-[2px]" style={{ height: `${(v / maxBar) * 100}%`, background: "var(--accent)" }} />
                                                </div>
                                                <span className="text-[8px] text-ink-tertiary">{BAR_LABELS[i]}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tickets récents */}
                                <div className="bg-white border border-border-default rounded-lg p-3.5 flex flex-col">
                                    <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold mb-3">Tickets récents</div>
                                    <div className="flex flex-col gap-2.5 flex-1">
                                        {TICKETS.map((t) => (
                                            <div key={t.id} className="flex items-stretch gap-2">
                                                <div className="w-1 rounded-full shrink-0" style={{ background: t.color }} />
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-ink-tertiary font-mono">{t.id}</div>
                                                    <div className="text-[12px] font-semibold leading-tight">{t.title}</div>
                                                    <div className="text-[10px] text-ink-tertiary">{t.subtitle}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bandeau synchronisation */}
                            <div className="bg-white border border-border-default rounded-lg px-4 py-2.5 flex items-center gap-3">
                                <RefreshCw size={13} className="text-ink-tertiary" />
                                <span className="text-[12px] text-ink-secondary flex-1">
                                    Synchronisation <span className="font-bold text-ink-primary">Enedis</span> — 3 compteurs mis à jour
                                </span>
                                <span className="text-[10px] text-ink-tertiary font-mono">il y a 641s</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserChrome>

            {/* Floating card energie */}
            <div
                className="hidden sm:flex absolute -right-2 sm:right-4 top-[14%] bg-white rounded-card border border-border-default p-3 z-10 items-center gap-3"
                style={{ boxShadow: "var(--shadow-lg-mettry)", animation: "floatSlow 4s ease-in-out infinite" }}
            >
                <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: "rgba(7,188,12,0.12)" }}>
                    <Bolt size={18} style={{ color: "#07BC0C" }} />
                </div>
                <div>
                    <div className="text-[13px] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                        <span style={{ color: "#07BC0C" }}>−14%</span> conso. énergie
                    </div>
                    <div className="text-[10px] text-ink-tertiary mt-0.5">vs N-1 sur 12 sites</div>
                </div>
            </div>

            {/* Floating bandeau OPERAT bas */}
            <div
                className="hidden sm:flex absolute left-6 -bottom-4 bg-white rounded-card border border-border-default px-4 py-2.5 z-10 items-center gap-2.5"
                style={{ boxShadow: "var(--shadow-lg-mettry)", animation: "floatSlow 4s ease-in-out infinite", animationDelay: "1s" }}
            >
                <span className="w-2 h-2 rounded-full bg-success" style={{ animation: "pulseDot 2s ease-in-out infinite" }} />
                <span className="text-xs font-bold" style={{ color: "var(--accent-dark)" }}>OPERAT</span>
                <span className="text-xs text-ink-secondary">— 12 bâtiments prêts à déclarer</span>
            </div>
        </div>
    );
}

function KPICard({ label, value, unit, delta, deltaColor, sparklineColor, up }: { label: string; value: string; unit: string; delta: string; deltaColor: string; sparklineColor: string; up: boolean }) {
    // Mini sparkline path
    const sparkPath = up
        ? "M0,18 L8,16 L16,12 L24,10 L32,6 L40,4"
        : "M0,4 L8,8 L16,10 L24,14 L32,16 L40,18";

    return (
        <div className="bg-white border border-border-default rounded-lg p-3">
            <div className="text-[9px] uppercase tracking-wider text-ink-tertiary font-semibold leading-tight">{label}</div>
            <div className="mt-1.5 flex items-end justify-between gap-2">
                <div className="flex items-baseline gap-1">
                    <span className="text-[22px] font-bold tabular-nums leading-none" style={{ fontFamily: "var(--font-display)" }}>{value}</span>
                    {unit && <span className="text-[10px] text-ink-tertiary font-semibold">{unit}</span>}
                </div>
                <svg width="42" height="22" viewBox="0 0 42 22" className="overflow-visible">
                    <path d={sparkPath} fill="none" stroke={sparklineColor} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold" style={{ color: deltaColor }}>
                <span>{up ? "↑" : "↓"}</span>
                <span>{delta}</span>
            </div>
        </div>
    );
}