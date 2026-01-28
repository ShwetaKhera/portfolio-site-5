/**
 * Resume data schema
 * All visible content on the portfolio site is sourced from resume.json
 * following this interface structure.
 */

export interface Resume {
  basics: {
    name: string;
    title: string;
    headline: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    featured?: boolean;
    problem?: string;
    solution?: string;
    impact?: string;
    highlights: string[];
  }[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    date?: string;
    visible?: boolean;
    featured?: boolean;
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
}

/**
 * Runtime validation helper
 * Ensures resume.json matches expected schema
 */
export function validateResume(data: unknown): data is Resume {
  if (!data || typeof data !== "object") return false;

  const resume = data as Resume;

  // Validate basics
  if (!resume.basics || typeof resume.basics !== "object") return false;
  const requiredBasicFields = ["name", "title", "headline", "location", "email", "github", "linkedin", "summary"];
  if (!requiredBasicFields.every((field) => typeof resume.basics[field as keyof typeof resume.basics] === "string")) {
    return false;
  }

  // Validate skills
  if (!Array.isArray(resume.skills)) return false;
  if (!resume.skills.every((skill) => 
    skill && 
    typeof skill.category === "string" && 
    Array.isArray(skill.items) &&
    skill.items.every((item) => typeof item === "string")
  )) {
    return false;
  }

  // Validate experience
  if (!Array.isArray(resume.experience)) return false;
  if (!resume.experience.every((exp) =>
    exp &&
    typeof exp.company === "string" &&
    typeof exp.role === "string" &&
    typeof exp.location === "string" &&
    typeof exp.startDate === "string" &&
    typeof exp.endDate === "string" &&
    Array.isArray(exp.highlights) &&
    exp.highlights.every((h) => typeof h === "string")
  )) {
    return false;
  }

  // Validate projects (optional)
  if (resume.projects !== undefined) {
    if (!Array.isArray(resume.projects)) return false;
    if (!resume.projects.every((project) =>
      project &&
      typeof project.name === "string" &&
      typeof project.description === "string" &&
      Array.isArray(project.technologies) &&
      project.technologies.every((tech) => typeof tech === "string")
    )) {
      return false;
    }
  }

  // Validate education
  if (!Array.isArray(resume.education)) return false;
  if (!resume.education.every((edu) =>
    edu &&
    typeof edu.institution === "string" &&
    typeof edu.degree === "string" &&
    typeof edu.period === "string"
  )) {
    return false;
  }

  return true;
}
