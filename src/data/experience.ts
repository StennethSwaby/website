export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  start: string; // e.g., "2022"
  end: string;   // e.g., "Present"
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "U.S. Navy — HM2 (FMF) / Field Medical Technician",
    org: "United States Navy (Active Duty + Reserve)",
    location: "Various",
    start: "2016",
    end: "Present",
    bullets: [
      "Led small teams and trained junior Sailors while supporting operational readiness and mission execution.",
      "Built strong habits around reliability, process discipline, and documentation in high-stakes environments.",
      "Collaborated across teams under time pressure while maintaining attention to detail and accountability.",
    ],
  },
  {
    role: "Robotics Research (TurtleBot3 SLAM)",
    org: "The College of New Jersey",
    location: "Ewing, NJ",
    start: "2024",
    end: "Present",
    bullets: [
      "Evaluating SLAM approaches and mapping accuracy using repeatable test conditions and quantitative metrics.",
      "Developed scripts and workflows to compare maps against ground truth and visualize error patterns.",
    ],
  },
  {
    role: "Peer Mentor — Computational Problem-Solving",
    org: "The College of New Jersey",
    location: "Ewing, NJ",
    start: "2023",
    end: "2025",
    bullets: [
      "Supported students in understanding core programming concepts and debugging Java-based assignments.",
      "Explained complex ideas clearly and helped peers build confidence through structured problem-solving.",
    ],
  },
];
