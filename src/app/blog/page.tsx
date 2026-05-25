import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";

export const metadata = {
    title: "Blog · Mettry",
    description: "Guides, études de cas et analyses sur la gestion de patrimoine immobilier, la GMAO, le Décret Tertiaire et le suivi énergétique.",
};

const CATEGORY_COLORS: Record<string, string> = {
    "Décret Tertiaire": "#0D4A4D",
    "GMAO": "#058985",
    "Énergie": "#F5A042",
    "Guides": "#7A5AE0",
    "Études de cas": "#3498DB",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <Section>
            <Container>
                <div className="max-w-3xl mb-14">
                    <Eyebrow>Blog</Eyebrow>
                    <h1 className="mt-6">Le terrain, par ceux qui le pratiquent.</h1>
                    <p className="mt-6 text-lg lg:text-xl max-w-[56ch]">
                        Guides, retours d&apos;expérience et analyses sur la gestion de patrimoine
                        immobilier, écrits par notre équipe et nos clients.
                    </p>
                </div>

                {/* Filtres catégories */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
                    {BLOG_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-bg-off-white text-ink-secondary hover:bg-border-default transition-colors"
                            type="button"
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grille articles */}
                {posts.length === 0 ? (
                    <p className="text-ink-secondary">Pas encore d&apos;article — le blog démarre bientôt.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => {
                            const color = CATEGORY_COLORS[post.category] ?? "#058985";
                            return (
                                <RevealOnScroll key={post.slug} delay={(i % 3) * 0.08}>
                                    <Link href={`/blog/${post.slug}`} className="group block h-full">
                                        <article className="h-full bg-white border border-border-default rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                                            <div
                                                className="aspect-[16/10] flex items-center justify-center"
                                                style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
                                            >
                                                <span
                                                    className="text-7xl font-bold text-white/90"
                                                    style={{ fontFamily: "var(--font-display)" }}
                                                >
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
    );
}