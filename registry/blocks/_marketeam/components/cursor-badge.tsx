"use client";

export function CursorBadge() {
  return (
    <div
      className="mt-cursor hidden sm:flex self-start ml-20 md:ml-36 lg:ml-48 xl:ml-[290px]"
      style={{
        alignItems: "center",
        gap: 8,
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