export type LearnerRole = "learner" | "employer";
export type ThemePreference = "system" | "light" | "dark";
export type TextSizePreference = "standard" | "large" | "xlarge";
export type ProgressStatus = "not-started" | "in-progress" | "completed";
export type HouseView = "front" | "left" | "rear" | "right";

export type Topic = {
  id: string;
  number: number;
  title: string;
  summary: string;
  detail: string;
  lessonSlug: string;
  durationMinutes: number;
  chapterId: string;
  audience: "all" | LearnerRole;
  view: HouseView;
  x: number;
  y: number;
};

export type Chapter = {
  id: string;
  number: number;
  title: string;
  summary: string;
  estimatedMinutes: number;
  pathwayMode: "shared" | "variant";
  topicIds: string[];
};

export type ModuleCard = {
  id: string;
  title: string;
  summary: string;
  lessons: number;
  estimatedTime: string;
};

export type CertificateRecord = {
  id: string;
  learnerName: string;
  courseTitle: string;
  completedAt: string;
  pathway: LearnerRole;
};
