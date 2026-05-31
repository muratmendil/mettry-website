"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SyncScene } from "./SyncScene";

export function SyncAnimation() {
    const outerRef = useRef<HTMLDivElement>(null);
    const [p, setP] = useState(0);
    const [isNarrow, setIsNarrow] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

    const { scrollYProgress } = useScroll({
        target: outerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setP(latest);
    });

    if (prefersReducedMotion) {
        return (
            <section className="relative h-[80vh] overflow-hidden">
                <SyncScene p={1} isNarrow={isNarrow} />
            </section>
        );
    }

    // Hauteur réduite sur mobile : 220vh (au lieu de 300vh) → scroll plus court, mieux pour les petits écrans
    const heightVh = isNarrow ? 220 : 300;

    return (
        <section ref={outerRef} className="relative" style={{ height: `${heightVh}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden">
                <SyncScene p={p} isNarrow={isNarrow} />
            </div>
        </section>
    );
}