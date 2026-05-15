import { ImageResponse } from "next/og";

export const alt = "Garaad Systems — Technology & Digital Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#8CC220 1px, transparent 1px), linear-gradient(to right, #8CC220 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.06,
          }}
        />

        {/* Glow circle top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(140,194,32,0.07)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#8CC220",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: 20,
              fontFamily: "sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Jijiga, Somali Region, Ethiopia
          </span>
        </div>

        {/* Company name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 900,
            fontFamily: "sans-serif",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Garaad Systems
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#8CC220",
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "sans-serif",
            marginBottom: 52,
          }}
        >
          Building Digital Infrastructure for Africa&apos;s Future
        </div>

        {/* Divider */}
        <div
          style={{
            width: 56,
            height: 4,
            background: "#8CC220",
            borderRadius: 2,
            marginBottom: 36,
          }}
        />

        {/* Service tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["E-Government", "Custom Software", "Systems Integration", "Consulting"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  padding: "10px 20px",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 18,
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
