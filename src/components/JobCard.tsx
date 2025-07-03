export interface jobProps {
  id: string;
  companyName: string;
  companyPosition: string;
  dateApplied: Date;
  jobState: string;
}

const JobCard = ({
  id,
  companyName,
  companyPosition,
  dateApplied,
  jobState,
}: jobProps) => {
  const formatDate = dateApplied.toLocaleDateString();

  return (
    <div className="card">
      <p className="card__company card__company--name">{companyName}</p>
      <h3 className="card__company card__company--position">
        {companyPosition}
      </h3>
      <p className="card__date">{formatDate}</p>
    </div>
  );
};

export default JobCard;
