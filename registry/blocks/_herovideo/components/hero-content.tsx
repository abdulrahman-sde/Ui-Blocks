"use client";

import { Star } from "./icons";
import SearchBox from "./search-box";

export default function HeroContent() {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        marginTop: -50,
        gap: 44,
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{ gap: 34 }}
      >
        <div className="flex items-center" style={{ gap: 8 }}>
          <div
            className="flex items-center"
            style={{
              backgroundColor: "#0e1311",
              borderRadius: 9999,
              padding: "4px 10px",
              gap: 4,
              color: "#ffffff",
            }}
          >
            <Star size={12} />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 14,
              }}
            >
              New
            </span>
          </div>
          <div
            className="flex items-center"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 9999,
              padding: "4px 10px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: 14,
                color: "#000000",
              }}
            >
              Discover what&apos;s possible
            </span>
          </div>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-fustat)",
            fontWeight: 700,
            fontSize: 80,
            letterSpacing: "-4.8px",
            lineHeight: 1,
            color: "#000000",
            textAlign: "center",
            margin: 0,
          }}
        >
          Transform Data Quickly
        </h1>

        <p
          style={{
            fontFamily: "var(--font-fustat)",
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: "-0.4px",
            color: "#505050",
            textAlign: "center",
            maxWidth: 736,
            width: 542,
            margin: 0,
          }}
        >
          Upload your information and get powerful insights right away. Work smarter and achieve goals effortlessly.
        </p>
      </div>

      <SearchBox />
    </div>
  );
}
