import {
    Wrench,
    Bolt,
    FileText,
    Inbox,
    FolderOpen,
    Calendar,
    ClipboardList,
    type LucideIcon,
} from "lucide-react";

export interface ModuleSpec {
    id: string;
    icon: LucideIcon;
    color: string;
    label: string;
    title: string;
    lead: string;
    kpis: Array<{ value: string; label: string }>;
    features: Array<{ title: string; desc: string }>;
}

export const MODULES: ModuleSpec[] = [
    {
        id: "gmao",
        icon: Wrench,
        color: "#058985",
        label: "GMAO",
        title: "GMAO : tickets, ordres de travail, planning techniciens",
        lead: "Centralisez toutes les interventions de maintenance dans un seul outil, accessible aux gestionnaires comme aux équipes terrain.",
        kpis: [
            { value: "−40%", label: "temps de saisie d'un ticket" },
            { value: "2h", label: "délai moyen de prise en charge" },
            { value: "100%", label: "traçabilité par bâtiment" },
        ],
        features: [
            { title: "Tickets multi-canaux", desc: "QR code, email, téléphone, app mobile — tout converge dans Mettry." },
            { title: "Affectation intelligente", desc: "Routage automatique selon le bâtiment, la compétence et la disponibilité." },
            { title: "Ordres de travail", desc: "Génération automatique, signature électronique, photos avant/après." },
            { title: "Historique par équipement", desc: "Tous les actes de maintenance par bâtiment, équipement, ou prestataire." },
            { title: "Plan préventif", desc: "Maintenance préventive planifiée par type d'équipement et périodicité réglementaire." },
            { title: "Mobile-first", desc: "App iOS et Android pour les techniciens, mode offline, signature client." },
        ],
    },
    {
        id: "energie",
        icon: Bolt,
        color: "#F5A042",
        label: "Énergie",
        title: "Suivi énergétique : GRDF, Enedis et plus encore",
        lead: "Récupérez automatiquement vos index gaz et électricité, détectez les dérives, et pilotez la performance énergétique de votre patrimoine.",
        kpis: [
            { value: "0", label: "saisie manuelle d'index" },
            { value: "5 ans", label: "d'historique rapatrié" },
            { value: "−18%", label: "consommation moyenne client" },
        ],
        features: [
            { title: "Connexion GRDF & Enedis", desc: "Via les API officielles (Data Connect). Mandat 100% conforme RGPD." },
            { title: "Courbes de charge", desc: "Données détaillées par pas de 30 min, exportables CSV." },
            { title: "Détection d'anomalies", desc: "Alertes automatiques sur dérives anormales par site." },
            { title: "Multi-fluides", desc: "Électricité, gaz, eau, fioul — tout dans une vue unifiée." },
            { title: "Compteurs manuels", desc: "Saisie via app mobile pour les sites non télérelevés." },
            { title: "Coûts en €", desc: "Suivi parallèle des consommations et des dépenses." },
        ],
    },
    {
        id: "decret",
        icon: FileText,
        color: "#0D4A4D",
        label: "Décret Tertiaire",
        title: "Décret Tertiaire : OPERAT en quelques clics",
        lead: "La conformité réglementaire enfin sans douleur. Mettry calcule, corrige et exporte les données OPERAT au format ADEME.",
        kpis: [
            { value: "1 clic", label: "pour exporter OPERAT" },
            { value: "Auto", label: "calcul DJU par zone climatique" },
            { value: "100%", label: "conformité ADEME" },
        ],
        features: [
            { title: "Identification du périmètre", desc: "Sites assujettis automatiquement détectés selon les seuils." },
            { title: "Correction DJU", desc: "Calcul automatique des consommations corrigées par zone climatique." },
            { title: "Année de référence", desc: "Définition assistée de l'année de référence par bâtiment." },
            { title: "Export OPERAT", desc: "Fichier CSV conforme, prêt à uploader sur la plateforme ADEME." },
            { title: "Trajectoire 2030/2040/2050", desc: "Suivi des objectifs de réduction par site et global." },
            { title: "Rapport annuel", desc: "PDF synthèse pour la direction, avec recommandations d'actions." },
        ],
    },
    {
        id: "ticketing",
        icon: Inbox,
        color: "#3498DB",
        label: "Ticketing",
        title: "Ticketing : signalements occupants",
        lead: "Vos occupants signalent un problème en 30 secondes via QR code. Vos équipes ne reçoivent que les tickets pertinents, déjà qualifiés.",
        kpis: [
            { value: "30s", label: "pour signaler" },
            { value: "−60%", label: "de tickets en doublon" },
            { value: "SLA", label: "configurable par catégorie" },
        ],
        features: [
            { title: "QR code par zone", desc: "Affichage simple dans les locaux, scan + signalement en quelques secondes." },
            { title: "Catégorisation auto", desc: "Le système suggère la catégorie selon les mots-clés et l'historique." },
            { title: "Notifications", desc: "Email, SMS, push — vos occupants suivent leur ticket en temps réel." },
            { title: "SLA personnalisables", desc: "Délais différents selon priorité, catégorie, bâtiment." },
            { title: "Anti-doublon", desc: "Détection automatique des signalements existants sur le même problème." },
            { title: "Satisfaction post-résolution", desc: "Mini-sondage 1 clic envoyé à la clôture du ticket." },
        ],
    },
    {
        id: "ged",
        icon: FolderOpen,
        color: "#7A5AE0",
        label: "GED",
        title: "GED : tous vos documents, classés et indexés",
        lead: "Plans, contrats, DOE, audits, attestations — toute la documentation par bâtiment, retrouvable en quelques secondes.",
        kpis: [
            { value: "5s", label: "pour retrouver un doc" },
            { value: "OCR", label: "et recherche full-text" },
            { value: "Illimité", label: "stockage (plan Complet)" },
        ],
        features: [
            { title: "Organisation par bâtiment", desc: "Arborescence par site, type de doc, année, équipement." },
            { title: "Recherche full-text", desc: "OCR sur PDF scannés, recherche dans le contenu des fichiers." },
            { title: "Versions et historique", desc: "Plusieurs versions d'un même document, traçabilité complète." },
            { title: "Partage sécurisé", desc: "Liens signés avec expiration, sans création de compte." },
            { title: "Dates de péremption", desc: "Alertes automatiques pour les attestations qui arrivent à échéance." },
            { title: "API et webhooks", desc: "Synchronisation possible avec votre Drive, SharePoint, ou GED existante." },
        ],
    },
    {
        id: "contrats",
        icon: ClipboardList,
        color: "#D97757",
        label: "Contrats",
        title: "Contrats : prestataires, échéances, alertes",
        lead: "Suivez tous vos contrats prestataires en un endroit. Plus jamais de reconduction tacite ratée ou de pénalité oubliée.",
        kpis: [
            { value: "0", label: "renouvellement raté" },
            { value: "3 mois", label: "d'anticipation moyenne" },
            { value: "Multi-sites", label: "par contrat" },
        ],
        features: [
            { title: "Suivi des prestataires", desc: "Référentiel central, coordonnées, RIB, attestations à jour." },
            { title: "Échéances et préavis", desc: "Alertes 6, 3 et 1 mois avant chaque échéance contractuelle." },
            { title: "Multi-sites par contrat", desc: "Un même contrat peut couvrir plusieurs bâtiments avec ventilation." },
            { title: "Pénalités et SLA", desc: "Suivi des incidents et calcul des pénalités contractuelles." },
            { title: "Documents associés", desc: "Contrat, avenants, devis, factures — tout au même endroit." },
            { title: "Renouvellements", desc: "Workflow de validation pour les reconductions et nouveaux appels d'offres." },
        ],
    },
    {
        id: "planning",
        icon: Calendar,
        color: "#07BC0C",
        label: "Planning",
        title: "Planning techniciens : visibilité temps réel",
        lead: "Voyez en un coup d'œil qui fait quoi, où, et quand. Glissez-déposez pour réaffecter, gérez les absences, suivez les compétences.",
        kpis: [
            { value: "Drag", label: "et drop pour réaffecter" },
            { value: "Mobile", label: "consultation et pointage" },
            { value: "Auto", label: "optimisation des tournées" },
        ],
        features: [
            { title: "Vue calendrier", desc: "Jour, semaine, mois — par technicien, équipe, ou bâtiment." },
            { title: "Glisser-déposer", desc: "Réaffectation d'une intervention en quelques secondes." },
            { title: "Compétences", desc: "Affectation automatique selon habilitations et certifications." },
            { title: "Absences et congés", desc: "Gestion intégrée, visibilité immédiate sur la disponibilité." },
            { title: "Pointage mobile", desc: "Début/fin d'intervention via app, géolocalisé." },
            { title: "Optimisation tournées", desc: "Suggestion d'ordre optimal selon distance et priorités." },
        ],
    },
];