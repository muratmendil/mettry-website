import { getFeaturedPost, getNonFeaturedPosts } from "@/lib/blog";
import { BlogContent } from "@/components/blog/BlogContent";

export const metadata = {
    title: "Blog",
    description:
        "Guides, réglementations et bonnes pratiques sur la gestion de patrimoine immobilier, la GMAO, le Décret Tertiaire et le suivi énergétique.",
};

export default function BlogPage() {
    const featured = getFeaturedPost();
    const posts = getNonFeaturedPosts();
    return <BlogContent featured={featured} posts={posts} />;
}