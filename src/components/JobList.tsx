"use client";

import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import JobCard from "./JobCard";
import type { jobProps, stateTypes } from "./JobCard";
import { useEffect } from "react";

interface jobListProps {
  state: stateTypes;
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
  onDropJob?: (id: string, state: stateTypes) => void;
}

const JobList = ({ state, jobs, onDeleteJob, onDropJob }: jobListProps) => {
  const jobsInThisState = jobs.filter((j) => j.jobState === state);
  const jobIds = jobsInThisState.map((j) => j.id);

  const [listRef, updatedIds] = useDragAndDrop<HTMLDivElement, string>(jobIds, {
    group: "jobs",
  });

  useEffect(() => {
    if (!onDropJob) return;

    updatedIds.forEach((id) => {
      const job = jobs.find((j) => j.id === id);
      if (!job) return;
      if (job.jobState !== state) {
        onDropJob(id, state);
      }
    });
  }, [updatedIds.join(","), jobs, onDropJob, state]);

  return (
    <div className="job-list">
      <h2 className={state}>
        {state}
        {jobsInThisState.length > 0 && (
          <span className="length">{jobsInThisState.length}</span>
        )}
      </h2>

      <div ref={listRef} className="job-list-column">
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
