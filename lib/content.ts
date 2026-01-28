import resumeData from "@/data/resume.json";
import { Resume, validateResume } from "./types";

/**
 * Loads and validates resume data
 * Throws an error if data doesn't match schema
 * 
 * This centralized loader ensures all components consume
 * validated data and allows for future data transformations
 */
export function getResumeData(): Resume {
  if (!validateResume(resumeData)) {
    throw new Error(
      "Invalid resume data structure. Please check data/resume.json matches the Resume schema."
    );
  }

  return resumeData;
}

/**
 * Format date range for display
 * @param startDate - ISO date string or formatted date
 * @param endDate - ISO date string, formatted date, or "Present"
 */
export function formatDateRange(startDate: string, endDate: string): string {
  const formatDate = (date: string): string => {
    if (date.toLowerCase() === "present") return "Present";
    
    // Handle ISO format (YYYY-MM)
    if (date.match(/^\d{4}-\d{2}$/)) {
      const [year, month] = date.split("-");
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${months[parseInt(month) - 1]} ${year}`;
    }
    
    return date;
  };

  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}
