import { BlogContent } from "@/components/blog/BlogContent";
import { getAllPosts } from "@/lib/blog";


export const metadata = {
    title: "Blog",
    description: "Guides, réglementations et bonnes pratiques sur la gestion de patrimoine immobilier, la GMAO, le Décret Tertiaire et le suivi énergétique.",
};

export default function BlogPage() {
    const posts = getAllPosts();
    return <BlogContent posts={posts} />;
}