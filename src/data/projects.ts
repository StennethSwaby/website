export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    live?: string;
    writeup?: string;
  };
};

export const projects: Project[] = [
  {
    title: "SLAM Map Evaluation Toolkit",
    description:
      "Compares SLAM outputs against a ground-truth map using RMSE, variance, and correlation to quantify mapping accuracy.",
    tech: ["Python", "ROS2", "OpenCV"],
    links: {
      github: "https://github.com/StennethSwaby",
    },
  },
  {
    title: "Custom Vulnerability Scanner + Reporting Dashboard",
    description:
      "Scans for common misconfigurations and exposed services, then generates readable reports for remediation.",
    tech: ["Python", "Flask", "Nmap", "SQLite"],
    links: {
      github: "https://github.com/StennethSwaby",
    },
  },
  
];
