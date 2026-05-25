import { cn } from "@/lib/cn";

interface SparklineProps {
    points: number[];
    width?: number;
    height?: number;
    className?: string;
    stroke?: string;
    fill?: string;
    /** Anime stroke-dasharray au mount (style proto) */
    animated?: boolean;
}

export function Sparkline({
    points,
    width = 120,
    height = 32,
    className,
    stroke = "var(--accent)",
    fill,
    animated = true,
}: SparklineProps) {
    if (points.length < 2) return null;

    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const stepX = width / (points.length - 1);

    const coords = points.map((p, i) => {
        const x = i * stepX;
        const y = height - ((p - min) / range) * height * 0.85 - height * 0.075;
        return [x, y] as const;
    });

    const d = coords.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(" ");
    const dFill = `${d} L${width},${height} L0,${height} Z`;

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className={cn("overflow-visible", className)}
            aria-hidden="true"
        >
            {fill && <path d={dFill} fill={fill} opacity="0.18" />}
            <path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={
                    animated
                        ? {
                            strokeDasharray: 400,
                            strokeDashoffset: 400,
                            animation: "drawLine 1.6s ease-out 0.3s forwards",
                        }
                        : undefined
                }
            />
        </svg>
    );
}