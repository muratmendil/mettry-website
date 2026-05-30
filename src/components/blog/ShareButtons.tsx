"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { cn } from "@/lib/cn";

interface ShareButtonsProps {
    url: string;
    title: string;
}

const SHARE_BTN_CLS = "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-md bg-white hover:-translate-y-px transition-transform";

function LinkedInIcon({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
    );
}

function XIcon({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // silencieux : navigator.clipboard peut échouer en http ou contexte non sécurisé
        }
    };

    return (
        <div className="flex items-center gap-2">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Partager sur LinkedIn" className={SHARE_BTN_CLS} style={{ color: "#0a66c2", borderColor: "#0a66c2" }}>
                <LinkedInIcon size={14} />
                <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Partager sur X" className={SHARE_BTN_CLS} style={{ color: "#000000", borderColor: "#000000" }}>
                <XIcon size={14} />
                <span className="hidden sm:inline">X</span>
            </a>
            <button type="button" onClick={handleCopy} aria-label="Copier le lien de l'article" className={cn(SHARE_BTN_CLS, "text-ink-secondary border-border-default")}>
                {copied ? <Check size={14} className="text-success" /> : <LinkIcon size={14} />}
                <span className="hidden sm:inline">{copied ? "Copié !" : "Lien"}</span>
            </button>
        </div>
    );
}