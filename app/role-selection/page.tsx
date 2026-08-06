"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, HardHat, Users } from "lucide-react";
import { useState } from "react";
import { useDemoState } from "@/components/demo-state";
import type { LearnerRole } from "@/lib/types";

const choices: Array<{ role: LearnerRole; title: string; description: string; icon: typeof HardHat; examples: string[] }> = [
  { role: "learner", title: "Employee pathway", description: "For learners, tradespeople and people entering or working in construction.", icon: HardHat, examples: ["Five shared chapters", "One employee-specific chapter", "Same completion certificate"] },
  { role: "employer", title: "Employer pathway", description: "For employers, unions, supervisors and organizational representatives.", icon: BriefcaseBusiness, examples: ["Five shared chapters", "One employer-specific chapter", "Same completion certificate"] },
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
    <section className="v5-page">
      <div className="container narrow-container">
        <div className="page-intro centered">
          <span className="v5-kicker"><Users aria-hidden="true" /> Select your course pathway</span>
          <h1>Which version of Chapter 5 should we show?</h1>
          <p>Both pathways complete one six-chapter course. Five chapters are shared; one chapter contains content tailored to the selected audience.</p>
        </div>
        <div className="role-grid" role="radiogroup" aria-label="Choose employee or employer pathway">
          {choices.map(({ role: value, title, description, icon: Icon, examples }) => {
            const isSelected = selected === value;
            return <button type="button" role="radio" aria-checked={isSelected} className={`role-card ${isSelected ? "selected" : ""}`} key={value} onClick={() => setSelected(value)} data-testid={`role-${value}`}><span className="role-icon"><Icon aria-hidden="true" /></span><span className="role-copy"><strong>{title}</strong><span>{description}</span><span className="role-examples">{examples.map((example) => <small key={example}>{example}</small>)}</span></span><span className="radio-indicator" aria-hidden="true"><span /></span></button>;
          })}
        </div>
        <div className="selection-actions"><p aria-live="polite">{selected ? `${selected === "learner" ? "Employee" : "Employer"} pathway selected.` : "Select a pathway to continue."}</p><button type="button" className="button primary" disabled={!selected} onClick={continueJourney}>Continue to dashboard <ArrowRight aria-hidden="true" /></button></div>
      </div>
    </section>
  );
}
