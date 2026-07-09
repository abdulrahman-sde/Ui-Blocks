"use client";

import NavBar from "./components/nav-bar";
import HeroContent from "./components/hero-content";
import VideoBackground from "./components/video-background";

const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";

export default function Datacore() {
  return (
    <div
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "100vh" }}
    >
      <VideoBackground src={VIDEO_SRC} />
      <NavBar />
      <HeroContent />
    </div>
  );
}