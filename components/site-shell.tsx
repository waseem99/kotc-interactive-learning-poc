"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Building2, LayoutDashboard } from "lucide-react";
import type { ReactNode } from "react";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";

const navItems = [
  { href: "/dashboard", label: "Learner dashboard", icon: LayoutDashboard },
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
        <strong>Functional proof of concept.</strong> Illustrative content and placeholder visuals only;
        final cultural and visual direction requires KOTC-led co-design and approval.
      </div>
      <header className="site-header">
        <div className="container header-grid">
          <Link href="/" className="brand" aria-label="KOTC learning concept home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>
              <strong>Interactive Learning</strong>
              <small>Keepers of the Circle concept</small>
            </span>
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
            <strong>KOTC Interactive Learning Platform Concept</strong>
            <p>Designed to demonstrate a respectful, accessible, and maintainable learning experience.</p>
          </div>
          <div>
            <strong>Prototype boundary</strong>
            <p>Front-end demo hosted for proposal review. Production architecture is proposed on AWS Canada.</p>
            <Link href="/accessibility" className="footer-link">Accessibility approach</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
