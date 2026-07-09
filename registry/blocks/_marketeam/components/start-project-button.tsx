"use client";

export function StartProjectButton() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 50,
        display: "inline-block",
        animation: "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) 3.2s both",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -3,
          borderRadius: "inherit",
          padding: 3,
          background: "conic-gradient(from var(--border-angle), #A068FF, #070319, #A068FF, #070319, #A068FF)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          animation: "rotate-border 3s linear infinite",
          pointerEvents: "none",
        }}
      />
      <button
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: 50,
          padding: "14px 28px",
          fontSize: 16,
          fontWeight: 500,
          color: "#fff",
          background: "#060218",
          border: "none",
          cursor: "pointer",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          const fill = e.currentTarget.querySelector(".btn-fill") as HTMLElement;
          if (fill) fill.style.transform = "translateX(0)";
        }}
        onMouseLeave={(e) => {
          const fill = e.currentTarget.querySelector(".btn-fill") as HTMLElement;
          if (fill) fill.style.transform = "translateX(100%)";
        }}
      >
        <span
          className="btn-fill"
          style={{
            position: "absolute",
            inset: 0,
            background: "#A068FF",
            transform: "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            borderRadius: "inherit",
          }}
        />
        <span style={{ position: "relative", zIndex: 2, display: "inline-flex", alignItems: "center", gap: 8 }}>
          Start Project
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}