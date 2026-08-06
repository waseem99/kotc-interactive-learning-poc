"use client";

import { Moon, RotateCcw, SlidersHorizontal, Sun, Type, WandSparkles } from "lucide-react";
import { useDemoState } from "@/components/demo-state";

export function AccessibilityToolbar() {
  const { theme, textSize, reducedMotion, setTheme, setTextSize, setReducedMotion } = useDemoState();
  const nextTheme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const nextTextSize = textSize === "standard" ? "large" : textSize === "large" ? "xlarge" : "standard";

  return (
    <details className="display-settings">
      <summary aria-label="Open display settings">
        <SlidersHorizontal aria-hidden="true" />
        <span>Display settings</span>
      </summary>
      <div className="accessibility-toolbar display-settings-panel" aria-label="Display preferences">
        <button
          type="button"
          className="toolbar-button"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Theme: ${theme}. Change theme`}
        >
          {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
          <span>Theme: {theme === "system" ? "System" : theme}</span>
        </button>
        <button
          type="button"
          className="toolbar-button"
          onClick={() => setTextSize(nextTextSize)}
          aria-label={`Text size: ${textSize}. Change text size`}
        >
          <Type aria-hidden="true" />
          <span>Text size: {textSize === "xlarge" ? "Extra large" : textSize}</span>
        </button>
        <button
          type="button"
          className="toolbar-button"
          aria-pressed={reducedMotion}
          onClick={() => setReducedMotion(!reducedMotion)}
        >
          {reducedMotion ? <RotateCcw aria-hidden="true" /> : <WandSparkles aria-hidden="true" />}
          <span>{reducedMotion ? "Motion reduced" : "Reduce motion"}</span>
        </button>
      </div>
    </details>
  );
}
