"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Hammer,
  HardHat,
  Leaf,
  List,
  ShieldCheck,
  Users,
  Wind,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useDemoState } from "@/components/demo-state";
import { StatusBadge, type Status } from "@/components/status-badge";
import { topics } from "@/content/mock-program";
import type { Topic } from "@/lib/types";

const iconMap = {
  foundation: HardHat,
  materials: Leaf,
  air: Wind,
  water: Droplets,
  safety: ShieldCheck,
  workplace: Users,
};

function getStatus(topic: Topic, completed: string[], current: string): Status {
  if (completed.includes(topic.id)) return "completed";
  if (topic.id === current) return "current";
  if (topic.id === "workplace" || topic.id === "safety") return "available";
  return "available";
}

export function HouseNavigator() {
  const { completedTopics, currentTopic, setCurrentTopic, role } = useDemoState();
  const [selectedId, setSelectedId] = useState(currentTopic);
  const [view, setView] = useState<"house" | "list">("house");
  const selected = topics.find((topic) => topic.id === selectedId) ?? topics[0];
  const visibleTopics = useMemo(
    () => topics.filter((topic) => topic.audience === "all" || topic.audience === role || !role),
    [role],
  );

  function selectTopic(topicId: string) {
    setSelectedId(topicId);
    setCurrentTopic(topicId);
  }

  return (
    <div className="house-experience">
      <div className="house-toolbar">
        <div>
          <span className="eyebrow"><Hammer aria-hidden="true" /> Chapter navigator</span>
          <h2>Explore the building by topic</h2>
        </div>
        <div className="segmented-control" aria-label="Choose interactive house view">
          <button type="button" aria-pressed={view === "house"} onClick={() => setView("house")}>
            <Hammer aria-hidden="true" /> House view
          </button>
          <button type="button" aria-pressed={view === "list"} onClick={() => setView("list")}>
            <List aria-hidden="true" /> Accessible list
          </button>
        </div>
      </div>

      <div className="house-content-grid">
        <div className="house-stage">
          {view === "house" ? (
            <div className="house-visual" aria-label="Interactive house chapter map">
              <div className="house-roof-shape"><span>Green and healthy building</span></div>
              <div className="house-room-grid">
                {visibleTopics.map((topic) => {
                  const Icon = iconMap[topic.icon];
                  const status = getStatus(topic, completedTopics, currentTopic);
                  return (
                    <button
                      type="button"
                      key={topic.id}
                      className={`house-room ${status} ${selectedId === topic.id ? "selected" : ""}`}
                      onClick={() => selectTopic(topic.id)}
                      aria-pressed={selectedId === topic.id}
                      data-testid={`house-topic-${topic.id}`}
                    >
                      <span className="room-status" aria-hidden="true">
                        {status === "completed" ? <CheckCircle2 /> : <span>{visibleTopics.indexOf(topic) + 1}</span>}
                      </span>
                      <Icon aria-hidden="true" />
                      <strong>{topic.title}</strong>
                      <small>{topic.duration}</small>
                    </button>
                  );
                })}
              </div>
              <div className="house-foundation-bar">Accessible on desktop, touch devices, and keyboard</div>
            </div>
          ) : (
            <ul className="house-list">
              {visibleTopics.map((topic) => {
                const Icon = iconMap[topic.icon];
                const status = getStatus(topic, completedTopics, currentTopic);
                return (
                  <li key={topic.id}>
                    <button
                      type="button"
                      className={`house-list-item ${selectedId === topic.id ? "selected" : ""}`}
                      onClick={() => selectTopic(topic.id)}
                    >
                      <span className="icon-tile"><Icon aria-hidden="true" /></span>
                      <span className="house-list-copy"><strong>{topic.title}</strong><span>{topic.summary}</span></span>
                      <StatusBadge status={status} />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <aside className="topic-panel" aria-live="polite">
          <span className="illustrative-label">Selected topic</span>
          <div className="topic-panel-icon">{(() => { const Icon = iconMap[selected.icon]; return <Icon aria-hidden="true" />; })()}</div>
          <StatusBadge status={getStatus(selected, completedTopics, currentTopic)} />
          <h3>{selected.title}</h3>
          <p>{selected.detail}</p>
          <dl className="topic-details">
            <div><dt>Estimated time</dt><dd>{selected.duration}</dd></div>
            <div><dt>Experience</dt><dd>Lesson + activity</dd></div>
          </dl>
          <Link href="/lesson/lower-impact-materials" className="button primary full-width">
            Open sample lesson <ArrowRight aria-hidden="true" />
          </Link>
          <p className="small-note">For the POC, every topic opens the same representative lesson flow.</p>
        </aside>
      </div>
    </div>
  );
}
