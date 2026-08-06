import type { HTMLAttributes } from "react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`kotc-brand-lockup${compact ? " compact" : ""}`} aria-hidden="true">
      <span className="kotc-brand-emblem">
        <span className="kotc-brand-rays" />
        <span className="kotc-brand-ring">
          <span className="kotc-brand-core" />
        </span>
      </span>
      <span className="kotc-brand-words">
        <span className="kotc-brand-keepers">Keepers</span>
        <span className="kotc-brand-of">of the</span>
        <span className="kotc-brand-circle">Circle</span>
      </span>
    </span>
  );
}

export function BrandSun({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`brand-sun ${className}`.trim()} aria-hidden="true" {...props}>
      <span className="brand-sun-rays" />
      <span className="brand-sun-core" />
    </div>
  );
}

export function HorizonBands({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`horizon-bands ${className}`.trim()} aria-hidden="true" {...props}>
      <span className="horizon-layer horizon-navy" />
      <span className="horizon-layer horizon-dots" />
      <span className="horizon-layer horizon-white" />
      <span className="horizon-layer horizon-gold" />
      <span className="horizon-layer horizon-red" />
    </div>
  );
}

export function DotTexture({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`brand-dot-texture ${className}`.trim()} aria-hidden="true" {...props} />;
}
