import type { Localized } from "../types";
import { COURSES } from "./courses";

export interface Badge {
  id: string;
  icon: string;
  title: Localized;
  description: Localized;
  earned: (ctx: BadgeContext) => boolean;
}

export interface BadgeContext {
  completedLessons: string[];
  streak: number;
}

function courseComplete(courseId: string, completed: string[]): boolean {
  const course = COURSES.find((c) => c.id === courseId);
  if (!course) return false;
  return course.lessons.every((l) => completed.includes(`${courseId}/${l.id}`));
}

export const BADGES: Badge[] = [
  {
    id: "first-step",
    icon: "spark",
    title: { en: "First step", bem: "Intampulo", nya: "Sitepe loyamba", toi: "Ntanguna" },
    description: {
      en: "Completed your very first lesson",
      bem: "Wapwisha isambililo lyobe lyakubalilapo",
      nya: "Mwamaliza phunziro lanu loyamba",
    },
    earned: (c) => c.completedLessons.length >= 1,
  },
  {
    id: "ai-aware",
    icon: "brain",
    title: { en: "AI aware", bem: "Waishiba AI", nya: "Mumadziwa AI", toi: "Uzyi AI" },
    description: {
      en: "Finished 'Understanding AI in everyday life'",
      bem: "Wapwisha 'Ukumfwa AI mu bwikashi'",
    },
    earned: (c) => courseComplete("ai-basics", c.completedLessons),
  },
  {
    id: "digital-ready",
    icon: "phone",
    title: { en: "Digital ready", bem: "Waipekanya mu digitali", nya: "Wokonzeka mwa digito" },
    description: {
      en: "Finished 'Practical digital skills'",
      bem: "Wapwisha 'Amano ya digitali aya bufwayo'",
    },
    earned: (c) => courseComplete("digital-skills", c.completedLessons),
  },
  {
    id: "ai-user",
    icon: "chat",
    title: { en: "Thoughtful AI user", bem: "Uwabomfya AI mu mano", nya: "Wogwiritsa ntchito AI mwanzeru" },
    description: {
      en: "Finished 'Using AI tools well'",
      bem: "Wapwisha 'Ukubomfya ifipe fya AI bwino'",
    },
    earned: (c) => courseComplete("using-ai-tools", c.completedLessons),
  },
  {
    id: "opportunity",
    icon: "rise",
    title: { en: "Opportunity builder", bem: "Kapanga mwenso", nya: "Womanga mwayi" },
    description: {
      en: "Finished 'AI for opportunity'",
      bem: "Wapwisha 'AI ku mwenso wa ntanshi'",
    },
    earned: (c) => courseComplete("ai-for-opportunity", c.completedLessons),
  },
  {
    id: "consistent",
    icon: "flame",
    title: { en: "Consistent learner", bem: "Uwakosa mu kusambilila", nya: "Wophunzira mokhazikika" },
    description: {
      en: "Reached a 3‑day learning streak",
      bem: "Wafika inshiku shitatu shakonkana",
    },
    earned: (c) => c.streak >= 3,
  },
];
