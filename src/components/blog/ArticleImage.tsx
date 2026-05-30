import Image from "next/image";

interface ArticleImageProps {
    src: string;
    alt: string;
    caption?: string;
    /** Largeur/hauteur — défaut 1080×600 */
    width?: number;
    height?: number;
}

export function ArticleImage({ src, alt, caption, width = 1080, height = 600 }: ArticleImageProps) {
    // Si pas d'image fournie, on affiche un placeholder gradient (utile en dev)
    const isPlaceholder = !src || src.startsWith("/blog/") === false;

    return (
        <figure className="my-8">
            {isPlaceholder ? (
                <div
                    className="w-full rounded-card border border-border-default flex items-center justify-center"
                    style={{
                        aspectRatio: `${width}/${height}`,
                        background: "linear-gradient(135deg, var(--color-teal-xlight), var(--color-bg-off-white))",
                    }}
                    aria-label={alt}
                >
                    <span
                        className="text-7xl font-bold opacity-30"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-teal-primary)" }}
                    >
                        {alt[0]?.toUpperCase()}
                    </span>
                </div>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto rounded-card border border-border-default"
                    sizes="(max-width: 768px) 100vw, 720px"
                />
            )}
            {caption && (
                <figcaption className="mt-3 text-center text-[13.5px] italic text-ink-tertiary">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}