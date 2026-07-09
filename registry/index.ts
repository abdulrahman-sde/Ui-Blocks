import type { RegistryEntry, Registry } from "./types";

import Marketeam from "./blocks/_marketeam";
import Alwayzz from "./blocks/_alwayzz";
import Axion from "./blocks/_axion";
import Lumora from "./blocks/_lumora";
import Aurora from "./blocks/_aurora";
import PasswordVault from "./blocks/_password-vault";
import HeroVideo from "./blocks/_herovideo";
import Datacore from "./blocks/_datacore";
import CozyPaws from "./blocks/_cozypaws";

export type { RegistryEntry, Registry };

export const registry: Registry = {
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
  marketeam: {
    id: "marketeam",
    title: "Marketeam",
    description: "Full marketing talent platform landing page",
    component: Marketeam,
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
    description:
      "Password manager landing page hero with looping video background, custom nav, and animated hero content",
    component: PasswordVault,
  },

  herovideo: {
    id: "herovideo",
    title: "Hero Video",
    description:
      "Modern hero section with looping video background, custom JavaScript fade system, and search input box",
    component: HeroVideo,
  },

  datacore: {
    id: "datacore",
    title: "Datacore",
    description:
      "Full-screen hero with looping video background, glassmorphism tagline pill, and responsive nav with mobile overlay menu",
    component: Datacore,
  },

  cozypaws: {
    id: "cozypaws",
    title: "CozyPaws",
    description:
      "Pet store hero section with responsive header, animated heading, product/video side cards, and bottom image panel with overlays",
    component: CozyPaws,
  },
};
