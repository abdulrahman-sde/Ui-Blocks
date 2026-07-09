import type { RegistryEntry, Registry } from "./types";

import Marketeam from "./blocks/marketeam";
import Alwayzz from "./blocks/alwayzz";
import Axion from "./blocks/axion";
import Lumora from "./blocks/_lumora/lumora";
import Aurora from "./blocks/aurora";
import PasswordVault from "./blocks/password-vault";
import HeroVideo from "./blocks/herovideo";
import Datacore from "./blocks/datacore";

export type { RegistryEntry, Registry };

export const registry: Registry = {
  marketeam: {
    id: "marketeam",
    title: "Marketeam",
    description: "Full marketing talent platform landing page",
    component: Marketeam,
  },
  alwayzz: {
    id: "alwayzz",
    title: "Alwayzz",
    description: "Creative agency landing hero — black-and-white minimal",
    component: Alwayzz,
  },
  axion: {
    id: "axion",
    title: "Axion Studio",
    description: "Design agency landing page with shader hero",
    component: Axion,
  },
  lumora: {
    id: "lumora",
    title: "Lumora",
    description: "Fullscreen cinematic hero for a mindfulness/focus app",
    component: Lumora,
  },

  aurora: {
    id: "aurora",
    title: "Aurora Sign Up",
    description: "Modern two-column registration interface with video hero",
    component: Aurora,
  },

  "password-vault": {
    id: "password-vault",
    title: "Password Vault",
    description: "Password manager landing page hero with looping video background, custom nav, and animated hero content",
    component: PasswordVault,
  },

  herovideo: {
    id: "herovideo",
    title: "Hero Video",
    description: "Modern hero section with looping video background, custom JavaScript fade system, and search input box",
    component: HeroVideo,
  },

  datacore: {
    id: "datacore",
    title: "Datacore",
    description: "Full-screen hero with looping video background, glassmorphism tagline pill, and responsive nav with mobile overlay menu",
    component: Datacore,
  },
};
