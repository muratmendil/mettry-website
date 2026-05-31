"use client";

import styles from "./sync-animation.module.css";

interface Point {
    x: number;
    y: number;
}

interface PulseLine {
    from: Point;
    to: Point;
    color: string;
    /** Opacité globale (pilotée par le scroll : visible seulement quand la phase est active) */
    opacity: number;
    /** Identifiant unique pour la ligne (pour les keys) */
    id: string;
}

interface DataPulsesProps {
    lines: PulseLine[];
}

const PARTICLES_PER_LINE = 4;
const DELAY_STEP = 0.42; // 1.7s animation / 4 particules

export function DataPulses({ lines }: DataPulsesProps) {
    return (
        <>
            {lines.map((line) => {
                const dx = line.to.x - line.from.x;
                const dy = line.to.y - line.from.y;

                return (
                    <div
                        key={line.id}
                        className="absolute pointer-events-none"
                        style={{ opacity: line.opacity, transition: "opacity 0.2s linear" }}
                    >
                        {Array.from({ length: PARTICLES_PER_LINE }).map((_, i) => (
                            <div
                                key={i}
                                className={`absolute rounded-full ${styles.pulseTravel}`}
                                style={{
                                    left: line.from.x - 4,
                                    top: line.from.y - 4,
                                    width: 8,
                                    height: 8,
                                    background: line.color,
                                    boxShadow: `0 0 12px ${line.color}, 0 0 4px ${line.color}`,
                                    // Variables CSS lues par @keyframes pulseTravel
                                    ["--dx" as string]: `${dx}px`,
                                    ["--dy" as string]: `${dy}px`,
                                    ["--delay" as string]: `${i * DELAY_STEP}s`,
                                }}
                            />
                        ))}
                    </div>
                );
            })}
        </>
    );
}