interface PullQuoteProps {
    children: React.ReactNode;
    cite?: string;
}

export function PullQuote({ children, cite }: PullQuoteProps) {
    return (
        <figure className="my-11 pl-8" style={{ borderLeft: "4px solid var(--color-orange)" }}>
            <blockquote
                className="m-0 italic text-ink-primary"
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "26px",
                    lineHeight: 1.35,
                    fontWeight: 600,
                    letterSpacing: "-0.018em",
                }}
            >
                {children}
            </blockquote>
            {cite && (
                <figcaption className="mt-4 text-sm text-ink-tertiary not-italic">
                    — {cite}
                </figcaption>
            )}
        </figure>
    );
}