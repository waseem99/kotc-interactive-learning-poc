"use client";

import Link from "next/link";
import { ArrowRight, Award, BookOpen, CheckCircle2, Clock3, HardHat, RotateCcw } from "lucide-react";
import { useDemoState } from "@/components/demo-state";
import { ProgressRing } from "@/components/progress-ring";
import { chapters, course } from "@/content/mock-program";

export default function DashboardPage() {
  const { role, completedTopics, currentTopic } = useDemoState();
  const complete = Math.min(completedTopics.length, 16);
  const progress = Math.round((complete / 16) * 100);
  const roleLabel = role === "employer" ? "Employer pathway" : "Employee pathway";
  const currentChapter = chapters.find((chapter) => chapter.topicIds.includes(currentTopic)) ?? chapters[0];

  return (
    <section className="v5-page">
      <div className="container">
        <header className="v5-page-head"><div><span className="v5-kicker"><HardHat aria-hidden="true" /> {roleLabel}</span><h1>Welcome back. Continue your course.</h1><p>Your progress is saved in this demonstration browser so you can leave and return to the same place.</p></div><Link href="/role-selection" className="v5-text-link">Change pathway</Link></header>

        <section className="v5-resume-card" aria-label="Resume learning"><ProgressRing value={progress} label="course progress" /><div><span className="v5-kicker">Next step</span><h2>{currentChapter.title}</h2><p>Continue with the interactive house and the topic currently in progress.</p><div className="v5-meta"><span><BookOpen aria-hidden="true" /> Chapter {currentChapter.number} of 6</span><span><Clock3 aria-hidden="true" /> Up to {course.estimatedMinutes} minutes total</span></div></div><Link href="/house" className="button primary" data-testid="continue-learning">Continue learning <ArrowRight aria-hidden="true" /></Link></section>

        <div className="v5-dashboard-grid">
          <section>
            <div className="v5-section-title"><div><span className="v5-kicker">One course · six chapters</span><h2>Your learning trail</h2></div><span className="v5-placeholder">Working chapter titles</span></div>
            <ol className="v5-chapter-list">
              {chapters.map((chapter) => {
                const done = chapter.topicIds.every((id) => completedTopics.includes(id));
                const active = chapter.id === currentChapter.id && !done;
                return <li key={chapter.id} className={done ? "done" : active ? "active" : ""}><div className="v5-chapter-number">{done ? <CheckCircle2 aria-hidden="true" /> : chapter.number}</div><div className="v5-chapter-copy"><div><h3>{chapter.title}</h3>{chapter.pathwayMode === "variant" ? <span className="v5-pathway-tag">Tailored for {roleLabel.toLowerCase()}</span> : null}</div><p>{chapter.summary}</p><span>{chapter.estimatedMinutes} minutes · {chapter.topicIds.length} required topic{chapter.topicIds.length === 1 ? "" : "s"}</span></div><div className="v5-chapter-actions"><span className="v5-status">{done ? "Completed" : active ? "In progress" : "Not started"}</span><Link href={`/chapter/${chapter.id}`} aria-label={`Open chapter ${chapter.number}: ${chapter.title}`}><ArrowRight aria-hidden="true" /></Link></div></li>;
              })}
            </ol>
          </section>

          <aside className="v5-side-stack"><article className="v5-side-card"><Award aria-hidden="true" /><span className="v5-kicker">Completion rule</span><h2>Complete all required content.</h2><p>There are no grades, scores, assessments or prerequisites. Completion results in a Passed/Completed status and certificate.</p><Link href="/completion" className="button secondary">Preview certificate</Link></article><article className="v5-side-card soft"><RotateCcw aria-hidden="true" /><strong>Resume later</strong><p>Production accounts will save progress securely so learners can continue over multiple sessions.</p></article></aside>
        </div>
      </div>
    </section>
  );
}
