import type { jobProps } from "../components/JobCard";

export const jobs: jobProps[] = [
  {
    id: "1",
    companyName: "Acme Corp",
    companyPosition: "Frontend Developer",
    dateApplied: new Date("2025-06-15"),
    jobState: "applied",
  },
  {
    id: "2",
    companyName: "Globex Inc.",
    companyPosition: "Backend Developer",
    dateApplied: new Date("2025-06-10"),
    jobState: "applied",
  },
  {
    id: "3",
    companyName: "Initech",
    companyPosition: "Fullstack Engineer",
    dateApplied: new Date("2025-05-20"),
    jobState: "rejected",
  },
  {
    id: "4",
    companyName: "Hooli",
    companyPosition: "DevOps Engineer",
    dateApplied: new Date("2025-06-01"),
    jobState: "interviewing",
  },
];
