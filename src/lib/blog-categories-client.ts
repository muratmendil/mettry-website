// Re-export safe pour les composants client (pas de dépendance fs)
export { BLOG_CATEGORIES_LIST, CATEGORY_BY_LABEL, CATEGORY_BY_SLUG, CATEGORY_PILLS, getCategoryByLabel, getCategoryColor } from "./categories";
export type { BlogCategory } from "./categories";