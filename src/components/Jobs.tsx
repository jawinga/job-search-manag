import JobList from "./JobList";
import type { jobProps } from "./JobCard";

interface jobsProps {
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
}

const Jobs = ({ jobs, onDeleteJob }: jobsProps) => {
  return (
    <div className="jobs-list">
      <JobList state="applied" jobs={jobs} onDeleteJob={onDeleteJob}></JobList>
      <JobList
        state="in-progress"
        jobs={jobs}
        onDeleteJob={onDeleteJob}
      ></JobList>
      <JobList state="rejected" jobs={jobs} onDeleteJob={onDeleteJob}></JobList>
      <JobList state="accepted" jobs={jobs} onDeleteJob={onDeleteJob}></JobList>
    </div>
  );
};

export default Jobs;
