"use client";

import { ChevronDown } from "./icons";

const menuItems = [
  { label: "Platform" },
  { label: "Features", hasDropdown: true },
  { label: "Projects" },
  { label: "Community" },
  { label: "Contact" },
];

export default function NavBar() {
  return (
    <nav
      className="flex items-center justify-between w-full"
      style={{ padding: "16px 120px" }}
    >
      <div
        style={{
          fontFamily: "var(--font-schibsted-grotesk)",
          fontWeight: 600,
          fontSize: 24,
          letterSpacing: "-1.44px",
          color: "#000000",
        }}
      >
        Logoipsum
      </div>

      <div className="flex items-center" style={{ gap: 32 }}>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
            style={{
              fontFamily: "var(--font-schibsted-grotesk)",
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: "-0.2px",
              color: "#000000",
            }}
          >
            {item.label}
            {item.hasDropdown && <ChevronDown size={14} />}
          </button>
        ))}
      </div>

      <div className="flex items-center" style={{ gap: 8 }}>
        <button
          className="bg-transparent border-none cursor-pointer"
          style={{
            fontFamily: "var(--font-schibsted-grotesk)",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: "-0.2px",
            color: "#000000",
            width: 82,
            height: 40,
            borderRadius: 8,
          }}
        >
          Sign Up
        </button>
        <button
          className="border-none cursor-pointer"
          style={{
            fontFamily: "var(--font-schibsted-grotesk)",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: "-0.2px",
            color: "#ffffff",
            backgroundColor: "#000000",
            width: 101,
            height: 40,
            borderRadius: 8,
          }}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}
