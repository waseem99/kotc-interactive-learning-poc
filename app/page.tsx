import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Info,
  Keyboard,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <section className="lc-hero">
        <div className="container lc-hero-grid">
          <div className="lc-hero-copy">
            <span className="lc-kicker">Interactive educational platform concept</span>
            <h1>Practical learning for greener building and safer workplaces.</h1>
            <p>
              Explore an accessible learning journey built around real construction decisions, clear progress,
              flexible participation, and KOTC-controlled content review.
            </p>
            <div className="lc-actions">
              <Link href="/sign-in" className="button primary">
                Explore the learning experience <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/admin" className="button secondary">View administrator tools</Link>
            </div>
            <div className="lc-trust" aria-label="Concept commitments">
              <span><BadgeCheck aria-hidden="true" /> WCAG 2.2 AA target</span>
              <span><Users aria-hidden="true" /> KOTC-led review</span>
              <span><ShieldCheck aria-hidden="true" /> Privacy-conscious concept</span>
            </div>
          </div>

          <div className="lc-hero-media">
            <Image
              src="/assets/v4/illustrations/hero-workshop.svg"
              alt="Illustrated adult learners collaborating around sustainable construction materials"
              width={1200}
              height={800}
              priority
            />
            <div className="lc-house-card">
              <Image
                src="/assets/v4/illustrations/house-cutaway.svg"
                alt="Interactive cutaway house showing learning locations"
                width={1400}
                height={900}
              />
            </div>
            <div className="lc-progress-chip">
              <strong>34% complete</strong>
              Continue: building foundations
            </div>
          </div>
        </div>
      </section>

      <aside className="lc-proposal-note" aria-label="Proposal boundary">
        <div className="container">
          <Info aria-hidden="true" />
          <p>
            <strong>Functional proposal concept.</strong> This demonstration illustrates the learner journey,
            accessibility approach, and administration model. Final curriculum, imagery, terminology, logo master,
            and cultural treatment require KOTC approval.
          </p>
        </div>
      </aside>

      <section className="lc-section">
        <div className="container">
          <div className="lc-section-head">
            <span className="lc-kicker">A clear five-step journey</span>
            <h2>Know where you are, what comes next, and how to participate.</h2>
            <p>The experience guides learners from pathway selection through practical activities and completion evidence.</p>
          </div>
          <div className="lc-journey">
            <Image
              src="/assets/v4/illustrations/learning-path.svg"
              alt="Five-step learning journey from choosing a pathway to completion"
              width={1600}
              height={560}
            />
          </div>
        </div>
      </section>

      <section className="lc-section alt">
        <div className="container lc-feature">
          <Image
            src="/assets/v4/illustrations/house-cutaway.svg"
            alt="Cutaway house with numbered learning hotspots"
            width={1400}
            height={900}
          />
          <div className="lc-feature-copy">
            <span className="lc-kicker">Signature interaction</span>
            <h2>Learn through the building.</h2>
            <p>
              The house turns each construction area into a clear learning destination while preserving an equivalent list view.
            </p>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> Numbered hotspots with explicit room names</li>
              <li><CheckCircle2 aria-hidden="true" /> Diagram and structured-list modes</li>
              <li><CheckCircle2 aria-hidden="true" /> The same lesson state by pointer, touch, or keyboard</li>
            </ul>
            <div className="lc-actions" style={{ marginTop: 28 }}>
              <Link href="/house" className="button primary">Open the interactive house <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lc-section sky">
        <div className="container lc-feature reverse">
          <div className="lc-feature-copy">
            <span className="lc-kicker">Inclusive by design</span>
            <h2>Different ways to access the same learning.</h2>
            <p>
              Accessibility is treated as part of the learning model rather than an optional toolbar added at the end.
            </p>
            <ul>
              <li><Keyboard aria-hidden="true" /> Keyboard-first navigation and visible focus</li>
              <li><CheckCircle2 aria-hidden="true" /> Captions, transcripts, and readable lesson content</li>
              <li><CheckCircle2 aria-hidden="true" /> Non-drag alternatives for every activity</li>
              <li><CheckCircle2 aria-hidden="true" /> Text size, theme, and reduced-motion preferences</li>
            </ul>
          </div>
          <Image
            src="/assets/v4/illustrations/accessibility-devices.svg"
            alt="Accessible learning shown across desktop, tablet, and mobile devices"
            width={1400}
            height={900}
          />
        </div>
      </section>

      <section className="lc-section">
        <div className="container lc-feature">
          <Image
            src="/assets/v4/illustrations/materials-board.svg"
            alt="Learning board showing wood, insulation, steel, and glazing material samples"
            width={1400}
            height={900}
          />
          <div className="lc-feature-copy">
            <span className="lc-kicker">Practical activities</span>
            <h2>Make choices using recognizable materials and clear feedback.</h2>
            <p>
              Activities connect information to real building decisions through material samples, explanations, and equivalent interaction paths.
            </p>
            <ul>
              <li><CheckCircle2 aria-hidden="true" /> Material cards with image, name, and explanation</li>
              <li><CheckCircle2 aria-hidden="true" /> Supportive feedback that explains why</li>
              <li><CheckCircle2 aria-hidden="true" /> Progress saved locally in the proposal demonstration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}