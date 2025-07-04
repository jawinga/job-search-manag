import { DndContext } from "@dnd-kit/core";
import JobList from "./JobList";
import type { jobProps, stateTypes } from "./JobCard";
import type { DragEndEvent } from "@dnd-kit/core";

interface jobsProps {
  jobs: jobProps[];
  onDeleteJob?: (id: string) => void;
  onDropJob?: (id: string, state: stateTypes) => void;
}

const Jobs = ({ jobs, onDeleteJob, onDropJob }: jobsProps) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    onDropJob?.(active.id as string, over.id as stateTypes);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="jobs-list">
        <JobList state="applied" jobs={jobs} onDeleteJob={onDeleteJob} />
        <JobList state="in-progress" jobs={jobs} onDeleteJob={onDeleteJob} />
        <JobList state="rejected" jobs={jobs} onDeleteJob={onDeleteJob} />
        <JobList state="accepted" jobs={jobs} onDeleteJob={onDeleteJob} />
      </div>
    </DndContext>
  );
};

export default Jobs;
