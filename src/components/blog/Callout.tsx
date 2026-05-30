import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/cn";

type CalloutType = "info" | "warning" | "tip";

interface CalloutProps {
    type?: CalloutType;
    title?: string;
    children: React.ReactNode;
}

const CONFIG: Record<CalloutType, { color: string; bg: string; icon: typeof Info; defaultTitle: string }> = {
    info: {
        color: "var(--color-teal-primary)",
        bg: "var(--color-teal-xlight)",
        icon: Info,
        defaultTitle: "En clair",
    },
    warning: {
        color: "#F5A042",
        bg: "var(--color-orange-light)",
        icon: AlertTriangle,
        defaultTitle: "Attention",
    },
    tip: {
        color: "#07BC0C",
        bg: "rgba(7,188,12,0.08)",
        icon: Lightbulb,
        defaultTitle: "Astuce",
    },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
    const config = CONFIG[type];
    const Icon = config.icon;
    const displayTitle = title ?? config.defaultTitle;

    return (
        <aside
            className={cn("not-prose my-7 rounded-r-card overflow-hidden")}
            style={{
                background: config.bg,
                borderLeft: `3px solid ${config.color}`,
                padding: "18px 22px",
            }}
        >
            <div className="flex items-center gap-2 mb-2">
                <Icon size={16} style={{ color: config.color }} />
                <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: config.color, fontFamily: "var(--font-mono)" }}
                >
                    {displayTitle}
                </span>
            </div>
            <div className="text-[15.5px] leading-[1.6] text-ink-primary callout-content">
                {children}
            </div>
        </aside>
    );
}