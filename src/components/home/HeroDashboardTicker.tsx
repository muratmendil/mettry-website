"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TICKER_ITEMS = [
    { color: "#07BC0C", label: "Site Lyon-Tertiaire", value: "−14% conso. vs N-1" },
    { color: "#F5A042", label: "Ticket #4827", value: "Climatisation B3 · résolu en 2h" },
    { color: "#058985", label: "OPERAT", value: "Export 12/15 sites prêt" },
];

export function HeroDashboardTicker() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((p) => (p + 1) % TICKER_ITEMS.length), 3200);
        return () => clearInterval(id);
    }, []);

    const item = TICKER_ITEMS[i];

    return (
        <div className="h-9 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                    className="flex items-center gap-2.5"
                >
                    <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: item.color, animation: "pulseDot 2s ease-in-out infinite" }}
                    />
                    <span className="text-xs text-ink-tertiary">{item.label}</span>
                    <span className="text-xs font-semibold text-ink-primary">{item.value}</span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}