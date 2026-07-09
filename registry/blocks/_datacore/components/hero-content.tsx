"use client";

export default function HeroContent() {
  return (
    <div
      className="relative z-10 flex flex-col items-center text-center "
      style={{
        margin: "0 auto",
        marginTop: 128,
        padding: "0 24px",
        maxWidth: 900,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          backgroundColor: "rgba(85,80,110,0.4)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(164,132,215,0.5)",
          borderRadius: 10,
          height: 38,
          padding: "0 4px 0 0",
        }}
        className="sm:mt-25"
      >
        <span
          style={{
            backgroundColor: "#7b39fc",
            borderRadius: 6,
            padding: "4px 10px",
            fontFamily: "var(--font-cabin)",
            fontWeight: 500,
            fontSize: 14,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          New
        </span>
        <span
          style={{
            fontFamily: "var(--font-cabin)",
            fontWeight: 500,
            fontSize: 14,
            color: "#ffffff",
            paddingRight: 12,
          }}
        >
          Say Hello to Datacore v3.2
        </span>
      </div>

      <h1
        style={{
          fontFamily: "var(--font-instrument-serif)",
          fontWeight: 400,
          fontSize: "clamp(48px, 10vw, 96px)",
          lineHeight: 1.1,
          color: "#ffffff",
          margin: "32px 0 0 0",
          maxWidth: 900,
        }}
      >
        Book your perfect stay instantly{" "}
        <span
          style={{
            fontStyle: "italic",
            padding: "0 0.08em",
            letterSpacing: "0.03em",
          }}
        >
          and
        </span>{" "}
        hassle-free
      </h1>

      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
          fontSize: "clamp(16px, 2vw, 18px)",
          color: "rgba(255,255,255,0.7)",
          maxWidth: 662,
          margin: "20px 0 0 0",
          lineHeight: 1.6,
        }}
      >
        Discover handpicked hotels, resorts, and stays across your favorite
        destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
      </p>

      <div
        className="flex flex-wrap items-center justify-center"
        style={{ gap: 12, marginTop: 40 }}
      >
        <button
          className="border-none cursor-pointer transition-all hover:brightness-110"
          style={{
            fontFamily: "var(--font-cabin)",
            fontWeight: 500,
            fontSize: 16,
            color: "#ffffff",
            backgroundColor: "#7b39fc",
            borderRadius: 10,
            padding: "14px 28px",
            lineHeight: 1,
          }}
        >
          Book a Free Demo
        </button>
        <button
          className="border-none cursor-pointer transition-all hover:brightness-110"
          style={{
            fontFamily: "var(--font-cabin)",
            fontWeight: 500,
            fontSize: 16,
            color: "#f6f7f9",
            backgroundColor: "#2b2344",
            borderRadius: 10,
            padding: "14px 28px",
            lineHeight: 1,
          }}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
}
