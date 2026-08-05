import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Captions,
  Leaf,
  MousePointerClick,
  ShieldCheck,
  Users,
} from "lucide-react";

const capabilities = [
  { icon: Building2, title: "Interactive house", text: "A chapter-level environment with accessible hotspot and list navigation." },
  { icon: MousePointerClick, title: "Inclusive activities", text: "Touch, pointer, keyboard, and text-equivalent learning interactions." },
  { icon: Captions, title: "Accessible media", text: "Caption, transcript, reading, theme, text-size, and motion preferences." },
  { icon: ShieldCheck, title: "KOTC control", text: "A future CMS model for curriculum, users, certificates, and analytics." },
];

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><Leaf aria-hidden="true" /> Proposal proof of concept</span>
            <h1>Learning that is interactive, accessible, and built around people.</h1>
            <p className="hero-lead">
              A working front-end concept for an inclusive online training experience focused on green and healthy building, culturally safer workplaces, and practical learner progress.
            </p>
            <div className="button-row">
              <Link href="/sign-in" className="button primary">
                Start the learner journey <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/admin" className="button secondary">
                View the admin concept
              </Link>
            </div>
            <div className="trust-row" aria-label="Prototype principles">
              <span><BadgeCheck aria-hidden="true" /> WCAG 2.2 AA target</span>
              <span><Users aria-hidden="true" /> KOTC-led co-design</span>
              <span><ShieldCheck aria-hidden="true" /> Privacy-conscious architecture</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustrative learner dashboard preview">
            <div className="preview-window">
              <div className="preview-window-bar"><span /><span /><span /><small>learner dashboard</small></div>
              <div className="preview-content">
                <div className="preview-welcome">
                  <div>
                    <small>Welcome back</small>
                    <strong>Continue your learning</strong>
                  </div>
                  <div className="preview-avatar">KT</div>
                </div>
                <div className="preview-progress-card">
                  <div className="mini-ring"><strong>34%</strong></div>
                  <div>
                    <small>Current chapter</small>
                    <strong>Green and healthy building foundations</strong>
                    <div className="mini-progress"><span /></div>
                  </div>
                </div>
                <div className="preview-house">
                  <div className="preview-roof" />
                  <div className="preview-rooms">
                    <span>Foundations</span><span className="current">Materials</span><span>Air quality</span><span>Water</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-note note-one">Progress saved on this device</div>
            <div className="floating-note note-two">Keyboard and list alternatives</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What this demo proves</span>
            <h2>A focused demonstration of the RFP’s hardest requirements.</h2>
            <p>Every screen is coded, responsive, and designed to translate into the proposed production architecture.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article className="capability-card" key={title}>
                <span className="icon-tile"><Icon aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section subtle-section">
        <div className="container split-feature">
          <div>
            <span className="eyebrow">Important boundary</span>
            <h2>Functional direction, not a final cultural design.</h2>
          </div>
          <div className="boundary-card">
            <p>
              The prototype intentionally uses neutral visual language. Final imagery, terminology, stories, symbolism, and brand treatment must be shaped through KOTC-led cultural review, community input, and formal approval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
