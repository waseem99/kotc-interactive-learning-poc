"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  HardHat,
  Sparkles,
} from "lucide-react";
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
            <h1>Welcome back. Your next step is ready.</h1>
            <p>This illustrative dashboard brings progress, learning modules, resources, and completion status into one clear view.</p>
          </div>
          <Link href="/role-selection" className="text-link">Change pathway</Link>
        </div>

        <div className="dashboard-hero-card">
          <ProgressRing value={progress} label="overall progress" />
          <div className="dashboard-hero-copy">
            <span className="status-kicker"><Sparkles aria-hidden="true" /> Continue where you left off</span>
            <h2>Green and healthy building foundations</h2>
            <p>Explore lower-impact materials through an interactive house, a short lesson, and an accessible activity.</p>
            <div className="meta-row">
              <span><BookOpen aria-hidden="true" /> Chapter 1 of 3</span>
              <span><Clock3 aria-hidden="true" /> About 20 minutes remaining</span>
            </div>
            <Link href="/house" className="button primary" data-testid="continue-learning">
              Continue learning <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="dashboard-illustration" aria-hidden="true">
            <div className="mini-house-roof" />
            <div className="mini-house-body">
              <span /><span className="accent" /><span /><span />
            </div>
          </div>
        </div>

        <div className="dashboard-layout">
          <div>
            <div className="section-title-row">
              <div><span className="eyebrow">Your program</span><h2>Learning modules</h2></div>
              <span className="illustrative-label">Illustrative content</span>
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
              <span className="eyebrow">Certificate progress</span>
              <h2>{activityComplete ? "Concept certificate unlocked" : "Complete all required learning"}</h2>
              <p>{activityComplete ? "The demo completion state is ready to view." : "Your certificate will become available after required lessons and activities are complete."}</p>
              {activityComplete ? (
                <Link href="/completion" className="button secondary full-width">View completion concept</Link>
              ) : (
                <div className="check-list">
                  <span><CheckCircle2 aria-hidden="true" /> 1 topic completed</span>
                  <span><Building2 aria-hidden="true" /> Interactive chapter in progress</span>
                </div>
              )}
            </article>
            <article className="side-card device-note">
              <strong>Demo privacy note</strong>
              <p>Your selected role, display preferences, and progress are stored only in this browser for demonstration purposes.</p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
