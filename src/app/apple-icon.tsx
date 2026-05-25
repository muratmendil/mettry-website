import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#0D4A4D",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                }}
            >
                M
            </div>
        ),
        { ...size }
    );
}