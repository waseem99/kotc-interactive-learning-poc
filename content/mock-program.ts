import type { ModuleCard, Topic } from "@/lib/types";

export const topics: Topic[] = [
  {
    id: "foundation",
    title: "Healthy foundations",
    summary: "Start with site choices, moisture control, and durable assemblies.",
    detail:
      "Explore how early construction decisions shape long-term health, comfort, and environmental performance.",
    lessonSlug: "healthy-foundations",
    duration: "8 min",
    audience: "all",
    icon: "foundation",
  },
  {
    id: "materials",
    title: "Lower-impact materials",
    summary: "Compare materials using health, durability, and environmental criteria.",
    detail:
      "Review practical questions that can help teams choose materials with lower emissions, responsible sourcing, and longer service life.",
    lessonSlug: "lower-impact-materials",
    duration: "12 min",
    audience: "all",
    icon: "materials",
  },
  {
    id: "air",
    title: "Indoor air quality",
    summary: "Understand ventilation, source control, and safer product choices.",
    detail:
      "Learn how ventilation and material choices influence the air people breathe during construction and occupancy.",
    lessonSlug: "indoor-air-quality",
    duration: "9 min",
    audience: "all",
    icon: "air",
  },
  {
    id: "water",
    title: "Water and moisture",
    summary: "Identify moisture risks and water-conscious building approaches.",
    detail:
      "Connect drainage, sealing, maintenance, and water efficiency with healthier, more resilient buildings.",
    lessonSlug: "water-and-moisture",
    duration: "10 min",
    audience: "all",
    icon: "water",
  },
  {
    id: "safety",
    title: "Safer work practices",
    summary: "Plan work so that health, safety, and environmental care reinforce each other.",
    detail:
      "Use clear choices, protective measures, and respectful communication to reduce avoidable risks on the jobsite.",
    lessonSlug: "safer-work-practices",
    duration: "11 min",
    audience: "learner",
    icon: "safety",
  },
  {
    id: "workplace",
    title: "Culturally safe workplaces",
    summary: "Support respectful, predictable, and inclusive workplace practices.",
    detail:
      "Consider how policies, supervision, communication, and reporting processes can help people participate safely and fully.",
    lessonSlug: "culturally-safe-workplaces",
    duration: "14 min",
    audience: "employer",
    icon: "workplace",
  },
];

export const modules: ModuleCard[] = [
  {
    id: "building-basics",
    title: "Green and healthy building foundations",
    summary: "A practical introduction to decisions that affect health, resilience, and environmental impact.",
    lessons: 6,
    estimatedTime: "1 hr 10 min",
  },
  {
    id: "workplace-culture",
    title: "Culturally safer workplaces",
    summary: "Tools for respectful communication, workplace expectations, and support pathways.",
    lessons: 5,
    estimatedTime: "55 min",
  },
  {
    id: "next-steps",
    title: "Programs and further learning",
    summary: "A curated pathway to training, organizations, and green-building resources.",
    lessons: 4,
    estimatedTime: "35 min",
  },
];

export const demoTranscript = [
  {
    time: "00:00",
    text: "Material selection is not only about price or appearance. It also affects health, maintenance, durability, and environmental impact.",
  },
  {
    time: "00:21",
    text: "A practical review starts by asking what the product contains, how it is installed, where it comes from, and what happens at the end of its useful life.",
  },
  {
    time: "00:48",
    text: "No single material is perfect. The goal is to compare realistic options and document why a choice is appropriate for the project and the people using the space.",
  },
];
