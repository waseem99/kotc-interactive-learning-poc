"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type {
  LearnerRole,
  TextSizePreference,
  ThemePreference,
} from "@/lib/types";

const STORAGE_KEY = "kotc-poc-state-v2";

type DemoState = {
  role: LearnerRole | null;
  theme: ThemePreference;
  textSize: TextSizePreference;
  reducedMotion: boolean;
  completedTopics: string[];
  currentTopic: string;
  lessonVisited: boolean;
  activityComplete: boolean;
};

type DemoStateContextValue = DemoState & {
  ready: boolean;
  setRole: (role: LearnerRole) => void;
  setTheme: (theme: ThemePreference) => void;
  setTextSize: (size: TextSizePreference) => void;
  setReducedMotion: (value: boolean) => void;
  setCurrentTopic: (topicId: string) => void;
  markTopicComplete: (topicId: string) => void;
  markLessonVisited: () => void;
  markActivityComplete: () => void;
  resetDemo: () => void;
};

const defaultState: DemoState = {
  role: null,
  theme: "light",
  textSize: "standard",
  reducedMotion: false,
  completedTopics: ["foundation"],
  currentTopic: "materials",
  lessonVisited: false,
  activityComplete: false,
};

const DemoStateContext = createContext<DemoStateContextValue | null>(null);

export function DemoStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(defaultState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let restoredState = defaultState;

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        restoredState = {
          ...defaultState,
          ...(JSON.parse(saved) as Partial<DemoState>),
        };
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    queueMicrotask(() => {
      setState(restoredState);
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [ready, state]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = state.theme;
    root.dataset.textSize = state.textSize;
    root.dataset.reducedMotion = state.reducedMotion ? "true" : "false";
    root.dataset.demoReady = ready ? "true" : "false";
  }, [ready, state.theme, state.textSize, state.reducedMotion]);

  const update = useCallback((patch: Partial<DemoState>) => {
    setState((current) => ({ ...current, ...patch }));
  }, []);

  const markLessonVisited = useCallback(() => {
    setState((current) =>
      current.lessonVisited ? current : { ...current, lessonVisited: true },
    );
  }, []);

  const value = useMemo<DemoStateContextValue>(
    () => ({
      ...state,
      ready,
      setRole: (role) => update({ role }),
      setTheme: (theme) => update({ theme }),
      setTextSize: (textSize) => update({ textSize }),
      setReducedMotion: (reducedMotion) => update({ reducedMotion }),
      setCurrentTopic: (currentTopic) => update({ currentTopic }),
      markTopicComplete: (topicId) =>
        setState((current) => ({
          ...current,
          completedTopics: current.completedTopics.includes(topicId)
            ? current.completedTopics
            : [...current.completedTopics, topicId],
        })),
      markLessonVisited,
      markActivityComplete: () =>
        setState((current) => ({
          ...current,
          activityComplete: true,
          completedTopics: current.completedTopics.includes("materials")
            ? current.completedTopics
            : [...current.completedTopics, "materials"],
        })),
      resetDemo: () => setState(defaultState),
    }),
    [markLessonVisited, ready, state, update],
  );

  return <DemoStateContext.Provider value={value}>{children}</DemoStateContext.Provider>;
}

export function useDemoState() {
  const context = useContext(DemoStateContext);
  if (!context) {
    throw new Error("useDemoState must be used within DemoStateProvider");
  }
  return context;
}