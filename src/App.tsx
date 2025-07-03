import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Jobs from "./components/Jobs";
import { useState } from "react";
import type { jobProps } from "./components/JobCard";

function App() {
  const [listJobs, setListJobs] = useState<jobProps[]>([]);

  const handleJobs = (job: jobProps) => setListJobs((prev) => [...prev, job]);

  return (
    <>
      <Header></Header>
      <Form onAddJob={handleJobs}></Form>
      <Jobs jobs={listJobs}></Jobs>
    </>
  );
}

export default App;
