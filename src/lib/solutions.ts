import { Building, Briefcase, HeartPulse, type LucideIcon } from "lucide-react";

export interface Solution {
    id: string;
    icon: LucideIcon;
    color: string;
    label: string;
    title: string;
    pains: string[];
    benefits: string[];
    testimonial: {
        quote: string;
        name: string;
        role: string;
        initial: string;
    };
}

export const SOLUTIONS: Solution[] = [
    {
        id: "collectivites",
        icon: Building,
        color: "#058985",
        label: "Collectivités",
        title: "Pour les communes, intercommunalités et départements",
        pains: [
            "Patrimoine éclaté entre écoles, gymnases, mairies, équipements sportifs",
            "Pression budgétaire forte avec un suivi énergétique manuel",
            "Décret Tertiaire imposé sans outil dédié à la déclaration OPERAT",
            "Équipes techniques réduites face à un parc en croissance",
        ],
        benefits: [
            "Vue consolidée tous bâtiments, par typologie et zone",
            "Suivi de la stratégie de sobriété énergétique par site",
            "Export OPERAT sécurisé pour toutes les communes du périmètre",
            "Mobile pour les agents techniques sur le terrain",
        ],
        testimonial: {
            quote:
                "Pour notre intercommunalité, c'est la première fois qu'on a une vraie vision consolidée sur les 35 bâtiments publics. Le rapport au conseil se fait en 1 heure, plus en 2 jours.",
            name: "Marc L.",
            role: "DGS, Communauté de communes du Beaujolais",
            initial: "M",
        },
    },
    {
        id: "tertiaire",
        icon: Briefcase,
        color: "#F5A042",
        label: "Tertiaire & Foncières",
        title: "Pour les foncières, asset managers et property managers",
        pains: [
            "Reporting locataires fragmenté, avec délais qui s'allongent",
            "Démontrer la performance ESG à des investisseurs exigeants",
            "Gestion des prestataires multiples sans coordination centrale",
            "Refacturation des charges complexe et source de litiges",
        ],
        benefits: [
            "Reporting ESG/CSRD prêt à l'envoi mensuel",
            "Visibilité temps réel sur les interventions techniques",
            "Refacturation locataires automatisée et auditable",
            "Suivi des engagements de service prestataires (SLA)",
        ],
        testimonial: {
            quote:
                "Le module Décret Tertiaire a justifié l'investissement à lui seul. On a déclaré nos 22 sites OPERAT en une demi-journée, contre 3 semaines avant.",
            name: "Sophie B.",
            role: "Responsable énergie, Foncière Tertia",
            initial: "S",
        },
    },
    {
        id: "sante",
        icon: HeartPulse,
        color: "#EF4444",
        label: "Santé",
        title: "Pour les CHU, cliniques et établissements médico-sociaux",
        pains: [
            "Continuité de service critique sur des bâtiments 24/7",
            "Réglementations spécifiques (radiologie, sécurité, ERP type U)",
            "Multiples prestataires avec délais de réaction très courts",
            "Suivi des contrôles obligatoires complexe à fiabiliser",
        ],
        benefits: [
            "Alertes critiques prioritaires avec escalade automatique",
            "Calendrier des contrôles réglementaires avec rappels",
            "Mobile robuste pour les équipes terrain (mode offline inclus)",
            "Historique d'interventions consultable en 2 clics par audit",
        ],
        testimonial: {
            quote:
                "Sur un CHU avec 18 bâtiments et 80 prestataires, Mettry a stoppé l'hémorragie d'emails. Les techniciens ouvrent leur app le matin, ils savent quoi faire.",
            name: "Nicolas T.",
            role: "Responsable maintenance, CHU Lyon-Sud",
            initial: "N",
        },
    },
];

export const MIGRATION_STEPS = [
    {
        num: "01",
        title: "Cadrage & audit",
        desc: "Nous analysons vos outils actuels, vos données, vos workflows. Cadrage en 1 semaine.",
        duration: "Semaine 1",
    },
    {
        num: "02",
        title: "Import des données",
        desc: "Migration des bâtiments, équipements, contrats, documents. Vous n'avez rien à ressaisir.",
        duration: "Semaines 2-3",
    },
    {
        num: "03",
        title: "Formation & paramétrage",
        desc: "Sessions de formation par rôle, configuration des SLA, alertes, droits utilisateurs.",
        duration: "Semaine 4",
    },
    {
        num: "04",
        title: "Go-live & accompagnement",
        desc: "Mise en production avec support quotidien le premier mois, puis review mensuelle.",
        duration: "Semaines 5+",
    },
];