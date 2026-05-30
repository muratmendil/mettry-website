export interface PostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    /** Tags libres pour pills bas d'article */
    tags: string[];
    /** ID de l'auteur (clé dans AUTHORS) */
    author: string;
    /** Chemin de l'image hero (relatif /public ou URL externe) — optionnel */
    image?: string;
    imageAlt?: string;
    /** Temps de lecture calculé automatiquement, ex : "8 min" */
    readingTime: string;
    /** Meta SEO surchargeables */
    seo?: {
        title?: string;
        description?: string;
    };
    /** Si true, l'article est mis en avant en haut de l'index */
    featured?: boolean;
}