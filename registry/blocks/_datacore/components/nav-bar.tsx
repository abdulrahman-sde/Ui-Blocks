"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home" },
  { label: "Services", hasDropdown: true },
  { label: "Reviews" },
  { label: "Contact us" },
];

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2L34 10V26L18 34L2 26V10L18 2Z" fill="white" opacity="0.2" />
      <path d="M18 6L30 12V24L18 30L6 24V12L18 6Z" fill="white" opacity="0.4" />
      <path d="M18 10L26 14V22L18 26L10 22V14L18 10Z" fill="white" />
      <rect x="16" y="16" width="4" height="4" rx="1" fill="#7b39fc" />
    </svg>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
      className="fixed top-0 left-0 w-full z-20 flex items-center"
      style={{
        padding: "16px 24px",
        paddingLeft: "clamp(24px, 5vw, 120px)",
        paddingRight: "clamp(24px, 5vw, 120px)",
      }}
    >
      <div className="flex items-center" style={{ gap: 12 }}>
        <Logo />
        <span
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: 20,
            color: "#ffffff",
          }}
        >
          Datacore
        </span>
      </div>

      <div
        className="hidden lg:flex items-center"
        style={{ marginLeft: 64, gap: 32 }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 500,
              fontSize: 14,
              color: "#ffffff",
              padding: 0,
            }}
          >
            {item.label}
            {item.hasDropdown && <ChevronDown size={14} />}
          </button>
        ))}
      </div>

      <div
        className="hidden lg:flex items-center"
        style={{ marginLeft: "auto", gap: 8 }}
      >
        <button
          className="bg-transparent border cursor-pointer"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: 14,
            color: "#171717",
            backgroundColor: "#ffffff",
            borderColor: "#d4d4d4",
            borderRadius: 8,
            padding: "8px 20px",
          }}
        >
          Sign In
        </button>
        <button
          className="border-none cursor-pointer"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: 14,
            color: "#fafafa",
            backgroundColor: "#7b39fc",
            borderRadius: 8,
            padding: "8px 20px",
            boxShadow: "0 4px 14px rgba(123, 57, 252, 0.35)",
          }}
        >
          Get Started
        </button>
      </div>

      <button
        className="lg:hidden bg-transparent border-none cursor-pointer ml-auto"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={24} color="#ffffff" />
      </button>
    </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: "#000000" }}
        >
          <div
            className="flex items-center justify-between w-full"
            style={{ padding: "16px 24px" }}
          >
            <div className="flex items-center" style={{ gap: 12 }}>
              <Logo />
              <span
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#ffffff",
                }}
              >
                Datacore
              </span>
            </div>
            <button
              className="bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} color="#ffffff" />
            </button>
          </div>

          <div
            className="flex flex-col items-center justify-center flex-1"
            style={{ gap: 32 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                className="bg-transparent border-none cursor-pointer"
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontWeight: 500,
                  fontSize: 28,
                  color: "#ffffff",
                  padding: 0,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}