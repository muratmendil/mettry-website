import Link from "next/link";
import type { PostMeta } from "@/lib/blog-types";
import { getCategoryColor } from "@/lib/categories";
import { formatDateFrShort } from "@/lib/format-date";

interface ArticleCardProps {
    post: PostMeta;
}

export function ArticleCard({ post }: ArticleCardProps) {
    const color = getCategoryColor(post.category);

    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <article
                className="h-full bg-white border border-border-default rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-[3px]"
                style={{ boxShadow: "0 1px 3px rgba(13,20,22,0.06), 0 1px 2px rgba(13,20,22,0.04)" }}
            >
                {/* Thumb avec placeholder gradient + lettre géante */}
                <div
                    className="relative h-[180px] flex items-center justify-center overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${color}25, ${color}05)`,
                    }}
                    aria-hidden="true"
                >
                    <span
                        className="text-8xl font-bold"
                        style={{
                            fontFamily: "var(--font-display)",
                            color,
                            opacity: 0.45,
                            fontWeight: 800,
                        }}
                    >
                        {post.title[0]}
                    </span>

                    {/* Badge catégorie en top-left */}
                    <span
                        className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full bg-white text-[11px] font-bold uppercase tracking-[0.04em]"
                        style={{ color }}
                    >
                        {post.category}
                    </span>
                </div>

                {/* Body */}
                <div className="p-[22px]">
                    <h3
                        className="text-[19px] leading-[1.3] mb-3"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.018em" }}
                    >
                        {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-secondary line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-ink-tertiary">
                        <span>{formatDateFrShort(post.date)}</span>
                        <span>·</span>
                        <span>{post.readingTime} de lecture</span>
                    </div>
                </div>
            </article>
        </Link>
    );
}