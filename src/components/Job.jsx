import React from 'react';
import styled from 'styled-components';

const StyledJob = styled.div`
    padding: 20px 0;

    .top {
        margin-bottom: 10px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        color: black;
    }

    .place {
        font-style: italic;
    }

    .years {
        text-align: right;
        float: right;
        color: #086f25;
        font-weight: bold;
    }
`;

const Job = ({ title, place, years, description }) => (
    <StyledJob>
        <div className="row top">
            <div className="col-12 col-md-6">
                <span className="title">{title}</span>
                <span> - </span>
                <span className="place">{place}</span>
            </div>
            <div className="col-12 col-md-6">
                <span className="years">{years}</span>
            </div>
        </div>
        <div className="description">{description}</div>
    </StyledJob>
);

export default Job;