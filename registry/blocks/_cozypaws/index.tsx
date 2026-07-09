"use client";

import {
  Search,
  ShoppingCart,
  Star,
  ArrowUpRight,
  Play,
  ArrowRight,
  Plus,
} from "lucide-react";

/* ─── Data ─── */

const ASSETS = {
  logo: "https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg",
  avatar:
    "https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128",
  catHouse:
    "https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png",
  video:
    "https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png",
  bottomLeft:
    "https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png",
  bottomCenter:
    "https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024",
  bottomRight:
    "https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png",
};

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "Shop" },
  { label: "Delivery and payment" },
  { label: "Brands" },
  { label: "Blog" },
];

/* ─── Sub-components ─── */

function Badge({ count }: { count: number }) {
  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E86A10] border-2 border-[#EFFDF0] rounded-full flex items-center justify-center text-white text-[10px] font-bold leading-none">
      {count}
    </span>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center">
      <img
        src={ASSETS.avatar}
        alt=""
        className="w-10 h-10 rounded-full border-2 border-white object-cover"
      />
      <div className="w-10 h-10 rounded-full bg-[#1a3d1a] flex items-center justify-center border-2 border-white -ml-3">
        <Plus size={16} className="text-white" />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="animate-slide-in-left delay-600">
      <div className="relative rounded-2xl overflow-hidden bg-white">
        <img
          src={ASSETS.catHouse}
          alt="Cozy Cat House"
          className="w-full h-auto block"
          style={{ aspectRatio: "260/257" }}
        />
        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#1a3d1a] flex items-center justify-center shadow-lg">
          <ArrowUpRight size={18} className="text-white" />
        </div>
      </div>
      <p className="mt-2 text-gray-700 text-[clamp(12px,1.2vw,14px)]">
        Cozy Cat House
      </p>
      <p className="text-[#1a3d1a] font-bold text-[clamp(14px,1.4vw,18px)]">
        $49.99
      </p>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="animate-slide-in-right delay-700">
      <div className="relative rounded-2xl overflow-hidden bg-white">
        <img
          src={ASSETS.video}
          alt="Product Reviews"
          className="w-full h-auto block"
          style={{ aspectRatio: "177/287" }}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#1a3d1a] flex items-center justify-center shadow-lg">
          <Play size={20} className="text-white ml-0.5" />
        </div>
      </div>
      <p className="mt-2 text-gray-600 text-[clamp(10px,1vw,13px)] leading-tight">
        Watch Product Reviews on TikTok and YouTube
      </p>
    </div>
  );
}

