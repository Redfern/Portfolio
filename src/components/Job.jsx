import React from 'react';
import styled from 'styled-components';

const StyledJob = styled.div`
    padding: 20px;
`;

const Job = ({ title, place, years, description }) => (
    <StyledJob>
        <h3 className="title">{title}</h3>
        <div className="place">{place}</div>
        <div className="years">{years}</div>
        <div className="description">{description}</div>
    </StyledJob>
);

export default Job;