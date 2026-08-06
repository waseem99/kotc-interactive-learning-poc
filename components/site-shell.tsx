"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Building2, LayoutDashboard } from "lucide-react";
import type { ReactNode } from "react";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { HorizonBands } from "@/components/brand-elements";

const navItems = [
  { href: "/dashboard", label: "My learning", icon: LayoutDashboard },
  { href: "/house", label: "Interactive house", icon: Building2 },
  { href: "/admin", label: "Admin preview", icon: BookOpenCheck },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container header-grid">
          <Link href="/" className="brand" aria-label="Keepers of the Circle Learning Commons home">
            <Image
              src="/assets/v4/brand/kotc-logo-supplied-reference.svg"
              alt="Keepers of the Circle"
              width={270}
              height={148}
              priority
            />
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
            <Link href="/" className="brand" aria-label="Keepers of the Circle Learning Commons home">
              <Image
                src="/assets/v4/brand/kotc-logo-supplied-reference.svg"
                alt="Keepers of the Circle"
                width={270}
                height={148}
              />
            </Link>
            <p>Interactive learning platform concept for practical green-building education, safer workplaces, and accessible learner progress.</p>
          </div>
          <div>
            <strong>Proposal-stage demonstration</strong>
            <p>The interface is functional and responsive. Final cultural content, official production logo files, photography, terminology, hosting, and governance workflows remain subject to KOTC approval.</p>
            <Link href="/accessibility" className="footer-link">Accessibility approach</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/design-system" className="footer-link">Design system</Link>
          </div>
        </div>
        <HorizonBands />
      </footer>
    </>
  );
}
