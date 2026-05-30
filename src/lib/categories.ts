export interface BlogCategory {
    id: string;
    slug: string;
    label: string;
    color: string;
    description: string;
}

export const BLOG_CATEGORIES_LIST: BlogCategory[] = [
    {
        id: "focus-technique",
        slug: "focus-technique",
        label: "Focus technique",
        color: "#058985",
        description: "Pour comprendre les équipements et systèmes du bâtiment, sans jargon.",
    },
    {
        id: "reglementaire",
        slug: "reglementaire",
        label: "Réglementaire",
        color: "#058985",
        description: "Décret Tertiaire, BACS, F-gas — naviguer dans la réglementation FM.",
    },
    {
        id: "energie",
        slug: "energie",
        label: "Énergie",
        color: "#F5A042",
        description: "Suivi énergétique, performance, audits, sobriété.",
    },
    {
        id: "gmao",
        slug: "gmao",
        label: "GMAO",
        color: "#7A5AE0",
        description: "Maintenance, tickets, contrôles, organisation des équipes.",
    },
    {
        id: "cas-client",
        slug: "cas-client",
        label: "Cas client",
        color: "#3498DB",
        description: "Retours d'expérience concrets : avant/après, chiffres, méthodo.",
    },
    {
        id: "strategie",
        slug: "strategie",
        label: "Stratégie",
        color: "#0D4A4D",
        description: "Pilotage, organisation, ROI, structuration de la fonction FM.",
    },
];

export const CATEGORY_BY_LABEL = Object.fromEntries(
    BLOG_CATEGORIES_LIST.map((c) => [c.label, c])
) as Record<string, BlogCategory>;

export const CATEGORY_BY_SLUG = Object.fromEntries(
    BLOG_CATEGORIES_LIST.map((c) => [c.slug, c])
) as Record<string, BlogCategory>;

export function getCategoryByLabel(label: string): BlogCategory | undefined {
    return CATEGORY_BY_LABEL[label];
}

export function getCategoryColor(label: string): string {
    return CATEGORY_BY_LABEL[label]?.color ?? "#058985";
}

/** Liste pour les pills (avec "Tous" en tête) */
export const CATEGORY_PILLS = [
    { label: "Tous", slug: null as string | null, color: "#0D4A4D" },
    ...BLOG_CATEGORIES_LIST.map((c) => ({ label: c.label, slug: c.slug, color: c.color })),
];