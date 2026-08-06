"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Captions, CheckCircle2, Clock3, FileText, Play, Volume2 } from "lucide-react";
import { useDemoState } from "@/components/demo-state";
import { chapters, demoTranscript, topics } from "@/content/mock-program";

export function TopicLearningPage({ topicId }: { topicId: string }) {
  const { completedTopics, markTopicComplete } = useDemoState();
  const topic = topics.find((item) => item.id === topicId) ?? topics[0];
  const chapter = chapters.find((item) => item.id === topic.chapterId) ?? chapters[0];
  const complete = completedTopics.includes(topic.id);
  const next = topics[(topics.findIndex((item) => item.id === topic.id) + 1) % topics.length];

  return (
    <section className="v5-page">
      <div className="container lesson-container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/dashboard">Dashboard</Link><span>/</span><Link href="/house">Interactive house</Link><span>/</span><span aria-current="page">{topic.title}</span></nav>
        <div className="lesson-header">
          <div><span className="v5-kicker">Chapter {chapter.number} · Topic {topic.number} of 16</span><h1>{topic.title}</h1><p>{topic.detail}</p></div>
          <div className="lesson-meta"><span><Clock3 aria-hidden="true" /> {topic.durationMinutes} minutes</span><span>{complete ? "Completed" : "Required topic"}</span></div>
        </div>

        <div className="lesson-layout">
          <article className="lesson-main">
            <div className="video-concept" aria-label="KOTC-supplied video placeholder">
              <div className="video-scene"><span>KOTC-supplied video, illustration or guided interaction</span></div>
              <div className="video-controls"><button type="button" className="icon-button" aria-label="Play video concept"><Play aria-hidden="true" /></button><span className="video-time">00:00 / 02:30</span><div className="video-scrubber" aria-hidden="true"><span style={{width:"0%"}} /></div><button type="button" className="icon-button" aria-label="Volume"><Volume2 aria-hidden="true" /></button><button type="button" className="caption-button" aria-pressed="true"><Captions aria-hidden="true" /> CC</button></div>
            </div>

            <div className="lesson-copy prose"><h2>Learning content placeholder</h2><p>KOTC will supply the final approved curriculum, video, voiceover, illustrations, transcript and captions. This screen demonstrates the reading width, media treatment, chapter context and completion controls without inventing final curriculum.</p><div className="learning-callout"><strong>What this topic screen supports</strong><ol><li>Approved KOTC media and transcript shown together.</li><li>Readable content that reflows at large text and narrow widths.</li><li>Non-graded interactions that reinforce learning without producing a score.</li><li>Account-based progress in production and browser-based progress in this proposal demo.</li></ol></div><h2>Practical reflection</h2><p>Before continuing, the learner can review the topic summary, access the transcript and complete any required acknowledgement or non-graded activity configured by KOTC.</p></div>

            <div className="v5-topic-complete-card"><div><span className="v5-kicker">Completion acknowledgement</span><h2>{complete ? "This topic is complete." : "Ready to mark this topic complete?"}</h2><p>No grade or pass mark is calculated. Completion contributes to the six-chapter course record.</p></div><button type="button" className="button primary" onClick={() => markTopicComplete(topic.id)} disabled={complete}>{complete ? <><CheckCircle2 aria-hidden="true" /> Completed</> : "Mark topic complete"}</button></div>

            <div className="lesson-navigation"><Link href="/house" className="button secondary"><ArrowLeft aria-hidden="true" /> Back to house</Link><Link href={`/topic/${next.id}`} className="button primary">Next topic <ArrowRight aria-hidden="true" /></Link></div>
          </article>

          <aside className="lesson-sidebar"><section className="transcript-card"><div className="card-title-row"><div><span className="v5-kicker"><Captions aria-hidden="true" /> Media access</span><h2>Transcript</h2></div></div><div className="transcript-list">{demoTranscript.map((item)=><p key={item.time}><button type="button" aria-label={`Go to ${item.time}`}>{item.time}</button><span>{item.text}</span></p>)}</div></section><section className="resource-card"><span className="side-icon"><FileText aria-hidden="true" /></span><span className="v5-kicker">KOTC-supplied resource</span><h2>Topic worksheet or reference</h2><p>Approved downloadable files can be attached and replaced by KOTC administrators.</p><button type="button" className="button secondary full-width">Preview resource action</button></section></aside>
        </div>
      </div>
    </section>
  );
}
