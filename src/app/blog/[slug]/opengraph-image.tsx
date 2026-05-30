import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";
import { getCategoryByLabel } from "@/lib/categories";
import { getAuthor } from "@/lib/authors";

export const runtime = "edge";
export const alt = "Mettry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);
    if (!post) {
        return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#058985" }} />, { ...size });
    }

    const category = getCategoryByLabel(post.meta.category);
    const author = getAuthor(post.meta.author);
    const accentColor = category?.color ?? "#058985";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 80,
                    background: "linear-gradient(135deg, #FAF9F5 0%, #FFFFFF 100%)",
                    color: "#0C1416",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Top : logo + catégorie */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 10,
                                background: "#0D4A4D",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span style={{ fontSize: 28, fontWeight: 800, color: "white" }}>M</span>
                        </div>
                        <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>mettry</span>
                        <span style={{ fontSize: 30, fontWeight: 700, color: "#F5A042" }}>.</span>
                    </div>

                    <span
                        style={{
                            display: "inline-flex",
                            padding: "10px 18px",
                            background: `${accentColor}15`,
                            color: accentColor,
                            fontSize: 18,
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            borderRadius: 999,
                        }}
                    >
                        {post.meta.category}
                    </span>
                </div>

                {/* Centre : titre */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 800,
                            letterSpacing: "-0.035em",
                            lineHeight: 1.08,
                            maxWidth: 1040,
                        }}
                    >
                        {post.meta.title}
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "#4A5560",
                            lineHeight: 1.4,
                            maxWidth: 900,
                        }}
                    >
                        {post.meta.excerpt.slice(0, 150)}
                        {post.meta.excerpt.length > 150 ? "…" : ""}
                    </div>
                </div>

                {/* Bottom : auteur + reading time */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E5E8EB", paddingTop: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 999,
                                background: `linear-gradient(135deg, #197378, ${author.color})`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            {author.initials}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: 18, fontWeight: 700 }}>{author.name}</span>
                            <span style={{ fontSize: 15, color: "#8A95A0" }}>{author.role}</span>
                        </div>
                    </div>
                    <span style={{ fontSize: 16, color: "#8A95A0", fontWeight: 600 }}>{post.meta.readingTime} de lecture</span>
                </div>
            </div>
        ),
        { ...size }
    );
}