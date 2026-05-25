"use client";

import Link from "next/link";
import { Wrench, Bolt, Inbox, FolderOpen, FileText, Calendar, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const MODULES = [
    {
        id: "gmao",
        icon: Wrench,
        color: "#058985",
        title: "GMAO",
        desc: "Tickets, ordres de travail, planning techniciens, historique d'interventions par bâtiment.",
    },
    {
        id: "energie",
        icon: Bolt,
        color: "#F5A042",
        title: "Suivi énergétique",
        desc: "Connexion GRDF & Enedis, courbes de charge, détection d'anomalies, alertes automatiques.",
    },
    {
        id: "ticketing",
        icon: Inbox,
        color: "#3498DB",
        title: "Ticketing",
        desc: "Signalement par les occupants via QR code, attribution automatique, suivi SLA.",
    },
    {
        id: "ged",
        icon: FolderOpen,
        color: "#7A5AE0",
        title: "GED",
        desc: "Documents par bâtiment, recherche full-text, partage sécurisé, dates de péremption.",
    },
    {
        id: "contrats",
        icon: FileText,
        color: "#0D4A4D",
        title: "Contrats",
        desc: "Suivi des prestataires, échéances, renouvellements, alertes contractuelles automatiques.",
    },
    {
        id: "planning",
        icon: Calendar,
        color: "#07BC0C",
        title: "Planning techniciens",
        desc: "Visibilité temps réel, affectation glisser-déposer, mobile pour les équipes terrain.",
    },
];

export function ModulesSection() {
    return (
        <section className="bg-bg-off-white border-y border-border-default py-20 lg:py-28">
            <Container>
                <div className="max-w-3xl mb-12">
                    <Eyebrow>Modules</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Six modules, une seule interface.</h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.1}>
                        <p className="mt-5 text-lg max-w-[56ch]">
                            Pas besoin de prendre tous les modules — chaque entité active ce dont elle a besoin et étend progressivement.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {MODULES.map((m, i) => {
                        const Icon = m.icon;
                        return (
                            <RevealOnScroll key={m.id} delay={(i % 3) * 0.08}>
                                <Link
                                    href={`/fonctionnalites?module=${m.id}`}
                                    className="group relative block h-full bg-white border border-border-default rounded-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-[var(--accent-xlight)] overflow-hidden"
                                >
                                    <div
                                        className="w-11 h-11 rounded-md flex items-center justify-center mb-5"
                                        style={{ background: `${m.color}15` }}
                                    >
                                        <Icon size={22} style={{ color: m.color }} />
                                    </div>
                                    <h3 className="mb-2">{m.title}</h3>
                                    <p className="text-[15px] leading-relaxed">{m.desc}</p>
                                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-dark)]">
                                        Explorer le module
                                        <ArrowRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </div>

                                    {/* Decoration discrète au hover */}
                                    <div
                                        className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle, ${m.color}20, transparent 70%)`,
                                        }}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}