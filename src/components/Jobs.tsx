import styled from "styled-components";
import Job from "./Job.js";
import { useQuery } from "@tanstack/react-query";
import { IJob } from "../@types/job.js";
import Loading from "./Loading.js";
import ErrorMessage from "./ErrorMessage.js";

const StyledJobs = styled.div`
  padding: 20px;
  padding-bottom: 0;
`;

const Jobs = () => {
  const env = import.meta.env;

  const { VITE_API_URL } = env;

  const { isPending, error, data } = useQuery<IJob[]>({
    queryKey: ["workHistoryData"],
    queryFn: () =>
      fetch(`${VITE_API_URL}/work-history`).then((res) => res.json()),
  });

  if (isPending) {
    return (
      <StyledJobs data-testid="work-section">
        <h2 data-testid="work-title">
          I&apos;ve worked at a number of places over my career...
        </h2>
        <Loading />
      </StyledJobs>
    );
  }

  if (error) {
    return (
      <StyledJobs data-testid="work-section">
        <h2 data-testid="work-title">
          I&apos;ve worked at a number of places over my career...
        </h2>
        <ErrorMessage message={`Error: ${error.message}`} />
      </StyledJobs>
    );
  }

  return (
    <StyledJobs data-testid="work-section">
      <h2 data-testid="work-title">
        I&apos;ve worked at a number of places over my career...
      </h2>
      {data && data.map((item, index) => <Job key={index} {...item} />)}
    </StyledJobs>
  );
};

export default Jobs;
