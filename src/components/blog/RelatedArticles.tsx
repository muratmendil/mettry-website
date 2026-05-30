import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ArticleCard } from "./ArticleCard";
import type { PostMeta } from "@/lib/blog-types";

interface RelatedArticlesProps {
    posts: PostMeta[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
    if (posts.length === 0) return null;

    return (
        <section
            className="border-t border-border-default py-16 lg:py-20"
            style={{ background: "var(--color-bg-off-white)" }}
        >
            <Container>
                <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
                    <h2>Sur le même sujet</h2>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: "var(--color-teal-dark)" }}
                    >
                        Tous les articles
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {posts.map((p) => (
                        <ArticleCard key={p.slug} post={p} />
                    ))}
                </div>
            </Container>
        </section>
    );
}