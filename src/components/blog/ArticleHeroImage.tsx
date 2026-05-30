import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface ArticleHeroImageProps {
    src?: string;
    alt: string;
    caption?: string;
}

export function ArticleHeroImage({ src, alt, caption }: ArticleHeroImageProps) {
    const hasRealImage = src && src.startsWith("/");

    return (
        <section className="py-4 lg:py-6">
            <Container>
                <div className="max-w-[1080px] mx-auto">
                    <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-card overflow-hidden border border-border-default">
                        {hasRealImage ? (
                            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1080px) 100vw, 1080px" priority />
                        ) : (
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, var(--color-teal-xlight), var(--color-bg-off-white))",
                                    backgroundImage: "repeating-linear-gradient(45deg, rgba(5,137,133,0.04) 0px, rgba(5,137,133,0.04) 1px, transparent 1px, transparent 12px), linear-gradient(135deg, var(--color-teal-xlight), var(--color-bg-off-white))",
                                }}
                                aria-label={alt}
                            >
                                <span
                                    className="text-[200px] font-bold opacity-30"
                                    style={{ fontFamily: "var(--font-display)", color: "var(--color-teal-primary)", fontWeight: 800 }}
                                >
                                    {alt[0]?.toUpperCase()}
                                </span>
                            </div>
                        )}

                        {caption && (
                            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-medium text-ink-secondary border border-border-default">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange" aria-hidden="true" />
                                Photo : {caption}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}