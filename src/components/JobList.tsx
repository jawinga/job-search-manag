import JobCard from "./JobCard";
import type { jobProps } from "./JobCard";

interface jobListProps {
  state: string;
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
}

const JobList = ({ state, jobs, onDeleteJob }: jobListProps) => {
  const jobsFilter = jobs.filter((j) => j.jobState === state);

  return (
    <div>
      <h2 className={state}>
        {state}{" "}
        {jobsFilter.length >= 1 && (
          <span className={`length length--${state}`}>{jobsFilter.length}</span>
        )}
      </h2>
      {jobsFilter.map((j) => {
        return (
          <JobCard
            key={j.id}
            id={j.id}
            companyName={j.companyName}
            companyPosition={j.companyPosition}
            dateApplied={j.dateApplied}
            jobState={j.jobState}
            onDeleteJob={onDeleteJob}
          ></JobCard>
        );
      })}
    </div>
  );
};

export default JobList;
