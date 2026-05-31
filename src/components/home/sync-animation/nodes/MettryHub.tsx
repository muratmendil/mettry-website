"use client";

import Image from "next/image";
import { Check, Zap, Wrench, ShieldCheck, RefreshCw, type LucideIcon } from "lucide-react";

interface MettryHubProps {
    scale: number;
    opacity: number;
    ringProgress: number;
    checkProgress: number;
    pillProgress: number;
    kpiProgress: number;
    compact?: boolean;
}

interface Kpi {
    icon: LucideIcon;
    label: string;
    /** Position relative au centre du hub (x, y en px) — adapté selon compact */
    x: number;
    y: number;
    xCompact: number;
    yCompact: number;
    iconColor: string;
}

const KPIS: Kpi[] = [
    { icon: Zap, label: "−12% énergie", x: -130, y: -50, xCompact: -85, yCompact: -42, iconColor: "#F5A042" },
    { icon: Wrench, label: "GMAO à jour", x: 80, y: -70, xCompact: 70, yCompact: -50, iconColor: "#058985" },
    { icon: ShieldCheck, label: "OPERAT prêt", x: -130, y: 50, xCompact: -80, yCompact: 42, iconColor: "#7A5AE0" },
    { icon: RefreshCw, label: "0 saisie manuelle", x: 90, y: 75, xCompact: 75, yCompact: 50, iconColor: "#0080A0" },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function MettryHub({ scale, opacity, ringProgress, checkProgress, pillProgress, kpiProgress, compact = false }: MettryHubProps) {
    const hubSize = compact ? 64 : 96;
    const ringRadius = hubSize / 2 + (compact ? 6 : 8);
    const ringCircumference = 2 * Math.PI * ringRadius;
    const ringDashoffset = ringCircumference * (1 - ringProgress);
    const svgSize = (ringRadius + 4) * 2;
    const logoSize = hubSize * 0.62;
    const checkSize = compact ? 20 : 28;
    const kpiFontSize = compact ? 9 : 11;
    const kpiIconSize = compact ? 10 : 12;
    const kpiPad = compact ? "4px 8px" : "6px 12px";

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
            <svg
                width={svgSize}
                height={svgSize}
                className="absolute pointer-events-none"
                style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
            >
                <circle cx={svgSize / 2} cy={svgSize / 2} r={ringRadius} fill="none" stroke="rgba(13,74,77,0.08)" strokeWidth={3} />
                <circle
                    cx={svgSize / 2}
                    cy={svgSize / 2}
                    r={ringRadius}
                    fill="none"
                    stroke="var(--color-teal-primary)"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeDasharray={ringCircumference}
                    strokeDashoffset={ringDashoffset}
                    style={{ transition: "stroke-dashoffset 0.05s linear", transform: "rotate(-90deg)", transformOrigin: "center" }}
                />
            </svg>

            <div
                className="relative bg-white rounded-full flex items-center justify-center overflow-hidden"
                style={{
                    width: hubSize,
                    height: hubSize,
                    boxShadow: "0 20px 50px -10px rgba(13,74,77,0.25), 0 1px 3px rgba(13,20,22,0.08)",
                }}
            >
                <Image src="/logo-mettry.png" alt="Mettry" width={logoSize} height={logoSize} style={{ objectFit: "contain" }} priority />
            </div>

            {/* Coche */}
            <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                    width: checkSize,
                    height: checkSize,
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
                <Check size={compact ? 11 : 14} className="text-white" strokeWidth={3} />
            </div>

            {/* Pill */}
            <div
                className="absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap"
                style={{
                    background: "var(--color-teal-deeper)",
                    top: `calc(100% + ${compact ? 18 : 24}px)`,
                    opacity: pillProgress,
                    transform: `translate(-50%, ${(1 - pillProgress) * 10}px)`,
                }}
            >
                <span
                    className="rounded-full"
                    style={{
                        width: compact ? 5 : 6,
                        height: compact ? 5 : 6,
                        background: "var(--color-success)",
                        animation: "pulseDot 1.5s ease-in-out infinite",
                    }}
                />
                <span
                    className="font-bold text-white tracking-wide"
                    style={{ fontSize: compact ? 9 : 11 }}
                >
                    Synchronisé · temps réel
                </span>
            </div>

            {/* KPIs */}
            {KPIS.map((kpi, i) => {
                const kpiStart = i * 0.18;
                const kpiEnter = easeOut(clamp((kpiProgress - kpiStart) / (1 - kpiStart)));
                const Icon = kpi.icon;
                const x = compact ? kpi.xCompact : kpi.x;
                const y = compact ? kpi.yCompact : kpi.y;
                return (
                    <div
                        key={kpi.label}
                        className="absolute bg-white rounded-full flex items-center gap-1.5 whitespace-nowrap"
                        style={{
                            left: "50%",
                            top: "50%",
                            padding: kpiPad,
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${0.6 + kpiEnter * 0.4})`,
                            opacity: kpiEnter,
                            boxShadow: "0 4px 16px rgba(13,74,77,0.12), 0 1px 3px rgba(13,20,22,0.06)",
                        }}
                    >
                        <Icon size={kpiIconSize} style={{ color: kpi.iconColor }} />
                        <span className="font-semibold text-ink-primary" style={{ fontSize: kpiFontSize }}>
                            {kpi.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}