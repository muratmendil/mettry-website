"use client";

import { motion } from "framer-motion";
import styles from "../sync-animation.module.css";

interface BuildingNodeProps {
    opacity: number;
    translateY: number;
    scale: number;
    /** Progression d'allumage 0→1 — utilisée juste comme multiplicateur d'opacité finale */
    windowsProgress: number;
}

// Pattern de fenêtres : 5 colonnes × 6 lignes = 30 fenêtres
// 0 = éteinte (teal très clair), 1 = mi-allumée (teal moyen), 2 = pleine (teal primary)
// Pattern défini "à la main" pour matcher le look de la maquette (irrégulier mais équilibré)
const WINDOWS_PATTERN: number[] = [
    2, 2, 1, 2, 2,
    1, 2, 1, 2, 2,
    2, 2, 1, 0, 2,
    2, 1, 2, 2, 0,
    1, 2, 1, 0, 2,
    2, 2, 1, 2, 2,
];

const TEAL_LIGHT = "rgba(5,137,133,0.18)"; // teint très clair pour les fenêtres éteintes
const TEAL_MEDIUM = "rgba(5,137,133,0.55)"; // teint moyen
const TEAL_FULL = "#058985"; // teal primary plein

function colorFor(state: number, p: number) {
    // Au démarrage (p=0), tout est en TEAL_LIGHT
    // À p=1, les fenêtres prennent leur vraie couleur du pattern
    if (p <= 0) return TEAL_LIGHT;
    const target = state === 2 ? TEAL_FULL : state === 1 ? TEAL_MEDIUM : TEAL_LIGHT;
    return target;
}

export function BuildingNode({ opacity, translateY, scale, windowsProgress }: BuildingNodeProps) {
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
            {/* Capteur sur le toit */}
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: -22 }}>
                <div className="relative w-3 h-3">
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
                    style={{ top: 12, height: 10, background: "var(--color-orange)" }}
                    aria-hidden="true"
                />
            </div>

            {/* Bâtiment — plus haut et plus étroit qu'avant */}
            <div
                className="bg-white rounded-2xl flex flex-col items-center"
                style={{
                    width: 168,
                    height: 270,
                    padding: "20px 22px 16px",
                    boxShadow: "0 20px 60px -20px rgba(13,74,77,0.18), 0 1px 3px rgba(13,20,22,0.05)",
                }}
            >
                {/* Grille 5 colonnes × 6 lignes */}
                <div className="grid grid-cols-5 gap-1.5 flex-1 w-full">
                    {WINDOWS_PATTERN.map((state, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-[4px] transition-colors duration-300"
                            style={{ background: colorFor(state, windowsProgress) }}
                        />
                    ))}
                </div>

                {/* Porte d'entrée */}
                <div
                    className="rounded-t-md mt-3"
                    style={{
                        width: 22,
                        height: 22,
                        background: "var(--color-teal-deeper)",
                    }}
                />
            </div>
        </motion.div>
    );
}