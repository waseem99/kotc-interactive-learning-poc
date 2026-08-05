"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, GripVertical, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { useDemoState } from "@/components/demo-state";

type CategoryId = "preferred" | "review";
type ItemId = "reclaimed" | "low-voc" | "solvent" | "single-use";

type MaterialItem = {
  id: ItemId;
  label: string;
  detail: string;
  answer: CategoryId;
};

const items: MaterialItem[] = [
  { id: "reclaimed", label: "Reclaimed wood with verified condition", detail: "Existing material that can be inspected and reused.", answer: "preferred" },
  { id: "low-voc", label: "Low-emission interior paint", detail: "Product with transparent emissions information.", answer: "preferred" },
  { id: "solvent", label: "High-solvent adhesive without product data", detail: "Installation and emissions information is unclear.", answer: "review" },
  { id: "single-use", label: "Single-use finish with no repair pathway", detail: "Replacement may be the only maintenance option.", answer: "review" },
];

const categories: Array<{ id: CategoryId; title: string; description: string }> = [
  { id: "preferred", title: "Promising lower-impact option", description: "The available information supports further consideration." },
  { id: "review", title: "Needs closer review", description: "More information or a different option may be needed." },
];

export function MaterialActivity() {
  const { markActivityComplete, activityComplete } = useDemoState();
  const [assignments, setAssignments] = useState<Partial<Record<ItemId, CategoryId>>>({});
  const [selected, setSelected] = useState<ItemId | null>(null);
  const [checked, setChecked] = useState(false);

  const allAssigned = Object.keys(assignments).length === items.length;
  const correct = useMemo(
    () => allAssigned && items.every((item) => assignments[item.id] === item.answer),
    [allAssigned, assignments],
  );

  function place(itemId: ItemId, category: CategoryId) {
    setAssignments((current) => ({ ...current, [itemId]: category }));
    setSelected(null);
    setChecked(false);
  }

  function onDrop(category: CategoryId, event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain") as ItemId;
    if (items.some((item) => item.id === itemId)) place(itemId, category);
  }

  function checkAnswers() {
    setChecked(true);
    if (correct) markActivityComplete();
  }

  function reset() {
    setAssignments({});
    setSelected(null);
    setChecked(false);
  }

  return (
    <div className="activity-shell">
      <div className="activity-instructions">
        <div>
          <span className="eyebrow">How to complete this activity</span>
          <h2>Sort each material choice into the most appropriate category.</h2>
          <p>Drag a card, or select it and use a “Place selected here” button. Both methods produce the same result.</p>
        </div>
        <button type="button" className="button ghost" onClick={reset}><RotateCcw aria-hidden="true" /> Reset</button>
      </div>

      <div className="activity-grid">
        <div className="material-bank" aria-label="Material choices">
          <h3>Material choices</h3>
          {items.map((item) => {
            const assigned = assignments[item.id];
            const isSelected = selected === item.id;
            return (
              <button
                type="button"
                key={item.id}
                draggable
                className={`material-card ${isSelected ? "selected" : ""} ${assigned ? "assigned" : ""}`}
                onDragStart={(event) => event.dataTransfer.setData("text/plain", item.id)}
                onClick={() => setSelected(isSelected ? null : item.id)}
                aria-pressed={isSelected}
              >
                <GripVertical aria-hidden="true" />
                <span><strong>{item.label}</strong><small>{item.detail}</small></span>
                {assigned ? <span className="assignment-tag">Placed</span> : null}
              </button>
            );
          })}
        </div>

        <div className="dropzone-grid">
          {categories.map((category) => {
            const assignedItems = items.filter((item) => assignments[item.id] === category.id);
            return (
              <div
                key={category.id}
                className="dropzone"
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => onDrop(category.id, event)}
              >
                <div className="dropzone-heading"><h3>{category.title}</h3><p>{category.description}</p></div>
                <button
                  type="button"
                  className="place-button"
                  disabled={!selected}
                  onClick={() => selected && place(selected, category.id)}
                >
                  Place selected here
                </button>
                <div className="placed-items" aria-live="polite">
                  {assignedItems.length === 0 ? <span className="empty-dropzone">Drop or place a card here</span> : null}
                  {assignedItems.map((item) => (
                    <button type="button" key={item.id} onClick={() => setSelected(item.id)}>
                      <CheckCircle2 aria-hidden="true" /> {item.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="activity-footer">
        <div className="feedback-area" aria-live="polite" role="status">
          {!checked ? <p>{allAssigned ? "All choices are placed. Review them, then check your response." : `${Object.keys(assignments).length} of ${items.length} choices placed.`}</p> : null}
          {checked && correct ? <div className="feedback success"><CheckCircle2 aria-hidden="true" /><span><strong>Complete.</strong> Your choices reflect the information provided. In a real project, each option would still be reviewed in context.</span></div> : null}
          {checked && !correct ? <div className="feedback guidance"><span><strong>Review one or more choices.</strong> Look for transparent product information, repair potential, and installation impacts. You can move any card and try again.</span></div> : null}
        </div>
        {activityComplete || (checked && correct) ? (
          <Link href="/completion" className="button primary">View completion state <ArrowRight aria-hidden="true" /></Link>
        ) : (
          <button type="button" className="button primary" disabled={!allAssigned} onClick={checkAnswers}>Check response</button>
        )}
      </div>
    </div>
  );
}
