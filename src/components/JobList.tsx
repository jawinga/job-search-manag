import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";
import type { jobProps, stateTypes } from "./JobCard";

interface jobListProps {
  state: stateTypes;
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
}

const JobList = ({ state, jobs, onDeleteJob }: jobListProps) => {
  const jobsInThisState = jobs.filter((j) => j.jobState === state);

  const { setNodeRef } = useDroppable({
    id: state,
  });

  return (
    <div className="job-list">
      <h2 className={state}>
        {state}
        {jobsInThisState.length > 0 && (
          <span className="length">{jobsInThisState.length}</span>
        )}
      </h2>

      <div ref={setNodeRef} className="job-list-column">
        {jobsInThisState.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            companyName={job.companyName}
            companyPosition={job.companyPosition}
            dateApplied={job.dateApplied}
            jobState={job.jobState}
            onDeleteJob={onDeleteJob}
          />
        ))}
        {jobsInThisState.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "#999",
              padding: "20px 0",
              fontSize: "14px",
            }}
          >
            Drop jobs here
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
