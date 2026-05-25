"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    /** Delay en secondes (équivalent reveal-delay-1/2/3/4 du proto = 0.06/0.12/0.18/0.24) */
    delay?: number;
    /** Désactive le `once` si tu veux que l'anim rejoue à chaque entrée */
    once?: boolean;
    y?: number;
}

const variants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export function RevealOnScroll({
    children,
    className,
    delay = 0,
    once = true,
    y = 16,
}: RevealOnScrollProps) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.08 }}
            variants={
                y === 16
                    ? variants
                    : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } }
            }
            transition={{
                duration: 0.8,
                delay,
                ease: [0.2, 0.7, 0.2, 1],
            }}
        >
            {children}
        </motion.div>
    );
}