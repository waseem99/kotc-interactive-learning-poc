import Image from "next/image";
import { Captions, Keyboard, List, MousePointerClick, Volume2 } from "lucide-react";

const features = [
  { icon: Keyboard, title: "Keyboard-first operation", text: "Navigation, the house, transcript controls, activities, and completion flow remain usable without a mouse." },
  { icon: List, title: "Equivalent alternatives", text: "The house includes a structured list, and the activity provides select-and-place controls alongside drag-and-drop." },
  { icon: Captions, title: "Accessible learning media", text: "Captions, a nearby transcript, readable controls, and downloadable resources are designed into the lesson pattern." },
  { icon: MousePointerClick, title: "Adaptable presentation", text: "Text sizing, light and dark themes, reduced motion, visible focus, touch targets, and responsive reflow are included." },
];

export default function AccessibilityPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="lc-access-grid">
          <div className="lc-copy">
            <span className="eyebrow"><Keyboard aria-hidden="true" /> Accessibility approach</span>
            <h1>Designed and tested toward WCAG 2.2 Level AA.</h1>
            <p>This proof of concept demonstrates the proposed accessibility approach. It is not a formal independent accessibility certification.</p>
            <ul>
              {features.map(({ icon: Icon, title, text }) => (
                <li key={title}><Icon aria-hidden="true" /><span><strong>{title}</strong><br />{text}</span></li>
              ))}
            </ul>
          </div>
          <div className="lc-asset-card">
            <Image
              src="/assets/v4/illustrations/accessibility-devices.svg"
              alt="Accessible learning shown across desktop, tablet, keyboard, transcript, and non-drag interaction controls"
              width={1200}
              height={760}
              priority
            />
          </div>
        </div>

        <section className="accessibility-testing-card">
          <span className="eyebrow"><Volume2 aria-hidden="true" /> Verification approach</span>
          <h2>Automated checks plus manual and representative-user review</h2>
          <p>Production acceptance should combine automated testing with keyboard, focus, zoom, reflow, reduced-motion, screen-reader, caption and transcript, touch-target, and representative-user testing.</p>
          <p>Known limitation: this proposal-stage demo uses illustrative content and has not been certified by an independent accessibility auditor.</p>
        </section>
      </div>
    </section>
  );
}
