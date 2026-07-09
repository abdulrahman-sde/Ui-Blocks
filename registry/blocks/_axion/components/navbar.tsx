"use client";

import { useState } from "react";
import { Clock, Menu, X, ArrowRight } from "lucide-react";
import { useLondonTime } from "../hooks/use-london-time";
import { TextRoll } from "./text-roll";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const londonTime = useLondonTime();

  return (
    <>
      <nav className="relative z-20 w-full pt-3 sm:pt-4 px-3 sm:px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-sm">
            {/* Left */}
            <div className="flex items-center gap-2 sm:gap-3 pl-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">AX</span>
              </div>
              <div className="hidden md:flex items-center gap-6 ml-2">
                {["Projects", "Studio", "Journal", "Connect"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Right (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <span className="hidden lg:inline text-[13px] text-gray-600">
                Taking on projects for Q1 2026
              </span>
              <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
                <Clock size={14} />
                <span>{londonTime} in London</span>
              </div>
              <button className="group bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-2 transition-all">
                <TextRoll
                  text="Book a strategy call"
                  icon={<ArrowRight size={14} className="text-gray-900" />}
                  iconWrapperClassName="bg-white rounded-full w-6 h-6"
                />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden bg-gray-900 text-white rounded-full p-2 w-9 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="flex items-center gap-1.5 text-[13px] text-gray-600 mb-6">
            <Clock size={14} />
            <span>{londonTime} in London</span>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {["Projects", "Studio", "Journal", "Connect"].map((link) => (
              <a key={link} href="#" className="text-[28px] sm:text-[32px] font-medium text-gray-900">
                {link}
              </a>
            ))}
          </div>
          <button className="group bg-gray-900 text-white w-full text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-2">
            <TextRoll
              text="Start a project"
              icon={<ArrowRight size={14} className="text-gray-900" />}
              iconWrapperClassName="bg-white rounded-full w-6 h-6"
            />
          </button>
        </div>
      </div>
    </>
  );
}
