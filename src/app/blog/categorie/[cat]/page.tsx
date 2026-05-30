import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getAllPosts, slugify } from "@/lib/blog";
import { CATEGORY_BY_SLUG, BLOG_CATEGORIES_LIST } from "@/lib/categories";

interface Props {
    params: Promise<{ cat: string }>;
}

export async function generateStaticParams() {
    return BLOG_CATEGORIES_LIST.map((c) => ({ cat: c.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { cat } = await params;
    const category = CATEGORY_BY_SLUG[cat];
    if (!category) return {};
    return {
        title: `${category.label} — Blog`,
        description: category.description,
    };
}

export default async function BlogCategoryPage({ params }: Props) {
    const { cat } = await params;
    const category = CATEGORY_BY_SLUG[cat];
    if (!category) notFound();

    const allPosts = getAllPosts();
    const posts = allPosts.filter((p) => slugify(p.category) === cat);

    return (
        <>
            <section style={{ background: "var(--color-bg-off-white)" }} className="py-16 lg:py-24">
                <Container>
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-secondary hover:text-ink-primary mb-8 transition-colors">
                        <ArrowLeft size={14} /> Tous les articles
                    </Link>

                    <div className="max-w-3xl">
                        <Eyebrow>Catégorie</Eyebrow>
                        <h1 className="mt-6 mb-5" style={{ color: category.color }}>
                            {category.label}
                        </h1>
                        <p className="text-lg lg:text-xl max-w-[56ch]">{category.description}</p>
                        <div className="mt-6 text-sm font-mono text-ink-tertiary">
                            {posts.length} article{posts.length > 1 ? "s" : ""}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16 lg:py-20">
                <Container>
                    {posts.length === 0 ? (
                        <div className="max-w-md mx-auto text-center py-12">
                            <p className="text-ink-secondary mb-6">Pas encore d&apos;article dans cette catégorie.</p>
                            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-teal-dark)" }}>
                                Voir tous les articles
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                            {posts.map((post, i) => (
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