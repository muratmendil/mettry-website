import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Mettry — Pilotage de patrimoine immobilier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
                    background: "linear-gradient(135deg, #058985 0%, #0D4A4D 100%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Logo block */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 12,
                            background: "#0D4A4D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255,255,255,0.18)",
                        }}
                    >
                        <span style={{ fontSize: 36, fontWeight: 800, color: "white" }}>M</span>
                    </div>
                    <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em" }}>Mettry</span>
                </div>

                {/* Headline */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1000 }}>
                    <div
                        style={{
                            fontSize: 24,
                            textTransform: "uppercase",
                            letterSpacing: "0.16em",
                            color: "#F5A042",
                            fontWeight: 600,
                        }}
                    >
                        Pilotage de patrimoine immobilier
                    </div>
                    <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                        Le pilotage de votre patrimoine immobilier,{" "}
                        <span style={{ color: "#F5A042" }}>enfin centralisé.</span>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ display: "flex", gap: 28, fontSize: 22, color: "rgba(255,255,255,0.7)" }}>
                    <span>GMAO</span>
                    <span>·</span>
                    <span>Suivi énergétique</span>
                    <span>·</span>
                    <span>Décret Tertiaire</span>
                    <span>·</span>
                    <span>GED</span>
                </div>
            </div>
        ),
        { ...size }
    );
}