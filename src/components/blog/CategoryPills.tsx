"use client";

import { cn } from "@/lib/cn";
import { CATEGORY_PILLS } from "@/lib/categories";

interface CategoryPillsProps {
    active: string | null;
    onSelect: (slug: string | null) => void;
}

export function CategoryPills({ active, onSelect }: CategoryPillsProps) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center max-w-3xl">
                {CATEGORY_PILLS.map((cat) => {
                    const isActive = active === cat.slug;
                    return (
                        <button
                            key={cat.label}
                            type="button"
                            onClick={() => onSelect(cat.slug)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
                                isActive
                                    ? "text-white"
                                    : "bg-bg-light text-ink-secondary border border-border-default hover:border-ink-tertiary hover:text-ink-primary"
                            )}
                            style={isActive ? { background: "var(--color-teal-primary)" } : undefined}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}