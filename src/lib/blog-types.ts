export interface PostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readingTime: string;
}

export const BLOG_CATEGORIES = [
    "Tous",
    "Réglementaire",
    "Énergie",
    "GMAO",
    "Cas client",
    "Stratégie",
] as const;