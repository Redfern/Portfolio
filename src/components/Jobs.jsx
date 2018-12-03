import React from 'react';
import styled from 'styled-components';
import Job from './Job.jsx';
import { jobs } from '../data/workHistory.json';

const StyledJobs = styled.div`
    padding: 20px;
`;

const Jobs = () => (
    <StyledJobs>
        <h2>Work History</h2>
        {jobs.map((item, index) => <Job key={index} {...item} />)}
    </StyledJobs>
);

export default Jobs;