import { Building2, Keyboard, Smartphone } from "lucide-react";
import { HouseNavigator } from "@/components/house-navigator";

export default function HousePage() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-intro split-intro">
          <div>
            <span className="eyebrow"><Building2 aria-hidden="true" /> Interactive chapter</span>
            <h1>Navigate a complete learning chapter through the house.</h1>
            <p>Select a numbered green-building topic to understand its purpose, estimated time, and next action. Switch to the structured list at any time for an equivalent experience.</p>
          </div>
          <div className="access-note" aria-label="Supported interaction methods">
            <span><Keyboard aria-hidden="true" /> Keyboard</span>
            <span><Smartphone aria-hidden="true" /> Touch</span>
            <span><Building2 aria-hidden="true" /> List equivalent</span>
          </div>
        </div>
        <HouseNavigator />
      </div>
    </section>
  );
}
