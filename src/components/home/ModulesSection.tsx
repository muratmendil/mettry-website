"use client";

import Link from "next/link";
import { Wrench, Bolt, Inbox, FolderOpen, FileText, Calendar, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DecorGmao, DecorEnergy, DecorTicketing, DecorGed, DecorContracts, DecorPlanning } from "./module-decors";

interface ModuleCardData {
    id: string;
    icon: LucideIcon;
    color: string;
    title: string;
    desc: string;
    decor: React.ReactNode;
    decorPos: "full" | "right";
}

const MODULES: ModuleCardData[] = [
    {
        id: "gmao",
        icon: Wrench,
        color: "#058985",
        title: "GMAO",
        desc: "Maintenance préventive et curative, rappels réglementaires, historique par installation.",
        decor: <DecorGmao />,
        decorPos: "full",
    },
    {
        id: "energie",
        icon: Bolt,
        color: "#F5A042",
        title: "Suivi énergétique",
        desc: "Import auto GRDF/Enedis, kWh/m², DJU, analyses prospectives.",
        decor: <DecorEnergy />,
        decorPos: "full",
    },
    {
        id: "ticketing",
        icon: Inbox,
        color: "#3498DB",
        title: "Ticketing",
        desc: "Création, affectation, résolution. Lien avec installation, KPIs pannes.",
        decor: <DecorTicketing />,
        decorPos: "right",
    },
    {
        id: "ged",
        icon: FolderOpen,
        color: "#7A5AE0",
        title: "GED",
        desc: "Documents liés aux installations, contrats, alertes. Recherche multi-critères.",
        decor: <DecorGed />,
        decorPos: "right",
    },
    {
        id: "contrats",
        icon: FileText,
        color: "#4A5560",
        title: "Contrats",
        desc: "Liste centralisée, interlocuteurs, alertes préavis, fournisseurs.",
        decor: <DecorContracts />,
        decorPos: "full",
    },
    {
        id: "planning",
        icon: Calendar,
        color: "#197378",
        title: "Planning techniciens",
        desc: "Calendrier équipes et sous-traitants. Vue semaine/mois, tâches non assignées.",
        decor: <DecorPlanning />,
        decorPos: "full",
    },
];

export function ModulesSection() {
    return (
        <section className="border-y border-border-default py-20 lg:py-28" style={{ background: "var(--color-bg-off-white)" }}>
            <Container>
                {/* Header 2 colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
                    <div>
                        <Eyebrow>Modules</Eyebrow>
                        <RevealOnScroll>
                            <h2 className="mt-5">Une plateforme. Six modules. Zéro compromis.</h2>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll delay={0.1}>
                        <p className="text-lg leading-relaxed mt-2 lg:mt-12">
                            Activez ce dont vous avez besoin, ajoutez le reste plus tard. Sans rupture de données, ni double saisie.
                        </p>
                    </RevealOnScroll>
                </div>

                {/* Grid 6 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {MODULES.map((m, i) => (
                        <RevealOnScroll key={m.id} delay={(i % 3) * 0.08}>
                            <ModuleCard data={m} />
                        </RevealOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ModuleCard({ data }: { data: ModuleCardData }) {
    const Icon = data.icon;

    return (
        <Link
            href={`/fonctionnalites?module=${data.id}`}
            className="group relative block h-full bg-white border border-border-default rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
        >
            <div className="relative p-7 pb-8 min-h-[260px] flex flex-col">
                {/* Icon */}
                <div className="w-11 h-11 rounded-md flex items-center justify-center mb-6" style={{ background: `${data.color}15` }}>
                    <Icon size={20} style={{ color: data.color }} />
                </div>

                {/* Title + desc */}
                <h3 className="mb-2.5 text-[22px]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.018em" }}>
                    {data.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-6 max-w-[28ch]">{data.desc}</p>

                {/* CTA — couleur du module */}
                <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: data.color }}>
                    Explorer le module
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Décoration — cachée par défaut, révélée au hover */}
                <div
                    className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                        ...(data.decorPos === "full"
                            ? { right: 0, bottom: 0, width: "55%", height: "44%" }
                            : { right: 20, bottom: 20, width: "35%", height: "40%" }),
                    }}
                    aria-hidden="true"
                >
                    {data.decor}
                </div>
            </div>
        </Link>
    );
}