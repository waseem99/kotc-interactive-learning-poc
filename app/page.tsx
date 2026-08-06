import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Captions,
  CircleDotDashed,
  MousePointerClick,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BrandSun, HorizonBands } from "@/components/brand-elements";

const capabilities = [
  { icon: Building2, title: "Learn through the building", text: "A chapter-level house experience with equivalent hotspot, keyboard, touch, and structured-list navigation." },
  { icon: MousePointerClick, title: "Participate your way", text: "Activities support pointer, touch, keyboard, and text-equivalent interaction paths." },
  { icon: Captions, title: "Access every lesson", text: "Captions, transcripts, readable content, text sizing, theme, and motion preferences are built into the concept." },
  { icon: ShieldCheck, title: "Keep KOTC in control", text: "The future administration model keeps curriculum, review stages, certificates, and reporting under KOTC governance." },
];

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><CircleDotDashed aria-hidden="true" /> Interactive learning proposal</span>
            <h1>A learning journey shaped around people, place, and practical action.</h1>
            <p className="hero-lead">
              A working front-end concept for accessible online training in green and healthy building, culturally safer workplaces, and clear learner progress.
            </p>
            <div className="button-row">
              <Link href="/sign-in" className="button primary">
                Start the learner journey <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/admin" className="button secondary">
                View the admin concept
              </Link>
            </div>
            <div className="trust-row">
              <span><BadgeCheck aria-hidden="true" /> WCAG 2.2 AA target</span>
              <span><Users aria-hidden="true" /> KOTC-led co-design</span>
              <span><ShieldCheck aria-hidden="true" /> Privacy-conscious architecture</span>
            </div>
          </div>
          <div className="hero-visual">
            <BrandSun />
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
        <HorizonBands className="hero-horizon" />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What this concept demonstrates</span>
            <h2>The most important learning, accessibility, and governance requirements working together.</h2>
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
            <h2>Brand-aligned direction, not final cultural content.</h2>
          </div>
          <div className="boundary-card">
            <p>
              This concept uses visual properties observed in the supplied KOTC website reference. Final logos, imagery, terminology, stories, symbolism, patterns, and production content must be confirmed through KOTC-led cultural and brand review.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
