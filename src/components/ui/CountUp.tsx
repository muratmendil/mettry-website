"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    to: number;
    duration?: number;
    /** Nombre de décimales */
    decimals?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export function CountUp({
    to,
    duration = 1500,
    decimals = 0,
    prefix = "",
    suffix = "",
    className,
}: CountUpProps) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const start = performance.now();
                        const animate = (now: number) => {
                            const t = Math.min((now - start) / duration, 1);
                            const eased = 1 - (1 - t) ** 3;
                            setValue(to * eased);
                            if (t < 1) requestAnimationFrame(animate);
                        };
                        requestAnimationFrame(animate);
                    }
                });
            },
            { threshold: 0.3 }
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, [to, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {value.toLocaleString("fr-FR", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}
            {suffix}
        </span>
    );
}