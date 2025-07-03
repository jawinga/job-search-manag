import JobList from "./JobList";
import type { jobProps } from "./JobCard";

interface jobsProps {
  jobs: jobProps[];
}

const Jobs = ({ jobs }: jobsProps) => {
  return (
    <div>
      <JobList state="applied" jobs={jobs}></JobList>
      <JobList state="in-progress" jobs={jobs}></JobList>
      <JobList state="rejected" jobs={jobs}></JobList>
      <JobList state="accepted" jobs={jobs}></JobList>
    </div>
  );
};

export default Jobs;
