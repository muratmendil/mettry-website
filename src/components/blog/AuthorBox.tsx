import type { BlogAuthor } from "@/lib/authors";

interface AuthorBoxProps {
    author: BlogAuthor;
}

export function AuthorBox({ author }: AuthorBoxProps) {
    return (
        <aside
            className="flex flex-col sm:flex-row items-start gap-5 mt-12 rounded-card p-7 lg:p-8 border border-border-default"
            style={{ background: "var(--color-bg-off-white)" }}
        >
            <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white font-bold shrink-0"
                style={{
                    background: `linear-gradient(135deg, var(--color-teal-dark), ${author.color})`,
                    fontFamily: "var(--font-display)",
                    fontSize: "26px",
                }}
                aria-hidden="true"
            >
                {author.initials}
            </div>

            <div>
                <div
                    className="text-[11px] uppercase tracking-[0.08em] font-semibold text-ink-tertiary mb-1.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                >
                    Écrit par
                </div>
                <div className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {author.name}
                </div>
                <div className="text-sm font-semibold text-[var(--color-teal-dark)] mb-3">{author.role}</div>
                <p className="text-sm leading-relaxed text-ink-secondary">{author.bio}</p>
            </div>
        </aside>
    );
}