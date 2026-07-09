"use client";

import { ArrowUp, Paperclip, Microphone, SearchIcon, AISparkle } from "./icons";

export default function SearchBox() {
  return (
    <div
      className="flex flex-col"
      style={{
        width: "100%",
        maxWidth: 728,
        height: 200,
        borderRadius: 18,
        backgroundColor: "rgba(0,0,0,0.24)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "14px 16px 12px",
        gap: 6,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center" style={{ gap: 6 }}>
          <span
            style={{
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#ffffff",
            }}
          >
            60/450 credits
          </span>
          <span
            style={{
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#ffffff",
              backgroundColor: "rgba(90,225,76,0.89)",
              borderRadius: 4,
              padding: "1px 6px",
            }}
          >
            Upgrade
          </span>
        </div>
        <div className="flex items-center" style={{ gap: 4 }}>
          <AISparkle size={14} />
          <span
            style={{
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#ffffff",
            }}
          >
            Powered by GPT-4o
          </span>
        </div>
      </div>

      <div
        className="flex items-center"
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "0 6px 0 14px",
          gap: 8,
        }}
      >
        <input
          type="text"
          placeholder="Type question..."
          className="flex-1 bg-transparent border-none outline-none"
          style={{
            fontFamily: "var(--font-schibsted-grotesk)",
            fontSize: 16,
            color: "#000000",
            height: "100%",
          }}
        />
        <button
          className="flex items-center justify-center border-none cursor-pointer"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#000000",
            flexShrink: 0,
          }}
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center" style={{ gap: 6 }}>
          <button
            className="flex items-center gap-1.5 border-none cursor-pointer"
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: 6,
              padding: "4px 8px",
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#505050",
            }}
          >
            <Paperclip size={12} />
            Attach
          </button>
          <button
            className="flex items-center gap-1.5 border-none cursor-pointer"
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: 6,
              padding: "4px 8px",
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#505050",
            }}
          >
            <Microphone size={12} />
            Voice
          </button>
          <button
            className="flex items-center gap-1.5 border-none cursor-pointer"
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: 6,
              padding: "4px 8px",
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 12,
              color: "#505050",
            }}
          >
            <SearchIcon size={12} />
            Prompts
          </button>
        </div>
        <span
          style={{
            fontFamily: "var(--font-schibsted-grotesk)",
            fontWeight: 500,
            fontSize: 12,
            color: "#505050",
          }}
        >
          0/3,000
        </span>
      </div>
    </div>
  );
}
