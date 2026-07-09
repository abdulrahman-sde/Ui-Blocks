"use client";

import { Header } from "./components/header";
import { TypewriterHeading } from "./components/typewriter-heading";
import { OrbitCircles } from "./components/orbit-circles";
import { LogoTicker } from "./components/logo-ticker";
import { StartProjectButton } from "./components/start-project-button";
import { CursorBadge } from "./components/cursor-badge";

const HEADING = "Unlock Top Marketing Talent You Thought Was Out of Reach \u2014 Now Just One Click Away!";

export default function Marketeam() {
  return (
    <div className="mt-root min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      <Header />

      <main className="mt-hero flex-1 w-full mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-16 xl:px-20 max-w-[1920px]">
        <div className="mt-hero-left w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0 animate-[fade-up_1s_cubic-bezier(0.22,1,0.36,1)_both]">
          <h1
            className="mt-heading font-urbanist font-semibold tracking-tight m-0 relative"
            style={{ minHeight: 128, letterSpacing: "-1.5px", lineHeight: 1 }}
          >
            <span className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4rem] leading-[1.05]">
              <TypewriterHeading
                text={HEADING}
                splitIndex={67}
                speed={35}
                delay={400}
              />
            </span>
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

          <div className="mt-6 sm:mt-8">
            <StartProjectButton />
          </div>

          <CursorBadge />
        </div>

        <div className="mt-orbit-col w-full lg:w-1/2 flex justify-center items-center">
          <OrbitCircles />
        </div>
      </main>

      <LogoTicker />

      <style>{`
        .mt-root {
          background: #0a0a0a url(https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_111401_56af5012-2263-45d3-849a-8688084d7c2a.png&w=1280&q=85) center center / cover no-repeat;
        }
      `}</style>
    </div>
  );
}
