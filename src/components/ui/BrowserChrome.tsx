import { cn } from "@/lib/cn";

interface BrowserChromeProps {
    children: React.ReactNode;
    className?: string;
    /** URL affichée dans la barre d'adresse */
    url?: string;
    /** Si true, ombre xl pour les hero shots ; sinon ombre card */
    hero?: boolean;
}

export function BrowserChrome({
    children,
    className,
    url = "app.mettry.io",
    hero = false,
}: BrowserChromeProps) {
    return (
        <div
            className={cn(
                "rounded-card overflow-hidden bg-white border border-border-default",
                hero
                    ? "shadow-[var(--shadow-xl-mettry)]"
                    : "shadow-[var(--shadow-lg-mettry)]",
                className
            )}
        >
            {/* Barre titre */}
            <div className="flex items-center gap-3 px-3.5 py-2.5 bg-bg-off-white border-b border-border-default">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* URL bar centrée */}
                <div className="flex-1 flex justify-center">
                    <div
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-md",
                            "bg-white border border-border-default",
                            "text-xs font-mono text-ink-tertiary"
                        )}
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                            aria-hidden="true"
                        />
                        {url}
                    </div>
                </div>

                {/* Spacer droit pour symétrie */}
                <div className="w-[54px]" aria-hidden="true" />
            </div>

            {/* Contenu */}
            <div>{children}</div>
        </div>
    );
}