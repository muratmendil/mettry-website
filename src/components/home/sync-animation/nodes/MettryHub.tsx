"use client";

import Image from "next/image";
import { Check, Zap, Wrench, ShieldCheck, RefreshCw, type LucideIcon } from "lucide-react";

interface MettryHubProps {
    scale: number;
    opacity: number;
    /** Progression de l'anneau (0 → 1) */
    ringProgress: number;
    /** Apparition de la coche (0 → 1) */
    checkProgress: number;
    /** Apparition du pill "Synchronisé" (0 → 1) */
    pillProgress: number;
    /** Apparition des 4 puces KPI, en stagger */
    kpiProgress: number;
}

const HUB_SIZE = 96;
const RING_RADIUS = HUB_SIZE / 2 + 8;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

interface Kpi {
    icon: LucideIcon;
    label: string;
    /** Position relative au centre du hub (x, y en px) */
    x: number;
    y: number;
    iconColor: string;
}

const KPIS: Kpi[] = [
    { icon: Zap, label: "−12% énergie", x: -130, y: -50, iconColor: "#F5A042" },
    { icon: Wrench, label: "GMAO à jour", x: 80, y: -70, iconColor: "#058985" },
    { icon: ShieldCheck, label: "OPERAT prêt", x: -130, y: 50, iconColor: "#7A5AE0" },
    { icon: RefreshCw, label: "0 saisie manuelle", x: 90, y: 75, iconColor: "#0080A0" },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function MettryHub({ scale, opacity, ringProgress, checkProgress, pillProgress, kpiProgress }: MettryHubProps) {
    const ringDashoffset = RING_CIRCUMFERENCE * (1 - ringProgress);
    const svgSize = (RING_RADIUS + 4) * 2;

    return (
        <div
            style={{
                opacity,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                willChange: "transform, opacity",
            }}
            className="relative"
        >
            {/* Anneau SVG */}
            <svg
                width={svgSize}
                height={svgSize}
                className="absolute pointer-events-none"
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
            >
                <circle
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={RING_RADIUS}
                    fill="none"
                    stroke="rgba(13,74,77,0.08)"
                    strokeWidth={3}
                />
                <circle
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={RING_RADIUS}
                    fill="none"
                    stroke="var(--color-teal-primary)"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={ringDashoffset}
                    style={{
                        transition: "stroke-dashoffset 0.05s linear",
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                    }}
                />
            </svg>

            {/* Cercle blanc avec logo */}
            <div
                className="relative bg-white rounded-full flex items-center justify-center overflow-hidden"
                style={{
                    width: HUB_SIZE,
                    height: HUB_SIZE,
                    boxShadow: "0 20px 50px -10px rgba(13,74,77,0.25), 0 1px 3px rgba(13,20,22,0.08)",
                }}
            >
                <Image
                    src="/logo-mettry.png"
                    alt="Mettry"
                    width={HUB_SIZE * 0.62}
                    height={HUB_SIZE * 0.62}
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>

            {/* Coche verte de validation (bas-droite du hub) */}
            <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                    width: 28,
                    height: 28,
                    background: "var(--color-success)",
                    border: "2px solid white",
                    boxShadow: "0 4px 12px rgba(7,188,12,0.3)",
                    right: -4,
                    bottom: -4,
                    opacity: checkProgress,
                    transform: `scale(${0.4 + checkProgress * 0.6})`,
                    transformOrigin: "center",
                }}
            >
                <Check size={14} className="text-white" strokeWidth={3} />
            </div>

            {/* Pill "Synchronisé · temps réel" */}
            <div
                className="absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap"
                style={{
                    background: "var(--color-teal-deeper)",
                    top: "calc(100% + 24px)",
                    opacity: pillProgress,
                    transform: `translate(-50%, ${(1 - pillProgress) * 10}px)`,
                }}
            >
                <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                        background: "var(--color-success)",
                        animation: "pulseDot 1.5s ease-in-out infinite",
                    }}
                />
                <span className="text-[11px] font-bold text-white tracking-wide">Synchronisé · temps réel</span>
            </div>

            {/* 4 puces KPI en stagger autour du hub */}
            {KPIS.map((kpi, i) => {
                // Stagger : chaque puce a son propre seuil d'apparition
                const kpiStart = i * 0.18;
                const kpiEnter = easeOut(clamp((kpiProgress - kpiStart) / (1 - kpiStart)));
                const Icon = kpi.icon;
                return (
                    <div
                        key={kpi.label}
                        className="absolute bg-white rounded-full flex items-center gap-2 px-3 py-1.5 whitespace-nowrap"
                        style={{
                            left: "50%",
                            top: "50%",
                            transform: `translate(calc(-50% + ${kpi.x}px), calc(-50% + ${kpi.y}px)) scale(${0.6 + kpiEnter * 0.4})`,
                            opacity: kpiEnter,
                            boxShadow: "0 4px 16px rgba(13,74,77,0.12), 0 1px 3px rgba(13,20,22,0.06)",
                        }}
                    >
                        <Icon size={12} style={{ color: kpi.iconColor }} />
                        <span className="text-[11px] font-semibold text-ink-primary">{kpi.label}</span>
                    </div>
                );
            })}
        </div>
    );
}