function BottomImages() {
  return (
    <div className="flex items-end w-full" style={{ gap: 0 }}>
      {/* Left image */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={ASSETS.bottomLeft}
          alt=""
          className="w-full h-auto block animate-photo-reveal delay-750"
          style={{ maxHeight: "min(70vh,55vw)", objectFit: "cover" }}
        />
        <div
          className="absolute left-0 animate-scale-in delay-1000"
          style={{ bottom: "clamp(20px,4vh,50px)", left: "clamp(20px,4vh,50px)" }}
        >
          <div className="flex items-center gap-3">
            <AvatarStack />
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                98K+
              </p>
              <p className="text-white/80 text-xs">Happy Pet Parents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center image */}
      <div className="relative flex-[1.265] overflow-hidden">
        <img
          src={ASSETS.bottomCenter}
          alt=""
          className="w-full h-auto block animate-photo-reveal delay-600"
          style={{ maxHeight: "min(85vh,70vw)", objectFit: "cover" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center animate-scale-in delay-1100"
          style={{ bottom: "clamp(20px,4vh,50px)" }}
        >
          <h3 className="text-white text-[clamp(16px,2vw,24px)] font-bold leading-tight">
            Best Products
            <br />
            for Your Pet
          </h3>
          <button className="mt-2 bg-[#E86A10] hover:bg-[#d45e0d] text-white px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors">
            Explore Products
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src={ASSETS.bottomRight}
          alt=""
          className="w-full h-auto block animate-photo-reveal delay-900"
          style={{ maxHeight: "min(70vh,55vw)", objectFit: "cover" }}
        />
        <div
          className="absolute right-0 text-right animate-scale-in delay-1200"
          style={{ bottom: "clamp(20px,4vh,50px)", right: "clamp(20px,4vh,50px)" }}
        >
          <div className="flex items-center gap-2 justify-end">
            <Star size={22} fill="#E86A10" color="#E86A10" />
            <span className="text-white font-bold text-2xl">4.6</span>
          </div>
          <p className="text-white/80 text-xs">Rating</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function CozyPaws() {
  return (
    <div className="cozypaws h-screen flex flex-col overflow-hidden bg-[#EFFDF0]">
      {/* ── Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap');

        .cozypaws {
          font-family: 'Inter', sans-serif;
          color: #1a3d1a;
        }
        .font-serif-display {
          font-family: 'DM Serif Display', serif;
        }

        @keyframes cp-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cp-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes cp-slide-up {
          from { transform: translateY(60px); }
          to { transform: translateY(0); }
        }
        @keyframes cp-slide-in-left {
          from { transform: translateX(-40px); }
          to { transform: translateX(0); }
        }
        @keyframes cp-slide-in-right {
          from { transform: translateX(40px); }
          to { transform: translateX(0); }
        }
        @keyframes cp-text-reveal {
          from { transform: translateY(40px) skewY(3deg); filter: blur(4px); }
          to { transform: translateY(0) skewY(0deg); filter: blur(0); }
        }
        @keyframes cp-word-pop {
          0% { opacity: 0; transform: translateY(60px) scale(0.7) rotate(-4deg); filter: blur(8px); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.05) rotate(1deg); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); filter: blur(0); }
        }
        @keyframes cp-scale-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes cp-photo-reveal {
          from { transform: translateY(80px) scale(1.02); }
          to { transform: translateY(0) scale(1); }
        }

        .animate-fade-up { animation: cp-fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-fade-in { animation: cp-fade-in 0.6s ease-out both; }
        .animate-slide-up { animation: cp-slide-up 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-in-left { animation: cp-slide-in-left 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-slide-in-right { animation: cp-slide-in-right 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-text-reveal { animation: cp-text-reveal 1s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-word-pop { opacity: 0; animation: cp-word-pop 0.9s cubic-bezier(0.34,1.56,0.64,1) both; }
        .animate-scale-in { animation: cp-scale-in 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .animate-photo-reveal { animation: cp-photo-reveal 1.1s cubic-bezier(0.16,1,0.3,1) both; }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-750 { animation-delay: 750ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1100 { animation-delay: 1100ms; }
        .delay-1200 { animation-delay: 1200ms; }
      `}</style>

      {/* ── Header ── */}
      <header className="shrink-0 relative z-30 px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src={ASSETS.logo}
            alt="CozyPaws"
            className="animate-fade-in delay-100 h-[33px] sm:h-auto w-[130px] sm:w-auto"
            style={{ maxWidth: "none" }}
          />

          {/* Center Nav - hidden below md */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in delay-150">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href="#"
                className={`text-sm font-medium transition-colors ${
                  link.active
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search - hidden below sm */}
            <div className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center animate-fade-in delay-200">
              <Search size={18} className="text-gray-700" />
            </div>

            {/* Favorites */}
            <div className="relative animate-fade-in delay-250">
              <div className="w-10 h-10 rounded-full bg-[#E86A10] flex items-center justify-center">
                <Star size={18} className="text-white" fill="white" />
              </div>
              <Badge count={4} />
            </div>

            {/* Cart */}
            <div className="relative animate-fade-in delay-300">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                <ShoppingCart size={18} className="text-gray-700" />
              </div>
              <Badge count={1} />
            </div>

            {/* Avatar */}
            <img
              src={ASSETS.avatar}
              alt="User"
              className="w-10 h-10 rounded-full object-cover animate-fade-in delay-350"
            />
          </div>
        </div>
      </header>

      {/* ── Desktop / Tablet Hero ── */}
      <main className="hidden md:flex flex-1 flex-col relative overflow-hidden">
        {/* Text Layer */}
        <div className="absolute inset-0 z-20 flex items-start justify-center px-12 pt-[5.4rem] pointer-events-none">
          <h1
            className="font-serif-display text-[#1a3d1a] text-center tracking-tight"
            style={{
              fontSize: "clamp(48px,7.5vw,110px)",
              lineHeight: "0.95",
            }}
          >
            <span className="inline-block animate-word-pop delay-200">
              Everything
            </span>
            <br />
            <span className="inline-block animate-word-pop delay-350">
              Your
            </span>{" "}
            <span className="inline-block animate-word-pop delay-475">
              Pets
            </span>{" "}
            <span className="inline-block animate-word-pop delay-600">
              Love
            </span>
          </h1>
        </div>

        {/* Side cards - desktop */}
        <div className="hidden lg:block absolute top-[50px] left-12 z-30 w-[clamp(160px,14vw,260px)]">
          <ProductCard />
        </div>

        <div className="hidden lg:block absolute top-[50px] right-12 z-30 w-[clamp(120px,10vw,177px)]">
          <VideoCard />
        </div>

        {/* Side cards - tablet */}
        <div className="lg:hidden absolute top-[80px] left-4 z-30 w-[160px]">
          <ProductCard />
        </div>

        <div className="lg:hidden absolute top-[80px] right-4 z-30 w-[120px]">
          <VideoCard />
        </div>

        {/* Bottom Images */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
          <BottomImages />
        </div>
      </main>

      {/* ── Mobile Hero ── */}
      <main className="flex md:hidden flex-1 flex-col overflow-y-auto px-6 pt-8 pb-0">
        {/* Top section: title + CTA */}
        <div className="text-center mb-6">
          <h1 className="font-serif-display text-[#1a3d1a] text-[36px] leading-[1.05] tracking-tight animate-word-pop delay-200">
            Everything
            <br />
            Your Pets Love
          </h1>
          <button className="mt-4 bg-[#E86A10] hover:bg-[#d45e0d] text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-colors animate-scale-in delay-400">
            Explore Products
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards row */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 min-w-0">
            <div className="animate-slide-in-left delay-600">
              <div className="relative rounded-2xl overflow-hidden bg-white aspect-square">
                <img
                  src={ASSETS.catHouse}
                  alt="Cozy Cat House"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#1a3d1a] flex items-center justify-center shadow-lg">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>
              <p className="mt-1 text-gray-700 text-xs">Cozy Cat House</p>
              <p className="text-[#1a3d1a] font-bold text-sm">$49.99</p>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="animate-slide-in-right delay-700">
              <div className="relative rounded-2xl overflow-hidden bg-white" style={{ aspectRatio: "3/4" }}>
                <img
                  src={ASSETS.video}
                  alt="Product Reviews"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1a3d1a] flex items-center justify-center shadow-lg">
                  <Play size={18} className="text-white ml-0.5" />
                </div>
              </div>
              <p className="mt-1 text-gray-600 text-xs leading-tight">
                Watch Product Reviews on TikTok and YouTube
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-6 mb-6 animate-scale-in delay-1000">
          <div className="flex items-center gap-2">
            <AvatarStack />
            <span className="font-bold text-[#1a3d1a] text-lg">98K+</span>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="flex items-center gap-2">
            <Star size={20} fill="#E86A10" color="#E86A10" />
            <span className="font-bold text-[#1a3d1a] text-lg">4.6</span>
          </div>
        </div>

        {/* Bottom Images */}
        <div className="flex items-end w-full mt-auto" style={{ gap: 0 }}>
          <BottomImages />
        </div>
      </main>
    </div>
  );
}
