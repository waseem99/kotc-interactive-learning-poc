import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock3, Users } from "lucide-react";
import { chapters, topics } from "@/content/mock-program";

export default async function ChapterPage({ params }: { params: Promise<{ chapterId: string }> }) {
  const { chapterId } = await params;
  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0];
  const chapterTopics = topics.filter((topic) => chapter.topicIds.includes(topic.id));

  return (
    <section className="v5-page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/dashboard">Dashboard</Link><span>/</span><span aria-current="page">Chapter {chapter.number}</span></nav>
        <header className="v5-page-head">
          <div><span className="v5-kicker"><BookOpen aria-hidden="true" /> Chapter {chapter.number} of 6</span><h1>{chapter.title}</h1><p>{chapter.summary}</p></div>
          <div className="access-note"><span><Clock3 aria-hidden="true" /> {chapter.estimatedMinutes} minutes</span>{chapter.pathwayMode === "variant" ? <span><Users aria-hidden="true" /> Pathway-specific content</span> : <span><Users aria-hidden="true" /> Shared chapter</span>}</div>
        </header>

        <div className="v5-chapter-overview">
          <section>
            <div className="v5-section-title"><div><span className="v5-kicker">Required learning</span><h2>{chapterTopics.length} topic{chapterTopics.length === 1 ? "" : "s"} in this chapter</h2></div><span className="v5-placeholder">Illustrative titles</span></div>
            <ol className="v5-chapter-topic-cards">
              {chapterTopics.map((topic) => <li key={topic.id}><span>{topic.number}</span><div><h3>{topic.title}</h3><p>{topic.summary}</p><small>{topic.durationMinutes} minutes · Exterior {topic.view} view</small></div><Link href={`/topic/${topic.id}`} aria-label={`Open ${topic.title}`}><ArrowRight aria-hidden="true" /></Link></li>)}
            </ol>
          </section>
          <aside className="v5-side-card soft"><span className="v5-kicker">Completion</span><h2>No score or grade.</h2><p>Complete the required topic content to move this chapter from In Progress to Completed. The production course tracks progress securely against the learner account.</p><Link href="/house" className="button secondary full-width">Explore through the house</Link></aside>
        </div>

        <div className="lesson-navigation"><Link href="/dashboard" className="button secondary"><ArrowLeft aria-hidden="true" /> Back to dashboard</Link>{chapterTopics[0] ? <Link href={`/topic/${chapterTopics[0].id}`} className="button primary">Start chapter <ArrowRight aria-hidden="true" /></Link> : null}</div>
      </div>
    </section>
  );
}
