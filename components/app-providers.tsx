"use client";

import type { ReactNode } from "react";
import { DemoStateProvider } from "@/components/demo-state";

export function AppProviders({ children }: { children: ReactNode }) {
  return <DemoStateProvider>{children}</DemoStateProvider>;
}
