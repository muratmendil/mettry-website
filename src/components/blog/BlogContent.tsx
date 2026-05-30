"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CategoryPills } from "./CategoryPills";
import { FeaturedArticle } from "./FeaturedArticle";
import { ArticleCard } from "./ArticleCard";
import { NewsletterCTA } from "./NewsletterCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { PostMeta } from "@/lib/blog-types";
import { CATEGORY_BY_SLUG, BLOG_CATEGORIES_LIST } from "@/lib/categories";
import { slugify } from "@/lib/blog-slug-client";

interface Props {
    featured: PostMeta | null;
    posts: PostMeta[];
}

export function BlogContent({ featured, posts }: Props) {
    const [activeCat, setActiveCat] = useState<string | null>(null);

    const filteredPosts = useMemo(() => {
        if (!activeCat) return posts;
        return posts.filter((p) => slugify(p.category) === activeCat);
    }, [posts, activeCat]);

    // Si on filtre, on cache la featured
    const showFeatured = !activeCat && featured;

    return (
        <>
            {/* Hero */}
            <section style={{ background: "var(--color-bg-off-white)" }} className="relative overflow-hidden py-20 lg:py-28">
                <div
                    className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(5,137,133,0.08), transparent 60%)",
                        filter: "blur(60px)",
                    }}
                    aria-hidden="true"
                />
                <Container>
                    <div className="relative max-w-3xl mx-auto text-center">
                        <Eyebrow>Ressources</Eyebrow>
                        <h1 className="mt-6">Guides, réglementations, bonnes pratiques.</h1>
                        <p className="mt-6 text-lg lg:text-xl max-w-[56ch] mx-auto">
                            Toutes les semaines, on partage ce qu&apos;on apprend du terrain. Sans jargon, avec des chiffres.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Filtres */}
            <section className="py-12">
                <Container>
                    <CategoryPills active={activeCat} onSelect={setActiveCat} />
                </Container>
            </section>

            {/* Featured */}
            {showFeatured && (
                <section className="pb-12">
                    <Container>
                        <RevealOnScroll>
                            <FeaturedArticle post={featured} />
                        </RevealOnScroll>
                    </Container>
                </section>
            )}

            {/* Grille */}
            <section className="pb-16 lg:pb-20">
                <Container>
                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-ink-secondary py-12">
                            Pas encore d&apos;article dans cette catégorie.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                            {filteredPosts.map((post, i) => (
                                <RevealOnScroll key={post.slug} delay={(i % 3) * 0.08}>
                                    <ArticleCard post={post} />
                                </RevealOnScroll>
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            <NewsletterCTA />
        </>
    );
}