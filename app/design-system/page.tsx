import Link from "next/link";
import { ArrowLeft, CheckCircle2, CircleDotDashed, Settings2 } from "lucide-react";
import { BrandMark, BrandSun, HorizonBands } from "@/components/brand-elements";

const swatches = [
  ["KOTC navy", "#0B4D78"],
  ["Mid blue", "#2F6F9F"],
  ["Sky blue", "#EAF7FB"],
  ["Golden yellow", "#F0CF3E"],
  ["Warm red", "#B54650"],
  ["Ink", "#123A59"],
  ["Soft neutral", "#F7F9FA"],
  ["White", "#FFFFFF"],
];

export default function DesignSystemPage() {
  return (
    <section className="section page-section brand-system-page">
      <div className="container">
        <Link href="/" className="text-link"><ArrowLeft aria-hidden="true" /> Back to concept</Link>
        <div className="page-intro split-intro">
          <div>
            <span className="eyebrow"><CircleDotDashed aria-hidden="true" /> Brand V3 evidence</span>
            <h1>Circle and Horizon design system</h1>
            <p>A reviewable implementation reference for the working KOTC-aligned visual system. Values remain subject to replacement by official KOTC brand assets.</p>
          </div>
          <BrandMark />
        </div>

        <section className="section-title-row">
          <div><span className="eyebrow">Colour roles</span><h2>Controlled, accessible brand distribution</h2></div>
        </section>
        <div className="brand-system-grid">
          {swatches.map(([name, value]) => (
            <article className="brand-swatch" key={name} style={{ "--swatch": value } as React.CSSProperties}>
              <strong>{name}</strong><small>{value}</small>
            </article>
          ))}
        </div>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Components</span>
            <h2>Core interaction and brand elements</h2>
          </div>
          <div className="brand-component-row">
            <button type="button" className="button primary">Primary action</button>
            <button type="button" className="button secondary">Secondary action</button>
            <span className="status-badge status-completed"><CheckCircle2 aria-hidden="true" /> Completed</span>
            <span className="access-note"><span><Settings2 aria-hidden="true" /> Display settings</span></span>
          </div>
        </section>

        <section className="brand-component-row" style={{ position: "relative", minHeight: "360px", overflow: "hidden" }}>
          <BrandSun style={{ right: "-4rem", top: "-8rem" }} />
          <div style={{ position: "relative", zIndex: 2, maxWidth: "620px" }}>
            <span className="eyebrow">Decorative boundary</span>
            <h2>Geometry supports hierarchy without carrying cultural meaning.</h2>
            <p>Circle, ray, dot, and horizon treatments are used as visual properties observed in the supplied reference. They remain subject to KOTC approval.</p>
          </div>
          <HorizonBands />
        </section>
      </div>
    </section>
  );
}
