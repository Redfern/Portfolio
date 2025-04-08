import styled from "styled-components";
import Job from "./Job.js";
import workHistory from "../data/workHistory.json";

const StyledJobs = styled.div`
  padding: 20px;
`;

const Jobs = () => (
  <StyledJobs data-testid="work-section">
    <h2 data-testid="work-title">
      I&apos;ve worked at a number of places over my career...
    </h2>
    {workHistory.jobs.map((item, index) => (
      <Job key={index} {...item} />
    ))}
  </StyledJobs>
);

export default Jobs;
