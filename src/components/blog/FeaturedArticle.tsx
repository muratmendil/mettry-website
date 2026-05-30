import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog-types";
import { getCategoryColor } from "@/lib/categories";
import { formatDateFrShort } from "@/lib/format-date";

interface FeaturedArticleProps {
    post: PostMeta;
}

export function FeaturedArticle({ post }: FeaturedArticleProps) {
    const color = getCategoryColor(post.category);

    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article
                className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-white border border-border-default rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-[3px]"
                style={{ boxShadow: "0 1px 3px rgba(13,20,22,0.06), 0 1px 2px rgba(13,20,22,0.04)" }}
            >
                {/* Visuel */}
                <div
                    className="relative min-h-[320px] flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${color}25, ${color}05)` }}
                    aria-hidden="true"
                >
                    <span
                        className="text-[180px] font-bold leading-none"
                        style={{
                            fontFamily: "var(--font-display)",
                            color,
                            opacity: 0.4,
                            fontWeight: 800,
                        }}
                    >
                        {post.title[0]}
                    </span>
                </div>

                {/* Texte */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div
                        className="inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-[0.06em] mb-5"
                        style={{ color, fontFamily: "var(--font-mono)" }}
                    >
                        <Star size={12} fill="currentColor" />
                        À la une · {post.category}
                    </div>

                    <h2
                        className="mb-4"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(28px, 2.6vw, 36px)",
                            letterSpacing: "-0.022em",
                            lineHeight: 1.15,
                            fontWeight: 700,
                        }}
                    >
                        {post.title}
                    </h2>

                    <p className="text-base lg:text-[17px] leading-relaxed text-ink-secondary mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-ink-tertiary">
                            <span>{formatDateFrShort(post.date)}</span>
                            <span>·</span>
                            <span>{post.readingTime} de lecture</span>
                        </div>
                        <span
                            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-transform"
                            style={{ color: "var(--color-teal-dark)" }}
                        >
                            Lire l&apos;article
                            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}