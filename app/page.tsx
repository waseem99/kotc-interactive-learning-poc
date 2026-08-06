import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Captions,
  CheckCircle2,
  Keyboard,
  ListChecks,
  MousePointerClick,
  ShieldCheck,
} from "lucide-react";

const journeySteps = [
  "Choose a learning pathway",
  "Explore the interactive house",
  "Complete practical lessons",
  "Use accessible activities",
  "Track progress and completion",
];

export default function HomePage() {
  return (
    <div>
      <section className="lc-hero">
        <div className="container lc-hero-grid">
          <div className="lc-hero-copy">
            <span className="eyebrow">Interactive educational platform concept</span>
            <h1>Practical learning for greener building and safer workplaces.</h1>
            <p>
              A functional learner experience that turns green-building topics into clear, practical steps while supporting captions, transcripts, keyboard use, non-drag activities, and visible progress.
            </p>
            <div className="button-row">
              <Link href="/sign-in" className="button primary">
                Start the learner journey <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/admin" className="button secondary">View administrator tools</Link>
            </div>
          </div>
          <div className="lc-hero-visual">
            <div className="lc-hero-frame">
              <Image
                src="/assets/v4/illustrations/hero-workshop.svg"
                alt="Illustrated sustainable-construction workshop with adult learners comparing materials"
                width={1200}
                height={800}
                priority
              />
            </div>
            <div className="lc-hero-chip" aria-label="Sample learner progress">
              <span className="lc-progress-disc">34%</span>
              <span><strong>Current chapter</strong> Green and healthy building foundations</span>
            </div>
          </div>
        </div>
      </section>

      <aside className="lc-proposal-note" role="note">
        <div className="container">
          <ShieldCheck aria-hidden="true" />
          <span><strong>Proposal-stage concept:</strong> final cultural content, terminology, imagery, and production brand files require KOTC review and approval.</span>
        </div>
      </aside>

      <section className="section">
        <div className="container lc-journey-grid">
          <div className="lc-copy">
            <span className="eyebrow">A clear learner journey</span>
            <h2>Every step answers what comes next.</h2>
            <p>The experience is structured around orientation, practical learning, interaction, feedback, and completion—not around a generic dashboard full of equal cards.</p>
            <ul>
              {journeySteps.map((step) => <li key={step}><CheckCircle2 aria-hidden="true" /> {step}</li>)}
            </ul>
          </div>
          <div className="lc-asset-card">
            <Image
              src="/assets/v4/illustrations/learning-path.svg"
              alt="Five-step illustrated learning path from pathway selection to completion"
              width={1200}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="section lc-signature-section">
        <div className="container lc-signature-grid">
          <div className="lc-asset-card">
            <Image
              src="/assets/v4/illustrations/house-cutaway.svg"
              alt="Cutaway house illustration showing learning topics across building systems"
              width={1200}
              height={800}
            />
          </div>
          <div className="lc-copy">
            <span className="eyebrow">Signature interaction</span>
            <h2>Learn through the building, room by room.</h2>
            <p>The interactive house connects construction topics to a spatial journey. Numbered controls, a selected-topic panel, and an equivalent structured list provide the same lesson access across pointer, keyboard, touch, and assistive technology.</p>
            <div className="button-row">
              <Link href="/house" className="button primary">Explore the interactive house <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section subtle-section">
        <div className="container lc-access-grid">
          <div className="lc-copy">
            <span className="eyebrow">Inclusive by design</span>
            <h2>Access support is part of the learning experience.</h2>
            <p>Accessibility is treated as a product requirement rather than an optional toolbar added after the interface is complete.</p>
            <ul>
              <li><Keyboard aria-hidden="true" /> Complete navigation and activities with a keyboard</li>
              <li><Captions aria-hidden="true" /> Captions and transcripts beside learning media</li>
              <li><MousePointerClick aria-hidden="true" /> Equivalent non-drag interaction methods</li>
              <li><ListChecks aria-hidden="true" /> Clear instructions, status, and supportive feedback</li>
            </ul>
          </div>
          <div className="lc-asset-card">
            <Image
              src="/assets/v4/illustrations/accessibility-devices.svg"
              alt="Illustration of accessible learning across desktop, tablet, keyboard, transcript, and non-drag controls"
              width={1200}
              height={760}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container lc-control-grid">
          <div className="lc-admin-preview" aria-label="Illustrative administrator content-review workspace">
            <div className="lc-admin-preview-head"><strong>KOTC content workspace</strong><BadgeCheck aria-hidden="true" /></div>
            <div className="lc-admin-preview-body">
              <div className="lc-admin-preview-nav"><span>Curriculum</span><span>Media</span><span>Activities</span><span>Reviews</span><span>Learners</span></div>
              <div className="lc-admin-preview-content">
                <div className="lc-review-row"><span><strong>Lower-impact materials</strong><small>Lesson and transcript</small></span><span className="lc-status">Cultural review</span></div>
                <div className="lc-review-row"><span><strong>Material comparison activity</strong><small>Keyboard and touch paths</small></span><span className="lc-status">Accessibility review</span></div>
                <div className="lc-review-row"><span><strong>Completion certificate</strong><small>Rules and verification</small></span><span className="lc-status">Ready for approval</span></div>
              </div>
            </div>
          </div>
          <div className="lc-copy">
            <span className="eyebrow">KOTC remains in control</span>
            <h2>Curriculum, review, publishing, and reporting stay visible.</h2>
            <p>The administrator concept demonstrates structured content, transcript management, accessibility review, cultural review, publishing states, learner reporting, and completion evidence.</p>
            <div className="button-row"><Link href="/admin" className="button secondary">Open admin preview <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
