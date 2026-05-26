"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BLOG_CATEGORIES, type PostMeta } from "@/lib/blog-types";
import { cn } from "@/lib/cn";

const CATEGORY_COLORS: Record<string, string> = {
    Réglementaire: "#0D4A4D",
    Énergie: "#F5A042",
    GMAO: "#058985",
    "Cas client": "#3498DB",
    Stratégie: "#7A5AE0",
};

interface Props {
    posts: PostMeta[];
}

export function BlogContent({ posts }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>("Tous");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "Tous") return posts;
        return posts.filter((p) => p.category === activeCategory);
    }, [posts, activeCategory]);

    return (
        <>
            {/* Hero centré */}
            <section style={{ background: "var(--color-bg-off-white)" }} className="py-20 lg:py-28">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <Eyebrow>Ressources</Eyebrow>
                        <h1 className="mt-6">Guides, réglementations, bonnes pratiques.</h1>
                        <p className="mt-6 text-lg lg:text-xl max-w-[56ch] mx-auto">
                            Toutes les semaines, on partage ce qu&apos;on apprend du terrain. Sans jargon, avec des chiffres.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Filtres + grille articles */}
            <Section>
                <Container>
                    {/* Filtres catégories centrés */}
                    <div className="flex justify-center mb-12">
                        <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
                            {BLOG_CATEGORIES.map((cat) => {
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setActiveCategory(cat)}
                                        className={cn(
                                            "px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                                            isActive
                                                ? "text-white"
                                                : "bg-bg-off-white text-ink-secondary border border-border-default hover:border-ink-tertiary hover:text-ink-primary"
                                        )}
                                        style={isActive ? { background: "#0D4A4D" } : undefined}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Grille articles */}
                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-ink-secondary py-12">
                            Pas encore d&apos;article dans cette catégorie.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, i) => {
                                const color = CATEGORY_COLORS[post.category] ?? "#058985";
                                return (
                                    <RevealOnScroll key={post.slug} delay={(i % 3) * 0.08}>
                                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                                            <article className="h-full bg-white border border-border-default rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                                                <div
                                                    className="aspect-[16/10] flex items-center justify-center"
                                                    style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
                                                >
                                                    <span className="text-7xl font-bold text-white/90" style={{ fontFamily: "var(--font-display)" }}>
                                                        {post.title[0]}
                                                    </span>
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
                                                            style={{ background: `${color}15`, color }}
                                                        >
                                                            {post.category}
                                                        </span>
                                                        <span className="text-xs text-ink-tertiary">{post.readingTime}</span>
                                                    </div>
                                                    <h3 className="text-lg mb-3 leading-tight">{post.title}</h3>
                                                    <p className="text-sm leading-relaxed text-ink-secondary line-clamp-3">{post.excerpt}</p>
                                                    <div className="mt-5 pt-4 border-t border-border-default text-xs text-ink-tertiary">
                                                        {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </RevealOnScroll>
                                );
                            })}
                        </div>
                    )}
                </Container>
            </Section>
        </>
    );
}