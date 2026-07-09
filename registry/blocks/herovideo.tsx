"use client";

import VideoBackground from "./_herovideo/components/video-background";
import NavBar from "./_herovideo/components/nav-bar";
import HeroContent from "./_herovideo/components/hero-content";

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <VideoBackground src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4" />
      <div className="relative z-10 flex flex-col" style={{ gap: 60 }}>
        <NavBar />
        <HeroContent />
      </div>
    </section>
  );
}
