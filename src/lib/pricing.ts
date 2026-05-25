import { Check, Minus, type LucideIcon } from "lucide-react";

export interface PlanFeature {
    label: string;
    value: boolean | string;
}

export interface Plan {
    id: "essentiel" | "complet" | "enterprise";
    name: string;
    tagline: string;
    /** Prix mensuel base + par bâtiment ; null = sur devis */
    baseMonthly: number | null;
    perBuilding: number | null;
    highlight?: boolean;
    cta: { label: string; action: "demo" | "contact" };
    bullets: string[];
}

export const PLANS: Plan[] = [
    {
        id: "essentiel",
        name: "Essentiel",
        tagline: "Pour démarrer sereinement",
        baseMonthly: 49,
        perBuilding: 19,
        cta: { label: "Demander une démo", action: "demo" },
        bullets: [
            "GMAO + Ticketing + Contrats",
            "App mobile iOS / Android",
            "5 utilisateurs maximum",
            "10 Go de GED inclus",
            "Support par email · 48h ouvrées",
        ],
    },
    {
        id: "complet",
        name: "Complet",
        tagline: "Le choix de 80% de nos clients",
        baseMonthly: 129,
        perBuilding: 32,
        highlight: true,
        cta: { label: "Demander une démo", action: "demo" },
        bullets: [
            "Tous les modules inclus",
            "Suivi énergétique GRDF + Enedis",
            "Décret Tertiaire — export OPERAT",
            "GED illimitée",
            "Planning techniciens",
            "Utilisateurs illimités",
            "Support prioritaire · 4h ouvrées",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Sur mesure pour les groupes",
        baseMonthly: null,
        perBuilding: null,
        cta: { label: "Contacter l'équipe", action: "contact" },
        bullets: [
            "Tout le plan Complet",
            "SSO (SAML, Azure AD, Google)",
            "API dédiée + webhooks",
            "Intégrations sur mesure (SAP…)",
            "SLA garanti 99.9%",
            "Customer Success Manager dédié",
            "Onboarding & formation incluse",
        ],
    },
];

// ─── Table comparative ───
export interface CompareRow {
    label: string;
    essentiel: boolean | string;
    complet: boolean | string;
    enterprise: boolean | string;
}

export interface CompareCategory {
    title: string;
    rows: CompareRow[];
}

export const COMPARE_CATEGORIES: CompareCategory[] = [
    {
        title: "Modules",
        rows: [
            { label: "GMAO (tickets, ordres de travail)", essentiel: true, complet: true, enterprise: true },
            { label: "Ticketing (signalement QR code)", essentiel: true, complet: true, enterprise: true },
            { label: "Contrats prestataires", essentiel: true, complet: true, enterprise: true },
            { label: "Suivi énergétique (multi-fluides)", essentiel: false, complet: true, enterprise: true },
            { label: "Décret Tertiaire & OPERAT", essentiel: false, complet: true, enterprise: true },
            { label: "GED (documents par bâtiment)", essentiel: "10 Go", complet: "Illimité", enterprise: "Illimité" },
            { label: "Planning techniciens", essentiel: false, complet: true, enterprise: true },
        ],
    },
    {
        title: "Intégrations",
        rows: [
            { label: "Enedis & GRDF (Data Connect)", essentiel: false, complet: true, enterprise: true },
            { label: "Export OPERAT (ADEME)", essentiel: false, complet: true, enterprise: true },
            { label: "Excel / CSV", essentiel: true, complet: true, enterprise: true },
            { label: "Outlook & Google Calendar", essentiel: true, complet: true, enterprise: true },
            { label: "Slack / Teams", essentiel: false, complet: true, enterprise: true },
            { label: "API publique + webhooks", essentiel: false, complet: "Lecture", enterprise: "Complète" },
            { label: "SSO (SAML, Azure AD)", essentiel: false, complet: false, enterprise: true },
        ],
    },
    {
        title: "Utilisateurs & support",
        rows: [
            { label: "Utilisateurs", essentiel: "5", complet: "Illimités", enterprise: "Illimités" },
            { label: "Support email", essentiel: "48h ouvrées", complet: "4h ouvrées", enterprise: "2h ouvrées" },
            { label: "Support téléphonique", essentiel: false, complet: true, enterprise: true },
            { label: "Customer Success Manager", essentiel: false, complet: false, enterprise: true },
            { label: "SLA garanti", essentiel: false, complet: "99.5%", enterprise: "99.9%" },
            { label: "Formation équipe", essentiel: "Vidéos", complet: "1 session", enterprise: "Illimitée" },
        ],
    },
];

// ─── FAQ ───
export interface FAQItem {
    question: string;
    answer: string;
}

export const FAQ: FAQItem[] = [
    {
        question: "Y a-t-il un engagement de durée ?",
        answer:
            "Non. Tous les plans sont sans engagement de durée. Vous pouvez résilier à tout moment avec un préavis d'un mois. L'engagement annuel donne droit à 2 mois offerts mais reste résiliable (vous payez ce que vous avez consommé).",
    },
    {
        question: "Comment se passe la migration depuis nos outils actuels ?",
        answer:
            "Notre équipe accompagne 100% de la migration : import des données existantes (Excel, GMAO, GED), paramétrage initial, et formation de vos équipes. Pour les plans Complet et Enterprise, l'onboarding est inclus. Compter 4 à 8 semaines pour un déploiement complet.",
    },
    {
        question: "Qu'arrive-t-il à nos données si nous résilions ?",
        answer:
            "Vos données vous appartiennent. À la résiliation, vous récupérez l'intégralité de votre patrimoine de données via export structuré (CSV pour les données métier, PDF pour les documents, ZIP pour les pièces jointes). Nous conservons une copie 30 jours puis détruisons définitivement.",
    },
    {
        question: "Mettry est-il conforme RGPD ?",
        answer:
            "Oui, nativement. Les données sont hébergées exclusivement en France (OVHcloud Strasbourg), nous tenons un registre des traitements, et un DPO est désigné. Nous fournissons un DPA standard sur demande. Certification SOC 2 obtenue, ISO 27001 en cours.",
    },
    {
        question: "Peut-on commencer petit et étendre progressivement ?",
        answer:
            "C'est même la norme chez nos clients. La plupart démarrent avec 5-10 bâtiments en plan Essentiel pour tester, puis étendent au reste du parc après 2-3 mois. La facturation s'ajuste automatiquement chaque mois selon le nombre de bâtiments actifs.",
    },
    {
        question: "Le plan Enterprise inclut-il du développement spécifique ?",
        answer:
            "Oui, dans une certaine mesure. Le plan Enterprise inclut jusqu'à 10 jours/an de développement dédié pour vos besoins spécifiques : connecteurs vers vos systèmes internes (SAP, IFS), rapports sur mesure, workflows particuliers. Au-delà, un devis complémentaire est établi.",
    },
];