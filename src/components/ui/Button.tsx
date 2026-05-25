import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline" | "on-dark";
type Size = "sm" | "default" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    asChild?: boolean;
}

const base =
    "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap " +
    "transition-[background,transform,box-shadow] duration-200 ease-out " +
    "disabled:opacity-50 disabled:pointer-events-none " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

const variants: Record<Variant, string> = {
    primary:
        "bg-[var(--accent)] text-white " +
        "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_1px_2px_rgba(5,137,133,0.4),0_8px_18px_-6px_rgba(5,137,133,0.4)] " +
        "hover:bg-[var(--accent-dark)] hover:-translate-y-px " +
        "hover:shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_2px_4px_rgba(5,137,133,0.5),0_12px_28px_-6px_rgba(5,137,133,0.55)] " +
        "active:translate-y-0",
    ghost:
        "bg-transparent text-ink-primary border border-[1.5px] border-border-default " +
        "hover:bg-bg-light hover:border-[rgba(13,74,77,0.18)] hover:-translate-y-px",
    outline:
        "bg-transparent text-[var(--accent-dark)] border border-[1.5px] border-current " +
        "hover:bg-[var(--accent-xlight)] hover:-translate-y-px",
    "on-dark":
        "bg-white text-ink-primary " +
        "shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_24px_-6px_rgba(0,0,0,0.35)] " +
        "hover:bg-[#f6f6f3] hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
    sm: "h-[38px] px-4 text-sm rounded-btn",
    default: "h-[46px] px-[22px] text-[15px] rounded-btn",
    lg: "h-14 px-7 text-base rounded-btn",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(base, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";