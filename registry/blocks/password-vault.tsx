"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRightCircle, Zap, LockKeyhole, Fingerprint, Menu, X } from "lucide-react";

function Logo() {
  return (
    <svg width={32} height={32} viewBox="0 0 256 256" fill="#192837">
      <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" />
    </svg>
  );
}

const navLinks = ["Vault", "Plans", "Install", "News", "Help"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const sheetSlideIn = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] as const },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const linkItem = {
  hidden: { x: 24, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.18 + i * 0.07, duration: 0.4 },
  }),
};

export default function PasswordVault() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden" style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_131516_eca35265-ea66-4fbd-8d52-22aae6e1a503.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:shadow-lg active:scale-95"
              style={{ background: "var(--color-accent)" }}
            >
              Start For Free
            </button>
            <button
              className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg active:scale-95"
              style={{ background: "var(--color-login-bg)", color: "var(--color-text)" }}
            >
              Sign In
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40"
                style={{ background: "rgba(25,40,55,0.35)", backdropFilter: "blur(4px)" }}
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setMenuOpen(false)}
              />

              <motion.div
                className="fixed top-0 right-0 z-50 h-dvh flex flex-col"
                style={{
                  width: "min(88vw, 360px)",
                  background: "#CFC8C5",
                  boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
                }}
                variants={sheetSlideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <Logo />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(25,40,55,0.1)",
                    }}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div style={{ height: 1, background: "rgba(25,40,55,0.12)", margin: "0 24px" }} />

                <div className="flex-1 flex flex-col gap-1 px-6 pt-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link}
                      href="#"
                      custom={i}
                      variants={linkItem}
                      initial="hidden"
                      animate="visible"
                      className="block px-4 py-3 rounded-xl hover:bg-black/10 transition-colors"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>

                <div className="px-6 pb-8 flex flex-col gap-3">
                  <button
                    className="w-full py-3.5 rounded-full text-white text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
                    style={{ background: "var(--color-accent)", fontSize: "0.95rem" }}
                  >
                    Start For Free
                  </button>
                  <button
                    className="w-full py-3.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95"
                    style={{ background: "#F2F2EE", color: "var(--color-text)", fontSize: "0.95rem" }}
                  >
                    Sign In
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8">
          <div
            className="mx-auto flex flex-col items-center"
            style={{
              maxWidth: 660,
              paddingTop: "clamp(40px, 8vw, 72px)",
              paddingBottom: 48,
            }}
          >
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center leading-[1.05]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.65rem, 5vw, 3rem)",
                letterSpacing: "-0.01em",
                color: "var(--color-text)",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                Lock{" "}
                <Zap
                  size={24}
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                    position: "relative",
                    top: -2,
                    margin: "0 4px",
                  }}
                />
                Down Your{" "}
                <LockKeyhole
                  size={24}
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                    position: "relative",
                    top: -2,
                    margin: "0 4px",
                  }}
                />
                Passwords
              </span>
              <br />
              with Ironclad Security{" "}
              <Fingerprint
                size={24}
                style={{
                  display: "inline",
                  verticalAlign: "middle",
                  position: "relative",
                  top: -2,
                  marginLeft: 6,
                }}
              />
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                color: "var(--color-text)",
                opacity: 0.8,
                maxWidth: 560,
                lineHeight: 1.65,
                marginTop: "1.5rem",
              }}
            >
              Zero stress, total control. Unbreakable storage, one-tap access, and pro-grade tools for your non-stop world.
            </motion.p>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-between gap-8 text-white font-semibold"
                style={{
                  borderRadius: 50,
                  background: "var(--color-accent)",
                  fontSize: "clamp(0.9rem, 2vw, 1rem)",
                  padding: "17px 24px",
                  minWidth: 210,
                  boxShadow: "0 4px 24px rgba(115,66,226,0.28)",
                }}
              >
                Get It Free
                <ArrowRightCircle size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}