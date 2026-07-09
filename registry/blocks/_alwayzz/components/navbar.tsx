"use client";

import { useState } from "react";

const links = ["Projects", "Plans", "Team", "FAQs", "Get in Touch"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="az-nav">
        <div className="az-nav-inner">
          <span className="az-logo">
            Alwayzz
            <sup className="az-logo-sup">&reg;</sup>
          </span>
          <button className="az-menu-btn" onClick={() => setOpen(true)}>
            Menu
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`az-drawer ${open ? "az-drawer--open" : ""}`}>
        <button className="az-drawer-close" onClick={() => setOpen(false)}>
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="az-drawer-links">
          {links.map((l) => (
            <a key={l} href="#" className="az-drawer-link">{l}</a>
          ))}
        </div>
        <div className="az-drawer-footer">&copy; 2026 Alwayzz. All rights reserved.</div>
      </div>
    </>
  );
}
