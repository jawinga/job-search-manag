import { useState } from "react";
import type { jobProps } from "./JobCard";

interface formProps {
  onAddJob: (job: jobProps) => void;
}

const Form = ({ onAddJob }: formProps) => {
  const [jobInfo, setJobInfo] = useState<jobProps>({
    id: "",
    companyName: "",
    companyPosition: "",
    dateApplied: new Date(),
    jobState: "applied",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddJob({ ...jobInfo, id: crypto.randomUUID() });

    setJobInfo({
      id: "",
      companyName: "",
      companyPosition: "",
      dateApplied: new Date(),
      jobState: "applied",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            className="form__input"
            required
            type="text"
            value={jobInfo.companyName}
            placeholder="Company name..."
            onChange={(e) =>
              setJobInfo({ ...jobInfo, companyName: e.target.value })
            }
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="companyPosition">
            Position
          </label>
          <input
            id="companyPosition"
            className="form__input"
            required
            type="text"
            value={jobInfo.companyPosition}
            placeholder="Position..."
            onChange={(e) =>
              setJobInfo({ ...jobInfo, companyPosition: e.target.value })
            }
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="jobState">
            Status
          </label>
          <select
            id="jobState"
            className="form__select"
            required
            value={jobInfo.jobState}
            onChange={(e) =>
              setJobInfo({
                ...jobInfo,
                jobState: e.target.value,
              })
            }
          >
            <option value={""} disabled>
              -Select Status-
            </option>
            <option value={"applied"}>Applied</option>
            <option value={"in-progress"}>In-progress</option>
            <option value={"rejected"}>Rejected</option>
            <option value={"accepted"}>Accepted</option>
          </select>
        </div>
        <button className="form__button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
