"use client";

import { motion } from "framer-motion";
import styles from "../sync-animation.module.css";

interface BuildingNodeProps {
    opacity: number;
    translateY: number;
    scale: number;
    windowsProgress: number;
    isNarrow: boolean;
}

const WINDOWS_PATTERN: number[] = [
    2, 2, 1, 2, 2,
    1, 2, 1, 2, 2,
    2, 2, 1, 0, 2,
    2, 1, 2, 2, 0,
    1, 2, 1, 0, 2,
    2, 2, 1, 2, 2,
];

const TEAL_LIGHT = "rgba(5,137,133,0.18)";
const TEAL_MEDIUM = "rgba(5,137,133,0.55)";
const TEAL_FULL = "#058985";

function colorFor(state: number, p: number) {
    if (p <= 0) return TEAL_LIGHT;
    return state === 2 ? TEAL_FULL : state === 1 ? TEAL_MEDIUM : TEAL_LIGHT;
}

export function BuildingNode({ opacity, translateY, scale, windowsProgress, isNarrow }: BuildingNodeProps) {
    const width = isNarrow ? 110 : 168;
    const height = isNarrow ? 180 : 270;
    const padding = isNarrow ? "14px 16px 12px" : "20px 22px 16px";
    const sensorOffset = isNarrow ? -16 : -22;
    const sensorSize = isNarrow ? 10 : 12;
    const doorSize = isNarrow ? 16 : 22;

    return (
        <motion.div
            className="relative"
            style={{
                opacity,
                transform: `translateY(${translateY}px) scale(${scale})`,
                transformOrigin: "center bottom",
                willChange: "transform, opacity",
            }}
        >
            {/* Capteur */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: sensorOffset }}>
                <div className="relative" style={{ width: sensorSize, height: sensorSize }}>
                    <div
                        className={`absolute inset-0 rounded-full ${styles.sensorHalo}`}
                        style={{ background: "var(--color-orange)" }}
                        aria-hidden="true"
                    />
                    <div
                        className={`absolute inset-0 rounded-full ${styles.sensorPulse}`}
                        style={{ background: "var(--color-orange)" }}
                        aria-hidden="true"
                    />
                </div>
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-px"
                    style={{ top: sensorSize, height: isNarrow ? 7 : 10, background: "var(--color-orange)" }}
                    aria-hidden="true"
                />
            </div>

            {/* Bâtiment */}
            <div
                className="bg-white rounded-2xl flex flex-col items-center"
                style={{
                    width,
                    height,
                    padding,
                    boxShadow: "0 20px 60px -20px rgba(13,74,77,0.18), 0 1px 3px rgba(13,20,22,0.05)",
                }}
            >
                <div className={`grid grid-cols-5 ${isNarrow ? "gap-1" : "gap-1.5"} flex-1 w-full`}>
                    {WINDOWS_PATTERN.map((state, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-[3px] transition-colors duration-300"
                            style={{ background: colorFor(state, windowsProgress) }}
                        />
                    ))}
                </div>

                <div
                    className="rounded-t-md"
                    style={{
                        width: doorSize,
                        height: doorSize,
                        marginTop: isNarrow ? 6 : 12,
                        background: "var(--color-teal-deeper)",
                    }}
                />
            </div>
        </motion.div>
    );
}