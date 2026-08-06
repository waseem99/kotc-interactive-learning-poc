"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Building2, LayoutDashboard } from "lucide-react";
import type { ReactNode } from "react";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { BrandMark, HorizonBands } from "@/components/brand-elements";

const navItems = [
  { href: "/dashboard", label: "My learning", icon: LayoutDashboard },
  { href: "/house", label: "Interactive house", icon: Building2 },
  { href: "/admin", label: "Admin concept", icon: BookOpenCheck },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="demo-banner" role="note">
        <strong>Functional proposal concept.</strong> Brand values are aligned to the supplied KOTC reference;
        final cultural imagery, terminology, and production assets require KOTC approval.
      </div>
      <header className="site-header">
        <div className="container header-grid">
          <Link href="/" className="brand" aria-label="Keepers of the Circle interactive learning concept home">
            <BrandMark />
          </Link>
          <nav aria-label="Primary navigation" className="primary-nav">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href || pathname.startsWith(`${href}/`) ? "active" : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
          <AccessibilityToolbar />
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <BrandMark />
            <p>Interactive learning platform concept for accessible, practical, and community-led education.</p>
          </div>
          <div>
            <strong>Proposal demonstration</strong>
            <p>Illustrative front-end proof of concept. Production hosting, content, brand assets, and cultural treatments remain subject to KOTC review and approval.</p>
            <Link href="/accessibility" className="footer-link">Accessibility approach</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/design-system" className="footer-link">Brand system evidence</Link>
          </div>
        </div>
        <HorizonBands />
      </footer>
    </>
  );
}
