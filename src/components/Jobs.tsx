import JobList from "./JobList";
import type { jobProps, stateTypes } from "./JobCard";

interface jobsProps {
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
  onDropJob?: (id: string, state: stateTypes) => void;
}

const Jobs = ({ jobs, onDeleteJob, onDropJob }: jobsProps) => {
  return (
    <div className="jobs-list">
      <JobList
        state="applied"
        jobs={jobs}
        onDeleteJob={onDeleteJob}
        onDropJob={onDropJob}
      ></JobList>
      <JobList
        state="in-progress"
        jobs={jobs}
        onDeleteJob={onDeleteJob}
        onDropJob={onDropJob}
      ></JobList>
      <JobList
        state="rejected"
        jobs={jobs}
        onDeleteJob={onDeleteJob}
        onDropJob={onDropJob}
      ></JobList>
      <JobList
        state="accepted"
        jobs={jobs}
        onDeleteJob={onDeleteJob}
        onDropJob={onDropJob}
      ></JobList>
    </div>
  );
};

export default Jobs;
