import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Settings2 } from "lucide-react";

const swatches = [
  ["Navy 950", "#0B2F4A", "Headings and high-emphasis structure"],
  ["Navy 800", "#154B73", "Primary actions and selected states"],
  ["Lake blue", "#2F6D91", "Supporting controls and links"],
  ["Sky 200", "#D8EEF5", "Learning and support surfaces"],
  ["Sky 100", "#EDF7FB", "Large quiet background areas"],
  ["Gold 500", "#E3B320", "Current position, progress, and focus"],
  ["Red 600", "#A93D4A", "Restricted secondary milestone accent"],
  ["Warm white", "#FAF9F6", "Alternate neutral canvas"],
];

const assets = [
  ["Workshop hero", "/assets/v4/illustrations/hero-workshop.svg"],
  ["Interactive house", "/assets/v4/illustrations/house-cutaway.svg"],
  ["Learning journey", "/assets/v4/illustrations/learning-path.svg"],
  ["Materials board", "/assets/v4/illustrations/materials-board.svg"],
  ["Accessibility devices", "/assets/v4/illustrations/accessibility-devices.svg"],
];

export default function DesignSystemPage() {
  return (
    <section className="section page-section brand-system-page">
      <div className="container">
        <Link href="/" className="text-link"><ArrowLeft aria-hidden="true" /> Back to concept</Link>
        <div className="page-intro split-intro" style={{ marginTop: "28px" }}>
          <div>
            <span className="eyebrow">Learning Commons V4</span>
            <h1>A calm, practical learning-product system.</h1>
            <p>White and neutral surfaces lead the interface. Navy establishes hierarchy, sky blue supports learning, gold identifies the current position, and red remains a restricted secondary accent.</p>
          </div>
          <Image
            src="/assets/v4/brand/kotc-logo-supplied-reference.svg"
            alt="Keepers of the Circle supplied logo reference"
            width={270}
            height={148}
            style={{ width: "220px", borderRadius: "10px", background: "#050505" }}
          />
        </div>

        <section>
          <div className="section-title-row"><div><span className="eyebrow">Colour roles</span><h2>Purpose-led distribution</h2></div></div>
          <div className="brand-system-grid">
            {swatches.map(([name, value, use]) => (
              <article className="brand-swatch" key={name} style={{ "--swatch": value } as React.CSSProperties}>
                <strong>{name}</strong><small>{value}</small><small>{use}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading"><span className="eyebrow">Core assets</span><h2>Original neutral prototype visuals</h2><p>Assets provide product context without inventing cultural imagery or symbolism.</p></div>
          <div className="lc-asset-grid">
            {assets.map(([name, src]) => (
              <article className="lc-asset-tile" key={name}>
                <Image src={src} alt={`${name} prototype asset`} width={1200} height={800} />
                <div><strong>{name}</strong><small>Scalable SVG • review-stage</small></div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading"><span className="eyebrow">Component behaviour</span><h2>Clear action and status hierarchy</h2></div>
          <div className="brand-component-row">
            <button type="button" className="button primary">Primary action</button>
            <button type="button" className="button secondary">Secondary action</button>
            <span className="status-badge status-completed"><CheckCircle2 aria-hidden="true" /> Completed</span>
            <span className="access-note"><span><Settings2 aria-hidden="true" /> Display settings</span></span>
          </div>
        </section>

        <section className="section subtle-section" style={{ marginTop: "72px", paddingInline: "32px", borderRadius: "20px" }}>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Production boundary</span>
            <h2>The supplied logo is a prototype reference, not a production master.</h2>
            <p>Replace it with an official transparent SVG or high-resolution transparent PNG before final delivery. Cultural content, photography, terminology, and named review responsibilities also require KOTC approval.</p>
          </div>
        </section>
      </div>
    </section>
  );
}
