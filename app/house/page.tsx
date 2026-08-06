import { Building2, Keyboard, Smartphone } from "lucide-react";
import { HouseNavigator } from "@/components/house-navigator";

export default function HousePage() {
  return (
    <section className="v5-page">
      <div className="container">
        <div className="v5-page-head">
          <div><span className="v5-kicker"><Building2 aria-hidden="true" /> Exterior interactive house</span><h1>Explore the building from the outside.</h1><p>Move between four controlled exterior views and select exactly 16 building topics. Every destination is also available through an equivalent structured list.</p></div>
          <div className="access-note"><span><Keyboard aria-hidden="true" /> Keyboard operable</span><span><Smartphone aria-hidden="true" /> Touch friendly</span><span><Building2 aria-hidden="true" /> Equal list mode</span></div>
        </div>
        <HouseNavigator />
      </div>
    </section>
  );
}
