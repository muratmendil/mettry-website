"use client";

import { useEffect, useRef, useState } from "react";
import { BuildingNode } from "./nodes/BuildingNode";
import { SourceNode } from "./nodes/SourceNode";
import { MettryHub } from "./nodes/MettryHub";
import { Connectors } from "./Connectors";
import { DataPulses } from "./DataPulses";
import { ChevronDown } from "lucide-react";
import styles from "./sync-animation.module.css";

interface SyncSceneProps {
    p: number;
    isNarrow: boolean;
}

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

const PHASES = [
    { title: "Votre patrimoine", subtitle: "Chaque bâtiment, chaque compteur." },
    { title: "Enedis & GRDF", subtitle: "Les index remontent automatiquement." },
    { title: "Synchronisation", subtitle: "Tout converge vers Mettry, en direct." },
    { title: "Centralisé", subtitle: "Une seule source de vérité, en temps réel." },
];

const POSITIONS_DESKTOP = {
    enedis: { x: 0.15, y: 0.32 },
    grdf: { x: 0.15, y: 0.72 },
    building: { x: 0.43, y: 0.51 },
    hub: { x: 0.77, y: 0.51 },
};

const POSITIONS_MOBILE = {
    enedis: { x: 0.27, y: 0.18 },
    grdf: { x: 0.73, y: 0.18 },
    building: { x: 0.5, y: 0.45 },
    hub: { x: 0.5, y: 0.78 },
};

const ENEDIS_COLOR = "#0080A0";
const GRDF_COLOR = "#F5A042";
const TEAL_COLOR = "#058985";

