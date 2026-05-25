import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return {
        title: `${post.meta.title} · Mettry`,
        description: post.meta.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const { content } = await compileMDX({
        source: post.content,
        components: mdxComponents,
    });

    const postJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.meta.title,
        description: post.meta.excerpt,
        datePublished: post.meta.date,
        author: { "@type": "Organization", name: "Mettry" },
        publisher: { "@type": "Organization", name: "Mettry", logo: { "@type": "ImageObject", url: "https://mettry.io/opengraph-image" } },
    };

    <JsonLd id="post-jsonld" data={postJsonLd} />

    return (
        <>
            <Section>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-dark)] mb-8 hover:underline"
                        >
                            <ArrowLeft size={14} /> Tous les articles
                        </Link>

                        <div className="flex items-center gap-3 mb-6 text-xs text-ink-tertiary">
                            <span className="font-semibold uppercase tracking-wider text-[var(--accent-dark)]">
                                {post.meta.category}
                            </span>
                            <span>·</span>
                            <span>{new Date(post.meta.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                            <span>·</span>
                            <span>{post.meta.readingTime} de lecture</span>
                        </div>

                        <h1 className="mb-6">{post.meta.title}</h1>
                        <p className="text-lg lg:text-xl text-ink-secondary mb-10">{post.meta.excerpt}</p>

                        <article className="prose-mettry">{content}</article>
                    </div>
                </Container>
            </Section>

            <FinalCTA />
        </>
    );
}

const mdxComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="mt-10 mb-5" {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="mt-10 mb-4 text-3xl" {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-8 mb-3" {...props} />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="my-4 text-lg leading-relaxed" {...props} />,
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="my-4 pl-6 list-disc flex flex-col gap-2 text-lg" {...props} />,
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="my-4 pl-6 list-decimal flex flex-col gap-2 text-lg" {...props} />,
    li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
    strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-ink-primary" {...props} />,
};