import { Trash } from "lucide-react";
import { useDraggable } from "@dnd-kit/core";

export type stateTypes = "applied" | "in-progress" | "rejected" | "accepted";

export interface jobProps {
  id: string;
  companyName: string;
  companyPosition: string;
  dateApplied: Date;
  jobState: stateTypes;
  onDeleteJob?: (id: string) => void;
}

const JobCard = ({
  id,
  companyName,
  companyPosition,
  dateApplied,
  jobState,
  onDeleteJob,
}: jobProps) => {
  const formatDate = dateApplied.toLocaleDateString();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      className={`card card--${jobState}`}
      style={style}
      {...attributes}
      {...listeners}
    >
      <p className="card__company card__company--name">{companyName}</p>
      <h3 className="card__company card__company--position">
        {companyPosition}
      </h3>
      <div className="card__extra-info">
        <p className="card__date">{formatDate}</p>
        <Trash onClick={() => onDeleteJob?.(id)}></Trash>
      </div>
    </div>
  );
};

export default JobCard;