export function SyncScene({ p, isNarrow }: SyncSceneProps) {
    const sceneRef = useRef<HTMLDivElement>(null);
    const [dims, setDims] = useState({ w: 0, h: 0 });

    useEffect(() => {
        if (!sceneRef.current) return;
        const el = sceneRef.current;
        const ro = new ResizeObserver(() => {
            setDims({ w: el.clientWidth, h: el.clientHeight });
        });
        ro.observe(el);
        setDims({ w: el.clientWidth, h: el.clientHeight });
        return () => ro.disconnect();
    }, []);

    const positions = isNarrow ? POSITIONS_MOBILE : POSITIONS_DESKTOP;
    const enedisXY = { x: positions.enedis.x * dims.w, y: positions.enedis.y * dims.h };
    const grdfXY = { x: positions.grdf.x * dims.w, y: positions.grdf.y * dims.h };
    const buildingXY = { x: positions.building.x * dims.w, y: positions.building.y * dims.h };
    const hubXY = { x: positions.hub.x * dims.w, y: positions.hub.y * dims.h };

    // === Phase 1 ===
    const buildingEnter = easeOut(seg(p, 0.02, 0.20));
    const buildingOpacity = buildingEnter * (1 - 0.35 * seg(p, 0.80, 1.0));
    const buildingY = (1 - buildingEnter) * 46;
    const buildingScale = 0.92 + buildingEnter * 0.08;
    const windowsProgress = easeOut(seg(p, 0.30, 0.55));

    // === Phase 2 ===
    const cardsEnter = easeOut(seg(p, 0.18, 0.34));
    const cardsOpacity = cardsEnter;
    const cardsY = (1 - cardsEnter) * 20;
    const valueProgress = easeOut(seg(p, 0.20, 0.55));
    const enedisValue = Math.round(487 * valueProgress);
    const grdfValue = Math.round(112 * valueProgress);
    const sourceLinesProgress = easeOut(seg(p, 0.20, 0.40));

    // === Phase 3 ===
    const hubEnter = easeOut(seg(p, 0.52, 0.68));
    const hubOpacity = hubEnter;
    const hubScale = 0.6 + hubEnter * 0.4;
    const hubLineProgress = easeOut(seg(p, 0.50, 0.72));

    // Particules
    const pulsesFadeIn = clamp(seg(p, 0.35, 0.50));
    const pulsesFadeOut = 1 - clamp(seg(p, 0.92, 1.0));
    const sourcePulsesOpacity = pulsesFadeIn * pulsesFadeOut;
    const hubPulsesOpacity = clamp(seg(p, 0.50, 0.65)) * pulsesFadeOut;

    // === Phase 4 ===
    const ringProgress = easeOut(seg(p, 0.66, 0.90));
    const checkProgress = easeOut(seg(p, 0.84, 0.97));
    const pillProgress = easeOut(seg(p, 0.78, 0.92));
    const kpiProgress = easeOut(seg(p, 0.72, 0.98));

    // Chrome
    const titleOpacity = clamp(seg(p, 0.04, 0.12)) * (1 - clamp(seg(p, 0.94, 1.0)));
    const hintOpacity = 1 - clamp(seg(p, 0.0, 0.05));
    const activePhase = Math.min(3, Math.floor(p * 4));

    return (
        <div ref={sceneRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, var(--color-teal-xlight) 60%, var(--color-teal-light) 100%)",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    top: -100,
                    left: -100,
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(0,128,160,0.15), transparent 60%)",
                    filter: "blur(60px)",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: -100,
                    right: -100,
                    width: 500,
                    height: 500,
                    background: "radial-gradient(circle, rgba(245,160,66,0.12), transparent 60%)",
                    filter: "blur(60px)",
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(rgba(13,74,77,0.04) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 75%)",
                }}
            />

            {/* Connecteurs et particules */}
            {dims.w > 0 && (
                <>
                    <Connectors
                        width={dims.w}
                        height={dims.h}
                        connectors={[
                            { from: enedisXY, to: buildingXY, color: ENEDIS_COLOR, progress: sourceLinesProgress },
                            { from: grdfXY, to: buildingXY, color: GRDF_COLOR, progress: sourceLinesProgress },
                            { from: buildingXY, to: hubXY, color: TEAL_COLOR, progress: hubLineProgress },
                        ]}
                    />
                    <DataPulses
                        lines={[
                            { id: "enedis-pulse", from: enedisXY, to: buildingXY, color: ENEDIS_COLOR, opacity: sourcePulsesOpacity },
                            { id: "grdf-pulse", from: grdfXY, to: buildingXY, color: GRDF_COLOR, opacity: sourcePulsesOpacity },
                            { id: "hub-pulse", from: buildingXY, to: hubXY, color: TEAL_COLOR, opacity: hubPulsesOpacity },
                        ]}
                    />
                </>
            )}

            {/* Titre persistant */}
            <div
                className="absolute left-1/2 -translate-x-1/2 text-center px-6 z-20"
                style={{ top: "8%", opacity: titleOpacity }}
            >
                <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4"
                    style={{ background: "var(--color-teal-light)" }}
                >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-orange)" }} />
                    <span
                        className="text-[11px] font-bold uppercase tracking-[0.14em]"
                        style={{ color: "var(--color-teal-dark)", fontFamily: "var(--font-mono)" }}
                    >
                        Synchronisation automatique
                    </span>
                </div>
                <h2
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: isNarrow ? "28px" : "44px",
                        letterSpacing: "-0.028em",
                        lineHeight: 1.1,
                        maxWidth: 600,
                        margin: "0 auto",
                    }}
                >
                    De vos compteurs à Mettry, sans saisie.
                </h2>
            </div>

            {/* Enedis */}
            <div className="absolute" style={{ left: enedisXY.x, top: enedisXY.y, transform: "translate(-50%, -50%)" }}>
                <SourceNode
                    letter="E"
                    name="Enedis"
                    energy="Électricité"
                    value={enedisValue}
                    meterLabel="23 PDL"
                    color={ENEDIS_COLOR}
                    opacity={cardsOpacity}
                    translateY={cardsY}
                />
            </div>

            {/* GRDF */}
            <div className="absolute" style={{ left: grdfXY.x, top: grdfXY.y, transform: "translate(-50%, -50%)" }}>
                <SourceNode
                    letter="G"
                    name="GRDF"
                    energy="Gaz naturel"
                    value={grdfValue}
                    meterLabel="8 PCE"
                    color={GRDF_COLOR}
                    opacity={cardsOpacity}
                    translateY={cardsY}
                />
            </div>

            {/* Bâtiment */}
            <div className="absolute" style={{ left: buildingXY.x, top: buildingXY.y, transform: "translate(-50%, -50%)" }}>
                <BuildingNode
                    opacity={buildingOpacity}
                    translateY={buildingY}
                    scale={buildingScale}
                    windowsProgress={windowsProgress}
                />
                <div
                    className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold whitespace-nowrap"
                    style={{
                        top: "calc(100% + 16px)",
                        opacity: buildingOpacity,
                        color: "var(--color-teal-dark)",
                    }}
                >
                    Votre patrimoine
                </div>
            </div>

            {/* Hub Mettry — avec toutes les progressions de phase 4 */}
            <div className="absolute" style={{ left: hubXY.x, top: hubXY.y, transform: "translate(-50%, -50%)" }}>
                <MettryHub
                    scale={hubScale}
                    opacity={hubOpacity}
                    ringProgress={ringProgress}
                    checkProgress={checkProgress}
                    pillProgress={pillProgress}
                    kpiProgress={kpiProgress}
                />
            </div>

            {/* Hint */}
            <div
                className="absolute left-1/2 -translate-x-1/2 text-center"
                style={{ bottom: "20%", opacity: hintOpacity }}
            >
                <div className="text-xs text-ink-tertiary uppercase tracking-[0.12em] mb-1">Défilez</div>
                <ChevronDown size={20} className={`text-ink-tertiary mx-auto ${styles.floatChevron}`} />
            </div>

            {/* Légendes */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center bottom-[10%] w-full max-w-md px-6 h-12">
                {PHASES.map((phase, i) => {
                    const center = (i + 0.5) / 4;
                    const phaseOpacity = clamp(1 - Math.abs(p - center) / 0.17);
                    return (
                        <div
                            key={phase.title}
                            className="absolute left-1/2 -translate-x-1/2 w-full"
                            style={{ opacity: phaseOpacity, pointerEvents: "none" }}
                        >
                            <div
                                className="text-xl font-bold mb-1"
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.018em" }}
                            >
                                {phase.title}
                            </div>
                            <div className="text-sm text-ink-secondary">{phase.subtitle}</div>
                        </div>
                    );
                })}
            </div>

            {/* Indicateur 4 points */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2">
                {[0, 1, 2, 3].map((i) => {
                    const isActive = i === activePhase;
                    return (
                        <div
                            key={i}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: isActive ? 24 : 6,
                                height: 6,
                                background: isActive ? "var(--color-teal-dark)" : "rgba(138, 149, 160, 0.3)",
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}