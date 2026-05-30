import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getCategoryByLabel } from "@/lib/categories";
import { slugify } from "@/lib/blog";

interface BreadcrumbBlogProps {
    category: string;
}

export function BreadcrumbBlog({ category }: BreadcrumbBlogProps) {
    const cat = getCategoryByLabel(category);
    const catSlug = cat?.slug ?? slugify(category);

    return (
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-sm text-ink-tertiary mb-8">
            <Link href="/" className="hover:text-ink-primary transition-colors">
                Accueil
            </Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-ink-primary transition-colors">
                Blog
            </Link>
            <ChevronRight size={12} />
            <Link
                href={`/blog/categorie/${catSlug}`}
                className="hover:text-[var(--color-teal-dark)] transition-colors font-semibold"
                style={{ color: "var(--color-teal-dark)" }}
            >
                {category}
            </Link>
        </nav>
    );
}