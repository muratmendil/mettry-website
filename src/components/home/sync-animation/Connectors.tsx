"use client";

interface Point {
    x: number;
    y: number;
}

interface Connector {
    from: Point;
    to: Point;
    color: string;
    /** Progress 0→1 du tracé */
    progress: number;
}

interface ConnectorsProps {
    width: number;
    height: number;
    connectors: Connector[];
}

export function Connectors({ width, height, connectors }: ConnectorsProps) {
    return (
        <svg
            className="absolute inset-0 pointer-events-none"
            width={width}
            height={height}
            style={{ overflow: "visible" }}
            aria-hidden="true"
        >
            {connectors.map((c, i) => {
                const dx = c.to.x - c.from.x;
                const dy = c.to.y - c.from.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const dashOffset = length * (1 - c.progress);

                return (
                    <line
                        key={i}
                        x1={c.from.x}
                        y1={c.from.y}
                        x2={c.to.x}
                        y2={c.to.y}
                        stroke={c.color}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeDasharray={length}
                        strokeDashoffset={dashOffset}
                        style={{ transition: "stroke-dashoffset 0.05s linear" }}
                    />
                );
            })}
        </svg>
    );
}