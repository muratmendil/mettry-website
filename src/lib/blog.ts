import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta } from "./blog-types";

export type { PostMeta };

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function readPost(file: string): { meta: PostMeta; content: string } | null {
    const fullPath = path.join(BLOG_DIR, file);
    if (!fs.existsSync(fullPath)) return null;

    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");

    // reading-time calcule à partir du nombre de mots ; le texte compte les balises mais c'est suffisamment précis
    const rt = readingTime(content);
    const minutes = Math.max(1, Math.round(rt.minutes));

    return {
        meta: {
            slug: data.slug ?? slug,
            title: data.title ?? slug,
            excerpt: data.excerpt ?? "",
            date: data.date ?? "",
            category: data.category ?? "Focus technique",
            tags: Array.isArray(data.tags) ? data.tags : [],
            author: data.author ?? "emilin",
            image: data.image,
            imageAlt: data.imageAlt,
            readingTime: `${minutes} min`,
            seo: data.seo,
            featured: Boolean(data.featured),
        },
        content,
    };
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    const posts = files
        .map((file) => readPost(file)?.meta)
        .filter((p): p is PostMeta => Boolean(p));

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
    // On cherche par slug du frontmatter ou par nom de fichier
    if (!fs.existsSync(BLOG_DIR)) return null;
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
        const post = readPost(file);
        if (post && post.meta.slug === slug) return post;
    }
    return null;
}

/** L'article featured (ou le plus récent si aucun n'est marqué) */
export function getFeaturedPost(): PostMeta | null {
    const all = getAllPosts();
    const featured = all.find((p) => p.featured);
    return featured ?? all[0] ?? null;
}

/** Articles triés par date desc, sans le featured */
export function getNonFeaturedPosts(): PostMeta[] {
    const featured = getFeaturedPost();
    return getAllPosts().filter((p) => p.slug !== featured?.slug);
}

/** Articles d'une catégorie */
export function getPostsByCategory(categorySlug: string): PostMeta[] {
    const all = getAllPosts();
    // category dans le frontmatter est le LABEL ("Focus technique"), pas le slug
    // On charge la map slug→label
    const labelMatch = all.find((p) => {
        // On compare slugifiée
        return slugify(p.category) === categorySlug;
    });
    if (!labelMatch) return all.filter((p) => slugify(p.category) === categorySlug);
    return all.filter((p) => slugify(p.category) === categorySlug);
}

/** Articles liés : même catégorie, ou même tag, excluant le slug courant */
export function getRelatedPosts(currentSlug: string, limit = 3): PostMeta[] {
    const all = getAllPosts();
    const current = all.find((p) => p.slug === currentSlug);
    if (!current) return all.slice(0, limit);

    const scored = all
        .filter((p) => p.slug !== currentSlug)
        .map((p) => {
            let score = 0;
            if (p.category === current.category) score += 10;
            const sharedTags = p.tags.filter((t) => current.tags.includes(t));
            score += sharedTags.length * 3;
            return { post: p, score };
        })
        .sort((a, b) => b.score - a.score)
        .map(({ post }) => post);

    return scored.slice(0, limit);
}

/** Extrait les H2 d'un contenu MDX pour le sommaire (TOC) */
export function extractHeadings(content: string): Array<{ id: string; text: string }> {
    const headings: Array<{ id: string; text: string }> = [];
    const lines = content.split("\n");
    for (const line of lines) {
        const match = line.match(/^##\s+(.+?)\s*$/);
        if (match) {
            const text = match[1].trim();
            headings.push({ id: slugify(text), text });
        }
    }
    return headings;
}

/** slug FR : minuscules, accents enlevés, espaces → tirets, ponctuation supprimée */
export function slugify(input: string): string {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['"]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}