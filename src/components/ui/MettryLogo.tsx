import { cn } from "@/lib/cn";

interface MettryLogoProps {
    className?: string;
    /** Taille du glyphe en px ; le wordmark suit proportionnellement */
    size?: number;
    /** Si true, affiche uniquement le glyphe carré (pour favicon-like usage) */
    glyphOnly?: boolean;
    /** Variante de couleur du wordmark ; le glyphe reste teal-deeper */
    tone?: "dark" | "light";
}

export function MettryLogo({
    className,
    size = 28,
    glyphOnly = false,
    tone = "dark",
}: MettryLogoProps) {
    const textColor = tone === "dark" ? "#0C1416" : "#FFFFFF";

    return (
        <span
            className={cn("inline-flex items-center gap-2", className)}
            aria-label="Mettry"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <rect width="32" height="32" rx="7" fill="#0D4A4D" />
                <path
                    d="M8 21V11l4 6 4-6v10"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
                <circle cx="23.5" cy="20.5" r="2.2" fill="#F5A042" />
            </svg>
            {!glyphOnly && (
                <span
                    className="font-display font-bold tracking-tight"
                    style={{
                        fontSize: size * 0.72,
                        color: textColor,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Mettry
                </span>
            )}
        </span>
    );
}