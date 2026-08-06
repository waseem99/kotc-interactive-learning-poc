"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, Building2, LayoutDashboard, Library } from "lucide-react";
import type { ReactNode } from "react";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { HorizonBands } from "@/components/brand-elements";

const navItems = [
  { href: "/dashboard", label: "My learning", icon: LayoutDashboard },
  { href: "/house", label: "Interactive house", icon: Building2 },
  { href: "/accessibility", label: "Resources", icon: Library },
  { href: "/admin", label: "Admin preview", icon: BookOpenCheck },
];

const logoPath = "/assets/v4/brand/kotc-logo-supplied-reference.svg";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container header-grid">
          <Link href="/" className="brand" aria-label="Keepers of the Circle Learning Commons home">
            <Image src={logoPath} alt="Keepers of the Circle" width={270} height={148} priority />
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
              <Image src={logoPath} alt="Keepers of the Circle" width={270} height={148} />
            </Link>
            <p>Accessible, practical learning for green building and culturally safer workplaces.</p>
          </div>
          <div>
            <strong>Functional proposal concept</strong>
            <p>
              This coded demonstration illustrates the proposed learner journey and administration model. Final imagery,
              terminology, curriculum, production logo files, and cultural treatment require KOTC review and approval.
            </p>
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