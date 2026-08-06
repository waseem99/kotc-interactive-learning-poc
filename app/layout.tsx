import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  applicationName: "KOTC Learning Commons",
  title: "KOTC Learning Commons — Confirmed-Scope Demo",
  description:
    "A functional proof of concept for a six-chapter, account-based KOTC learning course with an exterior interactive house.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="learning-commons-v4 learning-commons-v5">
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
