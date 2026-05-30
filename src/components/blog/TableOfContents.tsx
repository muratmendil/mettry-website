"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface Heading {
    id: string;
    text: string;
}

interface TableOfContentsProps {
    headings: Heading[];
}

const ACTIVE_CLS = "border-[var(--color-teal-primary)] bg-[var(--color-teal-xlight)] text-[var(--color-teal-dark)] font-semibold";
const INACTIVE_CLS = "border-transparent text-ink-tertiary hover:text-ink-primary";

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

    useEffect(() => {
        if (headings.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    const topMost = visible.reduce((acc, e) => (acc.boundingClientRect.top < e.boundingClientRect.top ? acc : e));
                    setActiveId(topMost.target.id);
                }
            },
            { rootMargin: "-80px 0px -65% 0px", threshold: 0 }
        );

        headings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveId(id);
    };

    if (headings.length === 0) return null;

    return (
        <nav aria-label="Sommaire de l'article" className="sticky top-[100px]">
            <div className="text-[11px] uppercase tracking-[0.08em] font-semibold text-ink-tertiary mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                Sommaire
            </div>
            <ul className="flex flex-col gap-0.5">
                {headings.map((h) => {
                    const isActive = activeId === h.id;
                    const linkCls = cn("block py-2 px-3 text-sm transition-all duration-200 border-l-2", isActive ? ACTIVE_CLS : INACTIVE_CLS);
                    return (
                        <li key={h.id}>
                            <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)} className={linkCls}>
                                {h.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}