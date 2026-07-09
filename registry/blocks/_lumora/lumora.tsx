"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const VIDEOS = [
  { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081127_0992a171-d3c6-4978-8213-0ec5df8b6d63.mp4", label: "Golden Hour" },
  { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_092026_dd05b805-ea0f-40b2-8c52-332b88502592.mp4", label: "Still Water" },
  { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_081042_df7202bf-bd80-4b2b-bbc6-1f09ba2870e9.mp4", label: "Deep Woods" },
  { url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_080959_4cac5234-3573-464e-a5b7-76b94b8a7d61.mp4", label: "Quiet Dawn" },
];

const NAV_LINKS = ["How It Works", "Features", "Pricing", "Community"];

function useVideoTransition() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const switchVideo = useCallback((index: number) => {
    if (index === activeVideo || isTransitioning) return;
    setIsTransitioning(true);
    setActiveVideo(index);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [activeVideo, isTransitioning]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { activeVideo, switchVideo, isTransitioning };
}

export default function Lumora() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const { activeVideo, switchVideo, isTransitioning } = useVideoTransition();
  const isDarkTheme = activeVideo === 2;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = () => {
    setShowMenuIcon(menuOpen);
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setShowMenuIcon(true);
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Video Layer */}
        {VIDEOS.map((video, i) => (
          <video
            key={video.url}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === activeVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={video.url} type="video/mp4" />
          </video>
        ))}

        {/* Transparent PNG Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: `url(https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "train-bob 3s ease-in-out infinite",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-[2] flex flex-col h-full px-4 sm:px-8 md:px-16" style={{ fontFamily: "system-ui, sans-serif" }}>
          {/* Navigation */}
          <nav className="flex items-center justify-between pt-4 sm:pt-6">
            <span
              className="text-white italic text-xl sm:text-2xl tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Lumora
            </span>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              <div className="liquid-glass flex items-center gap-1 rounded-full px-3">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link}
                    className="px-3 py-1.5 text-sm text-white/90 hover:text-white transition-colors rounded-full"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {link}
                  </button>
                ))}
              </div>
              <button
                className="bg-white text-black text-sm font-medium px-5 py-1.5 rounded-full transition-transform hover:scale-[1.02]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="md:hidden liquid-glass p-2 rounded-full flex items-center justify-center w-10 h-10"
              aria-label="Toggle menu"
            >
              <div
                className="relative w-5 h-5 flex items-center justify-center"
                style={{ perspective: "200px" }}
              >
                <Menu
                  size={20}
                  className="absolute text-white transition-all duration-300"
                  style={{
                    opacity: showMenuIcon ? 1 : 0,
                    transform: showMenuIcon
                      ? "rotate(0deg) scale(1)"
                      : "rotate(90deg) scale(0.75)",
                  }}
                />
                <X
                  size={20}
                  className="absolute text-white transition-all duration-300"
                  style={{
                    opacity: showMenuIcon ? 0 : 1,
                    transform: showMenuIcon
                      ? "rotate(-90deg) scale(0.75)"
                      : "rotate(0deg) scale(1)",
                  }}
                />
              </div>
            </button>
          </nav>

          {/* Hero Content */}
          <div
            className={`flex-1 flex flex-col items-center justify-center text-center transition-colors duration-700`}
            style={{
              fontFamily: "system-ui, sans-serif",
              color: isDarkTheme ? "#182C41" : "white",
            }}
          >
            {/* Badge */}
            <div
              className="liquid-glass rounded-full px-4 py-1.5 mb-6 sm:mb-8"
            >
              <span className="text-xs sm:text-sm font-medium opacity-90" style={{ fontFamily: "system-ui, sans-serif" }}>
                Over 10,000 minds already finding their clarity
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-4xl font-medium"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Clarity in an Endlessly<br />Noisy Universe
            </h1>

            {/* Subtext */}
            <p
              className="mt-4 sm:mt-6 max-w-xl leading-relaxed text-sm sm:text-base opacity-80"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Rise above the chaos of pings, infinite scrolling, and relentless demands. Discover how to protect your presence and create with intention.
            </p>

            {/* Email Input */}
            <div className="mt-6 sm:mt-8 liquid-glass rounded-full flex items-center max-w-[320px] sm:max-w-sm w-full px-2 py-1">
              <input
                type="email"
                placeholder="Your Best Email"
                className="lumora-email-input flex-1 bg-transparent text-sm px-3 outline-none min-w-0"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  color: isDarkTheme ? "#182C41" : "white",
                }}
              />
              <button
                className="bg-white text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap transition-colors hover:bg-white/90"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Get Early Access
              </button>
            </div>

            {/* Video Switcher */}
            <div
              className={`mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6 transition-colors duration-700`}
              style={{
                fontFamily: "system-ui, sans-serif",
                color: isDarkTheme ? "#182C41" : "white",
              }}
            >
              {VIDEOS.map((video, i) => (
                <button
                  key={video.label}
                  onClick={() => switchVideo(i)}
                  disabled={isTransitioning}
                  className={`text-xs sm:text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${
                    i === activeVideo
                      ? "opacity-100 border-current"
                      : "opacity-50 border-transparent hover:opacity-80"
                  } disabled:cursor-not-allowed`}
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {video.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div
            className="pb-4 sm:pb-6"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-1 text-white/70 text-xs sm:text-sm">
              <span>60+ Deep Sessions</span>
              <span className="hidden sm:inline mx-3 text-white/30">|</span>
              <span>12,000+ Creators</span>
              <span className="hidden sm:inline mx-3 text-white/30">|</span>
              <span>4.8 User Satisfaction</span>
              <span className="hidden sm:inline mx-3 text-white/30">|</span>
              <span>Intentional-First Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic placeholder styles */}
      <style>{`
        .lumora-email-input::placeholder {
          color: ${isDarkTheme ? "rgba(24,44,65,0.5)" : "rgba(255,255,255,0.5)"} !important;
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <button
                key={link}
                onClick={closeMenu}
                className="text-white text-3xl font-medium opacity-0"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  animation: `slide-up-fade 0.5s cubic-bezier(0.4,0,0.2,1) ${100 + i * 50}ms forwards`,
                }}
              >
                {link}
              </button>
            ))}
          </nav>

          <button
            onClick={closeMenu}
            className="mt-10 bg-white text-black text-lg font-medium px-8 py-3 rounded-full opacity-0"
            style={{
              fontFamily: "system-ui, sans-serif",
              animation: "scale-in 0.5s cubic-bezier(0.4,0,0.2,1) 350ms forwards",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </>
  );
}