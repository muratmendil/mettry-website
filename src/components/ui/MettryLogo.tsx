import Image from "next/image";
import { cn } from "@/lib/cn";

interface MettryLogoProps {
    className?: string;
    size?: number;
    variant?: "glyph" | "full";
    color?: string;
}

export function MettryLogo({
    className,
    size = 28,
    variant = "full",
    color,
}: MettryLogoProps) {
    const showWordmark = variant === "full";
    const wordmarkColor = color ?? "#0C1416";
    const glyphAlt = showWordmark ? "" : "Mettry";

    return (
        <span
            className={cn("inline-flex items-center", className)}
            style={showWordmark ? { gap: size * 0.3 } : undefined}
        >
            <span className="inline-flex shrink-0" style={{ width: size, height: size }}>
                <Image
                    src="/logo-mettry.png"
                    alt={glyphAlt}
                    width={size}
                    height={size}
                    style={{ objectFit: "contain", width: size, height: size }}
                    aria-hidden={showWordmark ? true : undefined}
                />
            </span>

            {showWordmark && (
                <span
                    className="font-display"
                    style={{
                        fontSize: size * 0.72,
                        color: wordmarkColor,
                        letterSpacing: "-0.035em",
                        fontWeight: 800,
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