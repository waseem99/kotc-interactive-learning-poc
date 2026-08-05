import { Building2, Keyboard, Smartphone } from "lucide-react";
import { HouseNavigator } from "@/components/house-navigator";

export default function HousePage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro split-intro">
          <div>
            <span className="eyebrow"><Building2 aria-hidden="true" /> Interactive chapter concept</span>
            <h1>Navigate a complete learning chapter through the building.</h1>
            <p>The house turns building topics into an understandable spatial journey while preserving equivalent access through a structured list view.</p>
          </div>
          <div className="access-note">
            <span><Keyboard aria-hidden="true" /> Keyboard operable</span>
            <span><Smartphone aria-hidden="true" /> Touch friendly</span>
            <span><Building2 aria-hidden="true" /> List equivalent</span>
          </div>
        </div>
        <HouseNavigator />
      </div>
    </section>
  );
}
