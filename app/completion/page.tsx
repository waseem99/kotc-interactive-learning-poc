"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, Download, RotateCcw, ShieldCheck } from "lucide-react";
import { useDemoState } from "@/components/demo-state";

export default function CompletionPage() {
  const { activityComplete, resetDemo } = useDemoState();

  return (
    <section className="section page-section completion-section">
      <div className="container narrow-container">
        <div className="completion-hero">
          <span className="completion-icon"><Award aria-hidden="true" /></span>
          <span className="eyebrow">Completion experience concept</span>
          <h1>{activityComplete ? "You completed the sample learning journey." : "Preview the completion experience."}</h1>
          <p>The production platform can apply configurable completion rules, generate downloadable evidence, retain a verification record, and allow authorized staff to reissue certificates.</p>
        </div>

        <article className="certificate-concept" aria-label="Illustrative certificate of completion">
          <div className="certificate-border">
            <Image
              src="/assets/v4/brand/kotc-logo-supplied-reference.svg"
              alt="Keepers of the Circle"
              width={270}
              height={148}
              style={{ width: "190px", margin: "0 auto 18px", borderRadius: "8px", background: "#050505" }}
            />
            <span className="certificate-mark"><ShieldCheck aria-hidden="true" /></span>
            <small>Certificate of completion — concept</small>
            <h2>Green and Healthy Building Foundations</h2>
            <p>This recognizes that</p>
            <strong>Demo Learner</strong>
            <p>completed the representative learning pathway and activity.</p>
            <div className="certificate-meta">
              <span><CalendarDays aria-hidden="true" /> August 2026</span>
              <span>Verification: KOTC-DEMO-001</span>
            </div>
            <div className="certificate-disclaimer">Illustrative only — not a valid credential</div>
          </div>
        </article>

        <div className="completion-actions">
          <button type="button" className="button secondary" onClick={() => alert("Certificate download is illustrative in this proof of concept.")}>
            <Download aria-hidden="true" /> Preview certificate action
          </button>
          <Link href="/dashboard" className="button primary">Return to dashboard <ArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="completion-summary">
          <h2>Production workflow capabilities</h2>
          <div className="check-grid">
            <span><CheckCircle2 aria-hidden="true" /> Configurable completion rules</span>
            <span><CheckCircle2 aria-hidden="true" /> Administrator verification and reissue</span>
            <span><CheckCircle2 aria-hidden="true" /> Learner completion history</span>
            <span><CheckCircle2 aria-hidden="true" /> Privacy-conscious record retention</span>
          </div>
          <button type="button" className="text-link reset-link" onClick={resetDemo}><RotateCcw aria-hidden="true" /> Reset local demo progress</button>
        </div>
      </div>
    </section>
  );
}
