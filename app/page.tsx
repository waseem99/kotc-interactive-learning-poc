import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, Clock3, House, Keyboard, LockKeyhole, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="v5-home">
      <section className="v5-hero">
        <div className="container v5-hero-grid">
          <div className="v5-hero-copy">
            <span className="v5-kicker">Interactive green-building course concept</span>
            <h1>Practical learning for greener building and safer workplaces.</h1>
            <p>A self-paced course with six chapters, an exterior interactive house, saved progress and a completion certificate. Designed for employee and employer pathways.</p>
            <div className="v5-actions"><Link href="/sign-in" className="button primary">Create an account <ArrowRight aria-hidden="true" /></Link><Link href="/sign-in" className="button secondary">Sign in to continue</Link></div>
            <div className="v5-trust"><span><Clock3 aria-hidden="true" /> Up to 4 hours</span><span><BadgeCheck aria-hidden="true" /> 6 chapters</span><span><House aria-hidden="true" /> 16 house topics</span></div>
          </div>
          <div className="v5-product-preview" aria-label="Product preview">
            <div className="v5-preview-top"><span>Employee pathway</span><strong>38% complete</strong></div>
            <div className="v5-preview-house"><Image src="/assets/v4/illustrations/hero-workshop.svg" alt="Learners reviewing sustainable construction materials" width={1200} height={800} priority /><div className="v5-preview-hotspot a">4</div><div className="v5-preview-hotspot b">9</div><div className="v5-preview-hotspot c">15</div></div>
            <div className="v5-preview-foot"><div><small>Continue learning</small><strong>Chapter 2 · Building Envelope</strong></div><ArrowRight aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <aside className="v5-proposal-note"><div className="container"><LockKeyhole aria-hidden="true" /><p><strong>Functional proposal concept.</strong> Final curriculum, imagery, house artwork, terminology and cultural treatment will be supplied or approved by KOTC.</p></div></aside>

      <section className="v5-section"><div className="container"><header className="v5-section-head"><span className="v5-kicker">One clear journey</span><h2>Register once, learn at your own pace, and return anytime.</h2></header><div className="v5-steps">{[
        ["01","Create an account","Private learner registration and progress tracking."],
        ["02","Choose a pathway","Employee or employer; five shared chapters and one tailored chapter."],
        ["03","Complete six chapters","Up to four hours of KOTC-supplied learning content."],
        ["04","Explore the house","Sixteen exterior building topics with an equal list view."],
        ["05","Receive completion evidence","Passed/Completed status and downloadable certificate."],
      ].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="v5-section v5-sky"><div className="container v5-feature-grid"><div className="v5-feature-visual"><div className="v5-mini-house"><span className="roof" /><span className="wall" />{[1,2,3,4,5,6].map((n)=><i key={n}>{n}</i>)}</div></div><div><span className="v5-kicker">Signature experience</span><h2>Explore the exterior of the building.</h2><p>Four controlled views make the house understandable on desktop and mobile without requiring a heavy game-style 3D environment.</p><ul className="v5-checks"><li><CheckCircle2 aria-hidden="true" /> Exactly 16 data-driven hotspots</li><li><CheckCircle2 aria-hidden="true" /> Front, left, rear and right elevations</li><li><Keyboard aria-hidden="true" /> Keyboard, touch and equivalent topic-list access</li></ul><Link href="/house" className="button primary">Open the interactive house <ArrowRight aria-hidden="true" /></Link></div></div></section>

      <section className="v5-section"><div className="container v5-feature-grid reverse"><Image src="/assets/v4/illustrations/accessibility-devices.svg" alt="Accessible course shown across devices" width={1200} height={800} /><div><span className="v5-kicker">Accessible participation</span><h2>Different ways to access the same course.</h2><p>The demo treats accessibility as part of every learning screen rather than a separate add-on.</p><ul className="v5-checks"><li><Keyboard aria-hidden="true" /> Keyboard navigation and visible focus</li><li><CheckCircle2 aria-hidden="true" /> Captions, transcripts and readable content</li><li><CheckCircle2 aria-hidden="true" /> Text sizing, reduced motion and responsive reflow</li><li><Users aria-hidden="true" /> Pilot-ready concept for 150 learners</li></ul></div></div></section>
    </div>
  );
}
