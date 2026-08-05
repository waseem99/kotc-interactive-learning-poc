import { MousePointerClick, Move, ShieldCheck } from "lucide-react";
import { MaterialActivity } from "@/components/material-activity";

export default function ActivityPage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro split-intro">
          <div>
            <span className="eyebrow"><MousePointerClick aria-hidden="true" /> Accessible interaction concept</span>
            <h1>Compare material choices using more than one interaction method.</h1>
            <p>This demonstration includes drag-and-drop for pointer users and an equivalent select-and-place workflow for keyboard, touch, and assistive-technology users.</p>
          </div>
          <div className="access-note"><span><Move aria-hidden="true" /> Drag optional</span><span><ShieldCheck aria-hidden="true" /> Non-shaming feedback</span></div>
        </div>
        <MaterialActivity />
      </div>
    </section>
  );
}
