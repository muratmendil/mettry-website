import { cn } from "@/lib/cn";

interface EyebrowProps {
    children: React.ReactNode;
    className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2",
                "px-3 py-1.5 rounded-full",
                "text-xs font-semibold uppercase tracking-[0.08em]",
                "text-[var(--accent-dark)] bg-[var(--accent-light)]",
                "border border-[var(--accent-xlight)]",
                "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-orange",
                className
            )}
        >
            {children}
        </span>
    );
}