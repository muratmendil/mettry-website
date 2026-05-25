import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://mettry.io";
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${base}/fonctionnalites`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
        { url: `${base}/prescripteurs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${base}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${base}/politique-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ];

    const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
        url: `${base}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : now,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticPages, ...blogPosts];
}