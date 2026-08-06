"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets, Hammer, HardHat, Leaf, List, ShieldCheck, Users, Wind } from "lucide-react";
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

const hotspotPositions: Record<string, { left: string; top: string }> = {
  foundation: { left: "17%", top: "72%" },
  materials: { left: "38%", top: "54%" },
  air: { left: "58%", top: "31%" },
  water: { left: "77%", top: "58%" },
  safety: { left: "48%", top: "74%" },
  workplace: { left: "78%", top: "28%" },
};

function getStatus(topic: Topic, completed: string[], current: string): Status {
  if (completed.includes(topic.id)) return "completed";
  if (topic.id === current) return "current";
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
            <Hammer aria-hidden="true" /> Diagram view
          </button>
          <button type="button" aria-pressed={view === "list"} onClick={() => setView("list")}>
            <List aria-hidden="true" /> List view
          </button>
        </div>
      </div>

      <div className="house-content-grid">
        <div className="house-stage">
          {view === "house" ? (
            <div className="house-visual" aria-label="Interactive house chapter map">
              <Image
                src="/assets/v4/illustrations/house-cutaway.svg"
                alt="Cutaway house showing foundations, materials, air quality, water, safety, and workplace topics"
                width={1200}
                height={800}
                priority
              />
              {visibleTopics.map((topic, index) => {
                const status = getStatus(topic, completedTopics, currentTopic);
                const position = hotspotPositions[topic.id] ?? { left: "50%", top: "50%" };
                return (
                  <button
                    type="button"
                    key={topic.id}
                    className={`house-hotspot ${status}`}
                    style={position}
                    onClick={() => selectTopic(topic.id)}
                    aria-pressed={selectedId === topic.id}
                    aria-label={`${index + 1}. ${topic.title}. ${status}. ${topic.duration}`}
                    data-testid={`house-topic-${topic.id}`}
                  >
                    {status === "completed" ? <CheckCircle2 aria-hidden="true" /> : index + 1}
                  </button>
                );
              })}
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
                      aria-pressed={selectedId === topic.id}
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
            <div><dt>Learning format</dt><dd>Lesson + activity</dd></div>
            <div><dt>Access</dt><dd>Diagram or list</dd></div>
          </dl>
          <Link href="/lesson/lower-impact-materials" className="button primary full-width">
            Open sample lesson <ArrowRight aria-hidden="true" />
          </Link>
          <p className="small-note">For the proposal demonstration, each topic opens the same representative lesson flow.</p>
        </aside>
      </div>
    </div>
  );
}
