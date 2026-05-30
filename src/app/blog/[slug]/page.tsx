import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { ArticleProse } from "@/components/blog/ArticleProse";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BreadcrumbBlog } from "@/components/blog/BreadcrumbBlog";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { FinalCTA } from "@/components/home/FinalCTA";
import { blogMdxComponents } from "@/components/blog/mdx-components";
import { getAllPosts, getPostBySlug, getRelatedPosts, extractHeadings } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
import { getCategoryByLabel } from "@/lib/categories";
import { ArticleMetaBar } from "@/components/blog/ArticleMetaBar";
import { ArticleHeroImage } from "@/components/blog/ArticleHeroImage";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.meta.seo?.title ?? post.meta.title,
        description: post.meta.seo?.description ?? post.meta.excerpt,
        openGraph: {
            title: post.meta.title,
            description: post.meta.excerpt,
            type: "article",
            publishedTime: post.meta.date,
            authors: [getAuthor(post.meta.author).name],
        },
    };
}

export const revalidate = 3600; // ISR : revalidation toutes les heures

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const author = getAuthor(post.meta.author);
    const category = getCategoryByLabel(post.meta.category);
    const headings = extractHeadings(post.content);
    const related = getRelatedPosts(slug, 3);
    const articleUrl = `https://mettry.io/blog/${slug}`;

    const { content } = await compileMDX({
        source: post.content,
        components: blogMdxComponents,
        options: { parseFrontmatter: false },
    });

    return (
        <>
            {/* Hero header */}
            <section style={{ background: "var(--color-bg-off-white)" }} className="relative overflow-hidden pt-12 pb-10 lg:pt-16 lg:pb-12">
                <div
                    className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(5,137,133,0.1), transparent 60%)",
                        filter: "blur(60px)",
                    }}
                    aria-hidden="true"
                />
                <Container>
                    <div className="relative max-w-[1080px] mx-auto">
                        <BreadcrumbBlog category={post.meta.category} />

                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span
                                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.04em]"
                                style={{
                                    background: `${category?.color ?? "#058985"}15`,
                                    color: category?.color ?? "#058985",
                                }}
                            >
                                {post.meta.category}
                            </span>
                        </div>

                        <h1 className="mb-6" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1.08 }}>
                            {post.meta.title}
                        </h1>

                        <p className="text-lg lg:text-xl leading-relaxed text-ink-secondary max-w-[720px] mb-8">{post.meta.excerpt}</p>

                        <ArticleMetaBar author={author} date={post.meta.date} readingTime={post.meta.readingTime} url={articleUrl} title={post.meta.title} />
                    </div>
                </Container>
            </section>

            {/* Image hero placeholder */}
            <ArticleHeroImage src={post.meta.image} alt={post.meta.imageAlt ?? post.meta.title} caption={post.meta.imageAlt} />

            {/* Corps split TOC + prose */}
            <section className="py-12 lg:py-16">
                <Container>
                    <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
                        <aside className="hidden lg:block">
                            <TableOfContents headings={headings} />
                        </aside>
                        <ArticleProse>{content}</ArticleProse>
                    </div>
                </Container>
            </section>

            {/* Bio auteur + tags */}
            <section className="pb-16 lg:pb-20">
                <Container>
                    <div className="max-w-[1080px] mx-auto lg:pl-[280px]">
                        <AuthorBox author={author} />

                        {post.meta.tags.length > 0 && (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {post.meta.tags.map((t) => (
                                    <span key={t} className="px-3.5 py-1.5 rounded-full bg-bg-light text-[13px] font-medium text-ink-secondary">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            <RelatedArticles posts={related} />

            <FinalCTA />
        </>
    );
}