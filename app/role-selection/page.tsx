"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, HardHat, Users } from "lucide-react";
import { useState } from "react";
import { useDemoState } from "@/components/demo-state";
import type { LearnerRole } from "@/lib/types";

const choices: Array<{
  role: LearnerRole;
  title: string;
  description: string;
  icon: typeof HardHat;
  examples: string[];
}> = [
  {
    role: "learner",
    title: "I work or train in the trades",
    description: "Learn about green building choices, safer practices, and how to advocate for respectful workplaces.",
    icon: HardHat,
    examples: ["Practical building topics", "Workplace safety", "Resources and next steps"],
  },
  {
    role: "employer",
    title: "I represent an employer or union",
    description: "Explore green construction alternatives and practical ways to create culturally safer workplaces.",
    icon: BriefcaseBusiness,
    examples: ["Team learning pathways", "Culturally safer practices", "Program and policy resources"],
  },
];

export default function RoleSelectionPage() {
  const router = useRouter();
  const { role, setRole } = useDemoState();
  const [selected, setSelected] = useState<LearnerRole | null>(role);

  function continueJourney() {
    if (!selected) return;
    setRole(selected);
    router.push("/dashboard");
  }

  return (
    <section className="section page-section">
      <div className="container narrow-container">
        <div className="page-intro centered">
          <span className="eyebrow"><Users aria-hidden="true" /> Personalize the demonstration</span>
          <h1>Which learning pathway should we show?</h1>
          <p>Your choice changes the emphasis of the demo. In the production platform, content can be assigned by role, organization, or program.</p>
        </div>

        <div className="role-grid" role="radiogroup" aria-label="Choose a learning pathway">
          {choices.map(({ role: value, title, description, icon: Icon, examples }) => {
            const isSelected = selected === value;
            return (
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`role-card ${isSelected ? "selected" : ""}`}
                key={value}
                onClick={() => setSelected(value)}
                data-testid={`role-${value}`}
              >
                <span className="role-icon"><Icon aria-hidden="true" /></span>
                <span className="role-copy">
                  <strong>{title}</strong>
                  <span>{description}</span>
                  <span className="role-examples">
                    {examples.map((example) => <small key={example}>{example}</small>)}
                  </span>
                </span>
                <span className="radio-indicator" aria-hidden="true"><span /></span>
              </button>
            );
          })}
        </div>

        <div className="selection-actions">
          <p aria-live="polite">
            {selected ? `${selected === "learner" ? "Trades learner" : "Employer or union"} pathway selected.` : "Select a pathway to continue."}
          </p>
          <button type="button" className="button primary" disabled={!selected} onClick={continueJourney}>
            Continue to dashboard <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
