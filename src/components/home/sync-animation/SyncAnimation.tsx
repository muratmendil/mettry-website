"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SyncScene } from "./SyncScene";

export function SyncAnimation() {
    const outerRef = useRef<HTMLDivElement>(null);
    const [p, setP] = useState(0);
    const [isNarrow, setIsNarrow] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Détection mobile + reduced motion
    useEffect(() => {
        const checkNarrow = () => setIsNarrow(window.innerWidth < 760);
        const mediaPref = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaPref.matches);

        checkNarrow();
        window.addEventListener("resize", checkNarrow, { passive: true });

        const onPrefChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaPref.addEventListener("change", onPrefChange);

        return () => {
            window.removeEventListener("resize", checkNarrow);
            mediaPref.removeEventListener("change", onPrefChange);
        };
    }, []);

    // Scroll progress de 0 (début du conteneur en haut du viewport) à 1 (fin du conteneur quand on quitte la sticky scene)
    const { scrollYProgress } = useScroll({
        target: outerRef,
        offset: ["start start", "end end"],
    });

    // On synchronise avec un state pour pouvoir l'utiliser dans le rendu
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setP(latest);
    });

    // Mode reduced-motion : version statique
    if (prefersReducedMotion) {
        return (
            <section className="relative h-[80vh] overflow-hidden">
                <SyncScene p={1} isNarrow={isNarrow} />
            </section>
        );
    }

    return (
        <section ref={outerRef} className="relative" style={{ height: "300vh" }}>
            <div className="sticky top-0 h-screen overflow-hidden">
                <SyncScene p={p} isNarrow={isNarrow} />
            </div>
        </section>
    );
}