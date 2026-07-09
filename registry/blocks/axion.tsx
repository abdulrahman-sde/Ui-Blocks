"use client";

import dynamic from "next/dynamic";
import { Navbar } from "./_axion/components/navbar";
import { HeroContent } from "./_axion/components/hero-content";
import { About } from "./_axion/components/about";
import { CaseStudies } from "./_axion/components/case-studies";

const ShaderEffects = dynamic(
  () => import("./_axion/components/shader-effects"),
  { ssr: false }
);

export default function Axion() {
  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex flex-col bg-[#EFEFEF] overflow-hidden">
        <ShaderEffects />
        <Navbar />
        <HeroContent />
      </section>

      {/* Section 2: About */}
      <About />

      {/* Section 3: Case Studies */}
      <CaseStudies />

      <style>{`
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          position: relative;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }
        .liquid-glass-strong {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          position: relative;
        }
      `}</style>
    </div>
  );
}
