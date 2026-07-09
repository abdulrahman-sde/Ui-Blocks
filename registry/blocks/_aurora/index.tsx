"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Circle, Eye, EyeOff } from "lucide-react";

function ChromeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function StepItem({
  number,
  text,
  active,
}: {
  number: number;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
        active ? "bg-white text-black border border-white" : "bg-brand-gray text-white/60 border-none"
      }`}
    >
      <span
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
          active ? "bg-black text-white" : "bg-white/10 text-white/40"
        }`}
      >
        {number}
      </span>
      <span className="text-sm font-medium leading-none">{text}</span>
    </div>
  );
}

function SocialButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center justify-center gap-2 bg-black border border-white/10 rounded-xl py-3 hover:bg-white/5 transition-colors text-sm font-medium text-white">
      {icon}
      {label}
    </button>
  );
}

function InputGroup({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-brand-gray border-none rounded-xl h-11 px-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 w-full"
      />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Aurora() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="flex min-h-screen w-full bg-black selection:bg-white/30 p-2 transition-all duration-500 lg:h-screen lg:overflow-hidden lg:p-4 font-inter antialiased">
        {/* Left Column */}
        <div className="hidden lg:flex relative flex-col items-center justify-end pb-32 px-12 rounded-3xl overflow-hidden shadow-2xl h-full w-[52%]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
              type="video/mp4"
            />
          </video>

          <motion.div
            className="z-10 w-full max-w-xs space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center gap-2" variants={childVariants}>
              <Circle size={22} fill="white" className="text-white" />
              <span className="text-xl font-semibold tracking-tight">Aurora</span>
            </motion.div>

            <motion.div className="space-y-2" variants={childVariants}>
              <h1 className="text-4xl font-medium tracking-tight whitespace-nowrap">
                Join Aurora
              </h1>
              <p className="text-white/60 text-sm leading-relaxed px-4">
                Follow these 3 quick phases to activate your space.
              </p>
            </motion.div>

            <motion.div className="space-y-2" variants={childVariants}>
              <StepItem number={1} text="Register your identity" active />
              <StepItem number={2} text="Configure your studio" />
              <StepItem number={3} text="Finalize your profile" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col items-center justify-center py-12 lg:py-6 px-4 sm:px-12 lg:px-16 xl:px-24 overflow-y-auto lg:overflow-hidden">
          <motion.div
            className="w-full max-w-xl space-y-8 lg:space-y-6 sm:space-y-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-1.5">
              <h2 className="text-3xl font-medium tracking-tight">Create New Profile</h2>
              <p className="text-white/40 text-sm">Input your basic details to begin the journey.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={<ChromeIcon />} label="Google" />
              <SocialButton icon={<GithubIcon />} label="Github" />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="bg-black px-4 text-xs font-medium text-white/40 uppercase tracking-widest">Or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="First Name" placeholder="What is your first name?" />
                <InputGroup label="Last Name" placeholder="What is your last name?" />
              </div>
              <InputGroup label="Email" placeholder="What is your email?" type="email" />

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                    className="bg-brand-gray border-none rounded-xl h-11 px-4 pr-10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="text-xs text-white/30 mt-0.5">Requires at least 8 symbols.</p>
              </div>

              <button className="w-full h-14 bg-white text-black font-semibold rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all mt-4">
                Create Account
              </button>
            </div>

            <p className="text-center text-sm text-white/40">
              Member of the team?{" "}
              <a href="#" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                Log in
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}
