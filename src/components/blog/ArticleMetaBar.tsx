import { Calendar, Clock } from "lucide-react";
import { ShareButtons } from "./ShareButtons";
import { formatDateFr } from "@/lib/format-date";
import type { BlogAuthor } from "@/lib/authors";

interface ArticleMetaBarProps {
    author: BlogAuthor;
    date: string;
    readingTime: string;
    url: string;
    title: string;
}

export function ArticleMetaBar({ author, date, readingTime, url, title }: ArticleMetaBarProps) {
    return (
        <div className="border-t border-border-default pt-6 flex flex-wrap items-center gap-4 lg:gap-6">
            <div className="flex items-center gap-3">
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{
                        background: `linear-gradient(135deg, var(--color-teal-dark), ${author.color})`,
                        fontFamily: "var(--font-display)",
                    }}
                    aria-hidden="true"
                >
                    {author.initials}
                </div>
                <div>
                    <div className="text-sm font-semibold text-ink-primary leading-tight">{author.name}</div>
                    <div className="text-xs text-ink-tertiary mt-0.5">{author.role}</div>
                </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-border-default" aria-hidden="true" />

            <div className="flex items-center gap-4 text-sm text-ink-tertiary">
                <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} />
                    {formatDateFr(date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {readingTime} de lecture
                </span>
            </div>

            <div className="lg:ml-auto">
                <ShareButtons url={url} title={title} />
            </div>
        </div>
    );
}