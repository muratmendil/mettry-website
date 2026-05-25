import { Filter, Download, Plus, Check, MoreHorizontal } from "lucide-react";
import { BrowserChrome } from "@/components/ui/BrowserChrome";
import type { ModuleSpec } from "@/lib/modules";

interface ModuleMockProps {
    module: ModuleSpec;
}

type RowsPreset = {
    headers: [string, string, string];
    data: Array<{
        initial: string;
        col1: string;
        col2: string;
        col3: string;
        color: string;
        ok: boolean;
    }>;
};

const ROWS_PRESETS: Record<string, RowsPreset> = {
    gmao: {
        headers: ["Ticket", "Bâtiment", "Catégorie"],
        data: [
            { initial: "#", col1: "Climatisation HS — Bureau 3.12", col2: "Mairie Centrale", col3: "Climatisation", color: "#058985", ok: true },
            { initial: "#", col1: "Fuite WC — RDC aile Est", col2: "Médiathèque", col3: "Plomberie", color: "#3498DB", ok: true },
            { initial: "#", col1: "Porte automatique bloquée", col2: "Gymnase Nord", col3: "Menuiserie", color: "#F5A042", ok: false },
            { initial: "#", col1: "Éclairage parking sud", col2: "École Pasteur", col3: "Électricité", color: "#7A5AE0", ok: true },
        ],
    },
    energie: {
        headers: ["Site", "Conso (kWh)", "Évolution"],
        data: [
            { initial: "M", col1: "Mairie Centrale", col2: "187 240", col3: "−12% vs N-1", color: "#058985", ok: true },
            { initial: "M", col1: "Médiathèque", col2: "98 120", col3: "−8% vs N-1", color: "#0D4A4D", ok: true },
            { initial: "G", col1: "Gymnase Nord", col2: "245 680", col3: "+3% vs N-1", color: "#F5A042", ok: false },
            { initial: "É", col1: "École Pasteur", col2: "172 350", col3: "−22% vs N-1", color: "#7A5AE0", ok: true },
        ],
    },
    decret: {
        headers: ["Site", "Surface", "Trajectoire 2030"],
        data: [
            { initial: "M", col1: "Mairie Centrale", col2: "2 450 m²", col3: "Conforme", color: "#058985", ok: true },
            { initial: "M", col1: "Médiathèque", col2: "1 100 m²", col3: "Conforme", color: "#0D4A4D", ok: true },
            { initial: "G", col1: "Gymnase Nord", col2: "1 850 m²", col3: "À surveiller", color: "#F5A042", ok: false },
            { initial: "É", col1: "École Pasteur", col2: "3 200 m²", col3: "Conforme", color: "#7A5AE0", ok: true },
        ],
    },
    ticketing: {
        headers: ["Signalement", "Lieu", "Statut"],
        data: [
            { initial: "QR", col1: "Salle 3.12 trop chaude", col2: "Mairie · ét. 3", col3: "Pris en charge", color: "#3498DB", ok: true },
            { initial: "QR", col1: "Lampe HS toilettes RDC", col2: "Médiathèque", col3: "Résolu", color: "#058985", ok: true },
            { initial: "@", col1: "Bruit ventilation continue", col2: "École · classe 4", col3: "Nouveau", color: "#F5A042", ok: false },
            { initial: "QR", col1: "Porte mal fermée parking", col2: "Gymnase", col3: "Planifié", color: "#7A5AE0", ok: true },
        ],
    },
    ged: {
        headers: ["Document", "Bâtiment", "Type"],
        data: [
            { initial: "P", col1: "Plan rez-de-chaussée v3.dwg", col2: "Mairie Centrale", col3: "Plan technique", color: "#7A5AE0", ok: true },
            { initial: "C", col1: "Contrat chauffage 2024-2027.pdf", col2: "Toutes entités", col3: "Contrat", color: "#058985", ok: true },
            { initial: "A", col1: "Attestation conformité gaz 2025", col2: "Gymnase Nord", col3: "Attestation", color: "#F5A042", ok: false },
            { initial: "D", col1: "DOE Bâtiment Pasteur.zip", col2: "École Pasteur", col3: "DOE", color: "#3498DB", ok: true },
        ],
    },
    contrats: {
        headers: ["Prestataire", "Échéance", "Montant"],
        data: [
            { initial: "É", col1: "Énergie Plus — Maintenance CVC", col2: "31/12/2027", col3: "Actif", color: "#058985", ok: true },
            { initial: "S", col1: "Sécuri-Pro — Gardiennage nocturne", col2: "15/06/2026", col3: "Renouvellement", color: "#F5A042", ok: false },
            { initial: "N", col1: "Net-Eau — Maintenance plomberie", col2: "28/02/2027", col3: "Actif", color: "#3498DB", ok: true },
            { initial: "É", col1: "Élec-Conseil — Vérifications réglementaires", col2: "01/09/2026", col3: "Actif", color: "#7A5AE0", ok: true },
        ],
    },
    planning: {
        headers: ["Intervention", "Technicien", "Créneau"],
        data: [
            { initial: "JL", col1: "Maintenance préventive CVC", col2: "Mairie · Bât A", col3: "Lun. 09:00", color: "#058985", ok: true },
            { initial: "MS", col1: "Réparation porte auto", col2: "Gymnase Nord", col3: "Lun. 14:00", color: "#F5A042", ok: true },
            { initial: "AR", col1: "Vérification extincteurs", col2: "École Pasteur", col3: "Mar. 10:30", color: "#3498DB", ok: false },
            { initial: "JL", col1: "Relève manuelle compteurs eau", col2: "Médiathèque", col3: "Mar. 15:00", color: "#7A5AE0", ok: true },
        ],
    },
};

