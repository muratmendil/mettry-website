import { cn } from "@/lib/cn";

type BadgeTone = "default" | "orange" | "success";

interface BadgeProps {
    children: React.ReactNode;
    tone?: BadgeTone;
    withDot?: boolean;
    className?: string;
}

const tones: Record<BadgeTone, string> = {
    default:
        "bg-[var(--accent-light)] text-[var(--accent-dark)] border-[var(--accent-xlight)]",
    orange:
        "bg-orange-light text-[#B0651F] border-[rgba(245,160,66,0.2)]",
    success:
        "bg-[rgba(7,188,12,0.08)] text-[#0a7d11] border-[rgba(7,188,12,0.2)]",
};

const dotColors: Record<BadgeTone, string> = {
    default: "bg-orange",
    orange: "bg-orange",
    success: "bg-success",
};

export function Badge({
    children,
    tone = "default",
    withDot = false,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 px-[11px] py-[5px] rounded-full border",
                "text-xs font-semibold",
                tones[tone],
                className
            )}
        >
            {withDot && (
                <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[tone])} />
            )}
            {children}
        </span>
    );
}