import type { FC } from "react";

export interface RegistryEntry {
  id: string;
  title: string;
  description: string;
  component: FC;
}

export type Registry = Record<string, RegistryEntry>;
