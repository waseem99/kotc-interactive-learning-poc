export type LearnerRole = "learner" | "employer";
export type ThemePreference = "system" | "light" | "dark";
export type TextSizePreference = "standard" | "large" | "xlarge";

export type Topic = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  lessonSlug: string;
  duration: string;
  audience: "all" | LearnerRole;
  icon: "foundation" | "materials" | "air" | "water" | "safety" | "workplace";
};

export type ModuleCard = {
  id: string;
  title: string;
  summary: string;
  lessons: number;
  estimatedTime: string;
};
