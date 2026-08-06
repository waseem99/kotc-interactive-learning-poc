import type { Chapter, Topic } from "@/lib/types";

export const course = {
  id: "amik-wigiwamikewen",
  title: "Green Building and Culturally Safer Workplaces",
  estimatedMinutes: 235,
  chapterCount: 6,
  pilotCapacity: 150,
};

export const chapters: Chapter[] = [
  { id: "ch1", number: 1, title: "Foundations for Better Building", summary: "How site, moisture and early decisions shape long-term performance.", estimatedMinutes: 35, pathwayMode: "shared", topicIds: ["site", "foundation", "moisture"] },
  { id: "ch2", number: 2, title: "Building Envelope", summary: "A practical look at walls, insulation, air sealing, windows and doors.", estimatedMinutes: 45, pathwayMode: "shared", topicIds: ["walls", "insulation", "air-sealing", "windows", "doors"] },
  { id: "ch3", number: 3, title: "Roof, Water and Durability", summary: "Understand roof systems, drainage and long-term maintenance.", estimatedMinutes: 35, pathwayMode: "shared", topicIds: ["roof", "drainage", "durability"] },
  { id: "ch4", number: 4, title: "Healthy Building Systems", summary: "Heating, cooling, ventilation and water efficiency in practice.", estimatedMinutes: 40, pathwayMode: "shared", topicIds: ["hvac", "ventilation", "water"] },
  { id: "ch5", number: 5, title: "Workplace Pathways", summary: "One chapter tailored to the selected employee or employer pathway.", estimatedMinutes: 45, pathwayMode: "variant", topicIds: ["pathway"] },
  { id: "ch6", number: 6, title: "Materials, Waste and Next Steps", summary: "Bring the course together through material choices and construction waste reduction.", estimatedMinutes: 35, pathwayMode: "shared", topicIds: ["materials", "waste"] },
];

export const topics: Topic[] = [
  { id: "site", number: 1, title: "Site and surroundings", summary: "Review site conditions and surrounding impacts.", detail: "Explore how orientation, access, existing conditions and nearby ecosystems influence early project decisions.", lessonSlug: "site-and-surroundings", durationMinutes: 10, chapterId: "ch1", audience: "all", view: "front", x: 15, y: 76 },
  { id: "foundation", number: 2, title: "Foundation", summary: "Connect foundation choices with durability and comfort.", detail: "Consider structural needs, insulation continuity and practical decisions that support a durable building base.", lessonSlug: "foundation", durationMinutes: 12, chapterId: "ch1", audience: "all", view: "front", x: 40, y: 78 },
  { id: "moisture", number: 3, title: "Ground moisture", summary: "Reduce moisture pathways from soil to structure.", detail: "See how drainage, capillary breaks and careful detailing help manage ground moisture.", lessonSlug: "ground-moisture", durationMinutes: 13, chapterId: "ch1", audience: "all", view: "left", x: 30, y: 80 },
  { id: "walls", number: 4, title: "Exterior walls", summary: "Understand the wall as a connected assembly.", detail: "Review structure, weather protection, insulation and interior layers as one coordinated system.", lessonSlug: "exterior-walls", durationMinutes: 10, chapterId: "ch2", audience: "all", view: "front", x: 30, y: 48 },
  { id: "insulation", number: 5, title: "Insulation", summary: "Compare practical insulation approaches.", detail: "Consider thermal performance, installation quality, health, sourcing and long-term durability.", lessonSlug: "insulation", durationMinutes: 10, chapterId: "ch2", audience: "all", view: "left", x: 58, y: 47 },
  { id: "air-sealing", number: 6, title: "Air sealing", summary: "Find and manage common air-leakage paths.", detail: "Learn why continuity at joints, openings and transitions matters for comfort and energy use.", lessonSlug: "air-sealing", durationMinutes: 8, chapterId: "ch2", audience: "all", view: "rear", x: 48, y: 52 },
  { id: "windows", number: 7, title: "Windows", summary: "Connect window selection and installation.", detail: "Review orientation, performance, flashing and installation details that affect comfort and durability.", lessonSlug: "windows", durationMinutes: 9, chapterId: "ch2", audience: "all", view: "front", x: 55, y: 50 },
  { id: "doors", number: 8, title: "Exterior doors", summary: "Plan durable, accessible exterior entries.", detail: "Consider weather protection, thresholds, sealing and practical accessibility at entrances.", lessonSlug: "exterior-doors", durationMinutes: 8, chapterId: "ch2", audience: "all", view: "front", x: 73, y: 58 },
  { id: "roof", number: 9, title: "Roof system", summary: "Understand the roof as a complete assembly.", detail: "Explore structure, insulation, ventilation, weather protection and safe maintenance access.", lessonSlug: "roof-system", durationMinutes: 12, chapterId: "ch3", audience: "all", view: "front", x: 52, y: 20 },
  { id: "drainage", number: 10, title: "Drainage", summary: "Move water safely away from the building.", detail: "See how roof drainage, grading and discharge locations protect the building and site.", lessonSlug: "drainage", durationMinutes: 10, chapterId: "ch3", audience: "all", view: "rear", x: 72, y: 34 },
  { id: "durability", number: 11, title: "Maintenance and durability", summary: "Design for inspection, repair and long service life.", detail: "Identify details that make maintenance visible, practical and less disruptive over time.", lessonSlug: "maintenance-durability", durationMinutes: 13, chapterId: "ch3", audience: "all", view: "right", x: 65, y: 60 },
  { id: "hvac", number: 12, title: "Heating and cooling", summary: "Connect systems, comfort and energy use.", detail: "Review right-sized systems, controls and practical decisions that support reliable operation.", lessonSlug: "heating-cooling", durationMinutes: 12, chapterId: "ch4", audience: "all", view: "right", x: 35, y: 54 },
  { id: "ventilation", number: 13, title: "Ventilation", summary: "Support healthy indoor air with planned ventilation.", detail: "Explore source control, outdoor air, exhaust and maintenance of ventilation equipment.", lessonSlug: "ventilation", durationMinutes: 12, chapterId: "ch4", audience: "all", view: "rear", x: 30, y: 42 },
  { id: "water", number: 14, title: "Water efficiency", summary: "Use water thoughtfully in building operation.", detail: "Consider fixtures, distribution, maintenance and user needs when reducing water use.", lessonSlug: "water-efficiency", durationMinutes: 10, chapterId: "ch4", audience: "all", view: "right", x: 72, y: 72 },
  { id: "materials", number: 15, title: "Material selection", summary: "Compare realistic materials using clear criteria.", detail: "Review health, durability, sourcing, installation, maintenance and end-of-life considerations.", lessonSlug: "lower-impact-materials", durationMinutes: 18, chapterId: "ch6", audience: "all", view: "left", x: 72, y: 63 },
  { id: "waste", number: 16, title: "Construction waste", summary: "Plan to prevent, separate and reduce waste.", detail: "Connect ordering, storage, reuse, separation and documentation with practical site routines.", lessonSlug: "construction-waste", durationMinutes: 17, chapterId: "ch6", audience: "all", view: "rear", x: 58, y: 78 },
];

export const demoTranscript = [
  { time: "00:00", text: "Material selection affects health, maintenance, durability and environmental impact." },
  { time: "00:21", text: "A practical review asks what a product contains, how it is installed, where it comes from and what happens at end of life." },
  { time: "00:48", text: "The goal is to compare realistic options and document why a choice fits the project and the people using the space." },
];
