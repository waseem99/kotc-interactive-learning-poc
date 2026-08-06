"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Captions, Clock3, Download, FileText, Leaf, Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDemoState } from "@/components/demo-state";
import { LessonInteractions } from "@/components/lesson-interactions";
import { demoTranscript } from "@/content/mock-program";

export default function LessonPage() {
  const { markLessonVisited } = useDemoState();
  const [playing, setPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(true);

  useEffect(() => {
    markLessonVisited();
  }, [markLessonVisited]);

  return (
    <section className="section page-section">
      <div className="container lesson-container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/dashboard">Dashboard</Link><span>/</span><Link href="/house">Interactive house</Link><span>/</span><span aria-current="page">Lower-impact materials</span>
        </nav>

        <div className="lesson-header">
          <div>
            <span className="eyebrow"><Leaf aria-hidden="true" /> Sample lesson</span>
            <h1>Choosing lower-impact materials</h1>
            <p>Compare health, durability, sourcing, installation, maintenance, and end-of-life information before making a material decision.</p>
          </div>
          <div className="lesson-meta"><span><Clock3 aria-hidden="true" /> 12 minutes</span><span>Lesson 2 of 6</span></div>
        </div>

        <div className="lesson-layout">
          <article className="lesson-main">
            <div className="video-concept" aria-label="Illustrative accessible learning-media concept">
              <div className="video-scene">
                <Image
                  src="/assets/v4/illustrations/materials-board.svg"
                  alt="Illustrated material comparison board showing wood, insulation, steel, and glazing samples"
                  width={1200}
                  height={760}
                  priority
                />
                <span>Illustrative lesson media</span>
              </div>
              <div className="video-controls">
                <button type="button" className="icon-button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause concept video" : "Play concept video"}>
                  {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                </button>
                <span className="video-time">{playing ? "00:18" : "00:00"} / 01:24</span>
                <div className="video-scrubber" aria-hidden="true"><span style={{ width: playing ? "22%" : "0%" }} /></div>
                <button type="button" className="icon-button" aria-label="Volume"><Volume2 aria-hidden="true" /></button>
                <button type="button" className="caption-button" aria-pressed="true"><Captions aria-hidden="true" /> CC</button>
              </div>
            </div>

            <div className="lesson-copy prose">
              <h2>A practical comparison, not a perfect answer</h2>
              <p>Material decisions involve trade-offs. A product may have low emissions but travel a long distance, or it may be durable but difficult to repair. A useful process makes those trade-offs visible so the team can choose deliberately.</p>
              <div className="learning-callout">
                <strong>Five questions to ask</strong>
                <ol>
                  <li>What is the material made from?</li>
                  <li>How could installation affect workers and occupants?</li>
                  <li>How long is it expected to perform?</li>
                  <li>Can it be maintained, repaired, reused, or recycled?</li>
                  <li>What information is still missing before a decision is made?</li>
                </ol>
              </div>
              <h2>Document the reason for the choice</h2>
              <p>A short record of the options considered, the questions asked, and the reason for the final choice can support future maintenance and more transparent project decisions.</p>
            </div>

            <LessonInteractions />

            <div className="lesson-navigation">
              <Link href="/house" className="button secondary"><ArrowLeft aria-hidden="true" /> Back to house</Link>
              <Link href="/activity/material-match" className="button primary">Try the activity <ArrowRight aria-hidden="true" /></Link>
            </div>
          </article>

          <aside className="lesson-sidebar">
            <section className="transcript-card">
              <div className="card-title-row">
                <div><span className="eyebrow"><Captions aria-hidden="true" /> Media access</span><h2>Transcript</h2></div>
                <button type="button" className="text-button" onClick={() => setShowTranscript(!showTranscript)} aria-expanded={showTranscript}>
                  {showTranscript ? "Hide" : "Show"}
                </button>
              </div>
              {showTranscript ? (
                <div className="transcript-list">
                  {demoTranscript.map((item) => (
                    <p key={item.time}><button type="button" aria-label={`Go to ${item.time}`}>{item.time}</button><span>{item.text}</span></p>
                  ))}
                </div>
              ) : null}
            </section>

            <section className="resource-card">
              <span className="side-icon"><FileText aria-hidden="true" /></span>
              <span className="eyebrow">Downloadable resource</span>
              <h2>Material comparison worksheet</h2>
              <p>A one-page concept resource for documenting options, trade-offs, evidence, and remaining questions.</p>
              <button type="button" className="button secondary full-width" onClick={() => alert("Illustrative download only in this proposal demo.")}>
                <Download aria-hidden="true" /> Preview download
              </button>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
