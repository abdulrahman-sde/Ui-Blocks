"use client";

const logos = [
  "https://polo-pecan-73837341.figma.site/_assets/v11/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg",
  "https://polo-pecan-73837341.figma.site/_assets/v11/3eac03c183db2ae080d910159211c14843398b61.svg",
  "https://polo-pecan-73837341.figma.site/_assets/v11/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg",
  "https://polo-pecan-73837341.figma.site/_assets/v11/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg",
  "https://polo-pecan-73837341.figma.site/_assets/v11/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg",
];

export function LogoTicker() {
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      style={{
        animation: "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both",
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 64,
            alignItems: "center",
            width: "max-content",
            animation: "ticker 20s linear infinite",
          }}
        >
          {allLogos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                width: 137,
                height: 40,
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
