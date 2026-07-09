"use client";

import { useCountUp } from "../hooks/use-count-up";

interface AvatarData {
  src: string;
  orbit: number;
  angle: number;
  radius: number;
  size?: number;
  glow: string;
  borderRadius?: string;
  delay: number;
}

const avatars: AvatarData[] = [
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/aa51718fb3af3637e6d666b6543fc27a175fada6.png", orbit: 1, angle: 270, radius: 177, glow: "#A068FF", borderRadius: "20px", delay: 0.6 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png", orbit: 2, angle: 60, radius: 251, glow: "#FFD700", borderRadius: "50%", delay: 0.9 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png", orbit: 2, angle: 180, radius: 251, size: 78, glow: "#FF69B4", borderRadius: "50%", delay: 1.1 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png", orbit: 2, angle: 300, radius: 251, glow: "#4A90D9", borderRadius: "20px", delay: 1.3 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png", orbit: 3, angle: 130, radius: 325, size: 88, glow: "#FF69B4", borderRadius: "50%", delay: 1.5 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png", orbit: 4, angle: 30, radius: 399, glow: "#A068FF", borderRadius: "50%", delay: 1.7 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png", orbit: 4, angle: 95, radius: 399, size: 88, glow: "#FF8C00", borderRadius: "24px", delay: 1.9 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png", orbit: 4, angle: 220, radius: 399, size: 88, glow: "#FF69B4", borderRadius: "24px", delay: 2.1 },
  { src: "https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png", orbit: 4, angle: 320, radius: 399, glow: "#A068FF", borderRadius: "50%", delay: 2.3 },
];

const orbitConfigs = [
  { size: 353, spin: "left", duration: 30, label: "counter-right" },
  { size: 501, spin: "right", duration: 40, label: "counter-left" },
  { size: 649, spin: "right", duration: 50, label: "counter-left" },
  { size: 797, spin: "left", duration: 60, label: "counter-right" },
];

function OrbitRing({ diameter }: { diameter: number }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        background: "linear-gradient(180deg, rgba(217,161,255,0) 0%, rgba(217,161,255,1) 43%, rgba(217,161,255,0) 100%)",
        WebkitMask: "radial-gradient(circle, transparent calc(100% - 1px), #000 calc(100% - 1px))",
        mask: "radial-gradient(circle, transparent calc(100% - 1px), #000 calc(100% - 1px))",
        pointerEvents: "none",
      }}
    />
  );
}

export function OrbitCircles() {
  const count = useCountUp(20, 2000, 1200);

  return (
    <div
      style={{
        position: "relative",
        width: 797,
        height: 797,
        margin: "0 auto",
        flexShrink: 0,
        animation: "scale-in 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s both",
      }}
    >
      {orbitConfigs.map((o, idx) => {
        const orbitAvatars = avatars.filter((a) => a.orbit === idx + 1);

        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: o.size,
              height: o.size,
              transform: "translate(-50%, -50%)",
              animation: `spin-${o.spin} ${o.duration}s linear infinite`,
            }}
          >
            <OrbitRing diameter={o.size} />

            {orbitAvatars.map((a, i) => {
              const s = a.size || 58;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 0,
                    height: 0,
                    transform: `rotate(${a.angle}deg) translateX(${a.radius}px)`,
                  }}
                >
                  <div
                    style={{
                      width: s,
                      height: s,
                      borderRadius: a.borderRadius,
                      overflow: "hidden",
                      boxShadow: `0 0 24px ${a.glow}`,
                      transform: `rotate(${-a.angle}deg)`,
                      animation: `${o.label} ${o.duration}s linear infinite, fly-in 0.6s cubic-bezier(0.22,1,0.36,1) ${a.delay}s both`,
                      transformOrigin: "center",
                    }}
                  >
                    <img
                      src={a.src}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
              );
            })}

            {idx === 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  animation: "counter-right 30s linear infinite",
                }}
              >
                <div style={{ fontFamily: "var(--font-urbanist)", fontSize: 64, fontWeight: 500, color: "#fff" }}>
                  {count}k+
                </div>
                <div style={{ fontFamily: "var(--font-urbanist)", fontSize: 16, fontWeight: 600, color: "#fff", marginTop: 4 }}>
                  Specialists
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
