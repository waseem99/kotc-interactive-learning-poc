"use client";

import { Moon, RotateCcw, Sun, Type, WandSparkles } from "lucide-react";
import { useDemoState } from "@/components/demo-state";

export function AccessibilityToolbar() {
  const {
    theme,
    textSize,
    reducedMotion,
    setTheme,
    setTextSize,
    setReducedMotion,
  } = useDemoState();

  const nextTheme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const nextTextSize =
    textSize === "standard" ? "large" : textSize === "large" ? "xlarge" : "standard";

  return (
    <div className="accessibility-toolbar" aria-label="Display preferences">
      <button
        type="button"
        className="toolbar-button"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Theme: ${theme}. Change theme`}
      >
        {theme === "dark" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
        <span>{theme === "system" ? "System" : theme}</span>
      </button>
      <button
        type="button"
        className="toolbar-button"
        onClick={() => setTextSize(nextTextSize)}
        aria-label={`Text size: ${textSize}. Change text size`}
      >
        <Type aria-hidden="true" />
        <span>{textSize === "xlarge" ? "XL text" : `${textSize} text`}</span>
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
  );
}
