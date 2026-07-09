"use client";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { TrustedBy } from "./components/trusted-by";

export default function Alwayzz() {
  return (
    <div className="az-root">
      <Navbar />
      <Hero />
      <TrustedBy />

      <style>{`
        .az-root {
          --bg: #ffffff;
          --text: #0a0a0a;
          --muted: #6b6b6b;
          --button-bg: #0a0a0a;
          --button-text: #ffffff;
          --border-soft: rgba(0, 0, 0, 0.08);
          --green: #17c964;
          font-family: var(--font-inter), sans-serif;
          color: var(--text);
          background: var(--bg);
          overflow-x: hidden;
        }

        /* ── Navbar ── */
        .az-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 19px 36px;
        }
        .az-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .az-logo {
          font-family: var(--font-source-serif-4), serif;
          font-size: 30px;
          font-weight: 600;
          font-style: italic;
          letter-spacing: -0.08em;
        }
        .az-logo-sup {
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          font-weight: 600;
          vertical-align: super;
        }
        .az-menu-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--button-bg);
          color: var(--button-text);
          border: none;
          border-radius: 9999px;
          padding: 8px 18px;
          font-family: var(--font-inter), sans-serif;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .az-menu-btn:hover { opacity: 0.85; }

        /* ── Drawer ── */
        .az-drawer {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .az-drawer--open {
          opacity: 1;
          pointer-events: all;
        }
        .az-drawer-close {
          position: absolute;
          top: 19px;
          right: 36px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          padding: 8px;
        }
        .az-drawer-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .az-drawer-link {
          font-size: 48px;
          font-weight: 500;
          letter-spacing: -0.04em;
          color: var(--text);
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .az-drawer-link:hover { opacity: 0.6; }
        .az-drawer-footer {
          position: absolute;
          bottom: 36px;
          font-size: 13px;
          color: var(--muted);
        }

        /* ── Hero ── */
        .az-hero {
          position: relative;
          min-height: 850px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 160px 36px;
          overflow: hidden;
        }
        .az-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260626_041422_4a459e05-abce-4150-9fb7-4ededc423cd1.png&w=1280&q=85") center center / cover no-repeat;
          z-index: 0;
        }
        .az-hero-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Curved Lines ── */
        .az-lines {
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
        }
        .az-lines--left { left: 36px; }
        .az-lines--right { right: 36px; }
        .az-lines--top { display: none; }

        .az-line {
          height: 40px;
          border: 2.5px solid #FCFAF8;
          opacity: 0;
          animation: az-line-pulse 5s ease-in-out infinite;
        }
        .az-line--left {
          border-left: none;
          border-radius: 0 80% 80% 0;
        }
        .az-line--right {
          border-right: none;
          border-radius: 80% 0 0 80%;
        }

        /* ── Ticker ── */
        .az-ticker {
          max-width: 500px;
          height: 36px;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
          margin-bottom: 24px;
        }
        .az-ticker-track {
          display: flex;
          gap: 8px;
          width: max-content;
          animation: az-marquee-left 30s linear infinite;
        }
        .az-ticker-item {
          flex-shrink: 0;
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgb(251, 251, 251);
          white-space: nowrap;
        }

        /* ── Title ── */
        .az-title {
          max-width: 550px;
          font-size: 82px;
          line-height: 1.03;
          letter-spacing: -0.07em;
          font-weight: 600;
          text-align: center;
          margin: 0 0 16px;
        }
        .az-title-serif {
          font-family: var(--font-source-serif-4), serif;
          font-style: italic;
          font-weight: 600;
          letter-spacing: -0.08em;
        }
        .az-title-sup {
          font-family: var(--font-inter), sans-serif;
          font-size: 24px;
          font-weight: 600;
          vertical-align: super;
        }

        /* ── Subtitle ── */
        .az-subtitle {
          max-width: 476px;
          font-size: 17px;
          line-height: 1.45;
          font-weight: 400;
          color: var(--muted);
          text-align: center;
          margin: 0 0 32px;
        }

        /* ── CTA Row ── */
        .az-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .az-btn {
          cursor: pointer;
          border: none;
          font-family: var(--font-inter), sans-serif;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .az-btn--primary {
          height: 56px;
          padding: 18px 30px;
          border-radius: 9999px;
          background: var(--button-bg);
          color: var(--button-text);
          font-size: 15px;
          font-weight: 600;
        }
        .az-btn--primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .az-btn--book {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--bg);
          border: 4px solid rgb(248,248,248);
          border-radius: 9999px;
          padding: 8px 24px 8px 8px;
          font-family: var(--font-inter), sans-serif;
        }
        .az-btn--book:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .az-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .az-btn-book-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .az-btn-book-primary {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
        }
        .az-btn-book-secondary {
          font-size: 12px;
          font-weight: 500;
          color: rgb(152,152,152);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .az-green-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgb(29, 204, 93);
          display: inline-block;
          flex-shrink: 0;
        }

        /* ── Progressive Blur ── */
        .az-blur {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 178px;
          background: linear-gradient(to top, #fff 0%, rgba(255,255,255,0.4) 40%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* ── Trusted By ── */
        .az-trusted {
          padding: 36px;
          background: var(--bg);
        }
        .az-trusted-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 48px;
        }
        .az-trusted-label {
          max-width: 163px;
          font-size: 14px;
          font-weight: 500;
          color: var(--muted);
          flex-shrink: 0;
          margin: 0;
        }
        .az-trusted-marquee {
          flex: 1;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%);
        }
        .az-trusted-track {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: az-marquee-left 30s linear infinite;
        }
        .az-trusted-company {
          font-size: 16px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ── Keyframes ── */
        @keyframes az-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes az-line-pulse {
          0% { opacity: 0; transform: scale(1); }
          15% { opacity: 0.9; }
          70% { opacity: 0.4; }
          100% { opacity: 0; transform: scale(0.85); }
        }

        /* ── Responsive: < 1200px ── */
        @media (max-width: 1199px) {
          .az-hero { padding: 140px 32px; }
          .az-title { font-size: clamp(60px, 8vw, 72px); }
          .az-nav { padding: 19px 32px; }
          .az-drawer-link { font-size: 40px; }
        }

        /* ── Responsive: < 810px ── */
        @media (max-width: 809px) {
          .az-hero {
            min-height: 760px;
            padding: 120px 24px 96px;
          }
          .az-hero::before {
            transform: rotate(90deg);
            transform-origin: center;
            background-size: cover;
          }
          .az-lines--left,
          .az-lines--right {
            display: none;
          }
          .az-lines--top {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
            padding: 24px;
          }
          .az-line--top {
            width: 40px;
            height: 20px;
            border: 2.5px solid #FCFAF8;
            border-bottom: none;
            border-radius: 80% 80% 0 0;
            opacity: 0;
            animation: az-line-pulse 5s ease-in-out infinite;
          }
          .az-title { font-size: clamp(44px, 13vw, 52px); }
          .az-cta-row {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
          }
          .az-btn--primary,
          .az-btn--book {
            width: 100%;
            justify-content: center;
          }
          .az-trusted-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .az-drawer-link { font-size: 32px; }
          .az-nav { padding: 19px 20px; }
        }
      `}</style>
    </div>
  );
}
