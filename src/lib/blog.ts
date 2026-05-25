import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readingTime: string;
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const fullPath = path.join(BLOG_DIR, file);
        const raw = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(raw);
        return {
            slug,
            title: data.title ?? slug,
            excerpt: data.excerpt ?? "",
            date: data.date ?? "",
            category: data.category ?? "Article",
            readingTime: data.readingTime ?? "5 min",
        } as PostMeta;
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
    const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    return {
        meta: {
            slug,
            title: data.title ?? slug,
            excerpt: data.excerpt ?? "",
            date: data.date ?? "",
            category: data.category ?? "Article",
            readingTime: data.readingTime ?? "5 min",
        },
        content,
    };
}

export const BLOG_CATEGORIES = [
    "Tous",
    "Décret Tertiaire",
    "GMAO",
    "Énergie",
    "Guides",
    "Études de cas",
] as const;