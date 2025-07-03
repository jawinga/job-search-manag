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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={jobInfo.companyName}
          placeholder="Company name..."
          onChange={(e) =>
            setJobInfo({ ...jobInfo, companyName: e.target.value })
          }
        ></input>
        <input
          required
          type="text"
          value={jobInfo.companyPosition}
          placeholder="Position..."
          onChange={(e) =>
            setJobInfo({ ...jobInfo, companyPosition: e.target.value })
          }
        ></input>{" "}
        <select
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
