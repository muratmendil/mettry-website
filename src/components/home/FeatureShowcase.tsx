"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useDemoModal } from "@/components/chrome/DemoModalProvider";
import { cn } from "@/lib/cn";
import {
    FeatureMockDashboard,
    FeatureMockIntegration,
    FeatureMockDecret,
} from "./feature-mocks";

const FEATURES = [
    {
        key: "dashboard",
        tabLabel: "Dashboard",
        title: "Dashboard configurable, en temps réel",
        desc: "KPIs glissables, vue par site/module/période, export CSV/PDF en un clic. Vos chiffres, votre vision, votre mise en page.",
        bullets: [
            "Widgets glisser-déposer, sauvegardés par utilisateur",
            "Filtres par site, période, type de bâtiment",
            "Export PDF avec en-tête personnalisé pour le COMEX",
        ],
        mock: <FeatureMockDashboard />,
    },
    {
        key: "integration",
        tabLabel: "Intégrations",
        title: "Données GRDF & Enedis — zéro saisie",
        desc: "Récupération automatique des index, détection d'anomalies, historique jusqu'à 5 ans en arrière. Plus de relevé manuel, plus de fichier Excel.",
        bullets: [
            "Connexion sécurisée via API officielles (mandat ENEDIS Data Connect)",
            "Détection automatique de dérives de consommation",
            "Historique 5 ans rapatrié au moment du raccordement",
        ],
        mock: <FeatureMockIntegration />,
    },
    {
        key: "decret",
        tabLabel: "Décret Tertiaire",
        title: "Décret Tertiaire — export OPERAT en 1 clic",
        desc: "Suivi par bâtiment, calcul DJU automatique, export conforme au format ADEME. Vous remplissez OPERAT en quelques minutes au lieu de plusieurs jours.",
        bullets: [
            "Calcul automatique des consommations corrigées DJU",
            "Identification des sites assujettis vs hors-périmètre",
            "Fichier d'export au format CSV ADEME, prêt à uploader",
        ],
        mock: <FeatureMockDecret />,
    },
];

export function FeatureShowcase() {
    const [active, setActive] = useState(0);
    const { openDemo } = useDemoModal();
    const f = FEATURES[active];

    return (
        <Section id="features-showcase">
            <Container>
                <div className="max-w-3xl mb-10">
                    <Eyebrow>Le produit</Eyebrow>
                    <RevealOnScroll>
                        <h2 className="mt-6">Trois choses que vous allez aimer dès la première semaine.</h2>
                    </RevealOnScroll>
                </div>

                {/* Tabs */}
                <div className="mb-10 flex justify-center">
                    <div
                        className="inline-flex p-1 rounded-full bg-bg-off-white border border-border-default"
                        role="tablist"
                    >
                        {FEATURES.map((feat, i) => (
                            <button
                                key={feat.key}
                                type="button"
                                role="tab"
                                aria-selected={active === i}
                                onClick={() => setActive(i)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-semibold transition-all",
                                    active === i
                                        ? "bg-white text-ink-primary shadow-sm"
                                        : "text-ink-secondary hover:text-ink-primary"
                                )}
                            >
                                {feat.tabLabel}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={f.key}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center"
                    >
                        <div>
                            <h3 className="text-3xl lg:text-4xl mb-5" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.028em" }}>
                                {f.title}
                            </h3>
                            <p className="text-lg leading-relaxed mb-6">{f.desc}</p>
                            <ul className="flex flex-col gap-3 mb-7">
                                {f.bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-3">
                                        <span
                                            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                            style={{ background: "var(--accent-light)" }}
                                        >
                                            <Check size={12} className="text-[var(--accent-dark)]" strokeWidth={3} />
                                        </span>
                                        <span className="text-[15px] text-ink-primary">{b}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button onClick={openDemo}>Voir ça en démo</Button>
                        </div>

                        <div>{f.mock}</div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </Section>
    );
}