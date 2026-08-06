"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, House, List, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { useDemoState } from "@/components/demo-state";
import { chapters, topics } from "@/content/mock-program";
import type { HouseView } from "@/lib/types";

const views: HouseView[] = ["front", "left", "rear", "right"];
const viewLabel: Record<HouseView, string> = { front: "Front elevation", left: "Left elevation", rear: "Rear elevation", right: "Right elevation" };

export function HouseNavigator() {
  const { completedTopics, currentTopic, setCurrentTopic } = useDemoState();
  const [selectedId, setSelectedId] = useState(currentTopic || topics[0].id);
  const [mode, setMode] = useState<"house" | "list">("house");
  const [houseView, setHouseView] = useState<HouseView>(topics.find((item) => item.id === selectedId)?.view ?? "front");
  const selected = topics.find((topic) => topic.id === selectedId) ?? topics[0];
  const visible = useMemo(() => topics.filter((topic) => topic.view === houseView), [houseView]);
  const chapter = chapters.find((item) => item.id === selected.chapterId);

  function selectTopic(id: string) {
    const topic = topics.find((item) => item.id === id);
    if (!topic) return;
    setSelectedId(id);
    setCurrentTopic(id);
    setHouseView(topic.view);
  }

  function rotate(direction: -1 | 1) {
    const index = views.indexOf(houseView);
    setHouseView(views[(index + direction + views.length) % views.length]);
  }

  return (
    <div className="v5-house-shell">
      <div className="v5-house-toolbar">
        <div><span className="v5-kicker"><House aria-hidden="true" /> Exterior learning experience</span><h2>Explore 16 building topics.</h2><p>Switch between four exterior elevations or use the equivalent structured topic list.</p></div>
        <div className="v5-segmented" aria-label="Choose house interaction mode"><button type="button" aria-pressed={mode === "house"} onClick={() => setMode("house")}><House aria-hidden="true" /> House</button><button type="button" aria-pressed={mode === "list"} onClick={() => setMode("list")}><List aria-hidden="true" /> Topic list</button></div>
      </div>

      <div className="v5-house-grid">
        <div className="v5-house-stage">
          {mode === "house" ? <>
            <div className="v5-view-controls"><button type="button" onClick={() => rotate(-1)} aria-label="Show previous exterior view"><ArrowLeft aria-hidden="true" /></button><strong>{viewLabel[houseView]}</strong><button type="button" onClick={() => rotate(1)} aria-label="Show next exterior view"><ArrowRight aria-hidden="true" /></button></div>
            <div className={`v5-house-canvas view-${houseView}`} aria-label={`${viewLabel[houseView]} with clickable learning topics`}>
              <div className="v5-sun" aria-hidden="true" />
              <div className="v5-house-drawing" aria-hidden="true"><div className="v5-roof" /><div className="v5-wall"><span className="window one" /><span className="window two" /><span className="door" /></div><div className="v5-ground" /></div>
              {visible.map((topic) => <button type="button" key={topic.id} data-testid={`house-topic-${topic.id}`} className={`v5-hotspot ${selectedId === topic.id ? "selected" : ""} ${completedTopics.includes(topic.id) ? "completed" : ""}`} style={{ left: `${topic.x}%`, top: `${topic.y}%` }} onClick={() => selectTopic(topic.id)} aria-label={`${topic.number}. ${topic.title}${completedTopics.includes(topic.id) ? ", completed" : ""}`} aria-pressed={selectedId === topic.id}>{completedTopics.includes(topic.id) ? <CheckCircle2 aria-hidden="true" /> : topic.number}</button>)}
              <span className="v5-placeholder-label">Illustrative exterior · final house artwork subject to KOTC approval</span>
            </div>
            <div className="v5-elevation-tabs" aria-label="Exterior views">{views.map((view) => <button type="button" key={view} aria-pressed={houseView === view} onClick={() => setHouseView(view)}>{view}</button>)}</div>
          </> : <ol className="v5-topic-list">{topics.map((topic) => <li key={topic.id}><button type="button" data-testid={`topic-list-${topic.id}`} onClick={() => selectTopic(topic.id)} className={selectedId === topic.id ? "selected" : ""}><span>{completedTopics.includes(topic.id) ? <CheckCircle2 aria-hidden="true" /> : topic.number}</span><span><strong>{topic.title}</strong><small>{topic.summary}</small></span><small>{chapters.find((item) => item.id === topic.chapterId)?.title}</small></button></li>)}</ol>}
        </div>

        <aside className="v5-topic-panel" data-testid="topic-panel" aria-live="polite">
          <span className="v5-topic-number">Topic {selected.number} of 16</span><span className="v5-status">{completedTopics.includes(selected.id) ? "Completed" : selected.id === currentTopic ? "In progress" : "Not started"}</span><h3>{selected.title}</h3><p>{selected.detail}</p>
          <dl><div><dt>Related chapter</dt><dd>{chapter?.number}. {chapter?.title}</dd></div><div><dt>Estimated time</dt><dd>{selected.durationMinutes} minutes</dd></div><div><dt>House view</dt><dd>{viewLabel[selected.view]}</dd></div></dl>
          <Link href={`/topic/${selected.id}`} className="button primary full-width">Start this topic <ArrowRight aria-hidden="true" /></Link>
          <button type="button" className="v5-reset-view" onClick={() => setHouseView(selected.view)}><RotateCcw aria-hidden="true" /> Show hotspot view</button>
        </aside>
      </div>
    </div>
  );
}