function generateRows(moduleId: string): RowsPreset {
    return ROWS_PRESETS[moduleId] ?? ROWS_PRESETS.gmao;
}

/**
 * Screenshot mock générique pour un module. La couleur d'accent et le label
 * s'adaptent au module. Le contenu est cohérent avec le contexte de gestion
 * de patrimoine immobilier mais reste schématique.
 */
export function ModuleMock({ module }: ModuleMockProps) {
    const Icon = module.icon;
    const rows = generateRows(module.id);

    return (
        <BrowserChrome url={`app.mettry.io/${module.id}`} hero>
            <div className="h-[440px] bg-bg-off-white flex flex-col">
                {/* Header */}
                <div className="px-5 py-3.5 bg-white border-b border-border-default flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div
                            className="w-8 h-8 rounded-md flex items-center justify-center"
                            style={{ background: `${module.color}15` }}
                        >
                            <Icon size={16} style={{ color: module.color }} />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold">
                                Module
                            </div>
                            <div className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                                {module.label}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-bg-off-white border border-border-default font-medium">
                            <Filter size={11} /> Filtres
                        </button>
                        <button className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-bg-off-white border border-border-default font-medium">
                            <Download size={11} /> Export
                        </button>
                        <button
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md text-white font-semibold"
                            style={{ background: module.color }}
                        >
                            <Plus size={11} /> Nouveau
                        </button>
                    </div>
                </div>

                {/* KPI strip */}
                <div className="px-5 py-3 bg-white border-b border-border-default grid grid-cols-3 gap-3">
                    {module.kpis.map((k) => (
                        <div key={k.label}>
                            <div
                                className="text-xl font-bold leading-none"
                                style={{ fontFamily: "var(--font-display)", color: module.color }}
                            >
                                {k.value}
                            </div>
                            <div className="text-[11px] text-ink-tertiary mt-1">{k.label}</div>
                        </div>
                    ))}
                </div>

                {/* Table */}
                <div className="flex-1 overflow-hidden">
                    <div className="grid grid-cols-12 px-5 py-2.5 text-[10px] uppercase tracking-wider text-ink-tertiary font-semibold border-b border-border-default bg-bg-off-white">
                        <div className="col-span-5">{rows.headers[0]}</div>
                        <div className="col-span-3">{rows.headers[1]}</div>
                        <div className="col-span-3">{rows.headers[2]}</div>
                        <div className="col-span-1 text-right">État</div>
                    </div>
                    {rows.data.map((row, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-12 px-5 py-3 text-sm border-b border-border-default last:border-0 items-center hover:bg-bg-off-white transition-colors"
                        >
                            <div className="col-span-5 flex items-center gap-2.5">
                                <div
                                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-white font-bold text-xs"
                                    style={{ background: row.color, fontFamily: "var(--font-display)" }}
                                >
                                    {row.initial}
                                </div>
                                <span className="font-medium truncate">{row.col1}</span>
                            </div>
                            <div className="col-span-3 text-ink-secondary tabular-nums text-[13px]">
                                {row.col2}
                            </div>
                            <div className="col-span-3 text-[13px]">
                                <span
                                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
                                    style={{ background: `${module.color}15`, color: module.color }}
                                >
                                    {row.col3}
                                </span>
                            </div>
                            <div className="col-span-1 flex justify-end gap-2">
                                {row.ok ? (
                                    <Check size={14} className="text-success" strokeWidth={2.5} />
                                ) : (
                                    <MoreHorizontal size={14} className="text-ink-tertiary" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BrowserChrome>
    );
}