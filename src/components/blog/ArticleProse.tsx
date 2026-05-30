import { cn } from "@/lib/cn";

interface ArticleProseProps {
    children: React.ReactNode;
    className?: string;
}

export function ArticleProse({ children, className }: ArticleProseProps) {
    return <div className={cn("article-prose", className)}>{children}</div>;
}