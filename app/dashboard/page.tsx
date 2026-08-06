"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Building2, CheckCircle2, Clock3, HardHat, Sparkles } from "lucide-react";
import { useDemoState } from "@/components/demo-state";
import { ProgressRing } from "@/components/progress-ring";
import { StatusBadge, type Status } from "@/components/status-badge";
import { modules, topics } from "@/content/mock-program";
import { calculateProgress } from "@/lib/progress";

export default function DashboardPage() {
  const { role, completedTopics, activityComplete } = useDemoState();
  const progress = calculateProgress(completedTopics.length, topics.length);
  const roleLabel = role === "employer" ? "Employer and union pathway" : "Trades learner pathway";

  return (
    <section className="section page-section">
      <div className="container">
        <div className="dashboard-heading">
          <div>
            <span className="eyebrow"><HardHat aria-hidden="true" /> {roleLabel}</span>
            <h1>Your next practical learning step is ready.</h1>
            <p>Continue the current chapter, understand what remains, and access supporting resources without searching through a dense dashboard.</p>
          </div>
          <Link href="/role-selection" className="text-link">Change pathway</Link>
        </div>

        <div className="dashboard-hero-card">
          <ProgressRing value={progress} label="overall progress" />
          <div className="dashboard-hero-copy">
            <span className="status-kicker"><Sparkles aria-hidden="true" /> Continue learning</span>
            <h2>Green and healthy building foundations</h2>
            <p>Explore lower-impact materials through the interactive house, a short lesson, and an accessible sorting activity.</p>
            <div className="meta-row">
              <span><BookOpen aria-hidden="true" /> Chapter 1 of 3</span>
              <span><Clock3 aria-hidden="true" /> About 20 minutes remaining</span>
            </div>
            <Link href="/house" className="button primary" data-testid="continue-learning">
              Continue learning <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="dashboard-illustration" aria-hidden="true">
            <Image src="/assets/v4/illustrations/house-cutaway.svg" alt="" width={1200} height={800} />
          </div>
        </div>

        <div className="dashboard-layout">
          <div>
            <div className="section-title-row">
              <div><span className="eyebrow">Your learning trail</span><h2>Program progress</h2></div>
              <span className="illustrative-label">Illustrative curriculum</span>
            </div>
            <div className="module-list">
              {modules.map((module, index) => {
                const status: Status = index === 0 ? (activityComplete ? "completed" : "current") : index === 1 ? "available" : "locked";
                return (
                  <article className="module-card" key={module.id}>
                    <div className="module-number">{String(index + 1).padStart(2, "0")}</div>
                    <div className="module-copy">
                      <div className="module-title-row"><h3>{module.title}</h3><StatusBadge status={status} /></div>
                      <p>{module.summary}</p>
                      <div className="meta-row"><span>{module.lessons} lessons</span><span>{module.estimatedTime}</span></div>
                    </div>
                    {index === 0 ? <Link href="/house" className="icon-link" aria-label={`Open ${module.title}`}><ArrowRight aria-hidden="true" /></Link> : null}
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="dashboard-side" aria-label="Progress and certificate information">
            <article className="side-card certificate-card">
              <span className="side-icon"><Award aria-hidden="true" /></span>
              <span className="eyebrow">Completion evidence</span>
              <h2>{activityComplete ? "Sample completion unlocked" : "Complete required learning"}</h2>
              <p>{activityComplete ? "The illustrative completion and certificate state is ready to view." : "Completion evidence becomes available after the required lesson and activity are finished."}</p>
              {activityComplete ? (
                <Link href="/completion" className="button secondary full-width">View completion concept</Link>
              ) : (
                <div className="check-list">
                  <span><CheckCircle2 aria-hidden="true" /> Topic progress saved locally</span>
                  <span><Building2 aria-hidden="true" /> Interactive chapter in progress</span>
                </div>
              )}
            </article>
            <article className="side-card device-note">
              <strong>Demo privacy note</strong>
              <p>Your pathway, display preferences, and progress are stored only in this browser for the demonstration.</p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
