import JobCard from "./JobCard";
import type { jobProps } from "./JobCard";

interface jobListProps {
  state: string;
  jobs: jobProps[];
}

const JobList = ({ state, jobs }: jobListProps) => {
  const jobsFilter = jobs.filter((j) => j.jobState === state);

  return (
    <div>
      <h2>{state}</h2>
      {jobsFilter.map((j) => {
        return (
          <JobCard
            key={j.id}
            id={j.id}
            companyName={j.companyName}
            companyPosition={j.companyPosition}
            dateApplied={j.dateApplied}
            jobState={j.jobState}
          ></JobCard>
        );
      })}
    </div>
  );
};

export default JobList;
