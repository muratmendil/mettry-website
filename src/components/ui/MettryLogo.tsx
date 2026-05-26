import { cn } from "@/lib/cn";

interface MettryLogoProps {
    className?: string;
    size?: number;
    glyphOnly?: boolean;
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
            {/* Glyphe — remplace ce SVG par le tien quand tu l'auras */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <rect width="32" height="32" rx="7" fill="#0D4A4D" />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#FFFFFF"
                    fontFamily="var(--font-display)"
                    fontSize="18"
                    fontWeight="800"
                    dx="-2"
                    letterSpacing="-1"
                >
                    M
                </text>
                <circle cx="22.5" cy="22" r="1.8" fill="#F5A042" />
            </svg>

            {!glyphOnly && (
                <span
                    className="font-display"
                    style={{
                        fontSize: size * 0.7,
                        color: textColor,
                        letterSpacing: "-0.025em",
                        fontWeight: 700,
                        lineHeight: 1,
                    }}
                >
                    mettry
                    <span style={{ color: "#F5A042" }}>.</span>
                </span>
            )}
        </span>
    );
}