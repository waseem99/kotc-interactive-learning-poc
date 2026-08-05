import { Captions, Keyboard, List, Moon, MousePointerClick, Type, Volume2 } from "lucide-react";

const features = [
  { icon: Keyboard, title: "Keyboard access", text: "Primary navigation, the interactive house, transcript, activity, and completion flow are operable without a mouse." },
  { icon: List, title: "Equivalent alternatives", text: "The interactive house has a list view, and drag-and-drop has a select-and-place method." },
  { icon: Captions, title: "Accessible media", text: "The lesson concept includes captions, a transcript, and controls that do not depend on audio alone." },
  { icon: Type, title: "Text preferences", text: "Standard, large, and extra-large text modes are available and stored on this device." },
  { icon: Moon, title: "Theme and contrast", text: "Light, dark, and system themes use semantic tokens and visible focus indicators." },
  { icon: MousePointerClick, title: "Multiple input methods", text: "Important tasks support pointer, touch, keyboard, and text-based controls." },
];

export default function AccessibilityPage() {
  return (
    <section className="section page-section">
      <div className="container narrow-container">
        <div className="page-intro">
          <span className="eyebrow"><Keyboard aria-hidden="true" /> Accessibility approach</span>
          <h1>Designed and tested toward WCAG 2.2 Level AA.</h1>
          <p>This proof of concept demonstrates the accessibility approach proposed for the platform. It is not a formal accessibility certification.</p>
        </div>
        <div className="accessibility-feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="capability-card" key={title}><span className="icon-tile"><Icon aria-hidden="true" /></span><h2>{title}</h2><p>{text}</p></article>
          ))}
        </div>
        <section className="accessibility-testing-card">
          <span className="eyebrow"><Volume2 aria-hidden="true" /> Proposed verification</span>
          <h2>Automated and manual review</h2>
          <p>Production acceptance would combine automated checks with manual keyboard, focus, zoom, reflow, reduced-motion, screen-reader, caption/transcript, touch-target, and representative-user testing.</p>
          <p>Known limitation: this bid-stage demo uses illustrative content and has not been certified by an independent accessibility auditor.</p>
        </section>
      </div>
    </section>
  );
}
