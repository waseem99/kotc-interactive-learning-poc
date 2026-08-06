import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "KOTC Learning Commons — Interactive Platform Concept",
  description:
    "A functional, accessible proof of concept for the Keepers of the Circle interactive educational platform.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="learning-commons-v4">
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}