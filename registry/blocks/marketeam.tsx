"use client";

import { Header } from "./_marketeam/components/header";
import { TypewriterHeading } from "./_marketeam/components/typewriter-heading";
import { OrbitCircles } from "./_marketeam/components/orbit-circles";
import { LogoTicker } from "./_marketeam/components/logo-ticker";

const HEADING = "Unlock Top Marketing Talent You Thought Was Out of Reach \u2014 Now Just One Click Away!";

function StartProjectButton() {
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

function CursorBadge() {
  return (
    <div
      className="mt-cursor"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginLeft: 290,
        marginTop: 40,
        animation: "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) 3.6s both",
      }}
    >
      <svg width={24} height={24} viewBox="0 0 24 24" fill="#A068FF">
        <path d="M5 3l14 9-7 2-3 7z" />
      </svg>
      <div
        style={{
          background: "#A068FF",
          color: "#fff",
          fontSize: 16,
          fontWeight: 500,
          padding: "8px 16px",
          borderRadius: 20,
          lineHeight: 1,
        }}
      >
        David
      </div>
    </div>
  );
}

export default function Marketeam() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "var(--font-inter), sans-serif",
        background: "#0a0a0a url(https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_111401_56af5012-2263-45d3-849a-8688084d7c2a.png&w=1280&q=85) center center / cover no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <main
        className="mt-hero"
        style={{
          flex: 1,
          maxWidth: 1920,
          margin: "0 auto",
          padding: "0 64px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            flex: "0 1 600px",
            paddingTop: 40,
            animation: "fade-up 1s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          <h1
            className="mt-heading"
            style={{
              fontFamily: "var(--font-urbanist)",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: "64px",
              letterSpacing: "-1.5px",
              margin: 0,
              minHeight: 128,
              position: "relative",
            }}
          >
            <TypewriterHeading
              text={HEADING}
              splitIndex={67}
              speed={35}
              delay={400}
            />
            <span
              style={{
                color: "#A068FF",
                animation: "blink 0.8s step-end infinite",
                marginLeft: 2,
              }}
            >
              |
            </span>
          </h1>

          <div style={{ marginTop: 32 }}>
            <StartProjectButton />
          </div>

          <CursorBadge />
        </div>

        <div
          className="mt-orbit-wrap"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OrbitCircles />
        </div>
      </main>

      <LogoTicker />

      <style>{`
        @media (max-width: 1280px) {
          .mt-orbit-wrap { transform: scale(0.85); }
        }
        @media (max-width: 1024px) {
          .mt-hero { flex-direction: column !important; }
          .mt-heading { font-size: 48px !important; }
          .mt-orbit-wrap { transform: scale(0.7); }
        }
        @media (max-width: 768px) {
          .mt-heading { font-size: 36px !important; line-height: 40px !important; }
          .mt-orbit-wrap { transform: scale(0.5); }
        }
        @media (max-width: 480px) {
          .mt-heading { font-size: 28px !important; line-height: 32px !important; }
          .mt-orbit-wrap { transform: scale(0.4); }
        }
      `}</style>
    </div>
  );
}
