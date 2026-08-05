"use client";

import { CheckCircle2, ChevronDown, Eye, ScrollText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDemoState } from "@/components/demo-state";

const cards = [
  {
    title: "Health and emissions",
    front: "What could people be exposed to during installation and use?",
    back: "Review emissions data, installation methods, ventilation needs, protective measures, and who may be affected.",
  },
  {
    title: "Durability and repair",
    front: "How long should the material perform, and can it be maintained?",
    back: "Consider expected service life, repair access, replacement frequency, and whether components can be separated or reused.",
  },
  {
    title: "Source and end of life",
    front: "Where does the material come from, and what happens later?",
    back: "Look for transparent sourcing, transport implications, recycled or reclaimed content, and realistic reuse or recovery options.",
  },
];

const steps = [
  { title: "Identify the decision", text: "Define where the product will be used, who may be exposed, and what performance is required." },
  { title: "Compare realistic options", text: "Use consistent questions across available options rather than searching for a single perfect product." },
  { title: "Record the reason", text: "Document the information considered, the remaining uncertainty, and why the final choice fits the project." },
];

export function LessonInteractions() {
  const { reducedMotion } = useDemoState();
  const [openCard, setOpenCard] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const elements = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.stepIndex ?? 0);
          setActiveStep(index);
        }
      },
      { rootMargin: "-35% 0px -45%", threshold: [0.25, 0.5, 0.75] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lesson-interactions">
      <section className="flip-section" aria-labelledby="flip-heading">
        <div className="interaction-heading">
          <div><span className="eyebrow"><Eye aria-hidden="true" /> Click and flip concept</span><h2 id="flip-heading">Reveal the questions behind a material choice.</h2></div>
          <p>Select any card to reveal the practical review prompt. The answer is available by click and keyboard; hover is never required.</p>
        </div>
        <div className="flip-grid">
          {cards.map((card, index) => {
            const isOpen = openCard === index;
            return (
              <button
                type="button"
                className={`flip-card ${isOpen ? "open" : ""}`}
                key={card.title}
                aria-expanded={isOpen}
                onClick={() => setOpenCard(isOpen ? null : index)}
              >
                <span className="flip-card-title">{card.title}</span>
                <span className="flip-card-content">{isOpen ? card.back : card.front}</span>
                <span className="flip-card-action"><ChevronDown aria-hidden="true" /> {isOpen ? "Show question" : "Reveal guidance"}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="scroll-section" aria-labelledby="scroll-heading">
        <div className="scroll-heading-block">
          <span className="eyebrow"><ScrollText aria-hidden="true" /> Scroll and highlight concept</span>
          <h2 id="scroll-heading">A three-step decision process</h2>
          <p>As the learner moves through the explanation, the current step is highlighted. In reduced-motion mode the same content remains available without animated transitions.</p>
          <ol className="scroll-step-list">
            {steps.map((step, index) => (
              <li key={step.title} className={activeStep === index ? "active" : ""}>
                <span>{index + 1}</span><strong>{step.title}</strong>{activeStep > index ? <CheckCircle2 aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="scroll-story">
          {steps.map((step, index) => (
            <article
              key={step.title}
              ref={(element) => { stepRefs.current[index] = element; }}
              data-step-index={index}
              className={`scroll-story-card ${activeStep === index ? "active" : ""} ${reducedMotion ? "reduced" : ""}`}
            >
              <span>Step {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="story-example">
                <strong>Example prompt</strong>
                <p>{index === 0 ? "Where will this finish be installed, and who will work with it?" : index === 1 ? "Which available option provides the clearest health and maintenance information?" : "What evidence supports the decision, and what should the maintenance team know?"}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
