import { cn } from "@/lib/cn";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    tight?: boolean;
    id?: string;
    as?: "section" | "div";
}

export function Section({
    children,
    className,
    tight = false,
    id,
    as: Tag = "section",
}: SectionProps) {
    return (
        <Tag
            id={id}
            className={cn("relative", className)}
            style={{
                paddingTop: tight ? "calc(var(--section-y) * 0.6)" : "var(--section-y)",
                paddingBottom: tight ? "calc(var(--section-y) * 0.6)" : "var(--section-y)",
            }}
        >
            {children}
        </Tag>
    );
}