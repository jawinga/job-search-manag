import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Jobs from "./components/Jobs";
import { useState } from "react";
import type { jobProps } from "./components/JobCard";

function App() {
  const [listJobs, setListJobs] = useState<jobProps[]>([]);

  const handleJobs = (job: jobProps) => setListJobs((prev) => [...prev, job]);
  const handleDeleteJob = (id: string) =>
    setListJobs((prev) => prev.filter((job) => job.id !== id));

  return (
    <>
      <Header></Header>
      <Form onAddJob={handleJobs}></Form>

      {listJobs.length === 0 ? (
        <div className="no-jobs">
          <p>No jobs added yet.</p>
          <p>Start adding jobs to track your applications!</p>
          <img
            alt="job-gif"
            className="gif-job"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3NjODhnb2p4dzNvdW03MzRoYzhrNWFiNmhnb2pyY3ZxOHg0cHZrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nzrOGIQ2cr3qVqQCSR/giphy.gif"
          ></img>
        </div>
      ) : (
        <Jobs jobs={listJobs} onDeleteJob={handleDeleteJob} />
      )}
    </>
  );
}

export default App;
