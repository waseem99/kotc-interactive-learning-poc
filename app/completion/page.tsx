"use client";

import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, Download, RotateCcw, ShieldCheck } from "lucide-react";
import { useDemoState } from "@/components/demo-state";

export default function CompletionPage() {
  const { completedTopics, role, resetDemo } = useDemoState();
  const completed = completedTopics.length >= 16;
  const pathway = role === "employer" ? "Employer" : "Employee";

  return (
    <section className="v5-page completion-section">
      <div className="container narrow-container">
        <div className="completion-hero">
          <span className="completion-icon"><Award aria-hidden="true" /></span>
          <span className="v5-kicker">Course completion concept</span>
          <h1>{completed ? "You have completed the course." : "Preview the completion experience."}</h1>
          <p>There are no grades, scores or assessments. The production platform records Passed/Completed only when all required content in the learner’s six assigned chapters is complete.</p>
        </div>

        <article className="certificate-concept" aria-label="Illustrative certificate of completion">
          <div className="certificate-border">
            <div className="certificate-topline">Keepers of the Circle</div>
            <span className="certificate-mark"><ShieldCheck aria-hidden="true" /></span>
            <small>Certificate of completion — proposal concept</small>
            <h2>Green Building and Culturally Safer Workplaces</h2>
            <p>This recognizes that</p>
            <strong>Demo Learner</strong>
            <p>has achieved a <b>Passed/Completed</b> status for the {pathway.toLowerCase()} pathway.</p>
            <div className="certificate-meta"><span><CalendarDays aria-hidden="true" /> August 2026</span><span>Certificate ID: KOTC-DEMO-2026-001</span></div>
            <div className="certificate-disclaimer">Illustrative only — not a valid certificate or micro-credential</div>
          </div>
        </article>

        <div className="completion-actions">
          <button type="button" className="button secondary" onClick={() => alert("The production platform will generate a downloadable PDF certificate and verification record.")}><Download aria-hidden="true" /> Preview PDF action</button>
          <Link href="/dashboard" className="button primary">Return to dashboard <ArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="completion-summary">
          <h2>Production completion controls</h2>
          <div className="check-grid"><span><CheckCircle2 aria-hidden="true" /> All required six-chapter content completed</span><span><CheckCircle2 aria-hidden="true" /> Unique certificate identifier</span><span><CheckCircle2 aria-hidden="true" /> Administrator reissue and revocation</span><span><CheckCircle2 aria-hidden="true" /> Future micro-credential extension without claiming one now</span></div>
          <button type="button" className="text-link reset-link" onClick={resetDemo}><RotateCcw aria-hidden="true" /> Reset local demo progress</button>
        </div>
      </div>
    </section>
  );
}
